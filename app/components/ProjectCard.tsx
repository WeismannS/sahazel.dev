import Image from "next/image";
import { SVGProps } from "react";
import { DrizzleORM, Nextjs, TypeScript, React, TailwindCSS, CPP, Python, Bun, PostgreSQL, FastAPI, AmazonWebServices, Docker} from "./SVG";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Github } from "lucide-react";

interface Technology {
    name: string;
    icon: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    technologies: Tech[];
    status?: "operational" | "maintenance" | "offline";
    detailsUrl?: string;
    githubUrl?: string;
}
type Tech = keyof typeof TechRegistery

export const TechRegistery = {
    "React" : React,
    "Next.js": Nextjs,
    "TypeScript": TypeScript,
    "Drizzle ORM": DrizzleORM,
    "C++" : CPP,
    "Python" : Python,
    "Tailwind CSS": TailwindCSS,
    "PostgreSQL": PostgreSQL,
    "Bun" : Bun,
    "FastAPI": FastAPI,
    "Amazon Web Services": AmazonWebServices,
    "Docker": Docker,
}



export function ProjectCard({
    title,
    description,
    image,
    technologies,
    status = "operational",
    detailsUrl = "#",
    githubUrl = "#"
}: ProjectCardProps) {
    const statusColors = {
        operational: "text-green-500",
        maintenance: "text-yellow-500",
        offline: "text-red-500",
    };

    const statusLabels = {
        operational: "All Systems Operational",
        maintenance: "Under Maintenance",
        offline: "Offline",
    };

    return (
        <div className="rounded-xl overflow-hidden bg-background border border-dark-border/10 max-w-sm">
            {/* Image/Preview Section */}
            <div className="relative h-48 bg-linear-to-br from-purple-600/40 to-pink-500/40 overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-white/60"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-5">
                {/* Title with icons */}
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                    <div className="flex gap-2 text-muted">
                        <button className="hover:text-foreground transition-colors">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </button>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                            <Github className="w-5 h-5"/>
                        </a>
                    </div>
                </div>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>

                {/* Technologies */}
                <div className="mb-4">
                    <p className="text-xs text-muted mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <Tooltip key={index}>
                            <TooltipTrigger > <span
                                key={index}
                                className="px-2 py-1 text-xs rounded-full bg-white/5 text-muted flex items-center gap-1"
                            >
                                {TechRegistery[tech] && (() => {
                                    const Icon = TechRegistery[tech];
                                    return <span><Icon /></span>;
                                })()}
                             
                            </span>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{tech}</p>
                            </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${status === "operational" ? "bg-green-500" : status === "maintenance" ? "bg-yellow-500" : "bg-red-500"}`} />
                        <span className={`text-xs ${statusColors[status]}`}>
                            {statusLabels[status]}
                        </span>
                    </div>
                    <a
                        href={detailsUrl}
                        className="text-xs text-muted hover:text-foreground transition-colors"
                    >
                        View Details →
                    </a>
                </div>
            </div>
        </div>
    );
}
