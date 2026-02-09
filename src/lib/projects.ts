import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Project {
    slug: string;
    order: number;
    title: string;
    description: string;
    role: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
    gallery?: string[];
    featured?: boolean;
    content: string; // The markdown body
}

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export function getProject(slug: string): Project | null {
    try {
        const fullPath = path.join(projectsDirectory, `${slug}.md`);

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            ...data,
        } as Project;
    } catch (error) {
        console.error(`Error reading project ${slug}:`, error);
        return null;
    }
}

export function getAllProjects(): Project[] {
    try {
        if (!fs.existsSync(projectsDirectory)) {
            return [];
        }

        const fileNames = fs.readdirSync(projectsDirectory);
        const projects = fileNames
            .filter((fileName) => fileName.endsWith('.md'))
            .map((fileName) => {
                const slug = fileName.replace(/\.md$/, '');
                return getProject(slug);
            })
            .filter((project): project is Project => project !== null)
            .sort((a, b) => (a.order || 0) - (b.order || 0));

        return projects;
    } catch (error) {
        console.error('Error fetching all projects:', error);
        return [];
    }
}
