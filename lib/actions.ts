import matter from "gray-matter";
import path from "path";
import { formatDate } from "./utils";
import fs from "fs";

export function getAllPosts() {
    const blogDir = path.join(process.cwd(), "content", "blogs");
    const dirs = fs.readdirSync(blogDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    return dirs
        .map(dir => {
            const filePath = path.join(blogDir, dir, "index.mdx");
            const content = fs.readFileSync(filePath, 'utf8');
            const { data } = matter(content);

            // Handle image path - strip leading slash if present
            const imageName = data.image?.replace(/^\//, '');

            return {
                slug: dir,
                title: data.title,
                date: new Date(data.date),
                image: imageName ? `/blog-assets/${dir}/${imageName}` : null,
                url: `/blog/${dir}`,
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
    const blogDir = path.join(process.cwd(), "content", "blogs", slug);
    const filePath = path.join(blogDir, "index.mdx");
    const content = fs.readFileSync(filePath, 'utf8');
    const { data, content: mdxContent } = matter(content); // extracts frontmatter and content
    const imageName = data.image?.replace(/^\//, '');

    return {
        slug,
        title: data.title,
        date: new Date(data.date),
        image: imageName ? `/blog-assets/${slug}/${imageName}` : null,
        reading_time: content.split(' ').length < 200 ? 1 : Math.ceil(content.split(' ').length / 200),
    };
}