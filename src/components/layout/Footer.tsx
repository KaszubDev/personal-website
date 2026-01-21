import { Container } from "../ui/Container";

export function Footer() {
    return (
        <footer className="py-12 md:py-16 border-t border-gray-100 dark:border-white/10">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} KaszubDev. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/KaszubDev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/krzysztof-kaszubowski/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:krzysztof.kaszubowski@gmail.com"
                            className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
