'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: '会社案内', href: '/company' },
        { name: '事業内容', href: '/service' },
        { name: '企業の皆様へ', href: '/client' },
        { name: 'お知らせ', href: '/news' },
        { name: '採用情報', href: '/recruit' },
        { name: 'お問い合わせ', href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white',
                    isScrolled || isMobileMenuOpen
                        ? 'shadow-sm py-8'
                        : 'py-10'
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="z-50 relative"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <div className="font-bold">
                            <span className="text-3xl tracking-tight text-[#111]">リッチ＆ビルド</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-12">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-bold text-[#333] hover:text-[#10B981] transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="メニュー"
                    >
                        <span className={cn(
                            "w-6 h-[2px] bg-[#111] transition-all duration-300 absolute",
                            isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
                        )} />
                        <span className={cn(
                            "w-6 h-[2px] bg-[#111] transition-all duration-300",
                            isMobileMenuOpen ? "opacity-0" : "opacity-100"
                        )} />
                        <span className={cn(
                            "w-6 h-[2px] bg-[#111] transition-all duration-300 absolute",
                            isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
                        )} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-28 px-6 md:hidden flex flex-col items-center justify-start space-y-6"
                    >
                        <nav className="flex flex-col gap-6 w-full text-center">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 + 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-xl font-bold text-[#111] py-3 block hover:text-[#10B981] transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8"
                        >
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className="inline-block bg-[#10B981] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#059669] transition-all">
                                    お問い合わせ
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
