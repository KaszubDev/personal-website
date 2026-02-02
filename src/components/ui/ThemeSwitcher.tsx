"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-[72px] h-[24px]" />; // Prevent layout shift
    }

    return (
        <div className="flex items-center gap-1 border border-gray-200 dark:border-white/10 rounded-full p-1">
            <button
                onClick={() => setTheme("light")}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${theme === "light"
                    ? "bg-gray-100 dark:bg-white/10 text-black dark:text-white"
                    : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                    }`}
                aria-label="Light mode"
            >
                <Sun size={14} />
            </button>
            <button
                onClick={() => setTheme("system")}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${theme === "system"
                    ? "bg-gray-100 dark:bg-white/10 text-black dark:text-white"
                    : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                    }`}
                aria-label="System mode"
            >
                <Monitor size={14} />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${theme === "dark"
                    ? "bg-gray-100 dark:bg-white/10 text-black dark:text-white"
                    : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                    }`}
                aria-label="Dark mode"
            >
                <Moon size={14} />
            </button>
        </div>
    );
}
