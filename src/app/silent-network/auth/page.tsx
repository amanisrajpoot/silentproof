"use client";

import { useState } from "react";
import { Network, Fingerprint, Lock, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";

export default function OperativeAuthPage() {
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");

    return (
        <div className="flex flex-col min-h-screen bg-[#050505] text-white items-center justify-center px-4 selection:bg-primary">
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px] opacity-20" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px] opacity-10" />
            </div>

            <div className="w-full max-w-md space-y-12 relative z-10">
                {/* Brand */}
                <div className="flex flex-col items-center gap-6">
                    <Link href="/silent-network" className="group">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xl shadow-primary/20">
                            <Network className="w-8 h-8 text-white" />
                        </div>
                    </Link>
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-extrabold tracking-tighter uppercase">Node Access</h1>
                        <p className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">Shadow Operative Registry</p>
                    </div>
                </div>

                {/* Auth Card */}
                <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Fingerprint className="w-20 h-20" />
                    </div>

                    {step === 1 ? (
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 block ml-1">Secure Contact Index (Phone)</label>
                                <div className="relative">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 font-bold">+91</div>
                                    <input
                                        type="tel"
                                        placeholder="98765 43210"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-black/50 border border-white/10 focus:border-primary/50 rounded-2xl py-4 pl-16 pr-5 outline-none transition-all font-bold text-lg tracking-tight"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => setStep(2)}
                                disabled={phone.length < 10}
                                className="w-full bg-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 disabled:opacity-50 disabled:grayscale"
                            >
                                Request Trace Token <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 block ml-1">Validation Token (OTP)</label>
                                <div className="flex gap-3 justify-between">
                                    {[0, 1, 2, 3, 4, 5].map(i => (
                                        <input
                                            key={i}
                                            id={`otp-${i}`}
                                            type="text"
                                            maxLength={1}
                                            value={otp[i] || ""}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                if (val.match(/^[0-9]$/)) {
                                                    const newOtp = otp.split("");
                                                    newOtp[i] = val;
                                                    setOtp(newOtp.join(""));
                                                    if (i < 5) document.getElementById(`otp-${i + 1}`)?.focus();
                                                }
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === "Backspace" && !otp[i] && i > 0) {
                                                    document.getElementById(`otp-${i - 1}`)?.focus();
                                                }
                                            }}
                                            className="w-12 h-14 bg-black/50 border border-white/30 focus:border-blue-500/50 rounded-xl outline-none text-center font-black text-xl text-blue-400 transition-all"
                                        />
                                    ))}
                                </div>
                                <p className="text-[10px] text-white/50 text-center uppercase tracking-widest pt-2">Sent to +91 {phone}</p>
                            </div>
                            <Link
                                href="/silent-network/console"
                                className="w-full bg-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                            >
                                Synchronize Node <ShieldCheck className="w-5 h-5" />
                            </Link>
                            <button
                                onClick={() => setStep(1)}
                                className="w-full text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors"
                            >
                                Incorrect Index? Reset
                            </button>
                        </div>
                    )}
                </div>

                {/* Footnote */}
                <div className="flex flex-col items-center gap-4 pt-4">
                    <p className="text-[9px] text-white/10 font-mono tracking-[0.3em] uppercase max-w-[200px] text-center leading-relaxed">
                        Authorized Nodes Only. All attempts are logged via Pulse-Sync.
                    </p>
                    <div className="flex gap-4">
                        <Lock className="w-4 h-4 text-white/5" />
                        <ShieldCheck className="w-4 h-4 text-white/5" />
                        <Mail className="w-4 h-4 text-white/5" />
                    </div>
                </div>
            </div>
        </div>
    );
}
