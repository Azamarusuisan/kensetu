'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const navItems = [
    { name: 'Company', href: '/company' },
    { name: 'Service', href: '/service' },
    { name: 'Client', href: '/client' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
    { name: 'Recruit', href: '/recruit' },
    { name: 'Privacy', href: '/privacy' },
];

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#064E3B] text-white">
            <div className="max-w-6xl mx-auto px-6 py-6 md:py-16">
                <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
                    {/* Logo & Info */}
                    <div>
                        <div className="font-bold text-xl tracking-tight mb-4">
                            リッチ＆ビルド
                        </div>
                        <div className="space-y-3 text-white text-sm mt-4">
                            <p className="text-white/80">株式会社リッチ＆ビルド</p>
                            <p className="text-white/80">代表取締役：荒井 武志</p>
                            <p className="text-white/80">資本金：2,000万円</p>
                            <div className="flex items-center gap-3 pt-2">
                                <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-white/80">電話</span>
                                <a href="tel:090-7797-6699" className="hover:text-white transition-colors tracking-widest font-medium">090-7797-6699</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-white/80">Mail</span>
                                <a href="mailto:takeshi.arai625@gmail.com" className="hover:text-white transition-colors tracking-wide font-medium">takeshi.arai625@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap gap-x-8 gap-y-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm text-[#888] hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-[#333]">
                <div className="max-w-6xl mx-auto px-6 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-[#666]">
                        &copy; {new Date().getFullYear()} 株式会社リッチ＆ビルド All Rights Reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="text-xs text-[#666] hover:text-white transition-colors"
                    >
                        PAGE TOP
                    </button>
                </div>
            </div>
        </footer>
    );
};
