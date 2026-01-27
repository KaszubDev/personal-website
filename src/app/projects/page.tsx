"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
    return (
        <main className="pt-32 pb-24 min-h-screen">
            <Container>
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">All Projects</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                        A collection of my work. Both professional and personal.
                    </p>
                </div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
                            }}
                        >
                            <Link
                                href={`/projects/${project.id}`}
                                className="block group h-full"
                            >
                                <Card hoverEffect={true} className="h-full">
                                    <div className="bg-gray-100 dark:bg-zinc-800 aspect-[16/9] mb-6 relative overflow-hidden rounded-t-xl">
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                            {/* Placeholder for project image */}
                                            <span className="sr-only">{project.title} Preview</span>
                                            {project.title} Preview
                                        </div>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                            {project.title}
                                            <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex gap-2 flex-wrap">
                                            {project.tech.map(t => (
                                                <span key={t} className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </main>
    );
}
