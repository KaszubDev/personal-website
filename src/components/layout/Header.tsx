"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-black/80 dark:border-white/10 transition-colors duration-500">
            <Container>
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link
                        href="/"
                        className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
                    >
                        KaszubDev
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors ${isActive(link.href)
                                            ? "text-black dark:text-white"
                                            : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/contact">
                                    <Button variant="premium" size="sm">
                                        Contact
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 -mr-2 text-black dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Mobile Menu Overlay */}
                    <MobileMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                        links={navLinks}
                    />
                </div>
            </Container>
        </header>
    );
}
