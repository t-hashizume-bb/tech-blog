import { client } from '@/lib/microcms';

async function generateStaticParams(endpoint: string) {
    const contentIds = await client.getAllContentIds({ endpoint: endpoint });
  
    return contentIds.map((contentId) => ({
      id: contentId, // 各記事のIDをパラメータとして返す
    }));
}

export default generateStaticParams;
