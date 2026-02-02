import {
    Zap,
    Code2,
    Palette,
    Server,
    Database,
    PenTool,
    Smartphone,
    GitBranch,
    TerminalSquare,
    Cpu,
    Bot,
    FileJson,
    LayoutTemplate,
    Rocket,
    Box,
    Network,
    Share2,
    Sparkles,
    Atom,
    FileCode2,
    LucideIcon
} from "lucide-react";

export type Skill = {
    name: string;
    icon: LucideIcon;
    category: string;
};

export type SkillGroup = {
    title: string;
    items: Skill[];
};

export const skillGroups: SkillGroup[] = [
    {
        title: "Frontend & Languages",
        items: [
            { name: "React", icon: Atom, category: "Frontend" },
            { name: "Next.js", icon: Zap, category: "Framework" },
            { name: "TypeScript", icon: FileCode2, category: "Language" },
            { name: "JavaScript (ES6+)", icon: FileJson, category: "Language" },
            { name: "Tailwind CSS", icon: Palette, category: "Styling" },
            { name: "Sass", icon: Code2, category: "Styling" },
        ]
    },
    {
        title: "Backend & CMS",
        items: [
            { name: "Node.js", icon: Cpu, category: "Backend" },
            { name: "PHP", icon: Server, category: "Backend" },
            { name: "WordPress", icon: LayoutTemplate, category: "CMS" },
            { name: "Strapi", icon: Rocket, category: "CMS" },
            { name: "Contentful", icon: Box, category: "CMS" },
            { name: "REST API", icon: Network, category: "API" },
            { name: "GraphQL", icon: Share2, category: "API" },
            { name: "SQL", icon: Database, category: "Database" },
        ]
    },
    {
        title: "Tools & Design",
        items: [
            { name: "Git", icon: GitBranch, category: "Version Control" },
            { name: "VS Code", icon: TerminalSquare, category: "Editor" },
            { name: "Figma", icon: PenTool, category: "Design" },
            { name: "Responsive", icon: Smartphone, category: "Methodology" },
            { name: "Copilot", icon: Bot, category: "AI Assistant" },
            { name: "Antigravity", icon: Sparkles, category: "AI Assistant" },
        ]
    }
];
