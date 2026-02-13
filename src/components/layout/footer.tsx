import Link from "next/link";
import { Shield, Mail, Phone, MapPin, EyeOff, Scale, FileCheck } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-secondary/50 border-t py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
                    {/* Brand & Mission */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2">
                            <Shield className="w-8 h-8 text-primary" />
                            <span className="text-2xl font-bold tracking-tight text-primary">
                                SILENT<span className="text-muted-foreground font-light">PROOF</span>
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            India's premier privacy-first private investigation firm. Professional, discreet, and reliable evidence collection across 50+ cities.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <div className="flex flex-col items-center gap-1 group">
                                <Scale className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors" />
                                <span className="text-[10px] uppercase font-bold text-muted-foreground">PSARA 2005</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 group">
                                <FileCheck className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors" />
                                <span className="text-[10px] uppercase font-bold text-muted-foreground">GST Reg</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="/services/matrimonial" className="text-sm text-muted-foreground hover:text-primary">Matrimonial Check</Link></li>
                            <li><Link href="/services/corporate" className="text-sm text-muted-foreground hover:text-primary">Corporate Fraud</Link></li>
                            <li><Link href="/services/background" className="text-sm text-muted-foreground hover:text-primary">Background Verification</Link></li>
                            <li><Link href="/services/surveillance" className="text-sm text-muted-foreground hover:text-primary">Surveillance</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Securely</Link></li>
                            <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary font-semibold text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms & Conditions</Link></li>
                            <li><Link href="/silent-network" className="text-[10px] uppercase font-bold text-muted-foreground/30 hover:text-primary transition-all tracking-[0.2em] pt-2 block">Partner Network</Link></li>
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Reach Us</h4>
                        <div className="space-y-4">
                            <a href="tel:+919876543210" className="flex items-start gap-3 group">
                                <Phone className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors mt-0.5" />
                                <div className="space-y-1">
                                    <p className="text-sm font-semibold text-primary">+91 98765 43210</p>
                                    <p className="text-xs text-muted-foreground italic">Available for emergency cases 24/7</p>
                                </div>
                            </a>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary/60 mt-0.5" />
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Connaught Place, New Delhi, India<br />
                                    <span className="text-xs italic">(By prior appointment only)</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                                <EyeOff className="w-4 h-4 text-primary" />
                                <span className="text-xs font-medium text-primary/80 tracking-tight">Zero-Log Data Retention Policy</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Silent Proof Investigations. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/sitemap" className="text-[10px] uppercase font-bold text-muted-foreground hover:text-primary tracking-widest">Sitemap</Link>
                        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest border-l pl-6">English (India)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
