import Link from "next/link";
import { getSortedPostsData } from "@/lib/markdown";

export default function Blog() {
    const allPosts = getSortedPostsData();

    return (
        <div className="py-16 md:py-20">
            {/* Top accent bar */}
            <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent mb-14" />

            <div className="max-w-4xl mx-auto px-4">
                <div className="mb-12">
                    <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-3">
                        Writing
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-gray-900 mb-5">
                        BLOG
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-0.5 bg-orange-500" />
                        <span className="text-gray-500 text-sm">◼</span>
                    </div>
                </div>

                <div className="space-y-0">
                    {allPosts.map((post) => (
                        <article key={post.id} className="border-t border-gray-300 py-8 group">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-200">
                                    <Link href={`/blog/${post.id}`}>
                                        {post.title} <span className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
                                    </Link>
                                </h2>
                                <span className="text-xs font-bold tracking-widest uppercase text-gray-400 whitespace-nowrap">
                                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                </span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed mb-3">{post.excerpt}</p>
                            {post.tags && post.tags.length > 0 && (
                                <div className="flex gap-2 flex-wrap">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="bg-gray-900 text-gray-200 px-2 py-0.5 text-xs font-bold tracking-wide">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))}
                    {allPosts.length === 0 && (
                        <p className="text-gray-500 text-sm py-8 border-t border-gray-300">No posts yet.</p>
                    )}
                    <div className="border-t border-gray-300" />
                </div>
            </div>
        </div>
    );
}
