"use client";

import { Network, TrendingUp, History, CreditCard, ChevronRight, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

export default function NodeDashboard() {
    const earnings = [
        { id: "TX-101", task: "Physical Verify", date: "Jan 12, 2026", amount: "₹500", status: "Paid" },
        { id: "TX-102", task: "Entrance Photos", date: "Jan 15, 2026", amount: "₹800", status: "Paid" },
        { id: "TX-103", task: "Document Drop", date: "Jan 18, 2026", amount: "₹400", status: "Processing" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-primary">
            {/* Nav */}
            <nav className="border-b border-white/5 py-4 px-4 sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50">
                <div className="container mx-auto max-w-5xl flex justify-between items-center">
                    <Link href="/silent-network/console" className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                            <Network className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-mono font-bold tracking-tighter text-sm uppercase">Node Ledger</span>
                    </Link>
                    <Link href="/silent-network/console" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                        Active Ops
                    </Link>
                </div>
            </nav>

            <main className="container mx-auto max-w-5xl py-12 px-4 space-y-12">
                {/* Stats Header */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] space-y-4">
                        <TrendingUp className="w-6 h-6 text-blue-400" />
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Total Earnings</span>
                            <div className="text-4xl font-black text-white tracking-tighter">₹1,700</div>
                        </div>
                    </div>
                    <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] space-y-4">
                        <History className="w-6 h-6 text-blue-400" />
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Tasks Complete</span>
                            <div className="text-4xl font-black text-white tracking-tighter">12</div>
                        </div>
                    </div>
                    <div className="p-8 bg-primary rounded-[2rem] space-y-4 shadow-xl shadow-primary/20">
                        <CreditCard className="w-6 h-6 text-white" />
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Linked UPI</span>
                            <div className="text-xl font-bold text-white tracking-tight">op.node1@upi</div>
                        </div>
                    </div>
                </div>

                {/* History List */}
                <div className="space-y-8">
                    <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 border-b border-white/5 pb-4">Transaction Logs</h2>
                    <div className="space-y-4">
                        {earnings.map((log) => (
                            <div key={log.id} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:bg-white/[0.04] transition-all">
                                <div className="flex items-center gap-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${log.status === 'Paid' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                                        {log.status === 'Paid' ? <CheckCircle2 className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-white">{log.task}</h3>
                                        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{log.id} • {log.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8 w-full md:w-auto justify-between">
                                    <div className="text-right">
                                        <div className="text-xl font-black text-white tracking-tighter">{log.amount}</div>
                                        <div className={`text-[10px] font-bold uppercase tracking-widest ${log.status === 'Paid' ? 'text-green-500' : 'text-yellow-500'}`}>{log.status}</div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-blue-400 transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="py-12 mt-auto border-t border-white/5 text-center">
                <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/10">
                    Sync Frequency: Real-time | Pulse Node Status: ESTABLISHED
                </p>
            </footer>
        </div>
    );
}
