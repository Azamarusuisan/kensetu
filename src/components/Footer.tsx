'use client';

import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/metadata';

const navItems = [
    { name: '会社案内', href: '/company' },
    { name: '事業内容', href: '/service' },
    { name: 'お知らせ', href: '/news' },
    { name: '採用情報', href: '/recruit' },
    { name: 'お問い合わせ', href: '/contact' },
    { name: 'プライバシー', href: '/privacy' },
];

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[var(--color-primary)] text-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-5 md:px-6 py-10 md:py-16">
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20">
                    {/* Logo & Info */}
                    <div className="md:w-1/3">
                        <div className="-mb-8 md:-mb-10 -ml-4 md:-ml-6">
                            <Image
                                src="/images/logo-richibiru.png"
                                alt="リチビル"
                                width={480}
                                height={428}
                                className="h-[140px] md:h-[170px] w-auto brightness-0 invert"
                            />
                        </div>
                        <div className="space-y-3 text-white/80 text-sm md:text-base">
                            <p className="font-extrabold text-white/90">株式会社リッチ＆ビルド</p>
                            <p className="font-bold">総合人材コンサルティング</p>

                            <div className="pt-3 space-y-2.5">
                                <div className="flex items-center gap-2.5">
                                    <span className="text-xs uppercase font-extrabold tracking-widest bg-white/10 px-2 py-0.5 rounded text-white/70">Tel</span>
                                    <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors tracking-wide font-extrabold text-white/90">{COMPANY_INFO.phone}</a>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <span className="text-xs uppercase font-extrabold tracking-widest bg-white/10 px-2 py-0.5 rounded text-white/70">Mail</span>
                                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors font-bold text-white/90 text-sm md:text-base break-all">{COMPANY_INFO.email}</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 grid grid-cols-2 md:flex md:flex-wrap md:content-start gap-x-6 md:gap-x-10 gap-y-3 md:gap-y-4 md:justify-end">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm md:text-base font-bold text-white/70 hover:text-white transition-all duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-5 md:px-6 py-4 md:py-5 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-xs md:text-sm text-white/50 font-bold tracking-wide">
                        &copy; {new Date().getFullYear()} RICH & BUILD Inc. All Rights Reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="text-xs md:text-sm font-bold text-white/50 hover:text-white/80 transition-colors tracking-widest"
                    >
                        PAGE TOP
                    </button>
                </div>
            </div>
        </footer>
    );
};
