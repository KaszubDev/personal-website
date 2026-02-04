export interface Project {
    id: string;
    title: string;
    description: string;
    role: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
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
        github: "https://github.com/example/lumina",
        image: "/images/projects/lumina-dashboard.png",
    },
    {
        id: "2",
        title: "Aura Commerce",
        description:
            "A headless e-commerce store with 99/100 Lighthouse performance score. Built with a focus on SEO and minimal load times.",
        role: "Fullstack Developer",
        tech: ["Next.js", "Shopify Storefront API", "Tailwind CSS"],
        github: "https://github.com/example/aura",
        image: "/images/projects/aura-commerce.png",
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
    {
        id: "4",
        title: "Neon Banking",
        description:
            "A neobank mobile app interface with biometric authentication and spending categorization using ML. iOS specific fluid animations.",
        role: "iOS Engineer",
        tech: ["SwiftUI", "CoreML", "Combine"],
        link: "https://example.com/neon",
    },
    {
        id: "5",
        title: "Chronos AI",
        description:
            "Time management platform that uses predictive AI to schedule meetings and deep work blocks automatically.",
        role: "Lead Developer",
        tech: ["Python", "FastAPI", "React", "PostgreSQL"],
        github: "https://github.com/example/chronos",
    },
    {
        id: "6",
        title: "Vertex Architecture",
        description:
            "Interactive 3D portfolio for an award-winning architecture firm. Features WebGL-based model viewers and smooth page transitions.",
        role: "Creative Developer",
        tech: ["Three.js", "WebGL", "GSAP"],
        link: "https://example.com/vertex",
    },
    {
        id: "7",
        title: "Echo Audio",
        description:
            "High-fidelity spatial audio streaming service for audiophiles. Lossless compression and custom DSP algorithms.",
        role: "Backend Engineer",
        tech: ["Rust", "WASM", "Node.js"],
        link: "https://example.com/echo",
    },
];
