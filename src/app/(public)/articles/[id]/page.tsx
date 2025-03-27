// app/blog/[id]/page.tsx
import { getBlogDetail } from '@/utilities/getBlogPosts';
import generateStaticParams from '@/utilities/generateStaticParams';
import Article from '@/components/Article/Article';
import ArticleSidebar from '@/components/ArticleSidebar/ArticleSidebar';
import getTitles from '@/utilities/getTitles';
import { getBlogCategories } from '@/utilities/getBlogCategories';
import ArticleSkeleton from '@/components/Article/ArticleSkeleton';
import ArticleSidebarSkeleton from '@/components/ArticleSidebar/ArticleSidebarSkeleton';
import { Suspense } from 'react';
import "./ArticlePage.css";
import { generateDynamicPostMetadata } from '@/utilities/generateDynamicMetadata';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const post = await getBlogDetail(id);
    return generateDynamicPostMetadata({ postData: post });
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getBlogDetail(id);
    const titles = await getTitles(post.content);
    const categories = await getBlogCategories();

    return (
        <div className="article-container inner flex gap-8 items-start">
            <Suspense fallback={<ArticleSkeleton />}>
                <Article post={post} titles={titles} />
            </Suspense>
            <Suspense fallback={<ArticleSidebarSkeleton />}>
                <ArticleSidebar titles={titles} categories={categories} />
            </Suspense>
        </div>
    );
}

generateStaticParams('blogs');

