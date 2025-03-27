import PostCardSkeleton from "../PostCard/PostCardSkeleton";
import "./PostList.css";
import "./PostListSkeleton.css";

function PostListSkeleton() {
    return (
      <section className="posts">
      <ul className="post-cards grid grid-cols-2 gap-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </ul>
      </section>
    );
  }

export default PostListSkeleton;