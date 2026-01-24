"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-white dark:bg-black flex flex-col h-[100dvh]"
                >
                    {/* Header with Logo and Close Button - EXACT MATCH TO HEADER */}
                    <div className="w-full border-b border-transparent">
                        <div className="max-w-5xl mx-auto px-6 md:px-8">
                            <div className="flex items-center justify-between h-16 md:h-20">
                                <Link
                                    href="/"
                                    onClick={onClose}
                                    className="text-lg font-semibold tracking-tight"
                                >
                                    KaszubDev
                                </Link>
                                <button
                                    onClick={onClose}
                                    className="p-2 -mr-2 text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 flex flex-col justify-center px-6 md:px-8 pb-20 max-w-5xl mx-auto w-full">
                        <ul className="flex flex-col gap-6 md:gap-8">
                            {links.map((link, index) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{
                                        delay: index * 0.05 + 0.1,
                                        duration: 0.4,
                                        ease: "easeOut",
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className={`text-3xl md:text-4xl font-medium tracking-tight hover:opacity-70 transition-opacity block ${isActive(link.href)
                                            ? "text-black dark:text-white"
                                            : "text-gray-500 dark:text-gray-400"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{
                                    delay: links.length * 0.05 + 0.1,
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                            >
                                <Link
                                    href="/contact"
                                    onClick={onClose}
                                    className={`text-3xl md:text-4xl font-medium tracking-tight hover:opacity-70 transition-opacity block ${isActive("/contact")
                                        ? "text-black dark:text-white"
                                        : "text-gray-500 dark:text-gray-400"
                                        }`}
                                >
                                    Contact
                                </Link>
                            </motion.li>
                        </ul>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
