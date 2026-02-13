import Link from "next/link";
import { Shield, Search, UserCheck, EyeOff, Building2, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const revalidate = 0;

export default async function ServicesIndexPage() {
    const { data: services, error } = await supabase
        .from('service_offerings')
        .select('*')
        .order('title', { ascending: true });

    if (error) {
        console.error('Supabase Error:', error);
    }

    if (!services || services.length === 0) {
        return (
            <div className="min-h-screen pt-32 px-4 text-center">
                <div className="inline-block p-4 rounded-lg bg-yellow-50 text-yellow-800 mb-4">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        <Search className="w-5 h-5" />
                        No Services Found
                    </h1>
                </div>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    We couldn't load the service offerings at this time. Please check back later or contact us directly.
                </p>
                {/* Debug info only for development/admin if needed, hidden for now or minimal */}
                {error && (
                    <div className="max-w-md mx-auto bg-muted p-4 rounded text-left font-mono text-xs overflow-auto opacity-50 hover:opacity-100 transition-opacity">
                        <p className="font-bold text-red-500">Error Details:</p>
                        <p>{error.message}</p>
                        <p className="text-muted-foreground mt-2">({error.code})</p>
                    </div>
                )}
            </div>
        );
    }

    // Fallback for icons since we store icon names as strings in DB
    const iconMap: any = {
        UserCheck: UserCheck,
        Building2: Building2,
        Search: Search,
        EyeOff: EyeOff
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-20 px-4">
                <div className="container mx-auto max-w-5xl space-y-6">
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
                        Our Investigative <br />
                        <span className="text-muted-foreground underline decoration-white/10 underline-offset-8">Solutions.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        Professional evidence gathering across India. Choose a specialized service category to learn about our methods and secure your discovery process.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services?.map((service: any) => {
                            const IconComponent = iconMap[service.icon] || Search;
                            return (
                                <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="group p-10 bg-white border border-border rounded-[2.5rem] hover:border-primary hover:shadow-2xl hover:shadow-primary/5 transition-all space-y-6"
                                >
                                    <div className="w-16 h-16 bg-secondary/30 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <IconComponent className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold text-primary group-hover:underline underline-offset-4">{service.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                                    </div>
                                    <div className="pt-4 flex items-center gap-2 text-primary font-bold text-sm">
                                        View Service Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Secure CTA */}
            <section className="py-20 bg-muted/30 border-y px-4">
                <div className="container mx-auto max-w-5xl text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-widest">
                        <Shield className="w-4 h-4" /> Professional Discretion Guaranteed
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Need a custom investigation?</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto italic">
                        "Some cases don't fit into categories. We specialize in complex, multi-layered investigations that require a tailored approach."
                    </p>
                    <div className="pt-4">
                        <Link href="/contact" className="px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
                            Start Confidential Consult
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
