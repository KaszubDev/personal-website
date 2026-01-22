"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SpotlightTextProps {
    text: string;
    className?: string; // Allow passing Tailwind classes for text sizing/styling
}

export function SpotlightText({ text, className = "" }: SpotlightTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative inline-block cursor-default select-none ${className}`}
            style={{ isolation: "isolate" }}
        >
            {/* Base Text (Dim/Muted) */}
            <span className="text-gray-300 dark:text-gray-600 pointer-events-none block">
                {text}
            </span>

            {/* Spotlight Overlay (Bright/Sharper) */}
            <motion.span
                className="absolute inset-0 text-black dark:text-white pointer-events-none block"
                style={isMounted ? {
                    maskImage: `radial-gradient(120px circle at ${position.x}px ${position.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(120px circle at ${position.x}px ${position.y}px, black, transparent)`,
                } : undefined}
                animate={{
                    opacity: opacity,
                }}
                transition={{
                    opacity: { duration: 0.2 } // only animate opacity smoothly
                }}
            >
                {text}
            </motion.span>
        </div>
    );
}
