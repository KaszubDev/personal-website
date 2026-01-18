export interface Project {
    id: string;
    title: string;
    description: string;
    role: string;
    tech: string[];
    link?: string;
    github?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Lumina Dashboard",
        description:
            "A dark-mode analytics dashboard designed for high-frequency traders. Features real-time data visualization and a customizable widget system.",
        role: "Frontend Engineer",
        tech: ["Next.js", "TypeScript", "D3.js", "WebSockets"],
        link: "https://example.com/lumina",
    },
    {
        id: "2",
        title: "Aura Commerce",
        description:
            "A headless e-commerce store with 99/100 Lighthouse performance score. Built with a focus on SEO and minimal load times.",
        role: "Fullstack Developer",
        tech: ["Next.js", "Shopify Storefront API", "Tailwind CSS"],
        github: "https://github.com/example/aura",
    },
    {
        id: "3",
        title: "Mono UI System",
        description:
            "An open-source React component library inspired by Swiss minimalist design. Used by over 2,000 developers.",
        role: "Creator & Maintainer",
        tech: ["React", "Storybook", "Emotion"],
        link: "https://monoui.design",
    },
];
