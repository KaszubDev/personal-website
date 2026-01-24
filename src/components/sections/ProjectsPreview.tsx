"use client";

import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import clsx from "clsx";

export function ProjectsPreview() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (!scrollContainerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", checkScroll);
            checkScroll();
            window.addEventListener("resize", checkScroll);
            setTimeout(checkScroll, 100);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", checkScroll);
            }
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;

        let scrollAmount = container.clientWidth * 0.8;
        const itemsWrapper = container.firstElementChild;
        if (itemsWrapper && itemsWrapper.children.length >= 2) {
            const first = itemsWrapper.children[0] as HTMLElement;
            const second = itemsWrapper.children[1] as HTMLElement;
            scrollAmount = second.offsetLeft - first.offsetLeft;
        }

        const targetScroll = container.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount);

        container.scrollTo({
            left: targetScroll,
            behavior: "smooth"
        });
    };

    return (
        <section id="projects" className="py-24 overflow-hidden">
            <Container>
                <div className="flex justify-between items-end mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Work</h2>

                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/projects"
                            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            View all projects
                        </Link>
                        <div className="flex gap-4">
                            <button
                                onClick={() => scroll("left")}
                                disabled={!canScrollLeft}
                                className={clsx(
                                    "p-3 rounded-full bg-gray-100 dark:bg-zinc-800 transition-all duration-300",
                                    !canScrollLeft ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-900 dark:text-white cursor-pointer"
                                )}
                                aria-label="Scroll left"
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                disabled={!canScrollRight}
                                className={clsx(
                                    "p-3 rounded-full bg-gray-100 dark:bg-zinc-800 transition-all duration-300",
                                    !canScrollRight ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-900 dark:text-white cursor-pointer"
                                )}
                                aria-label="Scroll right"
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto md:overflow-x-hidden pb-6 snap-x snap-mandatory scrollbar-hide -mr-[calc(50vw-50%)] w-[calc(100%+50vw-50%)]"
                >
                    <div className="flex gap-6 md:gap-8 pr-[calc(50vw-50%)]">
                        {projects.map((project) => (
                            <Link
                                href={`/projects/${project.id}`}
                                key={project.id}
                                className="min-w-[85vw] md:min-w-[480px] lg:min-w-[560px] snap-start"
                            >
                                <Card hoverEffect={true} className="h-full">
                                    <div className="bg-gray-100 dark:bg-zinc-800 aspect-[16/9] mb-6 relative">
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                            {project.title} Preview
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
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation (bottom) */}
                <div className="flex md:hidden justify-between items-center mt-6">
                    <Link
                        href="/projects"
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        View all projects
                    </Link>
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className={clsx(
                                "p-3 rounded-full bg-gray-100 dark:bg-zinc-800 transition-opacity",
                                !canScrollLeft ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"
                            )}
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className={clsx(
                                "p-3 rounded-full bg-gray-100 dark:bg-zinc-800 transition-opacity",
                                !canScrollRight ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"
                            )}
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
