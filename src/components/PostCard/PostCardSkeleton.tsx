import "./PostCard.css";
import "./PostCardSkeleton.css";

export default function PostCardSkeleton() {
    return (
        <li className="post-card">
            <div className="post-card-link">
                <div className="post-card-img">
                    <div className="post-card-img__skeleton" />
                </div>
                <span className="post-card-cat">
                    <div className="post-card-cat__skeleton" />
                </span>
                <h3 className="post-card-title">
                    <div className="post-card-title__skeleton" />
                </h3>
                <span className="post-card-date">
                    <div className="post-card-date__skeleton" />
                </span>
            </div>
        </li>
    )
}