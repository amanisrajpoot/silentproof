import { FileText, Shield, Lock, Search, EyeOff, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CasesIndexPage() {
    const caseStats = [
        { label: "Successful Resolutions", value: "2,400+" },
        { label: "Years of Discretion", value: "15+" },
        { label: "Corporate Clients", value: "120+" },
        { label: "Data Breaches", value: "0" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-20 px-4">
                <div className="container mx-auto max-w-5xl space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/70 border border-white/20">
                        <Shield className="w-3 h-3" /> Anonymized Public Ledger
                    </div>
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
                        Case Files & <br />
                        <span className="text-muted-foreground underline decoration-white/10 underline-offset-8">Outcomes.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        A transparency-focused overview of our investigative impact. All entries are stripped of personally identifiable information (PII) to uphold our zero-retention commitment.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-secondary/30 border-b">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {caseStats.map(stat => (
                            <div key={stat.label} className="text-center md:text-left space-y-1 border-l border-primary/10 pl-4">
                                <div className="text-2xl md:text-3xl font-extrabold text-primary">{stat.value}</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Catalog Link */}
            <section className="py-24 px-4 text-center">
                <div className="container mx-auto max-w-3xl space-y-12">
                    <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
                        <Search className="w-10 h-10 text-primary" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Browse Success Stories</h2>
                        <p className="text-muted-foreground leading-relaxed font-medium capitalize italic">
                            "We maintain a detailed archive of case outcomes to help you understand what resolution looks like."
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link href="/case-studies" className="px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-xl transition-all w-full sm:w-auto">
                            Open Case Studies Catalog
                        </Link>
                        <Link href="/contact" className="px-10 py-5 bg-white border border-border rounded-2xl font-bold text-lg hover:bg-muted transition-all w-full sm:w-auto">
                            Discuss Your Case
                        </Link>
                    </div>
                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.2em]">
                        Strict Confidentiality: SP-V3 Protocol Enforced
                    </p>
                </div>
            </section>
        </div>
    );
}
