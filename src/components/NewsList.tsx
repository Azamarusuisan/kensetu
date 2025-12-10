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
        <div className="divide-y divide-black/10 border-t border-b border-black/10">
            {newsItems.map((item) => (
                <Link key={item.id} href={`/news/${item.id}`} className="group block">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 py-4 md:py-8 border-b border-gray-100 hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-xl">
                        <div className="flex items-center gap-4 shrink-0">
                            <span className="text-gray-500 font-bold text-base font-mono">{item.date}</span>
                            <span className="px-3 py-1 bg-[#F0FDF4] text-[#10B981] text-sm font-bold rounded border border-[#10B981]/20">
                                {item.category}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#064E3B] group-hover:text-[#10B981] transition-colors line-clamp-1">
                            {item.title}
                        </h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};
