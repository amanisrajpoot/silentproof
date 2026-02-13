"use client";

import { useState } from "react";
import { Network, MapPin, Camera, ClipboardCheck, ArrowLeft, Send, ShieldAlert, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OperativeConsole() {
    const [selectedTask, setSelectedTask] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const activeTasks = [
        {
            id: "SN-901",
            title: "Address Verification",
            location: "Gomti Nagar, Lucknow",
            reward: "₹500",
            urgency: "High",
            instructions: [
                "Locate the premise at Sector 4, Plot 12, Vibhuti Khand.",
                "Verify if the nameplate matches 'Dr. R. Singh'.",
                "Observe if there is any visible activity (lights, residents) from the outside.",
                "Strictly NO CONTACT with residents or neighbors."
            ]
        },
        {
            id: "SN-902",
            title: "Entrance Photography",
            location: "Saket, Delhi",
            reward: "₹800",
            urgency: "Standard",
            instructions: [
                "Capture 3 clear images of the main entrance to 'Rectangle One'.",
                "Images must include timestamps and visible signage.",
                "Ensure no security personnel are alerted during the process."
            ]
        }
    ];

    const handleSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setSelectedTask(null);
            }, 3000);
        }, 2000);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-primary">
            {/* Console Header */}
            <nav className="border-b border-white/5 py-4 px-4 sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50">
                <div className="container mx-auto max-w-5xl flex justify-between items-center">
                    <Link href="/silent-network" className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                            <Network className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-mono font-bold tracking-tighter text-sm uppercase">Node Console</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.1em]">Active Node</span>
                            <span className="text-xs font-mono text-blue-400 font-bold">OP-X921</span>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto max-w-5xl py-12 px-4 flex-grow">
                {selectedTask ? (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Task Details Header */}
                        <button
                            onClick={() => setSelectedTask(null)}
                            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Task List
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Left Col: Instructions */}
                            <div className="lg:col-span-2 space-y-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[10px] font-bold text-blue-400 uppercase">
                                            Task {selectedTask.id}
                                        </span>
                                        <span className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-[10px] font-bold text-red-500 uppercase tracking-widest">
                                            {selectedTask.urgency}
                                        </span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">{selectedTask.title}</h1>
                                    <div className="flex items-center gap-2 text-blue-400 font-bold italic">
                                        <MapPin className="w-4 h-4" /> {selectedTask.location}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 border-b border-white/5 pb-4">Required Action Protocol</h3>
                                    <ul className="space-y-6">
                                        {selectedTask.instructions.map((inst: string, idx: number) => (
                                            <li key={idx} className="flex gap-4 items-start group">
                                                <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold text-white/40 group-hover:bg-primary group-hover:text-white transition-colors">
                                                    {idx + 1}
                                                </span>
                                                <p className="text-white/70 leading-relaxed font-medium">{inst}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-6 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl flex gap-4">
                                    <ShieldAlert className="w-8 h-8 text-yellow-500 shrink-0" />
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-bold text-yellow-500 uppercase tracking-widest">Safety Warning</h4>
                                        <p className="text-xs text-white/50 leading-relaxed">
                                            Operatives found engaging in unauthorized contact or erratic behavior will be immediately de-synchronized from the network. Safety is absolute.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Col: Submission */}
                            <div className="space-y-8">
                                <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl space-y-8 sticky top-24">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Expected Payout</label>
                                        <div className="text-4xl font-black text-blue-400 tracking-tighter">{selectedTask.reward}</div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Visual Proof (Optional)</label>
                                            <button className="w-full aspect-video bg-black/50 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 text-white/20 hover:text-primary hover:border-primary/50 transition-all group">
                                                <Camera className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest">Upload Frame</span>
                                            </button>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Observation Log</label>
                                            <textarea
                                                placeholder="Brief summary of findings..."
                                                className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 outline-none focus:border-primary/50 transition-all text-sm h-32 resize-none"
                                            />
                                        </div>
                                    </div>

                                    {isSubmitted ? (
                                        <div className="w-full py-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-2xl font-bold flex items-center justify-center gap-2 animate-in zoom-in-95 duration-300">
                                            <CheckCircle2 className="w-5 h-5" /> Report Transmitted
                                        </div>
                                    ) : (
                                        <button
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className="w-full bg-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                                        >
                                            {isSubmitting ? (
                                                <><Loader2 className="w-5 h-5 animate-spin" /> Digitizing...</>
                                            ) : (
                                                <><Send className="w-5 h-5" /> Submit to Ledger</>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-12 animate-in fade-in duration-500">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">Assigned Operations</h1>
                                <p className="text-white/40 max-w-md italic">Select a node task to view detailed protocols and initiate action.</p>
                            </div>
                            <Link href="/silent-network/dashboard" className="flex gap-4 group hover:bg-white/5 p-4 rounded-3xl border border-transparent hover:border-white/10 transition-all">
                                <div className="text-right">
                                    <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Node Balance</div>
                                    <div className="text-2xl font-black text-green-400 tracking-tighter">₹2,400</div>
                                </div>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {activeTasks.map((task) => (
                                <button
                                    key={task.id}
                                    onClick={() => setSelectedTask(task)}
                                    className="group text-left p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:border-primary/50 transition-all flex flex-col justify-between"
                                >
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-start">
                                            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                                <ClipboardCheck className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{task.id}</span>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{task.title}</h3>
                                            <div className="flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest italic">
                                                <MapPin className="w-3 h-3" /> {task.location}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-2xl font-black tracking-tighter text-blue-400">{task.reward}</span>
                                        <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all group-hover:border-blue-400/50">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            <footer className="py-12 border-t border-white/5 text-center">
                <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/10">
                    Console Session ID: X-291-ALPHA | Node Lockdown Imminent on De-Sync
                </p>
            </footer>
        </div>
    );
}
