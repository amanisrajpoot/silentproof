import { Scale, Shield, FileText, AlertCircle } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-primary">
            <section className="bg-primary text-primary-foreground py-20 px-4">
                <div className="container mx-auto max-w-4xl space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/70">
                        <Scale className="w-3 h-3" /> Legal Protocol
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Terms & Conditions</h1>
                    <p className="text-muted-foreground font-medium italic">Standard Investigative Agreement - v2.4</p>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-slate max-w-none space-y-12">
                        <div className="p-8 border-2 border-dashed border-border rounded-3xl bg-secondary/10 flex flex-col md:flex-row items-center gap-6">
                            <AlertCircle className="w-12 h-12 text-primary shrink-0" />
                            <div className="space-y-1 text-center md:text-left">
                                <h4 className="font-bold">Important Disclaimer</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    By engaging Silent Proof, you acknowledge that all investigative activities must comply with the <strong>Private Security Agencies (Regulation) Act, 2005</strong>. We do not engage in illegal surveillance, hacking, or unauthorized access to password-protected accounts.
                                </p>
                            </div>
                        </div>

                        <article className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                    Engagement & Scope
                                </h2>
                                <p className="text-muted-foreground leading-relaxed pl-14">
                                    Engagement begins only after a signed retainer agreement and initial payment. The scope is strictly defined in the agreement. Any expansion of scope requires a written amendment.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                    Discretion & Confidentiality
                                </h2>
                                <p className="text-muted-foreground leading-relaxed pl-14">
                                    Silent Proof guarantees absolute discretion. In return, the Client agrees not to disclose the existence of the investigation to any third party during the active phase, as this may jeopardize the safety of our field operatives.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                    Evidence Admissibility
                                </h2>
                                <p className="text-muted-foreground leading-relaxed pl-14">
                                    While we strive for verifiable proof, we do not guarantee the legal admissibility of evidence in all jurisdictions. Professional legal counsel should be consulted for court-specific requirements.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                                    Zero-Log Data Commitment
                                </h2>
                                <p className="text-muted-foreground leading-relaxed pl-14">
                                    Per our Privacy Policy, all digital footprints related to an inquiry are purged after 48 hours if not converted to a case. Case files are permanently deleted upon final report delivery and sign-off.
                                </p>
                            </div>
                        </article>

                        <div className="pt-12 border-t border-border flex flex-col items-center text-center space-y-6">
                            <FileText className="w-12 h-12 text-primary/20" />
                            <h4 className="font-bold">Need a signed copy?</h4>
                            <p className="text-sm text-muted-foreground max-w-md">
                                Formal engagement letters are issued via secure, encrypted channels. <br />
                                <span className="text-primary font-bold underline">legal@silentproof.in</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
