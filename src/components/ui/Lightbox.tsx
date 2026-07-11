"use client";

import { Dialog } from "@base-ui/react/dialog";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useRef, type KeyboardEvent } from "react";
import { useModalRegistration } from "@/providers/ModalProvider";

interface LightboxProps {
    images: string[];
    title: string;
    selectedIndex: number;
    onClose: () => void;
    onIndexChange: (index: number) => void;
}

export function Lightbox({
    images,
    title,
    selectedIndex,
    onClose,
    onIndexChange,
}: LightboxProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useModalRegistration(true);

    const showPreviousImage = () => {
        onIndexChange(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    };

    const showNextImage = () => {
        onIndexChange(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            showPreviousImage();
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            showNextImage();
        }
    };

    return (
        <Dialog.Root
            open
            modal
            onOpenChange={(open) => {
                if (!open) onClose();
            }}
        >
            <Dialog.Portal>
                <Dialog.Backdrop className="fixed inset-0 z-layer-modal bg-black/90 backdrop-blur-xl transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
                <Dialog.Viewport className="fixed inset-0 z-layer-modal overscroll-contain">
                    <Dialog.Popup
                        initialFocus={closeButtonRef}
                        className="relative flex h-full w-full items-center justify-center text-white outline-none"
                        onClick={(event) => {
                            if (event.target === event.currentTarget) onClose();
                        }}
                        onKeyDown={handleKeyDown}
                    >
                        <Dialog.Title className="sr-only">
                            {title} image gallery
                        </Dialog.Title>

                        <Dialog.Close
                            ref={closeButtonRef}
                            className="absolute top-6 right-6 z-10 cursor-pointer rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            aria-label="Close image gallery"
                        >
                            <X size={24} />
                        </Dialog.Close>

                        {images.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    onClick={showPreviousImage}
                                    className="absolute left-4 z-10 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-8"
                                    aria-label="Show previous image"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    type="button"
                                    onClick={showNextImage}
                                    className="absolute right-4 z-10 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-8"
                                    aria-label="Show next image"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}

                        <div className="relative flex h-full max-h-screen w-full max-w-7xl items-center justify-center p-4 md:p-12">
                            <motion.div
                                key={selectedIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="relative h-full w-full"
                            >
                                <Image
                                    src={images[selectedIndex]}
                                    alt={`${title} screenshot ${selectedIndex + 1}`}
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="100vw"
                                />
                            </motion.div>

                            <div
                                className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
                                aria-live="polite"
                                aria-atomic="true"
                            >
                                {selectedIndex + 1} / {images.length}
                            </div>
                        </div>
                    </Dialog.Popup>
                </Dialog.Viewport>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
