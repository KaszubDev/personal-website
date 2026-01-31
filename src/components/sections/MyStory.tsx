"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export function MyStory() {
    return (
        <section className="py-24 md:py-32 bg-gray-50 dark:bg-zinc-900/50">
            <Container>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-5xl mx-auto">
                    <div className="md:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500 sticky top-24"
                        >
                            My Story
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:w-2/3 prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400"
                    >
                        <p className="mb-6">
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
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
