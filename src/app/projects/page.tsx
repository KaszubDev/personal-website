import { Container } from "@/components/ui/Container";
import { getAllProjects } from "@/lib/projects";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ComingSoon } from "@/components/sections/ComingSoon";

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <main className="pt-32 pb-24 min-h-screen">
            <Container>
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Projects</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                        A collection of my work. Both professional and personal.
                    </p>
                </div>

                <ProjectsGrid projects={projects} />
                <ComingSoon />
            </Container>
        </main>
    );
}
