"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Code, Database, Layout, PenTool, Server, Smartphone, Terminal, Zap } from "lucide-react";

const stack = [
    { name: "Next.js", icon: Zap, category: "Framework" },
    { name: "React", icon: Code, category: "Library" },
    { name: "TypeScript", icon: Terminal, category: "Language" },
    { name: "Tailwind CSS", icon: Layout, category: "Styling" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "Figma", icon: PenTool, category: "Design" },
    { name: "Responsive", icon: Smartphone, category: "Design" },
];

export function Skills() {
    return (
        <section id="skills" className="py-24">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        The tools I use to build scalable, high-performance applications.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stack.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                            <item.icon size={32} className="mb-4 text-gray-700 dark:text-gray-300 stroke-1" />
                            <span className="font-semibold text-sm md:text-base">{item.name}</span>
                            <span className="text-xs text-gray-400 mt-1">{item.category}</span>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
