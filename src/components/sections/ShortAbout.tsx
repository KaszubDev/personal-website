"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ShortAbout() {
    return (
        <section id="about-summary" className="py-24 bg-gray-50 dark:bg-zinc-900/50">
            <Container>
                <div className="max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0 }}
                        className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase mb-6"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-medium leading-tight mb-8"
                    >
                        I combine engineering skills with design intuition to craft user-friendly, high-performance software that is both practical and beautiful.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: 0.4 }}
                    >
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-lg font-medium hover:gap-4 transition-all duration-300"
                        >
                            Learn more about my journey <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
