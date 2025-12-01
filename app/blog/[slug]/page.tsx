import { getAllPosts, getPostBySlug } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    const posts = getAllPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}


export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const postMetaData = getPostBySlug(slug);
    const { default: Post } = await import(`@/content/blogs/${slug}/index.mdx`)
    return (
        <article className="max-w-3xl mx-auto py-16 px-4">
            <div className="mb-4 flex flex-col gap-1">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 text-accent" />
                    Back to Home
                </Link>
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors ml-6 text-sm"
                >
                    <ArrowLeft className="w-3 h-3 text-accent" />
                    Back to Blogs
                </Link>
            </div>
            <header className="mb-12">
                <Image
                    src={postMetaData.image || '/default-feature-image.jpg'}
                    alt={postMetaData.title || 'Blog Post Feature Image'}
                    width={800}
                    height={400}
                    className="w-full max-h-90 object-cover rounded-lg mb-6"
                />
                <span className="text-accent">{postMetaData.reading_time} min read</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{postMetaData.title}</h1>
            </header>
            <div className="gh-content prose prose-invert max-w-none">
                <Post />
            </div>
        </article>
    );
}

export const dynamicParams = false