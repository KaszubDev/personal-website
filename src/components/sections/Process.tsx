"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const steps = [
    {
        number: "01",
        title: "Discover",
        description:
            "I start by understanding your goals, audience and brand. No code is written until the problem is clearly defined.",
    },
    {
        number: "02",
        title: "Design",
        description:
            "I work together with designers to create a design that is both visually appealing and easy to navigate.",
    },
    {
        number: "03",
        title: "Build",
        description:
            "Using dedicated tools, I perform the technical implementation to deliver high-quality, semantic and clean code.",
    },
    {
        number: "04",
        title: "Deliver",
        description:
            "Rigorous testing, SEO optimization and deployment. I ensure your site is perfect on every device.",
    },
];

export function Process() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-zinc-900/50">
            <Container>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0 }}
                    className="text-3xl font-bold mb-16"
                >
                    Process
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex gap-6"
                        >
                            <span className="text-4xl font-light text-gray-300 dark:text-gray-700">
                                {step.number}
                            </span>
                            <div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
