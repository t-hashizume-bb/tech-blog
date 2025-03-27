import "./Article.css";
import "./ArticleSkeleton.css";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function ArticleSkeleton() {
    return (
        <>
            <div className="article__wrapper w-3/4">
                <div className="article">
                    <div className="article-header">
                        <h1 className="article-title">
                            <div className="article-title__skeleton" />
                        </h1>
                            <span className="article-category">
                                <div className="article-category__skeleton" />
                            </span>
                            <div className="article-date__wrapper">
                                <p className="article-date --post">
                                    <svg version="1.1" id="fi_88291" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 209.28 209.28" enableBackground="new 0 0 209.28 209.28" xmlSpace="preserve">
                                        <g>
                                            <path d="M104.641,0C46.943,0,0.002,46.94,0.002,104.637c0,57.701,46.941,104.643,104.639,104.643
                                            c57.697,0,104.637-46.943,104.637-104.643C209.278,46.94,162.338,0,104.641,0z M104.641,194.28
                                            c-49.427,0-89.639-40.214-89.639-89.643C15.002,55.211,55.214,15,104.641,15c49.426,0,89.637,40.211,89.637,89.637
                                            C194.278,154.066,154.067,194.28,104.641,194.28z"></path>
                                            <path d="M158.445,102.886h-49.174V49.134c0-4.142-3.357-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v61.252c0,4.142,3.358,7.5,7.5,7.5
                                            h56.674c4.143,0,7.5-3.358,7.5-7.5C165.945,106.244,162.587,102.886,158.445,102.886z"></path>
                                        </g>
                                    </svg>
                                    <span className="article-date__text">
                                        <div className="article-date__text__skeleton" />
                                    </span>
                                </p>
                            </div>
                        {/* <h1 className="article-title">{post.title}</h1> */}
                    </div>
                    <div className="article-toc">
                        <h2 className="article-toc-title">
                            <div className="article-toc-title__skeleton" />
                        </h2>
                        <ul className="article-toc-list">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <li className="article-toc-list__item" key={index}>
                                    <div className="article-toc-list-item__link__skeleton" />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="article-content">
                        <h2>
                            <div className="article-content__title__skeleton" />
                        </h2>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <p className="article-content__text" key={index}>
                                <div className="article-content__text__skeleton" />
                            </p>
                        ))}
                        <h2>
                            <div className="article-content__title__skeleton" />
                        </h2>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <p className="article-content__text" key={index}>
                                <div className="article-content__text__skeleton" />
                            </p>
                        ))}
                    </div>
                </div>
                <div className="article-footer mt-12 text-center">
                    <Button asChild>
                        <Link href="/articles">記事一覧へ戻る</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}