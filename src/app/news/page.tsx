'use client';

import { SubpageHero } from '@/components/SubpageHero';
import { NewsList } from '@/components/NewsList';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// Mock Data
const ALL_NEWS = [
    { id: '1', date: '2025.01.15', category: 'お知らせ', title: 'ホームページを公開しました' },
    { id: '2', date: '2025.01.10', category: '採用', title: '2025年度の採用を開始しました' },
    { id: '3', date: '2025.01.05', category: 'お知らせ', title: '新年のご挨拶' },
];

const CATEGORIES = ['ALL', 'お知らせ', '採用', 'プレスリリース'];

export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState('ALL');

    const filteredNews = activeCategory === 'ALL'
        ? ALL_NEWS
        : ALL_NEWS.filter(item => item.category === activeCategory);

    return (
        <main>
            <SubpageHero
                titleEn="NEWS"
                titleJa="お知らせ"
                backgroundImage="/images/news-keyboard.png"
            />

            <div className="container mx-auto px-6 py-24">
                <div className="max-w-4xl mx-auto">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-4 mb-16 justify-center">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-6 py-3 rounded-full text-base font-bold tracking-wider transition-all duration-300 border",
                                    activeCategory === cat
                                        ? "bg-[#10B981] text-white border-[#10B981]"
                                        : "bg-white text-[#059669] border-[#10B981] hover:border-[#10B981]"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* News List */}
                    <div className="min-h-[400px]">
                        {filteredNews.length > 0 ? (
                            <NewsList items={filteredNews} />
                        ) : (
                            <div className="text-center py-16 text-[#059669]/60">
                                該当するニュースがありません
                            </div>
                        )}
                    </div>

                    {/* Pagination (Static for now) */}
                    {filteredNews.length > 0 && (
                        <div className="mt-16 flex justify-center gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#10B981] text-white font-bold">1</button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
