import { Hero } from "@/components/sections/Hero";
import { ShortAbout } from "@/components/sections/ShortAbout";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { Skills } from "@/components/sections/Skills";
import { ShortContact } from "@/components/sections/ShortContact";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ShortAbout />
      <ProjectsPreview />
      <Skills />
      <ShortContact />
    </main>
  );
}
