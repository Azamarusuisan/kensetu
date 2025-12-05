'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoGrid } from '@/components/LogoGrid';
import { NewsList } from '@/components/NewsList';

const heroImages = [
  '/images/hero-slide-1.png',
  '/images/hero-slide-2.png',
  '/images/hero-slide-3.png',
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section - nextcons.jp style */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
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
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Main Copy - Left aligned, large Japanese text */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="px-8 md:px-16 lg:px-24">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.3] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              業界の常識を<br />
              非常識に<br />
              建設派遣の<br />
              在り方を<br />
              変えていく
            </motion.h1>
          </div>
        </div>

        {/* Scroll Indicator - Right side */}
        <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2">
          <motion.div
            className="w-px h-16 bg-black/50"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ transformOrigin: 'top' }}
          />
          <span className="text-black/70 text-xs tracking-[0.2em] [writing-mode:vertical-rl]">SCROLL</span>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-black w-8' : 'bg-black/30 w-4'
              }`}
              aria-label={`スライド ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Concept Section - Split layout */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            {/* Left: Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                CONCEPT
              </h2>
              <p className="text-sm text-gray-500 tracking-wide mb-10">
                株式会社リッチ＆ビルドについて
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-relaxed">
                建設業界のリーダーをつくる。
              </h3>
              <p className="text-gray-600 leading-[2] mb-4">
                "ゼロからの挑戦"　設備・電気のスペシャリストとして成長し、
              </p>
              <p className="text-gray-600 leading-[2] mb-10">
                あなたの力で業界の未来を切り拓くリーダーになりませんか？
              </p>
              <Link
                href="/company"
                className="inline-block border border-black rounded-full px-10 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
              >
                VIEW MORE
              </Link>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src="/images/concept-workers.png"
                  alt="コンセプト"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section - Split layout (image left, text right) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left: Large Image */}
            <div className="w-full md:w-1/2">
              <div className="h-full min-h-[400px] md:min-h-[600px] bg-gray-100">
                <img
                  src="/images/business-building.png"
                  alt="ビジネス"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2 flex items-center">
              <div className="px-8 md:px-16 py-16">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-right">
                  BUSINESS
                </h2>
                <p className="text-sm text-gray-500 tracking-wide mb-12 text-right">
                  事業内容
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
                  サブコン特化型人材派遣
                </h3>
                <p className="text-gray-600 leading-[2] mb-10 text-justify">
                  株式会社リッチ＆ビルドは、"業界初"のサブコン（設備・電気）に特化した施工管理・CADオペレーターの人材派遣を行っています。未だかつてない設備・電気のプロフェッショナル集団を目指しております。
                </p>
                <div className="text-center">
                  <Link
                    href="/service"
                    className="inline-block border border-black rounded-full px-10 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
                  >
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">CLIENT</h2>
            <p className="text-sm text-gray-500 tracking-wide">取引実績</p>
          </div>

          <LogoGrid logos={[
            { src: '', alt: 'Sumitomo Densetsu' },
            { src: '', alt: 'Hibiya' },
            { src: '', alt: 'Konoike' },
            { src: '', alt: 'Kandenko' },
            { src: '', alt: 'Kyudenko' },
            { src: '', alt: 'Nihon Denki Kogyo' },
            { src: '', alt: 'Showa' },
            { src: '', alt: 'Hokuriku' },
            { src: '', alt: 'Relia' },
            { src: '', alt: 'Techno' },
            { src: '', alt: 'Toko' },
          ]} />

          <div className="text-center mt-12">
            <Link
              href="/client"
              className="inline-block border border-black rounded-full px-10 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">NEWS</h2>
              <p className="text-sm text-gray-500 tracking-wide">お知らせ</p>
            </div>
            <Link
              href="/news"
              className="mt-6 md:mt-0 inline-block border border-black rounded-full px-8 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              VIEW ALL
            </Link>
          </div>
          <NewsList />
        </div>
      </section>

      {/* Contact Section - Full width background image */}
      <section className="relative py-32 md:py-40">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/contact-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            CONTACT
          </h2>
          <p className="text-sm text-white/80 tracking-wide mb-10">
            お問い合わせ
          </p>
          <p className="text-white/90 leading-[2] mb-10">
            施工管理・CADオペレーターに関するお問い合わせやお悩みなど、お気軽にご相談ください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#DC2626] text-white px-10 py-4 rounded-full font-medium hover:bg-[#B91C1C] transition-colors"
          >
            VIEW MORE
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
