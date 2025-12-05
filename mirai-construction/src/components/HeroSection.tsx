'use client';

import Link from 'next/link';
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
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image Slider */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        className="absolute inset-0 bg-gray-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <img
                            src={heroImages[currentImageIndex]}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center text-white px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                            RICH&BUILD
                        </h1>
                        <p className="text-lg md:text-xl font-medium tracking-wide mb-2">
                            日本の施工管理業界を新しく創る
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
                <span className="text-white/80 text-xs tracking-[0.3em]">Scroll</span>
                <motion.div
                    className="w-px h-12 bg-white/50"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ transformOrigin: 'top' }}
                />
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                        }`}
                        aria-label={`スライド ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};
