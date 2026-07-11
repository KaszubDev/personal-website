"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Dialog } from "@base-ui/react/dialog";
import { useModalRegistration } from "@/providers/ModalProvider";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
    const pathname = usePathname();
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const isActive = (href: string) => pathname === href;

    useModalRegistration(isOpen);

    return (
        <Dialog.Portal>
            <Dialog.Popup
                initialFocus={closeButtonRef}
                className="fixed inset-0 z-layer-overlay flex h-[100dvh] flex-col bg-white text-black outline-none transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:bg-black dark:text-white"
            >
                <Dialog.Title className="sr-only">Main navigation</Dialog.Title>

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
                            <Dialog.Close
                                ref={closeButtonRef}
                                className="p-2 -mr-2 cursor-pointer text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </Dialog.Close>
                        </div>
                    </div>
                </div>

                <nav
                    aria-label="Mobile navigation"
                    className="flex-1 flex flex-col justify-center px-6 md:px-8 pb-20 max-w-5xl mx-auto w-full"
                >
                    <ul className="flex flex-col gap-6 md:gap-8">
                        {links.map((link, index) => (
                            <motion.li
                                key={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
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
            </Dialog.Popup>
        </Dialog.Portal>
    );
}
