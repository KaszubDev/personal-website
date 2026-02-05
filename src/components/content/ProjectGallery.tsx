"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbox } from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
    images: string[];
    title: string;
    className?: string;
}

export function ProjectGallery({ images, title, className }: ProjectGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
        setLightboxOpen(true);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className={cn("w-full", className)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {images.map((image, index) => (
                    <motion.div
                        key={`${image}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative aspect-video cursor-zoom-in overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-800"
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={image}
                            alt={`${title} screenshot ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </motion.div>
                ))}
            </div>

            {lightboxOpen && (
                <Lightbox
                    images={images}
                    selectedIndex={selectedIndex}
                    onClose={() => setLightboxOpen(false)}
                    onIndexChange={setSelectedIndex}
                />
            )}
        </div>
    );
}
