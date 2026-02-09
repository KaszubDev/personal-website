"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function ComingSoon() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 md:mt-15 text-center"
        >
            <div className="inline-block p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
                <div className="flex items-center justify-center gap-2 mb-3 text-blue-600 dark:text-blue-400">
                    <Sparkles size={20} />
                    <span className="font-semibold text-sm uppercase tracking-wider">Coming Soon</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                    More projects in the pipeline
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    I'm constantly building and experimenting.
                    New case studies and experiments will be added here soon.
                </p>
            </div>
        </motion.div>
    );
}
