import { Container } from "@/components/ui/Container";
import { Process } from "@/components/sections/Process";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about my journey, philosophy and approach to web development.",
};

export default function AboutPage() {
    return (
        <main className="pt-32 pb-24">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                        About Me
                    </h1>
                    <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                        {/* Content to be populated */}
                        <p className="lead text-xl text-black dark:text-white mb-6">
                            I am a Web Frontend Developer driven by the challenge of creating simple, elegant solutions to complex problems.
                        </p>
                        <p className="mb-6">
                            My journey began over 6 years ago. I believe that good design is invisible - it just works. My approach concentrates on performance, accessibility and clean code.
                        </p>
                        <p className="mb-6">
                            I am a passionate learner and always eager to explore new technologies and trends. I am also a team player and enjoy working with others to create innovative solutions.
                        </p>
                        <p>
                            Outside of work, I enjoy staying active through sports, traveling to new destinations and spending quality time with my loved ones.
                        </p>
                    </div>
                </div>
            </Container>

            <Process />
        </main>
    );
}
