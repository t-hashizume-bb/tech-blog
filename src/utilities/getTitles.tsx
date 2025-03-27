import type { TableOfContents } from "@/types/tableOfContents";
import { parse } from 'node-html-parser';

export const getTitles = async (content: string): Promise<TableOfContents[]> => {
    const root = parse(content);
    const headings = root.querySelectorAll('h1, h2, h3');
    return headings.map((element) => ({
        id: element.getAttribute('id') || element.text.toLowerCase().replace(/\s+/g, '-'),
        text: element.text,
        level: parseInt(element.tagName[1])
    }));
};

export default getTitles;