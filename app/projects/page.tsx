import { ProjectCard } from "../components/ProjectCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen w-full relative">
            <main className="max-w-6xl mx-auto px-6 py-24">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 text-accent" />
                    Back to Home
                </Link>

                <div className="mb-12">
                    <p className="text-secondary-foreground/50 text-xs font-bold">Featured</p>
                    <h1 className="text-3xl font-bold">
                        {projects.length} Notable Projects 📁
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            slug={project.slug}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            status={project.status}
                            githubUrl={project.githubUrl}
                            image={project.image}
                        />
                    ))}
                </div>

                <footer className="mt-32 mb-12 text-center text-sm text-muted">
                    © {new Date().getFullYear()} Sahazel. All rights reserved.
                </footer>
            </main>
        </div>
    );
}
