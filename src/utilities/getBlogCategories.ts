import { client } from '@/lib/microcms';

type Category = {
    id: string;
    name: string;
}

async function getBlogCategories(): Promise<Category[]> {
    const data = await client.get({
      endpoint: `categories`, // 'blog'はmicroCMSのエンドポイント名
    });
    return data.contents;
}
  
async function getBlogCategory(id: string): Promise<Category> {
    const data = await client.get({
        endpoint: `categories/${id}`, // 'blog'はmicroCMSのエンドポイント名
    });
    return data;
}
    
export { getBlogCategories, getBlogCategory };