import { Hero } from "@/components/sections/Hero";
import { ShortAbout } from "@/components/sections/ShortAbout";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { getAllProjects } from "@/lib/projects";
import { Skills } from "@/components/sections/Skills";
import { ShortContact } from "@/components/sections/ShortContact";

export default function Home() {
  const projects = getAllProjects();
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <main>
      <Hero />
      <ShortAbout />
      <ProjectsPreview projects={featuredProjects} />
      <Skills />
      <ShortContact />
    </main>
  );
}
