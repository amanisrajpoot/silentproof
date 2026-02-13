import Link from "next/link";
import { MapPin, Shield, FileText, Home, Search, Users, Award, Lock } from "lucide-react";

export default function SitemapPage() {
    const links = [
        {
            group: "Foundation",
            items: [
                { title: "Home", href: "/", icon: Home },
                { title: "About Us", href: "/about", icon: Users },
                { title: "Credentials", href: "/about#credentials", icon: Award },
                { title: "Privacy Policy", href: "/privacy", icon: Lock },
                { title: "Terms & Conditions", href: "/terms", icon: FileText },
            ]
        },
        {
            group: "Services",
            items: [
                { title: "All Services", href: "/services", icon: Search },
                { title: "Matrimonial Investigation", href: "/services/matrimonial", icon: Shield },
                { title: "Corporate Fraud", href: "/services/corporate", icon: Shield },
                { title: "Background Checks", href: "/services/background", icon: Shield },
                { title: "Surveillance", href: "/services/surveillance", icon: Shield },
            ]
        },
        {
            group: "Locations",
            items: [
                { title: "All Locations", href: "/locations", icon: MapPin },
                { title: "Delhi NCR", href: "/locations/delhi", icon: MapPin },
                { title: "Lucknow", href: "/locations/lucknow", icon: MapPin },
                { title: "Bangalore", href: "/locations/bangalore", icon: MapPin },
            ]
        },
        {
            group: "Resources",
            items: [
                { title: "Case Studies", href: "/cases", icon: FileText },
                { title: "Pricing & Plans", href: "/pricing", icon: FileText },
                { title: "Contact Securely", href: "/contact", icon: FileText },
                { title: "Ground Network", href: "/silent-network", icon: Lock },
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <section className="bg-secondary/30 py-20 px-4 border-b">
                <div className="container mx-auto max-w-5xl text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary">
                        Sitemap. <br />
                        <span className="text-muted-foreground underline decoration-primary/10 decoration-8 underline-offset-8">Structure.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
                        Complete navigation index for the SilentProof.in investigative platform.
                    </p>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {links.map((group) => (
                            <div key={group.group} className="space-y-6">
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/50 border-b pb-4 border-primary/10">
                                    {group.group}
                                </h3>
                                <ul className="space-y-4">
                                    {group.items.map((item) => (
                                        <li key={item.title}>
                                            <Link href={item.href} className="flex items-center gap-3 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all group">
                                                <item.icon className="w-4 h-4 text-primary/20 group-hover:text-primary transition-colors" />
                                                <span className="font-bold text-sm tracking-tight">{item.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted/30 border-t px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
                        Site Version: 1.0.2-ALPHA | Silent Proof Protocol Enforced
                    </p>
                </div>
            </section>
        </div>
    );
}
