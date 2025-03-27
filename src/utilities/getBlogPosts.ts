import { client } from '@/lib/microcms';

import type { Post } from '@/types/post';


async function getBlogPosts(endpoint: string): Promise<Post[]> {
    const data = await client.get({
      endpoint: endpoint, // 'blog'はmicroCMSのエンドポイント名
      queries: {
        fields: 'id,title,slug,publishedAt,updatedAt,category,eyecatch', // idとtitleを取得
      },
    });
    return data.contents;
}

async function getBlogCategoryPosts(id: string): Promise<Post[]> {
    const data = await client.get({
      endpoint: 'blogs', // 'blog'はmicroCMSのエンドポイント名
      queries: {
        filters: `category[equals]${id}`,
        fields: 'id,title,slug,publishedAt,updatedAt,category,eyecatch', // idとtitleを取得
      },
    });
    return data.contents;
}

async function getBlogDetail(id: string): Promise<Post> {
    const data = await client.get({
      endpoint: `blogs/${id}`, // 'blog'はmicroCMSのエンドポイント名
    });
    
    return data;
}





export { getBlogPosts, getBlogDetail, getBlogCategoryPosts };