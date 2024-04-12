import PostCart from "@/components/PostCart";
import { db } from "@/lib/db";

async function getPosts() {
  const response = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true
    },
    orderBy: {
      created_at: 'desc'
    }
  });
  return response;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
      {posts.map((post) => (
        <PostCart key={post.id} post={post} />
      ))}
    </main>
  );
}
