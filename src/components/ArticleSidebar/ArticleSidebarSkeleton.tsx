import "./ArticleSidebar.css";
import "./ArticleSidebarSkeleton.css";

export default function ArticleSidebarSkeleton() {
    return (
        <>
            <aside className="sidebar__wrapper w-1/4">
                <div className="sidebar --categories mb-8">
                    <h2 className="sidebar-title simple-title mb-4">
                        <div className="sidebar-title__skeleton" />
                    </h2>
                    <nav className="sidebar-nav">
                        <ul className="sidebar-list mt-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <li className="sidebar-list-item" key={index}>
                                    <div className="sidebar-list-item__link__skeleton" />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="sidebar --toc sticky top-4">
                    <h2 className="sidebar-title simple-title mb-4">
                        <div className="sidebar-title__skeleton" />
                    </h2>
                    <nav className="sidebar-nav">
                        <ul className="sidebar-list mt-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <li 
                                    key={index}
                                    className={`sidebar-list-item ${index === 0 ? "level-1" : index === 1 ? "level-2" : "level-3"}`}
                                >
                                    <div className="sidebar-list-item__link__skeleton" />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    )
}