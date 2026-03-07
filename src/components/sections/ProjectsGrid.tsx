"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { ArrowRight, SearchX } from "lucide-react";
import Image from "next/image";

interface ProjectsGridProps {
    projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projects.forEach(p => p.tech.forEach(t => tags.add(t)));
        return Array.from(tags).sort();
    }, [projects]);

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const filteredProjects = useMemo(() => {
        if (selectedTags.length === 0) return projects;
        return projects.filter(p =>
            selectedTags.every(tag => p.tech.includes(tag))
        );
    }, [projects, selectedTags]);

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    return (
        <div className="flex flex-col gap-6">
            {allTags.length > 0 && (
                <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="flex overflow-x-auto gap-2 pb-4 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        {allTags.map(tag => {
                            const isSelected = selectedTags.includes(tag);
                            return (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    aria-pressed={isSelected}
                                    className={`shrink-0 cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900 ${isSelected
                                        ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md'
                                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                                        }`}
                                >
                                    {tag}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.slug}
                            className="h-full block group"
                        >
                            <Link
                                href={`/projects/${project.slug}`}
                                className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                            >
                                <Card hoverEffect={true} className="h-full">
                                    <div className="bg-gray-100 dark:bg-zinc-800 aspect-video mb-6 relative overflow-hidden rounded-t-xl">
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10" />
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                                                {project.title} Preview
                                            </div>
                                        )}
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
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center justify-center py-10 md:py-20 px-4 text-center"
                >
                    <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-full mb-6 relative">
                        <SearchX className="w-12 h-12 text-zinc-400 dark:text-zinc-500 relative z-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                        No projects found
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
                        We couldn&apos;t find any projects matching all your selected filters. Try removing some tags to see more results.
                    </p>
                    <button
                        onClick={() => setSelectedTags([])}
                        className="mt-6 px-6 py-2.5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-medium rounded-full cursor-pointer hover:scale-105 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900"
                    >
                        Clear all filters
                    </button>
                </motion.div>
            )}
        </div>
    );
}
