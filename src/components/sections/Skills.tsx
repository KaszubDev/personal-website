"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { skillGroups } from "@/data/skills";

export function Skills() {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: TouchEvent) => {
            const target = event.target as HTMLElement;
            if (activeItem && !target.closest('.skill-item')) {
                setActiveItem(null);
            }
        };
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [activeItem]);

    const handleSkillClick = (itemName: string) => {
        if (window.matchMedia('(hover: none)').matches) {
            setActiveItem(activeItem === itemName ? null : itemName);
        }
    };

    return (
        <section
            className="py-20 bg-white/50 dark:bg-zinc-900/20 backdrop-blur-sm"
        >
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold mb-6 tracking-tight"
                    >
                        Tech Stack
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400"
                    >
                        A collection of technologies I use to build scalable, high-performance applications.
                    </motion.p>
                </div>

                <div className="space-y-16">
                    {skillGroups.map((group, groupIndex) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <h3 className="text-2xl font-semibold dark:text-gray-200">{group.title}</h3>
                                <div className="h-px flex-1 bg-gray-200 dark:bg-zinc-800" />
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {group.items.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        whileHover={{ y: -5 }}
                                        animate={activeItem === item.name ? { y: -5 } : { y: 0 }}
                                        onClick={() => handleSkillClick(item.name)}
                                        className={`skill-item group relative flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-900 border rounded-2xl shadow-sm transition-all duration-300 ${activeItem === item.name
                                            ? 'shadow-md border-blue-500/20'
                                            : 'border-gray-100 dark:border-zinc-800/50 hover:shadow-md hover:border-blue-500/20'
                                            }`}
                                    >
                                        <div className={`p-3 rounded-xl mb-4 transition-colors ${activeItem === item.name
                                            ? 'bg-blue-50 dark:bg-blue-900/20'
                                            : 'bg-gray-50 dark:bg-zinc-800/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20'
                                            }`}>
                                            <item.icon size={28} className={`transition-colors stroke-[1.5] ${activeItem === item.name
                                                ? 'text-blue-600 dark:text-blue-400'
                                                : 'text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                                                }`} />
                                        </div>
                                        <span className={`font-medium text-sm transition-colors ${activeItem === item.name
                                            ? 'text-gray-900 dark:text-gray-100'
                                            : 'text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100'
                                            }`}>
                                            {item.name}
                                        </span>
                                        <span className={`text-[10px] text-gray-400 mt-1 transition-opacity absolute bottom-2 ${activeItem === item.name
                                            ? 'opacity-100'
                                            : 'opacity-0 group-hover:opacity-100'
                                            }`}>
                                            {item.category}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
