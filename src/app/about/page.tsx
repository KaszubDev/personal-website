"use client";

import { Container } from "@/components/ui/Container";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Heart, Layers, Zap } from "lucide-react";
import { Experience } from "@/components/sections/Experience";
import { MyStory } from "@/components/sections/MyStory";
import { Values } from "@/components/sections/Values";
import { Process } from "@/components/sections/Process";
import { ShortContact } from "@/components/sections/ShortContact";

export default function AboutPage() {
    return (
        <main className="pt-24 md:pt-32 bg-white dark:bg-black min-h-screen">
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
                            description="Specialized in React, Next.js, TypeScript, Node.js ecosystems."
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
                            title="Values"
                            description="I believe good design is invisible. It should just work, seamlessly and reliably."
                            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-4 flex items-center justify-center text-center italic text-neutral-500">&quot;Simplicity is the ultimate sophistication.&quot;</div>}
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
            </Container>

            <MyStory />

            <Experience />

            <Values />

            <Process />

            <ShortContact withBorder />
        </main >
    );
}
