import PostCard from "../PostCard/PostCard";
import "./PostList.css";
import type { Post } from "@/types/post";
import { getBlogPosts } from "@/utilities/getBlogPosts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// export default async function PostList() {
//   const posts = await fetchGetPostList();

//   return (
//     <section className="posts">
//       <ul className="post-cards grid grid-cols-2 gap-12">
//         {posts.map((post: Post) => (
//           <PostCard key={post.id} post={post} />
//         ))}
//       </ul>
//     </section>
//   );
// }

function PostListView({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <div>
        <h2>表示できる記事がありません。</h2>
        <Button asChild className="mt-4">
          <Link href="/categories">カテゴリ一覧へ戻る</Link>
        </Button>
      </div>
    );
  }

  return (
    <section className="posts">
      <ul className="post-cards grid grid-cols-2 gap-12">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}

async function PostList() {
  const posts = await getBlogPosts('blogs');

  return (
    <>
      <PostListView posts={posts} />
    </>
  );
}

async function PostCategoriesList({ posts }: { posts: Post[] }) {
  return (
    <>
      <PostListView posts={posts} />
    </>
  );
}

export { PostList, PostCategoriesList };