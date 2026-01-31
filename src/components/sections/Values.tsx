"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Target, Zap, Users } from "lucide-react";

const values = [
    {
        title: "Precision",
        description: "Every pixel matters. From the layout grid to the easing curves of animations, I obsess over details others might miss.",
        icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
        title: "Performance",
        description: "Speed is a feature. I architect applications to load fast and run smooth, preventing technical debt accumulation.",
        icon: <Zap className="w-6 h-6 text-yellow-500" />
    },
    {
        title: "Accessibility",
        description: "The web is for everyone. I build with semantic HTML and WCAG guidelines to ensure usability for diverse abilities.",
        icon: <Users className="w-6 h-6 text-purple-500" />
    }
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

export function Values() {
    return (
        <section className="py-24 md:py-32 bg-gray-50 dark:bg-zinc-900/50">
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
                            Values
                        </motion.h2>
                    </div>

                    {/* Content - Grid Layout */}
                    <div className="md:w-2/3">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {values.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className={`p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 ${index === 2 ? "md:col-span-2" : ""}`}
                                >
                                    <div className="mb-4 p-3 bg-neutral-50 dark:bg-neutral-800 rounded-xl inline-block">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
