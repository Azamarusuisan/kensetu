'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Company', href: '/company' },
        { name: 'Service', href: '/service' },
        { name: 'Client', href: '/client' },
        { name: 'News', href: '/news' },
        { name: 'Contact', href: '/contact' },
        { name: 'Recruit', href: '/recruit' },
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
                    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                    isScrolled || isMobileMenuOpen
                        ? 'bg-white shadow-sm py-4'
                        : 'bg-transparent py-6'
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
                            <span className="text-xl tracking-tight text-[#111]">RICH&BUILD</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-[#333] hover:text-[#10B981] transition-colors"
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-[#111] py-4 border-b border-gray-100"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
