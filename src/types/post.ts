export type Post = {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    description: string;
    eyecatch: {
        url: string;
    };
    category: {
        name: string;
    };
}; 