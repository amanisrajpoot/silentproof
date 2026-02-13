"use client";

import { AlertTriangle, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export const QuickExit = ({ className }: { className?: string }) => {
    const handleExit = () => {
        // Redirect to a neutral site
        window.location.href = "https://www.google.com/search?q=weather+today";

        // Clear session state if any (though we are mostly stateless visitors)
        if (typeof window !== "undefined") {
            sessionStorage.clear();
            // We can't clear history but we can replace current entry
            window.history.replaceState(null, "", "https://www.google.com");
        }
    };

    return (
        <button
            onClick={handleExit}
            className={cn(
                "group flex items-center gap-2 px-3 py-1.5 bg-destructive text-destructive-foreground text-xs font-bold rounded-full hover:bg-destructive/90 transition-all duration-200 shadow-lg",
                className
            )}
            title="Quickly exit this site and hide from history"
        >
            <AlertTriangle className="w-3.5 h-3.5 animate-pulse" />
            <span>QUICK EXIT</span>
        </button>
    );
};
