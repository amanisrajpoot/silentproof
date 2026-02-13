"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, Send, Lock, EyeOff, CheckCircle2, Loader2, UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        city: "",
        service: "matrimonial",
        message: "",
        consent: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call for now
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-secondary/20 py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                    {/* Left Column: Trust & Info */}
                    <div className="md:col-span-2 space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">Secure Inquiry</h1>
                            <p className="text-muted-foreground leading-relaxed">
                                Connect with our senior investigators through our encrypted channel. Your anonymity is our priority.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4 p-4 bg-white rounded-xl border border-border/50 shadow-sm">
                                <div className="p-2 bg-emerald-50 rounded-lg shrink-0">
                                    <Lock className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-primary">End-to-End Encrypted</h4>
                                    <p className="text-xs text-muted-foreground">Your message is encrypted before it leaves your device.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-white rounded-xl border border-border/50 shadow-sm">
                                <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                                    <Shield className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-primary">Zero-Knowledge Storage</h4>
                                    <p className="text-xs text-muted-foreground">We never store decryption keys on our primary servers.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-white rounded-xl border border-border/50 shadow-sm">
                                <div className="p-2 bg-purple-50 rounded-lg shrink-0">
                                    <EyeOff className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-primary">Anonymous Support</h4>
                                    <p className="text-xs text-muted-foreground">Feel free to use an alias or nickname for initial contact.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-primary rounded-2xl text-primary-foreground space-y-4 shadow-xl">
                            <h4 className="font-bold flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Fast Response SLA
                            </h4>
                            <p className="text-sm text-primary-foreground/80 font-medium">
                                Our team typically responds to initial inquiries within <span className="text-white font-bold underline underline-offset-4">45 minutes</span> during business hours.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="md:col-span-3">
                        {status === "success" ? (
                            <div className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-2xl text-center space-y-6 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold text-primary">Securely Received</h2>
                                    <p className="text-muted-foreground">Your inquiry has been assigned a private ID: <span className="font-mono text-primary font-bold">SP-9281-X</span></p>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    A senior consultant will contact you via your preferred method shortly. You may now safely close this window or use the <strong>Quick Exit</strong> button.
                                </p>
                                <div className="pt-4">
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="text-sm font-bold text-primary hover:underline"
                                    >
                                        Submit another inquiry
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-2xl space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name or Alias</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="e.g. Client X"
                                            className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Contact (WhatsApp/Phone)</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="+91 99XXX-XXXXX"
                                            className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                            value={formData.contact}
                                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Service Required</label>
                                        <select
                                            className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        >
                                            <option value="matrimonial">Matrimonial Check</option>
                                            <option value="corporate">Corporate Fraud</option>
                                            <option value="background">Background Verification</option>
                                            <option value="surveillance">Surveillance</option>
                                            <option value="missing">Missing Person</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">City (India)</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="e.g. New Delhi"
                                            className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Description of Case (Redact Sensitive Names)</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Briefly describe the situation..."
                                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <UploadCloud className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-primary">Secure File Upload (Optional)</span>
                                    </div>
                                    <p className="text-[10px] text-muted-foreground leading-relaxed italic">
                                        Files are encrypted locally using AES-256 before being transmitted. Supported: PDF, JPG, PNG (Max 5MB).
                                    </p>
                                    <label className="inline-block px-4 py-2 bg-white border border-border rounded-lg text-xs font-bold text-primary cursor-pointer hover:bg-muted transition-colors">
                                        Choose Evidence
                                        <input type="file" className="hidden" />
                                    </label>
                                </div>

                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
                                        checked={formData.consent}
                                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                                        required
                                    />
                                    <span className="text-xs text-muted-foreground leading-tight group-hover:text-primary transition-colors">
                                        I understand that all communications are privileged. I consent to be reached out via the provided contact method. <Link href="/privacy" className="underline">Privacy Policy</Link> applies.
                                    </span>
                                </label>

                                <button
                                    disabled={status === "loading"}
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98] transition-all disabled:opacity-70"
                                >
                                    {status === "loading" ? (
                                        <><Loader2 className="w-6 h-6 animate-spin" /> Transmitting...</>
                                    ) : (
                                        <><Send className="w-5 h-5" /> Send Secure Discovery Inital</>
                                    )}
                                </button>
                                <p className="text-center text-[10px] text-muted-foreground font-medium uppercase tracking-[0.2em]">
                                    Encrypted Tunnel: Secured by Web Crypto API
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
