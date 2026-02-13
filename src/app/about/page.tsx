import { Shield, Medal, Scale, Award, FileCheck, Users, Search, History } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
                            The Standard of <br />
                            <span className="text-muted-foreground">Silent Proof.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            Founded by industry veterans, Silent Proof is India's leading private investigative firm dedicated to absolute discretion and verified evidence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Credentials Grid */}
            <section className="py-20 bg-background px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-8 bg-secondary/30 rounded-3xl space-y-4 border border-border/50">
                            <Scale className="w-10 h-10 text-primary" />
                            <h3 className="font-bold text-lg">PSARA 2005</h3>
                            <p className="text-xs text-muted-foreground">Fully compliant with the Private Security Agencies (Regulation) Act, 2005.</p>
                        </div>
                        <div className="p-8 bg-secondary/30 rounded-3xl space-y-4 border border-border/50">
                            <Award className="w-10 h-10 text-primary" />
                            <h3 className="font-bold text-lg">APDI Member</h3>
                            <p className="text-xs text-muted-foreground">Active member of the Association of Private Detectives & Investigators (India).</p>
                        </div>
                        <div className="p-8 bg-secondary/30 rounded-3xl space-y-4 border border-border/50">
                            <FileCheck className="w-10 h-10 text-primary" />
                            <h3 className="font-bold text-lg">GST Registered</h3>
                            <p className="text-xs text-muted-foreground">Legally registered business entity ensuring transparency and tax compliance.</p>
                        </div>
                        <div className="p-8 bg-secondary/30 rounded-3xl space-y-4 border border-border/50">
                            <Shield className="w-10 h-10 text-primary" />
                            <h3 className="font-bold text-lg">ISO Certified</h3>
                            <p className="text-xs text-muted-foreground">Adhering to ISO 9001 and ISO 27001 standards for information security.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-muted/30 border-y px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Why Trust Us?</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border">
                                        <History className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">15+ Years Experience</h4>
                                        <p className="text-sm text-muted-foreground italic">"Decades of combined experience in law enforcement and intelligence."</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Elite Field Agents</h4>
                                        <p className="text-sm text-muted-foreground">Specially trained investigators equipped with state-of-the-art tech.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border">
                                        <Search className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">100% Verifiable Evidence</h4>
                                        <p className="text-sm text-muted-foreground">We only deliver proof that stands in court or high-stakes negotiations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 p-12 bg-primary rounded-[3rem] text-primary-foreground space-y-6 shadow-2xl skew-y-1">
                            <h3 className="text-2xl font-bold italic">"Privacy isn't just a feature; it is our foundation."</h3>
                            <p className="text-primary-foreground/80 leading-relaxed font-medium">
                                At Silent Proof, we understand the vulnerability of our clients. That's why we built our agency from the ground up with data security as the top priority. From encrypted reports to our Zero-Knowledge storage, your secrets are safe with us.
                            </p>
                            <div className="pt-6 border-t border-white/20">
                                <p className="font-bold">Capt. Vikram Singh (Retd.)</p>
                                <p className="text-sm text-primary-foreground/60 uppercase tracking-widest font-bold">Managing Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team CTA */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Ready to uncover the truth?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
                            Consult with a Specialist
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
