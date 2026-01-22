"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { MoveRight } from "lucide-react";
import { profile } from "@/data/profile";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="py-32">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Ready to build something <br />
                        <span className="text-blue-600 dark:text-blue-500">
                            extraordinary?
                        </span>
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 text-lg font-medium hover:gap-5 transition-all duration-300"
                    >
                        Say Hello
                        <MoveRight size={20} />
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
}
