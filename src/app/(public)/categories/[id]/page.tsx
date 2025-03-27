// app/page.tsx
import { getBlogCategoryPosts } from '@/utilities/getBlogPosts';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { Metadata } from 'next';
import { PostCategoriesList } from '@/components/PostList/PostList';
import { getBlogCategory } from '@/utilities/getBlogCategories';
import CategoryList from '@/components/CategoryList/CategoryList';
import { Suspense } from 'react';
import PostListSkeleton from '@/components/PostList/PostListSkeleton';
import CategoryListSkeleton from '@/components/CategoryList/CategoryListSkeleton';
import { generateDynamicCategoryMetadata } from '@/utilities/generateDynamicMetadata';
import "./categoryPage.css";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const category = await getBlogCategory(id);
    return generateDynamicCategoryMetadata({ categoryName: category.name });
}

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const posts = await getBlogCategoryPosts(id);
    const category = await getBlogCategory(id);

    return (
        <>
            <section id="category">
                <div className="inner">
                    <SectionTitle titleEn={`Category`} titleJa={`カテゴリー：${category.name}`} />
                    <Suspense fallback={<PostListSkeleton />}>
                        <PostCategoriesList posts={posts} />
                    </Suspense>
                </div>
            </section>

            <section id="other-categories">
                <div className="inner">
                    <SectionTitle titleEn={`Other Categories`} titleJa={`その他のカテゴリー`} />
                    <Suspense fallback={<CategoryListSkeleton />}>
                        <CategoryList />
                    </Suspense>
                </div>
            </section>
        </>
    );
}