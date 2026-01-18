"use client";

import { Container } from "@/components/ui/Container";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <main className="pt-32 pb-24 min-h-screen">
            <Container>
                <div className="max-w-2xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-300 mb-12"
                    >
                        Have a project in mind or just want to say hello? I&apos;m always open to discussing new opportunities.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-3 text-2xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <Mail size={24} />
                            {profile.email}
                        </a>

                        <div className="border-t border-gray-100 dark:border-white/10 pt-12 mt-12">
                            <form className="space-y-6 text-left">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Adam Smith" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="adam.smith@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Hello, I'd like to contact you..."></textarea>
                                </div>
                                <Button type="submit" className="w-full text-lg py-4">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </main>
    );
}
