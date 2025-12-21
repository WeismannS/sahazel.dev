import { DrizzleORM, Nextjs, TypeScript, React, TailwindCSS, CPP, Python, Bun, PostgreSQL, FastAPI, AmazonWebServices, Docker, JavaScript, Lua, ApacheKafka } from "@/app/components/SVG";

export const TechRegistery = {
    "React": React,
    "Next.js": Nextjs,
    "TypeScript": TypeScript,
    "Drizzle ORM": DrizzleORM,
    "C++": CPP,
    "Python": Python,
    "Tailwind CSS": TailwindCSS,
    "PostgreSQL": PostgreSQL,
    "Bun": Bun,
    "FastAPI": FastAPI,
    "Amazon Web Services": AmazonWebServices,
    "Docker": Docker,
    "JavaScript": JavaScript,
    "Lua": Lua,
    "Kafka": ApacheKafka,
};

export type Tech = keyof typeof TechRegistery;

export type ProjectStatus = "operational" | "maintenance" | "offline" | "archived";

export type Project = {
    slug: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: Tech[];
    status: ProjectStatus;
    githubUrl: string;
    liveUrl?: string;
    features?: string[];
    year?: string;
    image?: string;
};

export const projects: Project[] = [
    {
        slug: "cascade",
        title: "Cascade",
        description:
            "A CDC pipeline that streams Postgres WAL changes to Kafka and routes them to read replicas as executable SQL",
        longDescription:
            "Cascade is a Change Data Capture (CDC) system that leverages Postgres Logical Replication to stream database changes. It deserializes Write-Ahead Log (WAL) records into valid SQL statements and distributes them via Kafka, enabling decoupled sharding and read-replica architectures with high availability and OpenTelemetry observability.",
        technologies: ["TypeScript", "Bun", "PostgreSQL", "Kafka", "Docker"],
        status: "operational",
        githubUrl: "https://github.com/WeismannS/Cascade",
        features: [
            "Log-based Change Data Capture (CDC)",
            "Automatic WAL to SQL serialization",
            "Decoupled Kafka-based architecture",
            "Distributed tracing with OpenTelemetry",
        ],
        year: "2025",
        image: "blog-assets/Sharding-using-postgres-logical-replication/cover_image.webp",
    },
    {
        slug: "proto-agent",
        title: "Proto-agent",
        description:
            "A modular AI agent framework with secure CLI and toolkit architecture. Built for extensibility with LiteLLM and Gemini support",
        longDescription:
            "Proto-agent is a modular AI agent framework designed for building intelligent, extensible agents. It features a secure CLI interface and a flexible toolkit architecture that allows developers to easily add new capabilities. Built with LiteLLM and Gemini support for maximum flexibility.",
        technologies: ["Python"],
        status: "operational",
        githubUrl: "https://github.com/WeismannS/Proto-agent",
        features: [
            "Modular toolkit architecture",
            "Secure CLI interface",
            "LiteLLM integration",
            "Gemini API support",
            "Extensible plugin system",
        ],
        year: "2025",
    },
    {
        slug: "miku",
        title: "Miku",
        description:
            "A lightweight React-like framework built from scratch with fiber-based reconciliation and concurrent rendering",
        longDescription:
            "Miku is a lightweight React-like framework built entirely from scratch. It implements fiber-based reconciliation for efficient DOM updates and supports concurrent rendering for improved performance. A great learning resource for understanding how modern UI frameworks work under the hood.",
        technologies: ["TypeScript", "React"],
        status: "operational",
        githubUrl: "https://github.com/WeismannS/Miku",
        features: [
            "Fiber-based reconciliation",
            "Concurrent rendering support",
            "Virtual DOM implementation",
            "Hooks API (useState, useEffect)",
            "TSX support",
        ],
        year: "2024",
        image : "miku.webp"
    },
    {
        slug: "komikku",
        title: "Komikku",
        description:
            "A Type-Safe TypeScript-based interface library that provides a unified API for fetching manga/manhwa data from various sources",
        longDescription:
            "Komikku is a type-safe TypeScript library that provides a unified API for fetching manga and manhwa data from various sources. It abstracts away the complexity of dealing with multiple data providers, offering a consistent interface for developers building manga-related applications.",
        technologies: ["TypeScript"],
        status: "operational",
        githubUrl: "https://github.com/WeismannS/Komikku",
        features: [
            "Unified API across multiple sources",
            "Full TypeScript support",
            "Automatic source detection",
            "Caching support",
            "Rate limiting built-in",
        ],
        year: "2024",
    },
    {
        slug: "webserver",
        title: "WebServer",
        description:
            "A lightweight HTTP/1.1 web server built in C++98 with CGI support, epoll-based I/O, and TOML configuration",
        longDescription:
            "A high-performance HTTP/1.1 web server implemented in C++98. Features epoll-based I/O multiplexing for handling thousands of concurrent connections efficiently. Includes CGI support for dynamic content and uses TOML for clean, readable configuration files.",
        technologies: ["C++"],
        status: "operational",
        githubUrl: "https://github.com/WeismannS/WebServer",
        features: [
            "HTTP/1.1 compliant",
            "Epoll-based I/O multiplexing",
            "CGI script support",
            "TOML configuration",
            "Virtual host support",
            "Static file serving",
        ],
        year: "2024",
    },
    {
        slug: "genshin-achievement-maker",
        title: "Genshin-Achievement-Maker",
        description:
            "An npm package that generates custom Genshin Impact achievement images with customizable text and styling",
        longDescription:
            "A fun npm package that generates custom Genshin Impact style achievement images. Perfect for creating memes, celebrating milestones, or adding game-themed flair to your projects. Supports customizable text, styling options, and outputs high-quality images.",
        technologies: ["JavaScript"],
        status: "operational",
        githubUrl: "https://github.com/WeismannS/Genshin-Achievement-Maker",
        features: [
            "Custom achievement text",
            "Multiple achievement styles",
            "High-quality image output",
            "Easy npm integration",
            "CLI and programmatic API",
        ],
        year: "2023",
    },
    {
        slug: "character-ai-ts",
        title: "Character.AI-TS",
        description:
            "Unofficial TypeScript wrapper for character.ai - A fully typed API client for interacting with Character.AI's platform",
        longDescription:
            "A comprehensive TypeScript wrapper for the Character.AI platform, providing developers with a fully typed API client. This library simplifies interaction with Character.AI's services, offering type safety and excellent developer experience with autocomplete support.",
        technologies: ["TypeScript"],
        status: "archived",
        githubUrl: "https://github.com/WeismannS/Character.AI-TS",
        features: [
            "Fully typed API responses",
            "Promise-based async/await support",
            "Comprehensive error handling",
            "Easy authentication flow",
        ],
        year: "2023",
    },  
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map((project) => project.slug);
}
