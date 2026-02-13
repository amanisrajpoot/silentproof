import Link from "next/link";
import { ShieldCheck, Lock, Phone, ArrowRight, UserCheck, Search, Building2, UserMinus } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-widest">ISO 27001 & PSARA Compliant</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Discreet Answers. <br />
              <span className="text-muted-foreground">Absolute Proof.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              India's most trusted private investigation agency. We provide secure, privacy-first evidence for individuals and corporations. Secure your peace of mind today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-muted transition-all shadow-xl shadow-black/20"
              >
                Start Secure Inquiry
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="flex items-center gap-6 pt-8 text-sm text-muted-foreground/80 font-medium">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                256-bit Encryption
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                Verified Results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals & Service Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">Expert Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Providing professional investigative solutions across various domains with complete confidentiality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="group p-8 bg-secondary/30 border border-border/50 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-300">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href={service.href} className="text-sm font-bold flex items-center gap-2 text-primary/80 group-hover:text-primary transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const SERVICES = [
  {
    title: "Matrimonial Check",
    description: "In-depth background verification, character assessment, and lifestyle checks for prospective matrimonial alliances.",
    icon: UserCheck,
    href: "/services/matrimonial"
  },
  {
    title: "Corporate Fraud",
    description: "Protecting business interests through detailed internal investigations, forensic audits, and competitor analysis.",
    icon: Building2,
    href: "/services/corporate"
  },
  {
    title: "Background Verify",
    description: "Reliable verification of employment history, educational credentials, and criminal records for high-stakes hiring.",
    icon: Search,
    href: "/services/background"
  },
];
