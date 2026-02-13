import Link from "next/link";
import { MapPin, Phone, Building2, Shield, ArrowRight, MessageSquare } from "lucide-react";

export default function LocationsIndexPage() {
    const locations = [
        {
            slug: "delhi",
            city: "Delhi NCR",
            description: "Our primary hub for Northern India investigations and high-court legal verifications.",
            phone: "+91 11 4XXX XXXX",
        },
        {
            slug: "lucknow",
            city: "Lucknow",
            description: "Leading investigative firm in the capital of Uttar Pradesh, specializing in civil disputes.",
            phone: "+91 522 4XXX XXXX",
        },
        {
            slug: "bangalore",
            city: "Bangalore",
            description: "Technical surveillance and I.P. infringement specialists in the tech capital.",
            phone: "+91 80 4XXX XXXX",
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero */}
            <section className="bg-secondary/30 py-20 px-4 border-b">
                <div className="container mx-auto max-w-5xl text-center space-y-6">
                    <div className="flex items-center justify-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                        <MapPin className="w-5 h-5" />
                        Active Presence
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary">
                        Our Regional <br />
                        <span className="text-muted-foreground underline decoration-primary/10 decoration-8 underline-offset-8">Operatives.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
                        Operating specialized field teams across major Indian metropolitan cities for rapid response.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {locations.map((loc) => (
                            <div key={loc.slug} className="group flex flex-col justify-between p-8 bg-white border border-border rounded-[2rem] hover:border-primary transition-all">
                                <div className="space-y-6">
                                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <Building2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-primary">{loc.city}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{loc.description}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-lg font-mono font-bold text-primary">
                                        <Phone className="w-4 h-4" /> {loc.phone}
                                    </div>
                                </div>
                                <div className="pt-8 mt-8 border-t border-border space-y-4">
                                    <Link href={`/locations/${loc.slug}`} className="w-full py-3 bg-secondary text-primary rounded-xl font-bold text-xs text-center block hover:bg-muted transition-colors">
                                        Office Details
                                    </Link>
                                    <Link href="/contact" className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-bold text-xs text-center block hover:shadow-lg transition-all">
                                        Book Local Consult
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Callout */}
            <section className="py-20 bg-primary text-primary-foreground px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="space-y-4 text-center md:text-left">
                            <h2 className="text-3xl font-bold">Pan-India Support</h2>
                            <p className="text-primary-foreground/70 max-w-md">
                                Don't see your city? We maintain a verified network of associate investigators across Tier-2 and Tier-3 cities in India.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/contact" className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-muted transition-all">
                                Inquire for Other Citites
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
