import { Shield, Clock, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

import { supabase } from "@/lib/supabase";

export const revalidate = 0;

export default async function PricingPage() {
    const { data: plans } = await supabase.from('plans').select('*');

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary text-primary-foreground py-20 px-4">
                <div className="container mx-auto max-w-5xl text-center space-y-6">
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
                        Transparent Pricing. <br />
                        <span className="text-muted-foreground">Certified Results.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Investigation costs vary by case complexity and duration. We provide upfront estimates and fixed-fee options wherever possible.
                    </p>
                </div>
            </section>

            <section className="py-24 px-4 bg-background">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans?.map((p: any) => (
                            <div key={p.name} className={`relative p-8 md:p-10 rounded-3xl border ${p.is_popular ? 'border-primary border-2 shadow-2xl ring-4 ring-primary/5' : 'border-border'} flex flex-col justify-between`}>
                                {p.is_popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                        Most Requested
                                    </div>
                                )}
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-primary">{p.name}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                                    </div>
                                    <div className="text-4xl font-extrabold text-primary">
                                        {p.price}
                                        {p.name !== "Corporate Retainer" && <span className="text-sm text-muted-foreground font-medium ml-1">/ case est.</span>}
                                    </div>
                                    <div className="h-px bg-border w-full" />
                                    <ul className="space-y-4">
                                        {p.features?.map((f: string) => (
                                            <li key={f} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                                                <span className="text-sm text-muted-foreground font-medium">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-10">
                                    <Link href="/contact" className={`w-full py-4 rounded-xl font-bold text-center block transition-all ${p.is_popular ? 'bg-primary text-primary-foreground hover:shadow-xl' : 'bg-secondary hover:bg-muted'}`}>
                                        Request Free Estimate
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-8 border border-amber-200 bg-amber-50 rounded-2xl flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <AlertCircle className="w-12 h-12 text-amber-600 shrink-0" />
                        <div className="space-y-1">
                            <h4 className="font-bold text-amber-900">GST Compliance Note</h4>
                            <p className="text-sm text-amber-800/80 leading-relaxed font-medium">
                                All prices mentioned are baseline estimates and <span className="underline decoration-amber-600 font-bold decoration-2">do not include GST (18%)</span> and actual field expenses which are billed at cost.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Quote */}
            <section className="py-20 bg-muted/30 border-t px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-xl md:text-2xl font-medium text-primary leading-relaxed italic">
                        "We operate on a transparent retainer model. No hidden costs, no surprise billings. Just evidence."
                    </p>
                </div>
            </section>
        </div>
    );
}
