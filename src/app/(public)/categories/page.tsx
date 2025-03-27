// app/page.tsx
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { PostList } from '@/components/PostList/PostList';
import { Metadata } from 'next';
import { Suspense } from 'react';
import PostListSkeleton from '@/components/PostList/PostListSkeleton';
import CategoryList from '@/components/CategoryList/CategoryList';
import CategoryListSkeleton from '@/components/CategoryList/CategoryListSkeleton';

export const metadata: Metadata = {
  title: '全てのカテゴリー | Web Hack（ウェブハック）',
  description: '全てのカテゴリ一の記事一覧ページです。各カテゴリーごとの記事はこちらからご確認ください。',
}

export default async function CategoriesPage() {

  return (
    <>
      <section id="all-categories">
        <div className="inner">
          <SectionTitle titleEn="All Categories" titleJa="全てのカテゴリー" />
          <Suspense fallback={<PostListSkeleton />}>
            <PostList />
          </Suspense>
        </div>
      </section>
      <section id="other-categories">
        <div className="inner">
          <SectionTitle titleEn="Other Categories" titleJa="その他のカテゴリー" />
          <Suspense fallback={<CategoryListSkeleton />}>
            <CategoryList />
          </Suspense>
        </div>
      </section>
    </>
  );

}