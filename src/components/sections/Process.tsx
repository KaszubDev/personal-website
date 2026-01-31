"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Code2, PenTool, Rocket, Search } from "lucide-react";

const processes = [
    {
        number: "01",
        title: "Discover",
        description: "Understanding goals, audience and brand. No code until the problem is defined.",
        icon: <Search className="w-5 h-5" />
    },
    {
        number: "02",
        title: "Design",
        description: "Collaborating to create designs that are visually appealing and easy to navigate.",
        icon: <PenTool className="w-5 h-5" />
    },
    {
        number: "03",
        title: "Build",
        description: "Technical implementation using modern tools to deliver semantic, clean code.",
        icon: <Code2 className="w-5 h-5" />
    },
    {
        number: "04",
        title: "Deliver",
        description: "Rigorous testing, SEO optimization and deployment. Perfect on every device.",
        icon: <Rocket className="w-5 h-5" />
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Process() {
    return (
        <section className="py-24 md:py-32 bg-white dark:bg-black">
            <Container>
                <div className="flex flex-col md:flex-row gap-12 md:gap-16 max-w-5xl mx-auto">
                    {/* Sticky Header */}
                    <div className="md:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500 sticky top-24"
                        >
                            Process
                        </motion.h2>
                    </div>

                    {/* Content - 2x2 Grid */}
                    <div className="md:w-2/3">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {processes.map((step) => (
                                <motion.div
                                    key={step.number}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className="group relative p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 overflow-hidden hover:border-neutral-200 dark:hover:border-neutral-700 transition-colors"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-neutral-900 dark:text-white select-none">
                                        {step.number}
                                    </div>
                                    <div className="relative z-10">
                                        <div className="mb-4 p-2 w-fit rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300 shadow-sm border border-neutral-100 dark:border-neutral-700">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
