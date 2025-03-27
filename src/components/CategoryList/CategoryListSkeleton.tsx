import "./CategoryList.css";
import "./CategoryListSkeleton.css";

export default async function CategoryList() {
    return (
        <ul className="category-list">
            {Array.from({ length: 4 }).map((_, index) => (
                <li className="category-list-item" key={index}>
                    <div className="category-list-item__link">
                        <div className="category-list-item__link__skeleton" />
                    </div>
                </li>
            ))}
        </ul>
    )
}