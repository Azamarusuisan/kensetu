'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
    '/images/hero-slide-1.png',
    '/images/hero-slide-2.png',
    '/images/hero-slide-3.png',
];

export const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-dvh w-full overflow-hidden">
            {/* Background Image Slider - "Thumbnail" Style */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <img
                            src={heroImages[currentImageIndex]}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Cinematic Dark Overlay for Text Pop */}
                <div className="absolute inset-0 bg-black/30 z-10" />
            </div>

            {/* Content - Centered "Thumbnail" Text */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="font-black text-white tracking-tighter leading-tight drop-shadow-2xl"
                    >
                        <span className="block text-[8vw] md:text-[6vw] lg:text-[5vw] mb-2 md:mb-4">
                            日本の
                        </span>
                        <div className="relative inline-block">
                            <span className="block text-[13vw] md:text-[9vw] lg:text-[8vw] bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-200">
                                施工管理業界を
                            </span>
                            {/* Reflection/Glow effect */}
                            <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full -z-10" />
                        </div>
                        <span className="block text-[13vw] md:text-[9vw] lg:text-[8vw] bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-200 mt-2">
                            新しく作る
                        </span>
                    </motion.h1>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
                <span className="text-white text-xs tracking-[0.3em] font-medium">スクロール</span>
                <motion.div
                    className="w-px h-16 bg-white"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ transformOrigin: 'top' }}
                />
            </div>
        </section>
    );
};
