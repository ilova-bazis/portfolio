import { getPostData, getSortedPostsData } from '@/lib/markdown';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const postData = await getPostData(id);

  return (
    <article className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-600 mb-8">
        {new Date(postData.date).toLocaleDateString()}
      </div>
      <div 
        className="prose max-w-none prose-code:before:content-none prose-code:after:content-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
      />
    </article>
  );
}