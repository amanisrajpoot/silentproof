import { Shield, Lock, EyeOff, Trash2, Database, Key, Server, Search } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Header */}
            <section className="border-b py-16 px-4 bg-secondary/20">
                <div className="container mx-auto max-w-4xl space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-widest">
                        <Shield className="w-4 h-4" />
                        Zero-Log Certified
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight">Privacy Policy</h1>
                    <p className="text-muted-foreground font-medium italic">Last Updated: February 2026</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Sidebar Stats */}
                        <div className="space-y-8">
                            <div className="p-6 bg-primary rounded-3xl text-primary-foreground space-y-4 shadow-xl">
                                <h4 className="font-bold flex items-center gap-2">
                                    <Database className="w-4 h-4" />
                                    Retention Policy
                                </h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold opacity-60">
                                        <span>Active Cases</span>
                                        <span>30 Days</span>
                                    </div>
                                    <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                                        <div className="bg-white w-[75%] h-full" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold opacity-60">
                                        <span>Archived Files</span>
                                        <span>0 Days</span>
                                    </div>
                                    <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                                        <div className="bg-emerald-400 w-[0%] h-full" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border border-border rounded-3xl space-y-4">
                                <h4 className="font-bold text-primary flex items-center gap-2">
                                    <Key className="w-4 h-4" />
                                    Encryption
                                </h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    We use <span className="text-primary font-bold">AES-256-GCM</span> for all stored data and <span className="text-primary font-bold">TLS 1.3</span> for data in transit. Your decryption keys are never stored on persistent storage.
                                </p>
                            </div>
                        </div>

                        {/* Main Policy Text */}
                        <div className="md:col-span-2 space-y-12">
                            <article className="prose prose-slate max-w-none">
                                <h2 className="text-2xl font-bold text-primary mb-4">1. Zero-Log Declaration</h2>
                                <p className="text-muted-foreground leading-relaxed mb-6 font-medium bg-emerald-50 p-4 border-l-4 border-emerald-500 rounded-r-xl">
                                    Silent Proof maintains a strict <span className="text-primary font-bold">Zero-Log</span> policy. We do not store, log, or share your IP address, browser fingerprint, or geographic location beyond the minimum required for initial communication.
                                </p>

                                <h2 className="text-2xl font-bold text-primary mb-4">2. Evidence Handling</h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Unlike traditional agencies, all evidence collected (Photos, Logs, Documents) is transferred to an isolated, encrypted vault. Once a case is concluded and signed off by the client, all digital copies are <span className="text-red-600 font-bold decoration-wavy underline">permanently expunged</span> from our systems.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                                    <div className="p-4 bg-secondary rounded-xl border flex items-start gap-3">
                                        <Trash2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h5 className="text-sm font-bold">Auto-Delete</h5>
                                            <p className="text-[10px] text-muted-foreground">Inquiries not converted to cases are deleted after 48 hours.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-secondary rounded-xl border flex items-start gap-3">
                                        <EyeOff className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h5 className="text-sm font-bold">Pseudo-Anonymity</h5>
                                            <p className="text-[10px] text-muted-foreground">We encourage the use of aliases during initial discovery phases.</p>
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-primary mb-4">3. Third-Party Disclosures</h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, so long as those parties agree to keep this information confidential.
                                </p>

                                <h2 className="text-2xl font-bold text-primary mb-4">4. Client Portal Security</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Access to the client portal is protected by multi-factor authentication and session-only keys. Your browser session is automatically cleared when you click the <strong>Quick Exit</strong> button or close the tab.
                                </p>

                                <div className="mt-12 p-8 border-2 border-dashed border-border rounded-3xl bg-secondary/10 flex flex-col items-center text-center space-y-4">
                                    <Server className="w-12 h-12 text-primary/30" />
                                    <h4 className="font-bold text-primary">Privacy Questions?</h4>
                                    <p className="text-sm text-muted-foreground px-8">
                                        Contact our Data Protection Officer at <br />
                                        <span className="text-primary font-bold underline">privacy@silentproof.com</span>
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
