import { getProjectBySlug, getAllProjectSlugs, TechRegistery } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const statusColors = {
        operational: "text-green-500 bg-green-500/10",
        maintenance: "text-yellow-500 bg-yellow-500/10",
        offline: "text-red-500 bg-red-500/10",
        archived: "text-gray-500 bg-gray-500/10",
    };

    const statusLabels = {
        operational: "Operational",
        maintenance: "Maintenance",
        offline: "Offline",
        archived: "Archived",
    };

    return (
        <div className="min-h-screen w-full relative">
            <main className="max-w-4xl mx-auto px-6 py-24">
                <div className="mb-4 flex flex-col gap-1">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 text-accent" />
                        Back to Home
                    </Link>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors ml-6 text-sm"
                    >
                        <ArrowLeft className="w-3 h-3 text-accent" />
                        Back to Projects
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <span
                            className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[project.status]}`}
                        >
                            {statusLabels[project.status]}
                        </span>
                        {project.year && (
                            <span className="flex items-center gap-1 text-muted text-sm">
                                <Calendar className="w-4 h-4" />
                                {project.year}
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                        {project.title}
                    </h1>

                    <p className="text-lg text-muted leading-relaxed">
                        {project.longDescription || project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-secondary rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            <Github className="w-5 h-5" />
                            View on GitHub
                        </a>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg font-medium hover:bg-muted/10 transition-colors"
                            >
                                <ExternalLink className="w-5 h-5" />
                                Live Demo
                            </a>
                        )}
                    </div>
                </header>

                {/* Technologies */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold mb-4">Technologies</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, index) => {
                            const Icon = TechRegistery[tech];
                            return (
                                <Tooltip key={index}>
                                    <TooltipTrigger>
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/10 border border-border">
                                            {Icon && <Icon />}
                                            <span className="text-sm font-medium">{tech}</span>
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{tech}</p>
                                    </TooltipContent>
                                </Tooltip>
                            );
                        })}
                    </div>
                </section>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/5 border border-border"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <span className="text-muted">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Footer CTA */}
                <section className="mt-16 p-8 rounded-xl bg-linear-to-br from-purple-600/10 to-pink-500/10 border border-border text-center">
                    <h3 className="text-2xl font-bold mb-2">Interested in this project?</h3>
                    <p className="text-muted mb-6">
                        Check out the source code or reach out for any questions!
                    </p>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-secondary rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                        <Github className="w-5 h-5" />
                        View Repository
                    </a>
                </section>
            </main>
        </div>
    );
}

export const dynamicParams = false;
