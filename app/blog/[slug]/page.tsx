import { getAllPosts, getPostBySlug } from "@/lib/actions";
import Image from "next/image";

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
            <header className="mb-12">
                <Image
                    src={postMetaData.image || '/default-feature-image.jpg'}
                    alt={postMetaData.title || 'Blog Post Feature Image'}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg mb-6"
                /> 
                <span className="text-secondary-foreground/50">{postMetaData.reading_time} min read</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{postMetaData.title}</h1>
            </header>
            <Post />
        </article>
    );
}