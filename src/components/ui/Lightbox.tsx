"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useCallback } from "react";

interface LightboxProps {
    images: string[];
    selectedIndex: number;
    onClose: () => void;
    onIndexChange: (index: number) => void;
}

export function Lightbox({ images, selectedIndex, onClose, onIndexChange }: LightboxProps) {
    const handlePrev = useCallback(() => {
        onIndexChange(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }, [onIndexChange, selectedIndex, images.length]);

    const handleNext = useCallback(() => {
        onIndexChange(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }, [onIndexChange, selectedIndex, images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };

        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden"; // Prevent scrolling behind lightbox

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [handleNext, handlePrev, onClose]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
                onClick={onClose}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-50 cursor-pointer"
                    aria-label="Close lightbox"
                >
                    <X size={24} />
                </button>

                {/* Navigation Buttons */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrev();
                            }}
                            className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-50 cursor-pointer"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                            className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-50 cursor-pointer"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}

                {/* Image Container */}
                <div
                    className="relative w-full h-full max-w-7xl max-h-screen p-4 md:p-12 flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image area
                >
                    <motion.div
                        key={selectedIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={images[selectedIndex]}
                            alt={`Gallery image ${selectedIndex + 1}`}
                            fill
                            className="object-contain"
                            priority
                            quality={100}
                        />
                    </motion.div>

                    {/* Image Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium">
                        {selectedIndex + 1} / {images.length}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
