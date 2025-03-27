import formatDate from "@/utilities/formatDate";
import Link from "next/link";
import "./PostCard.css";

import { Post } from "@/types/post";

export default function PostCard({ post }: { post: Post }) {
    return (
        <li className="post-card" key={post.id}>
            <Link href={`/articles/${post.id}`} className="post-card-link">
                <picture className="post-card-img">
                    <img src={post.eyecatch.url} alt={post.title} />
                </picture>
                <span className="post-card-cat">{post.category.name}</span>
                <h3 className="post-card-title">{post.title}</h3>
                <span className="post-card-date">{formatDate(post.createdAt)}</span>
            </Link>
        </li>
    )
}