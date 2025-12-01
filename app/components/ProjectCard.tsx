import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { TechRegistery, Tech, ProjectStatus } from "@/lib/projects";

interface ProjectCardProps {
    slug: string;
    title: string;
    description: string;
    image?: string;
    technologies: Tech[];
    status?: ProjectStatus;
    detailsUrl?: string;
    githubUrl?: string;
}

export function ProjectCard({
    slug,
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
        archived: "text-gray-500",
    };

    const statusLabels = {
        operational: "All Systems Operational",
        maintenance: "Under Maintenance",
        offline: "Offline",
        archived: "Archived",
    };

    return (
        <div className="rounded-xl overflow-hidden bg-background border border-dark-border/10 max-w-sm">
            {/* Image/Preview Section */}
            <div className="relative h-48 bg-linear-to-br from-purple-600/40 to-pink-500/40 overflow-hidden">
                {image ? (
                    <Image
                        src={`/${image}`}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-white/60"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div> */}
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-5">
                {/* Title with icons */}
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                    <div className="flex gap-2 text-muted">
                        {detailsUrl && detailsUrl !== "#" && (
                            <a href={detailsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">{description}</p>

                {/* Technologies */}
                <div className="mb-4">
                    <p className="text-xs text-muted mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <Tooltip key={index}>
                                <TooltipTrigger > <span
                                    key={index}
                                    className="px-2 py-1 text-xs rounded-full bg-muted/10 text-muted flex items-center gap-1"
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
                        <span className={`w-2 h-2 rounded-full animate-pulse animation- ${status === "operational" ? "bg-green-500" : status === "maintenance" ? "bg-orange-500" : status === "archived" ? "bg-yellow-500" : "bg-red-500"}`} />
                        <span className={`text-xs ${statusColors[status]}`}>
                            {statusLabels[status]}
                        </span>
                    </div>
                    <Link
                        href={`/projects/${slug}`}
                        className="text-xs text-muted hover:text-foreground transition-colors"
                    >
                        More Details →
                    </Link>
                </div>
            </div>
        </div>
    );
}
