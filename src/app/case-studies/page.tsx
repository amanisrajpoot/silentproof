import { FileText, CheckCircle2, Shield, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
    const cases = [
        {
            title: "Extortion Threat Resolution",
            category: "Corporate",
            outcome: "Identified the source of a digital extortion campaign targeting a tech firm CEO.",
            tags: ["Forensics", "Surveillance", "Cyber Trace"],
            color: "bg-blue-50 text-blue-700"
        },
        {
            title: "Pre-Matrimonial Background Check",
            category: "Personal",
            outcome: "Exposed previously undisclosed financial liabilities and multiple legal conflicts.",
            tags: ["Background Verify", "Reputation Audit"],
            color: "bg-purple-50 text-purple-700"
        },
        {
            title: "Warehouse Inventory Leakage",
            category: "Corporate",
            outcome: "Dismantled an internal theft ring operating within a logistics facility in Mumbai.",
            tags: ["Undercover", "Internal Audit"],
            color: "bg-emerald-50 text-emerald-700"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary text-primary-foreground py-20 px-4">
                <div className="container mx-auto max-w-5xl space-y-6">
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
                        Case Archive. <br />
                        <span className="text-muted-foreground underline decoration-white/10 underline-offset-8">Proven Results.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        Real outcomes for complex challenges. All case details are anonymized and names are altered to protect client confidentiality.
                    </p>
                </div>
            </section>

            <section className="py-24 px-4 bg-background">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cases.map((c) => (
                            <div key={c.title} className="group p-8 border border-border rounded-3xl hover:border-primary hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col justify-between">
                                <div className="space-y-6">
                                    <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${c.color}`}>
                                        {c.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary group-hover:underline underline-offset-4">{c.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {c.outcome}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {c.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-secondary text-[9px] font-bold text-muted-foreground rounded border border-border">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-8 flex items-center justify-between border-t border-border mt-8 group-hover:border-primary/20 transition-colors">
                                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 uppercase tracking-widest">
                                        <CheckCircle2 className="w-3 h-3" /> Resolved
                                    </span>
                                    <Link href="/contact" className="text-primary font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all">
                                        Inquire <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-secondary/30 rounded-[3rem] border border-border/50 text-center space-y-6">
                        <Lock className="w-12 h-12 text-primary/30 mx-auto" />
                        <h3 className="text-2xl font-bold text-primary">Need more specific proof?</h3>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            For high-stakes corporate inquiries, we can provide further anonymized data and industry-specific success metrics upon verification of identity.
                        </p>
                        <div className="pt-4">
                            <Link href="/contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:shadow-lg transition-all">
                                Request Detailed Credential Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
