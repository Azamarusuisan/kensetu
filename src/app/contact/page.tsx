'use client';

import { SubpageHero } from '@/components/SubpageHero';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [agreed, setAgreed] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <main>
            <SubpageHero
                titleEn="CONTACT"
                titleJa="お問い合わせ"
                backgroundImage="/images/contact-bg.png"
            />

            <div className="container mx-auto px-6 py-24">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >


                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <p className="text-xl text-[#064E3B] leading-loose font-medium">
                            人材に関するご相談、お見積もり、採用に関するお問い合わせは<br className="hidden md:block" />
                            以下のフォームよりお気軽にご連絡ください。<br />
                            担当者より3営業日以内にご連絡させていただきます。
                        </p>
                    </motion.div>

                    <motion.form variants={itemVariants} className="bg-white p-8 md:p-14 rounded-3xl shadow-xl border border-emerald-100">
                        <div className="space-y-10">
                            {/* Name */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-emerald-50 pb-10">
                                <label htmlFor="name" className="md:col-span-1 text-lg font-bold text-[#064E3B] pt-3">
                                    お名前 <span className="text-[#10B981] ml-1">*</span>
                                </label>
                                <div className="md:col-span-2">
                                    <input type="text" id="name" className="w-full px-6 py-4 text-lg rounded-xl bg-[#F0FDF4] border border-emerald-100 focus:ring-4 focus:ring-emerald-100 focus:border-[#10B981] outline-none transition-all placeholder:text-[#064E3B]/30" placeholder="山田 太郎" />
                                </div>
                            </div>

                            {/* Company */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-emerald-50 pb-10">
                                <label htmlFor="company" className="md:col-span-1 text-lg font-bold text-[#064E3B] pt-3">
                                    貴社名
                                </label>
                                <div className="md:col-span-2">
                                    <input type="text" id="company" className="w-full px-6 py-4 text-lg rounded-xl bg-[#F0FDF4] border border-emerald-100 focus:ring-4 focus:ring-emerald-100 focus:border-[#10B981] outline-none transition-all placeholder:text-[#064E3B]/30" placeholder="株式会社サンプル" />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-emerald-50 pb-10">
                                <label htmlFor="email" className="md:col-span-1 text-lg font-bold text-[#064E3B] pt-3">
                                    メールアドレス <span className="text-[#10B981] ml-1">*</span>
                                </label>
                                <div className="md:col-span-2">
                                    <input type="email" id="email" className="w-full px-6 py-4 text-lg rounded-xl bg-[#F0FDF4] border border-emerald-100 focus:ring-4 focus:ring-emerald-100 focus:border-[#10B981] outline-none transition-all placeholder:text-[#064E3B]/30" placeholder="example@email.com" />
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-emerald-50 pb-10">
                                <label htmlFor="phone" className="md:col-span-1 text-lg font-bold text-[#064E3B] pt-3">
                                    電話番号 <span className="text-[#10B981] ml-1">*</span>
                                </label>
                                <div className="md:col-span-2">
                                    <input type="tel" id="phone" className="w-full px-6 py-4 text-lg rounded-xl bg-[#F0FDF4] border border-emerald-100 focus:ring-4 focus:ring-emerald-100 focus:border-[#10B981] outline-none transition-all placeholder:text-[#064E3B]/30" placeholder="090-1234-5678" />
                                </div>
                            </div>

                            {/* Category */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-emerald-50 pb-10">
                                <label htmlFor="category" className="md:col-span-1 text-lg font-bold text-[#064E3B] pt-3">
                                    お問い合わせ種別 <span className="text-[#10B981] ml-1">*</span>
                                </label>
                                <div className="md:col-span-2">
                                    <div className="relative">
                                        <select id="category" className="w-full px-6 py-4 text-lg rounded-xl bg-[#F0FDF4] border border-emerald-100 focus:ring-4 focus:ring-emerald-100 focus:border-[#10B981] outline-none transition-all appearance-none text-[#064E3B]">
                                            <option>人材派遣のご相談</option>
                                            <option>採用について</option>
                                            <option>お見積もり依頼</option>
                                            <option>その他</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#10B981]">
                                            ▼
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-emerald-50 pb-10">
                                <label htmlFor="message" className="md:col-span-1 text-lg font-bold text-[#064E3B] pt-3">
                                    お問い合わせ内容 <span className="text-[#10B981] ml-1">*</span>
                                </label>
                                <div className="md:col-span-2">
                                    <textarea id="message" rows={8} className="w-full px-6 py-4 text-lg rounded-xl bg-[#F0FDF4] border border-emerald-100 focus:ring-4 focus:ring-emerald-100 focus:border-[#10B981] outline-none transition-all resize-none placeholder:text-[#064E3B]/30" placeholder="お問い合わせ内容をご記入ください"></textarea>
                                </div>
                            </div>

                            {/* Privacy */}
                            <div className="pt-4 text-center">
                                <label className="flex items-center justify-center gap-3 cursor-pointer group select-none">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                        />
                                        <div className="w-6 h-6 border-2 border-emerald-300 rounded bg-white peer-checked:bg-[#10B981] peer-checked:border-[#064E3B] transition-all"></div>
                                        <svg className="absolute w-4 h-4 text-white left-1 top-1 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-base text-[#064E3B]/70 group-hover:text-[#064E3B] transition-colors">
                                        <a href="/privacy" className="text-[#059669] font-bold hover:underline underline-offset-4" target="_blank">個人情報保護方針</a>に同意する
                                    </span>
                                </label>
                            </div>

                            {/* Submit */}
                            <div className="text-center pt-8">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        type="submit"
                                        className={cn(
                                            "bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-emerald-600 hover:to-teal-700 text-white px-16 py-8 rounded-full text-xl font-bold tracking-widest min-w-[300px] shadow-xl hover:shadow-2xl transition-all",
                                            !agreed && "opacity-50 cursor-not-allowed hover:shadow-none grayscale"
                                        )}
                                        disabled={!agreed}
                                    >
                                        送信する
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.form>

                    {/* Contact Info Removed */}
                </motion.div>
            </div>
        </main>
    );
}
