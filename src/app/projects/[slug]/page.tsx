import { Container } from "@/components/ui/Container";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProjectGallery } from "@/components/content/ProjectGallery";
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import ReactMarkdown from "react-markdown";

import { getProject, getAllProjects } from "@/lib/projects";

// This is required for static export
export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const project = getProject(slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Project Details`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params
    const project = getProject(slug);
    const content = project?.content;

    if (!project) {
        notFound();
    }

    return (
        <main className="pt-32 pb-24">
            <Container>
                <Link
                    href="/projects"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Projects
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                            {project.description}
                        </p>

                        {/* Project Image */}
                        <div className="aspect-video bg-gray-100 dark:bg-zinc-800 rounded-2xl overflow-hidden relative mb-8">
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 66vw"
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                                    Project Screenshot / Demo Video
                                </div>
                            )}
                        </div>

                        <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-h3:text-2xl prose-p:text-gray-600 dark:prose-p:text-gray-300">
                            {content ? (
                                <ReactMarkdown>{content}</ReactMarkdown>
                            ) : (
                                <p>No detailed description available for this project.</p>
                            )}
                        </div>

                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-gray-100 dark:border-white/5 sticky top-24">
                            <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-sm text-gray-500 block mb-1">Role</span>
                                    <span className="font-medium">{project.role}</span>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500 block mb-1">Stack</span>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-2 py-1 bg-white dark:bg-white/10 rounded text-xs border border-gray-200 dark:border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-4 flex flex-col gap-3">
                                    {project.link && (
                                        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button className="w-full gap-2">
                                                Visit Live <ArrowUpRight size={16} />
                                            </Button>
                                        </Link>
                                    )}
                                    {project.github && (
                                        <Link href={project.github} target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button variant="outline" className="w-full gap-2">
                                                View Code <Github size={16} />
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Section - Full Width */}
                {project.gallery && project.gallery.length > 0 && (
                    <div className="mt-20 pt-10 border-t border-gray-100 dark:border-white/5">
                        <h3 className="text-2xl font-bold mb-8">Project Gallery</h3>
                        <ProjectGallery
                            images={project.gallery}
                            title={project.title}
                            className="w-full"
                        />
                    </div>
                )}
            </Container>
        </main>
    );
}
