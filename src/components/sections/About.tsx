"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { about } from "@/data/profile";

export function About() {
    return (
        <section id="about" className="py-24 md:py-32">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase mb-6">
                        {about.title}
                    </h2>
                    <div className="space-y-6 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                        {about.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
