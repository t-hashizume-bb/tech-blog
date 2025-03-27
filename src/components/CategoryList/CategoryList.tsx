import { getBlogCategories } from "@/utilities/getBlogCategories";
import Link from "next/link";

import "./CategoryList.css";

export default async function CategoryList() {
    const categories = await getBlogCategories();

    if (categories.length === 0) {
        return;
    }

    return (
        <ul className="category-list">
            {categories.map((category) => (
                <li className="category-list-item" key={category.id}>
                    <Link href={`/categories/${category.id}`} className="category-list-item__link">
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}