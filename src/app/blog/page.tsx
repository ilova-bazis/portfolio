import Link from "next/link";
import { getSortedPostsData } from "@/lib/markdown";

export default function Blog() {
    const allPosts = getSortedPostsData();
    console.log(allPosts);
    console.log(allPosts.length )
    return (
        <main>
            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-4xl font-bold mb-8">Blog</h1>
                <div className="space-y-8">
                    {allPosts.map((post) => (
                        <article key={post.id} className="border-b pb-6">
                            <h2 className="text-2xl font-semibold mb-2">
                                <Link href={`/blog/${post.id}`} className="hover:underline">
                                    {post.title}
                                </Link>
                            </h2>
                            <div className="text-gray-600 mb-2">
                                {new Date(post.date).toLocaleDateString()}
                            </div>
                            <p className="text-gray-800">{post.excerpt}</p>
                            {post.tags && (
                                <div className="mt-2 flex gap-2 flex-wrap">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="bg-gray-100 px-2 py-1 text-sm rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}