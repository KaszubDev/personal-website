"use client";

import { Button as BaseButton } from "@base-ui/react";
import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
        const variants = {
            primary: "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-sm",
            secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-100 dark:hover:bg-zinc-700",
            ghost: "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10",
            outline: "bg-transparent border border-gray-200 text-gray-900 hover:bg-gray-50 dark:border-white/10 dark:text-gray-100 dark:hover:bg-white/5",
        };

        const sizes = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-5 py-2.5 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <BaseButton
                ref={ref}
                className={clsx(
                    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 cursor-pointer",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </BaseButton>
        );
    }
);

Button.displayName = "Button";
