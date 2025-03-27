import type { Post } from "@/types/post";

export async function generateDynamicPostMetadata({ postData }: { postData: Post }) {
    // params.idを使って必要なデータを取得する例
    const post = {
      title: `${postData.title} | Web Hack（ウェブハック）`,
      description: `${postData.description}`
    };
  
    return {
      title: post.title,
      description: post.description,
    };
}

export async function generateDynamicCategoryMetadata({ categoryName }: { categoryName: string }) {
    const post = {
      title: `${categoryName}のカテゴリー | Web Hack（ウェブハック）`,
      description: `${categoryName}のカテゴリーに属する投稿一覧です。他のカテゴリーを見るには、その他のカテゴリーから該当のカテゴリーを選択してください。`
    };

    return {
        title: post.title,
        description: post.description,
    };
}
