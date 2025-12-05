import Link from 'next/link';

interface NewsItem {
    id: string;
    date: string;
    category: string;
    title: string;
}

const defaultNewsItems: NewsItem[] = [
    {
        id: '1',
        date: '2025.01.15',
        category: 'お知らせ',
        title: 'ホームページを公開しました',
    },
    {
        id: '2',
        date: '2025.01.10',
        category: '採用',
        title: '2025年度の採用を開始しました',
    },
];

interface NewsListProps {
    items?: NewsItem[];
}

export const NewsList = ({ items }: NewsListProps) => {
    const newsItems = items || defaultNewsItems;

    return (
        <div className="divide-y divide-gray-200">
            {newsItems.map((item) => (
                <Link
                    key={item.id}
                    href={`/news/${item.id}`}
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-6 group"
                >
                    <time className="text-sm text-[#888] w-24 flex-shrink-0">
                        {item.date}
                    </time>
                    <span className="text-xs bg-[#111] text-white px-3 py-1 rounded w-fit">
                        {item.category}
                    </span>
                    <h3 className="text-[#333] group-hover:text-[#10B981] transition-colors flex-1">
                        {item.title}
                    </h3>
                </Link>
            ))}
        </div>
    );
};
