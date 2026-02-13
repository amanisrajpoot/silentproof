import Link from "next/link";
import { notFound } from "next/navigation";
import { Shield, CheckCircle2, ArrowRight, Lock, EyeOff, FileText, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

import { supabase } from "@/lib/supabase";

export const revalidate = 0;

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const { data: service } = await supabase
        .from('service_offerings')
        .select('*')
        .eq('slug', slug)
        .single();

    if (!service) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="space-y-6">
                        <Link href="/#services" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors flex items-center gap-2">
                            <ArrowRight className="w-3 h-3 rotate-180" /> Back to Services
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight underline decoration-muted-foreground/30 underline-offset-8">
                            {service.title}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            {service.description}
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-muted transition-all text-center">
                                {service.cta}
                            </Link>
                            <a href="tel:+919876543210" className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all text-center">
                                Talk to an Expert
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-background text-foreground px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Features */}
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <Shield className="w-6 h-6 text-primary" />
                                    Key Features
                                </h2>
                                <div className="h-1 w-20 bg-primary/20 rounded-full" />
                            </div>
                            <ul className="space-y-6">
                                {service.features?.map((feature: string) => (
                                    <li key={feature} className="flex items-start gap-4 group">
                                        <div className="p-1 bg-primary/5 rounded-full border border-primary/10 group-hover:bg-primary/10 transition-colors mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-lg text-muted-foreground font-medium group-hover:text-primary transition-colors">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Process */}
                        <div className="p-8 md:p-12 bg-secondary/30 border border-border/50 rounded-3xl space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <FileText className="w-6 h-6 text-primary" />
                                    Our Process
                                </h2>
                                <div className="h-1 w-20 bg-primary/20 rounded-full" />
                            </div>
                            <div className="space-y-8 relative">
                                {/* Vertical Line */}
                                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-primary/10" />
                                {service.process?.map((step: string, idx: number) => (
                                    <div key={step} className="flex gap-6 relative">
                                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-white">
                                            <span className="text-xs font-bold text-primary-foreground">{idx + 1}</span>
                                        </div>
                                        <span className="text-muted-foreground font-semibold pt-1">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Callout */}
            <section className="py-16 bg-muted/30 border-y px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold flex items-center gap-3">
                                <Lock className="w-6 h-6 text-emerald-600" />
                                Zero-Trace Communication
                            </h3>
                            <p className="text-muted-foreground max-w-md">
                                All evidence collected for {service.title} is encrypted and stored in an offline vault. We never share case details with any third party.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-6 bg-white rounded-2xl border border-border shadow-sm flex flex-col items-center gap-3 w-40">
                                <EyeOff className="w-8 h-8 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-center">Anonymous Lead</span>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-border shadow-sm flex flex-col items-center gap-3 w-40">
                                <Shield className="w-8 h-8 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-center">Secured Assets</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
