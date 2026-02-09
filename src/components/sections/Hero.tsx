"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { SpotlightText } from "../ui/SpotlightText";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroScene = dynamic(() => import("../three/HeroScene").then((mod) => mod.HeroScene), {
    ssr: false,
    loading: () => <div className="absolute inset-0 z-0 bg-transparent" />
});

export function Hero() {
    return (
        <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
            {/* Immersive Background */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[60px] md:blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[50px] md:blur-[100px]" />
                <div className="absolute inset-0 bg-white/50 dark:bg-black/80" />
            </div>

            {/* 3D Scene */}
            <div className="absolute inset-0 z-1">
                <HeroScene />
            </div>

            <Container className="relative z-10 pointer-events-none">
                <div className="max-w-4xl mx-auto text-center pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl xs:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 xs:mb-8 text-black dark:text-white leading-tight">
                            Building modern <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                web experiences
                            </span>
                        </h1>
                        <SpotlightText
                            text="Focused on clarity and quality."
                            className="text-xl xs:text-2xl md:text-3xl font-medium mb-8"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="#projects">
                            <Button size="md" className="xs:px-8 xs:py-4 xs:text-lg">
                                View Projects
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="ghost" size="md" className="xs:px-8 xs:py-4 xs:text-lg">
                                About Me
                            </Button>
                        </Link>
                    </motion.div>
                </div>


            </Container>

            {/* Scroll Indicator */}
            <motion.button
                onClick={() => {
                    const nextSection = document.getElementById('about-summary');
                    if (nextSection) {
                        const offset = window.innerWidth < 768 ? 64 : 80;
                        const top = nextSection.getBoundingClientRect().top + window.scrollY - offset;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    duration: 2,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-300 z-20 cursor-pointer hover:text-black dark:hover:text-white transition-colors"
                aria-label="Scroll down"
            >
                <ChevronDown size={48} strokeWidth={1.5} />
            </motion.button>
        </section >
    );
}
