import { Post } from "@/types/post";
import formatDate from "@/utilities/formatDate";
import "./Article.css";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import { TableOfContents } from "@/types/tableOfContents";

export default function Article({post, titles}: {post: Post, titles: TableOfContents[]}) {
    return (
        <>
            <div className="article__wrapper w-3/4">
                <div className="article">
                    <div className="article-header">
                        <h1 className="article-title">{post.title}</h1>
                            <span className="article-category">{post.category.name}</span>
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
                                    <span className="article-date__text">{formatDate(post.publishedAt)}</span>
                                </p>
                                {formatDate(post.updatedAt) !== formatDate(post.publishedAt) && (
                                    <p className="article-date --update">
                                        <svg version="1.1" id="fi_103937" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 174.775 174.775" enableBackground="new 0 0 174.775 174.775" xmlSpace="preserve">
                                            <g>
                                            <path d="M168.281,99.947c-3.753-0.929-7.547,1.362-8.475,5.116c-8.109,32.803-37.407,55.712-71.247,55.712
                                                c-40.466,0-73.387-32.921-73.387-73.388S48.093,14,88.559,14c20.549,0,39.674,8.468,53.328,22.933l-8.374,5.792
                                                c-3.467,2.398-3.099,7.634,0.67,9.522l30.665,15.366c3.917,1.963,8.457-1.177,8.003-5.535l-3.556-34.115
                                                c-0.437-4.193-5.206-6.385-8.673-3.987l-7.111,4.918C137.173,10.707,113.77,0,88.559,0C40.374,0,1.172,39.202,1.172,87.388
                                                s39.202,87.388,87.387,87.388c40.294,0,75.181-27.285,84.838-66.353C174.325,104.669,172.034,100.875,168.281,99.947z"></path>
                                            <path d="M82.882,55.307c-3.866,0-7,3.134-7,7v33.081c0,3.866,3.134,7,7,7h50.873c3.866,0,7-3.134,7-7s-3.134-7-7-7H89.882V62.307
                                                C89.882,58.44,86.748,55.307,82.882,55.307z"></path>
                                            </g>
                                        </svg>
                                        <span className="article-date__text">{formatDate(post.updatedAt)}</span>
                                    </p>
                                )}
                            </div>
                        {/* <h1 className="article-title">{post.title}</h1> */}
                    </div>
                    <div className="article-toc">
                        <h2 className="article-toc-title">目次</h2>
                        <ul className="article-toc-list">
                            {titles.map((title) => (
                                <li className="article-toc-list__item" key={title.id}>
                                    <Link href={`/articles/${post.id}/${title.id}`} className="article-toc-list-item__link">{title.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div 
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        className="article-content prose max-w-none"
                    />
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