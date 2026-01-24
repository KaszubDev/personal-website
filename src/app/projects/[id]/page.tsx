import { Container } from "@/components/ui/Container";
import { projects, Project } from "@/data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";

// This is required for static export
export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const project = projects.find((p) => p.id === id);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Project Details`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: Props) {
    const { id } = await params
    const project = projects.find((p) => p.id === id);

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

                        {/* Placeholder for images */}
                        <div className="aspect-video bg-gray-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-gray-400 mb-8">
                            Project Screenshot / Demo Video
                        </div>

                        <div className="prose prose-lg dark:prose-invert">
                            <h3>The Challenge</h3>
                            <p>
                                Detailed description of the problem, the context and what needed to be achieved.
                                This section expands on the complexity of the task.
                            </p>
                            <h3>The Solution</h3>
                            <p>
                                How we approached the problem, design decisions made and the technical implementation details.
                            </p>
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
            </Container>
        </main>
    );
}
