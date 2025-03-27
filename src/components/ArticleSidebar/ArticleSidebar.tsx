import "./ArticleSidebar.css";
import Link from "next/link";

import type { TableOfContents } from "@/types/tableOfContents";
import { Category } from "@/types/category";
export default function ArticleSidebar({titles, categories}: {titles: TableOfContents[], categories: Category[]}) {
    return (
        <>
            <aside className="sidebar__wrapper w-1/4">
                <div className="sidebar --categories mb-8">
                    <h2 className="sidebar-title simple-title mb-4">カテゴリー</h2>
                    <nav className="sidebar-nav">
                        <ul className="sidebar-list mt-4">
                            <li className="sidebar-list-item">
                                <Link className="sidebar-list-item__link" href="/categories">全てのカテゴリー</Link>
                            </li>
                            {categories.map((category) => (
                                <li className="sidebar-list-item" key={category.id}>
                                    <Link className="sidebar-list-item__link" href={`/categories/${category.id}`}>{category.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="sidebar --toc sticky top-4">
                    <h2 className="sidebar-title simple-title mb-4">目次</h2>
                    <nav className="sidebar-nav">
                        <ul className="sidebar-list mt-4">
                            {titles.map((title) => (
                                <li 
                                    key={title.id}
                                    className={`sidebar-list-item ${title.level === 1 ? "level-1" : title.level === 2 ? "level-2" : "level-3"}`}
                                >
                                    <Link className="sidebar-list-item__link" href={`#${title.id}`}>{title.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    )
}