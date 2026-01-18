"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Immersive Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
                <div className="absolute inset-0 bg-white/50 dark:bg-black/80 backdrop-blur-[2px]" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-black dark:text-white leading-tight">
                            Building modern <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                web experiences
                            </span>
                        </h1>
                        <p className="text-2xl md:text-3xl font-medium text-gray-400 dark:text-gray-500 mb-8">
                            Focused on clarity and quality.
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        I craft minimalist, high-performance digital experiences that merge technical precision with aesthetic excellence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="#projects">
                            <Button size="lg" className="group">
                                View Projects
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="ghost" size="lg">
                                About Me
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
