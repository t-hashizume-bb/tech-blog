import { Suspense } from "react";
import { PostList } from "@/components/PostList/PostList";
import PostListSkeleton from "@/components/PostList/PostListSkeleton";
import CategoryList from "@/components/CategoryList/CategoryList";
import CategoryListSkeleton from "@/components/CategoryList/CategoryListSkeleton";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

import "./top.css";

export const metadata = {
  title: "Web Hack（ウェブハック） | Webで集客の可能性を広げていく",
  description: "Webアプリの開発や、Webマーケティングに関する情報を発信するメディアサイトです。皆様のサービスをより多くの人に知ってもらうためのヒントをお届けします。店舗集客やサービスのオンライン化にお役立てください。",
};



export default function Home() {

  return (
    <>
      <section id="new-posts">
        <div className="inner">

          <SectionTitle titleEn="New Posts" titleJa="新着記事" />
          <Suspense fallback={<PostListSkeleton />}>
            <PostList />
          </Suspense>
        </div>
      </section>

      <section id="categories">
        <div className="inner">
          <SectionTitle titleEn="Categories" titleJa="カテゴリー" />
          <Suspense fallback={<CategoryListSkeleton />}>
            <CategoryList />
          </Suspense>
        </div>
      </section>
    </>
  );
}
