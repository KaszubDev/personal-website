"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Link from "next/link";

export function ShortContact() {
    return (
        <section className="py-32">
            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0 }}
                    className="bg-black dark:bg-white text-white dark:text-black rounded-3xl p-12 md:p-24 text-center overflow-hidden relative"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s work together.</h2>
                        <p className="text-lg md:text-xl text-gray-300 dark:text-gray-600 max-w-xl mx-auto mb-10">
                            Need a experienced developer who cares about the details? I&apos;m available for freelance projects and consulting.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white dark:bg-black text-black dark:text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Decorative background blur */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
                </motion.div>
            </Container>
        </section>
    );
}
