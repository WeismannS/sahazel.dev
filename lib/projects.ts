import { TechRegistery } from "@/app/components/ProjectCard";

type Tech = keyof typeof TechRegistery;

export const projects: {
    title: string;
    description: string;
    technologies: Tech[];
    status: "operational" | "maintenance" | "offline" | "archived";
    githubUrl: string;
}[] = [
        {
            title: "Character.AI-TS",
            description:
                "Unofficial TypeScript wrapper for character.ai - A fully typed API client for interacting with Character.AI's platform",
            technologies: ["TypeScript"],
            status: "archived",
            githubUrl: "https://github.com/WeismannS/Character.AI-TS",
        },
        {
            title: "Proto-agent",
            description:
                "A modular AI agent framework with secure CLI and toolkit architecture. Built for extensibility with LiteLLM and Gemini support",
            technologies: ["Python"],
            status: "operational",
            githubUrl: "https://github.com/WeismannS/Proto-agent",
        },
        {
            title: "Miku",
            description:
                "A lightweight React-like framework built from scratch with fiber-based reconciliation and concurrent rendering",
            technologies: ["TypeScript", "React"],
            status: "operational",
            githubUrl: "https://github.com/WeismannS/Miku",
        },
        {
            title: "Komikku",
            description:
                "A Type-Safe TypeScript-based interface library that provides a unified API for fetching manga/manhwa data from various sources",
            technologies: ["TypeScript"],
            status: "operational",
            githubUrl: "https://github.com/WeismannS/Komikku",
        },
        {
            title: "WebServer",
            description:
                "A lightweight HTTP/1.1 web server built in C++98 with CGI support, epoll-based I/O, and TOML configuration",
            technologies: ["C++"],
            status: "operational",
            githubUrl: "https://github.com/WeismannS/WebServer",
        },
        {
            title: "Genshin-Achievement-Maker",
            description:
                "An npm package that generates custom Genshin Impact achievement images with customizable text and styling",
            technologies: ["JavaScript"],
            status: "operational",
            githubUrl: "https://github.com/WeismannS/Genshin-Achievement-Maker",
        },
    ];
