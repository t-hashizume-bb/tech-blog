// app/page.tsx
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { PostList } from '@/components/PostList/PostList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '記事一覧 | Web Hack（ウェブハック）',
  description: '記事一覧のページです。各記事の詳細はこちらからご確認ください。',
}

export default async function ArticlesPage() {

  return (
    <div className="inner">
      {/* <Suspense fallback={<Loading />}> */}
        <SectionTitle titleEn="All Posts" titleJa="記事一覧" />
        <PostList />
      {/* </Suspense> */}
    </div>
  );
}