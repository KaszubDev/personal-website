"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const experiences = [
    {
        year: "2024 - Present",
        title: "Software Development Engineer",
        company: "Heineken Global Shared Services",
        description: "Front-end engineer for a large-scale e-commerce platform using Next.js, TypeScript, SCSS, GraphQL and Contentful. Experience spans both feature development in the platform team and maintenance of the internal React-based design system library, distributed as an NPM package and documented with Storybook.",
    },
    {
        year: "2021 - 2024",
        title: "Technology Specialist - Low Code OutSystems",
        company: "Heineken Global Shared Services",
        description: "Developed web and mobile applications using OutSystems, handling full-stack duties including database, integrations, backend logic and UI. Collaborated in a 100% English-speaking environment. Extended functionality with custom JavaScript and SQL when required.",
    },
    {
        year: "2020 - 2021",
        title: "Junior Web Developer",
        company: "Everywhere Studio",
        description: "Built websites and e-commerce stores using WordPress and WooCommerce. Developed custom themes from Photoshop designs using PHP, jQuery, and SCSS. Managed client communications to define technical requirements and implement real-time updates.",
    }
];

export function Experience() {
    return (
        <section className="py-24 md:py-32 bg-white dark:bg-black">
            <Container>
                <div className="flex flex-col md:flex-row gap-12 md:gap-16 max-w-5xl mx-auto">
                    {/* Sticky Header (1/3) */}
                    <div className="md:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500 sticky top-24"
                        >
                            Experience
                        </motion.h2>
                    </div>

                    {/* Timeline Content (2/3) */}
                    <div className="md:w-2/3 relative">
                        {/* Central Line (Centered relative to this column) */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent transform md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {experiences.map((item, index) => (
                                <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}>

                                    {/* Timeline Node */}
                                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white dark:bg-black border-[3px] border-neutral-900 dark:border-white rounded-full z-10 transform -translate-x-[7px] md:-translate-x-1/2 mt-[6px] md:mt-0 shadow-[0_0_0_4px_rgba(255,255,255,1)] dark:shadow-[0_0_0_4px_rgba(0,0,0,1)]" />

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block w-1/2" />

                                    {/* Card */}
                                    <motion.div
                                        className="w-full md:w-1/2 pl-12 md:pl-0"
                                        initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                    >
                                        <div className={`
                                            relative p-6 rounded-3xl 
                                            bg-neutral-50 dark:bg-neutral-900/50 
                                            backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50
                                            hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300
                                            ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}
                                        `}>
                                            <div className="mb-3">
                                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase 
                                                    bg-neutral-200/50 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 mb-3">
                                                    {item.year}
                                                </span>
                                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-1">
                                                    {item.company}
                                                </p>
                                            </div>

                                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
