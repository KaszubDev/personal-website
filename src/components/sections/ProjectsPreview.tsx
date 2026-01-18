"use client";

import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProjectsPreview() {
    return (
        <section id="projects" className="py-24 overflow-hidden">
            <Container>
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl font-bold">Selected Work</h2>
                    {/* Optional: View All link if we had a full page */}
                </div>
            </Container>


            <div className="flex gap-8 px-6 md:px-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
                {projects.map((project, index) => (
                    <Link
                        href={`/projects/${project.id}`}
                        key={project.id}
                        className="min-w-[85vw] md:min-w-[500px] snap-center"
                    >
                        <Card hoverEffect={true} className="h-full">
                            <div className="bg-gray-100 dark:bg-zinc-800 aspect-[16/9] mb-6 relative">
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    Image Preview
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                    {project.title}
                                    <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                                    {project.description}
                                </p>
                                <div className="flex gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}
