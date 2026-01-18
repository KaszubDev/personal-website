import clsx from "clsx";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true, ...props }: CardProps) {
    return (
        <div
            className={clsx(
                "bg-white dark:bg-zinc-800/50 border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden",
                hoverEffect && "hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
