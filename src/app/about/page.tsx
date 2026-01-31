"use client";

import { Container } from "@/components/ui/Container";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Heart, Layers, Zap } from "lucide-react";
import { Process } from "@/components/sections/Process";

export default function AboutPage() {
    return (
        <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white dark:bg-black min-h-screen">
            <Container>
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-black dark:text-white leading-tight">
                        Driven by the Challenge <br />
                        <span className="text-gray-400 dark:text-gray-500">Fueled by Curiosity</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Solving complex problems to deliver robust, well-optimized software. Constantly refining my craft.
                    </p>
                </motion.div>

                {/* Bento Grid Stats & Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mb-24"
                >
                    <BentoGrid className="max-w-4xl mx-auto">
                        <BentoGridItem
                            title="Experience"
                            description="Over 6 years of crafting production-grade frontend applications."
                            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center text-6xl font-bold text-neutral-400">6+</div>}
                            icon={<Layers className="h-4 w-4 text-neutral-500" />}
                            className="md:col-span-1"
                        />
                        <BentoGridItem
                            title="Tech Stack"
                            description="Specialized in React, Next.js, TypeScript, and Three.js ecosystems."
                            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center"><Code2 size={48} className="text-neutral-400" /></div>}
                            icon={<Cpu className="h-4 w-4 text-neutral-500" />}
                            className="md:col-span-1"
                        />
                        <BentoGridItem
                            title="Global Mindset"
                            description="Based in Poland, working with clients and teams worldwide."
                            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center"><Globe size={48} className="text-neutral-400" /></div>}
                            icon={<Globe className="h-4 w-4 text-neutral-500" />}
                            className="md:col-span-1"
                        />
                        <BentoGridItem
                            title="Philosophy"
                            description="I believe good design is invisible. It should just work, seamlessly and reliably."
                            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-4 flex items-center justify-center text-center italic text-neutral-500">"Simplicity is the ultimate sophistication."</div>}
                            icon={<Heart className="h-4 w-4 text-neutral-500" />}
                            className="md:col-span-2"
                        />
                        <BentoGridItem
                            title="Performance"
                            description="Obsessed with optimizing web vitals and interaction latency."
                            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center"><Zap size={48} className="text-yellow-500/50" /></div>}
                            icon={<Zap className="h-4 w-4 text-neutral-500" />}
                            className="md:col-span-1"
                        />
                    </BentoGrid>
                </motion.div>

                {/* My Story Section */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24 md:mb-32 max-w-5xl mx-auto">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500 sticky top-24">
                            My Story
                        </h2>
                    </div>
                    <div className="md:w-2/3 prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400">
                        <p className="mb-6">
                            I am a Web Frontend Developer driven by the challenge of creating simple, elegant solutions to complex problems.
                        </p>
                        <p className="mb-6">
                            My journey began over 6 years ago. I believe that good design is invisible - it just works. My approach concentrates on performance, accessibility and clean code.
                        </p>
                        <p className="mb-6">
                            I am a passionate learner and always eager to explore new technologies and trends. I am also a team player and enjoy working with others to create innovative solutions.
                        </p>
                        <p>
                            Outside of work, I enjoy staying active through sports, traveling to new destinations and spending quality time with my loved ones.
                        </p>
                    </div>
                </div>

                {/* Philosophy Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 max-w-5xl mx-auto">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-black dark:text-white">Precision</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Every pixel matters. From the layout grid to the easing curves of animations, I obsess over details that others might miss.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-black dark:text-white">Performance</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Speed is a feature. I architect applications to load fast and run smooth, ensuring that technical debt doesn't accumulate and slow down the user experience.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-black dark:text-white">Accessibility</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            The web is for everyone. I build with semantic HTML and follow WCAG guidelines to ensure that my work is usable by people with diverse abilities.
                        </p>
                    </div>
                </div>

            </Container>

            <Process />
        </main >
    );
}
