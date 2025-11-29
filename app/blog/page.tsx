
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HoverHighlight } from "../components/HoverHighlight";
import { getAllPosts } from "@/lib/actions";


export default function BlogPage() {
    const articles = getAllPosts();
    return (
        <div className="min-h-screen w-full relative">
            <main className="max-w-4xl mx-auto px-6 py-24">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="mb-12">
                    <p className="text-secondary-foreground/50 text-xs font-bold">All</p>
                    <h1 className="text-3xl font-bold">{articles.length} Articles 📝</h1>
                </div>

                <div className="flex flex-col gap-8">
                    {articles.map((article, index) => (
                        <a
                            key={article.title + index}
                            href={article.url}
                            className="flex gap-6 border-b border-border/50 pb-6 last:border-0 group"
                        >
                            <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-purple-600/40 to-pink-500/40">
                                {article.image ? (
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl">📝</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col justify-center">
                                <HoverHighlight type="highlight">
                                    <span className="text-xl font-medium text-foreground group-hover:underline">
                                        {article.title}
                                    </span>
                                </HoverHighlight>
                                <span className="text-sm text-muted mt-2">
                                    {article.date}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
}
