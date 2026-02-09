"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || "");

    if (state.succeeded) {
        return (
            <main className="pt-32 pb-24 flex items-center justify-center">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-xl mx-auto text-center"
                    >
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Thanks for reaching out! I&apos;ll get back to you as soon as possible.
                        </p>
                        <Button onClick={() => window.location.reload()} variant="outline">
                            Send another message
                        </Button>
                    </motion.div>
                </Container>
            </main>
        );
    }

    return (
        <main className="pt-32 pb-24">
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

                        <div className="border-t border-gray-100 dark:border-white/10 pt-12 mt-12">
                            <form onSubmit={handleSubmit} className="space-y-6 text-left">
                                {/* against spam bots */}
                                <input type="text" name="_gotcha" style={{ display: "none" }} />

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="Adam Smith"
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="adam.smith@example.com"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="Hello, I'd like to contact you..."
                                    ></textarea>
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                </div>
                                <Button type="submit" disabled={state.submitting} className="w-full xs:text-lg xs:py-4">
                                    {state.submitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </main>
    );
}
