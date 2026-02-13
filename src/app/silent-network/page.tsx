import Link from "next/link";
import { Network, MapPin, ClipboardList, Camera, ShieldCheck, Zap, UserPlus } from "lucide-react";

export default function SilentNetworkPage() {
    const mockTasks = [
        {
            id: "SN-901",
            title: "Address Verification",
            location: "Gomti Nagar, Lucknow",
            reward: "₹500",
            type: "Physical Verify",
            desc: "Confirm if the resident at 'Sector 4, Plot 12' is active. No contact required."
        },
        {
            id: "SN-902",
            title: "Entrance Photography",
            location: "Saket, Delhi",
            reward: "₹800",
            type: "Visual Support",
            desc: "Take 3 clear photos of the main entrance and parking lot of 'Rectangle One'."
        },
        {
            id: "SN-903",
            title: "Document Drop",
            location: "Indiranagar, Bangalore",
            reward: "₹400",
            type: "Logistics",
            desc: "Drop a sealed envelope (provided) at the reception of 'Tech Park Alpha'."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-white">
            {/* Stealth Header */}
            <nav className="border-b border-white/5 py-6 px-4">
                <div className="container mx-auto max-w-5xl flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                            <Network className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-mono font-bold tracking-tighter text-lg uppercase">Silent Network</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Nodes Active</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-20 px-4 border-b border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-400 border border-blue-500/20">
                                Operative Onboarding
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                                Ground Support. <br />
                                <span className="text-white/40">Zero Complexity.</span>
                            </h1>
                            <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                                The Silent Network connects logistics experts and local field operatives for straightforward, one-time tasks. No technical background required. Just execution.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/silent-network/auth" className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                                    <UserPlus className="w-5 h-5" /> Join the Network
                                </Link>
                                <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
                                    How it Works
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] space-y-4">
                                <Zap className="w-8 h-8 text-blue-400" />
                                <h3 className="font-bold">Instant Payouts</h3>
                                <p className="text-xs text-white/40">UPI transfers within 12 hours of report verification.</p>
                            </div>
                            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] mt-8 space-y-4">
                                <ShieldCheck className="w-8 h-8 text-blue-400" />
                                <h3 className="font-bold">100% Anonymous</h3>
                                <p className="text-xs text-white/40">Work under an alias. No bank details needed (UPI IDs only).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Task Board */}
            <section className="py-24 px-4 bg-[#080808]">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">Active Task Board</h2>
                            <p className="text-white/40 max-w-md italic">"Straightforward field support requirements for verified nodes."</p>
                        </div>
                        <div className="flex gap-2">
                            {["Lucknow", "Delhi", "Bangalore"].map(city => (
                                <button key={city} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold transition-all">
                                    {city}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockTasks.map((task) => (
                            <div key={task.id} className="group p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:border-primary/50 transition-all flex flex-col justify-between">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-start">
                                        <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors text-blue-400">
                                            {task.type === "Visual Support" ? <Camera className="w-5 h-5" /> : <MapPin className="w-5 h-5" />}
                                        </div>
                                        <span className="text-xs font-mono text-white/20">{task.id}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-white">{task.title}</h3>
                                        <div className="flex items-center gap-2 text-xs font-bold text-blue-400 italic">
                                            <MapPin className="w-3 h-3" /> {task.location}
                                        </div>
                                        <p className="text-sm text-white/50 leading-relaxed pt-2">{task.desc}</p>
                                    </div>
                                </div>
                                <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-2xl font-black tracking-tighter text-blue-400">{task.reward}</span>
                                    <Link href="/silent-network/auth" className="p-3 bg-blue-500/10 hover:bg-primary hover:text-white rounded-xl transition-all text-blue-400 hover:text-white border border-blue-500/20">
                                        <Zap className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Footer */}
            <footer className="py-20 mt-auto border-t border-white/5 text-center bg-[#050505]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20">
                        Encrypted Pulse: 0x82...FA2 | Ground Node Status: SECURE
                    </p>
                </div>
            </footer>
        </div>
    );
}
