import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Shield, Building2, UserCheck, Search, ArrowRight, MessageSquare } from "lucide-react";

const LOCATIONS_DATA = {
    "delhi": {
        city: "Delhi NCR",
        address: "Regus, Level 4, Rectangle No. 1, Commercial Complex, Saket, New Delhi - 110017",
        phone: "+91 11 4XXX XXXX",
        description: "Our primary North India hub, handling high-profile matrimonial and corporate investigations across Delhi, Noida, and Gurgaon.",
        highlights: ["24/7 Field Support", "Regional Surveillance Experts", "Local Court Verification"]
    },
    "lucknow": {
        city: "Lucknow",
        address: "Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010",
        phone: "+91 522 4XXX XXXX",
        description: "Leading investigative firm in the capital of Uttar Pradesh, specializing in civil disputes and high-stakes matrimonial verifications.",
        highlights: ["UP State Intelligence Links", "Civil & Property Disputes", "Discreet Local Surveillance"]
    },
    "bangalore": {
        city: "Bangalore",
        address: "Vittal Mallya Road, Ashok Nagar, Bengaluru, Karnataka - 560001",
        phone: "+91 80 4XXX XXXX",
        description: "Specializing in technical surveillance, I.P. theft, and matrimonial background checks in the technology heart of India.",
        highlights: ["Tech-Savvy Investigators", "I.P. Infringement Checks", "Cyber Background Verify"]
    }
};

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const location = LOCATIONS_DATA[slug as keyof typeof LOCATIONS_DATA];

    if (!location) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-secondary/30 py-20 px-4 border-b">
                <div className="container mx-auto max-w-5xl text-center space-y-6">
                    <div className="flex items-center justify-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                        <MapPin className="w-5 h-5" />
                        Local Office
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary">
                        Private Investigator <br />
                        <span className="text-muted-foreground underline decoration-primary/10 decoration-8 underline-offset-8">in {location.city}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
                        "{location.description}"
                    </p>
                </div>
            </section>

            {/* Office Details */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold text-primary">Regional Expertise</h2>
                                <div className="h-1 w-20 bg-primary/20 rounded-full" />
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Our {location.city} operations are led by retired senior officers and certified investigators who understand the local landscape, legalities, and social nuances of the region.
                            </p>
                            <ul className="grid grid-cols-1 gap-4">
                                {location.highlights.map((item) => (
                                    <li key={item} className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl shadow-sm">
                                        <Shield className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-primary">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl space-y-8 shadow-2xl">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold">Contact Office</h2>
                                <p className="text-primary-foreground/60 text-sm">Appointments are mandatory for in-person consultations.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <MapPin className="w-6 h-6 shrink-0 mt-1" />
                                    <p className="text-lg font-medium leading-relaxed">{location.address}</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Phone className="w-6 h-6 shrink-0" />
                                    <p className="text-2xl font-bold">{location.phone}</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                                <Link href="/contact" className="w-full py-4 bg-white text-primary rounded-xl font-bold text-center hover:bg-muted transition-all">
                                    Book Local Consult
                                </Link>
                                <a href={`https://wa.me/919876543210?text=Hi, I am looking for investigation services in ${location.city}`} target="_blank" className="flex items-center justify-center gap-2 text-sm font-bold hover:text-white transition-colors">
                                    <MessageSquare className="w-4 h-4" />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services in City */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-bold text-primary">City-Specific Services</h2>
                        <p className="text-muted-foreground">Most requested investigations in {location.city}.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 border border-border hover:border-primary transition-colors rounded-2xl space-y-4">
                            <UserCheck className="w-10 h-10 text-primary" />
                            <h3 className="font-bold">{location.city} Matrimonial</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">Full pre-wed and post-wed background checks across the {location.city} metropolitan area.</p>
                        </div>
                        <div className="p-6 border border-border hover:border-primary transition-colors rounded-2xl space-y-4">
                            <Building2 className="w-10 h-10 text-primary" />
                            <h3 className="font-bold">{location.city} Corporate</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">Due diligence, asset tracing, and fraud investigations for businesses in {location.city}.</p>
                        </div>
                        <div className="p-6 border border-border hover:border-primary transition-colors rounded-2xl space-y-4">
                            <Search className="w-10 h-10 text-primary" />
                            <h3 className="font-bold">{location.city} Surveillance</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">Discrete physical and digital surveillance within city limits and outskirts.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
