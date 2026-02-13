"use client";

import Link from "next/link";
import { Phone, Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { QuickExit } from "./quick-exit";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { name: "Services", href: "/services" },
    { name: "Locations", href: "/locations" },
    { name: "Case Studies", href: "/cases" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="p-1.5 bg-primary rounded-lg group-hover:scale-110 transition-transform">
                            <Shield className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-primary">
                            SILENT<span className="text-muted-foreground font-light">PROOF</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <QuickExit />
                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-sm"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Call Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <QuickExit className="px-2" />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-primary rounded-lg hover:bg-secondary transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "md:hidden fixed inset-x-0 top-16 bg-background border-b transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                )}
            >
                <div className="container mx-auto px-4 py-6 space-y-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-lg font-medium text-primary py-2 border-b border-border/50"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 flex flex-col gap-4">
                        <a
                            href="tel:+919876543210"
                            className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground text-lg font-bold rounded-xl"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Call Now (India)</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
