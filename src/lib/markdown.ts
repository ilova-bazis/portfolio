import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrism from 'rehype-prism-plus';

const postDirectory = path.join(process.cwd(), "posts");

interface PostData {
    id: string;           // From filename (e.g., "queue-tutorial")
    title: string;        // From frontmatter
    date: string;         // From frontmatter
    excerpt: string;      // From frontmatter
    tags?: string[];      // Optional array from frontmatter
    contentHtml?: string; // Generated from Markdown content
}

export function getSortedPostsData(): PostData[] {

    const filenames = fs.readdirSync(postDirectory).filter((fname) => fname.includes(".md"));
    const posts = filenames.map((filename) => {
        const id = filename.replace(/\.md$/, "");
        const fullPath = path.join(postDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            excerpt: matterResult.data.excerpt,
            tags: matterResult.data.tags || [],
        };
    });
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); 
}

export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = await remark()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt,
        tags: matterResult.data.tags || [],
        contentHtml: contentHtml,
    };
}
