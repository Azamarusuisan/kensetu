'use client';

import { SubpageHero } from '@/components/SubpageHero';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
    const [agreed, setAgreed] = useState(false);

    return (
        <main>
            <SubpageHero titleEn="CONTACT" titleJa="お問い合わせ" />

            <div className="container mx-auto px-6 py-24">
                <div className="max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <div className="bg-[#F0FDF4] p-8 rounded-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-emerald-600 font-bold">メール</p>
                                    <a href="mailto:takeshi.arai625@gmail.com" className="text-[#064E3B] font-bold hover:text-emerald-600 transition-colors">
                                        takeshi.arai625@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#F0FDF4] p-8 rounded-xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-emerald-600 font-bold">電話</p>
                                    <a href="tel:090-7797-6699" className="text-[#064E3B] font-bold hover:text-emerald-600 transition-colors">
                                        090-7797-6699
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-16">
                        <p className="text-emerald-800/70 leading-loose">
                            人材に関するご相談、お見積もり、採用に関するお問い合わせは<br className="hidden md:block" />
                            以下のフォームよりお気軽にご連絡ください。<br />
                            担当者より3営業日以内にご連絡させていただきます。
                        </p>
                    </div>

                    <form className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-emerald-100">
                        <div className="space-y-8">
                            {/* Name */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-emerald-50 pb-8">
                                <label htmlFor="name" className="md:col-span-1 text-sm font-bold text-[#064E3B] pt-3">
                                    お名前 <span className="text-emerald-500 ml-1">*</span>
                                </label>
                                <div className="md:col-span-2">
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-[#F0FDF4] border border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="山田 太郎" />
                                </div>
                            </div>

                            {/* Company */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-emerald-50 pb-8">
                                <label htmlFor="company" className="md:col-span-1 text-sm font-bold text-[#064E3B] pt-3">
                                    貴社名
                                </label>
                                <div className="md:col-span-2">
                                    <input type="text" id="company" className="w-full px-4 py-3 rounded-lg bg-[#F0FDF4] border border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="株式会社サンプル" />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-emerald-50 pb-8">
                                <label htmlFor="email" className="md:col-span-1 text-sm font-bold text-[#064E3B] pt-3">
                                    メールアドレス <span className="text-emerald-500 ml-1">*</span>
                                </label>
                                <div className="md:col-span-2">
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-[#F0FDF4] border border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="example@email.com" />
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-emerald-50 pb-8">
                                <label htmlFor="phone" className="md:col-span-1 text-sm font-bold text-[#064E3B] pt-3">
                                    電話番号 <span className="text-emerald-500 ml-1">*</span>
                                </label>
                                <div className="md:col-span-2">
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg bg-[#F0FDF4] border border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="090-1234-5678" />
                                </div>
                            </div>

                            {/* Category */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-emerald-50 pb-8">
                                <label htmlFor="category" className="md:col-span-1 text-sm font-bold text-[#064E3B] pt-3">
                                    お問い合わせ種別 <span className="text-emerald-500 ml-1">*</span>
                                </label>
                                <div className="md:col-span-2">
                                    <div className="relative">
                                        <select id="category" className="w-full px-4 py-3 rounded-lg bg-[#F0FDF4] border border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all appearance-none">
                                            <option>人材派遣のご相談</option>
                                            <option>採用について</option>
                                            <option>お見積もり依頼</option>
                                            <option>その他</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b border-emerald-50 pb-8">
                                <label htmlFor="message" className="md:col-span-1 text-sm font-bold text-[#064E3B] pt-3">
                                    お問い合わせ内容 <span className="text-emerald-500 ml-1">*</span>
                                </label>
                                <div className="md:col-span-2">
                                    <textarea id="message" rows={6} className="w-full px-4 py-3 rounded-lg bg-[#F0FDF4] border border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none" placeholder="お問い合わせ内容をご記入ください"></textarea>
                                </div>
                            </div>

                            {/* Privacy */}
                            <div className="pt-4 text-center">
                                <label className="flex items-center justify-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 rounded border-emerald-300 text-emerald-500 focus:ring-emerald-500"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                    />
                                    <span className="text-sm text-emerald-800/70 group-hover:text-[#064E3B] transition-colors">
                                        <a href="/privacy" className="text-emerald-500 hover:underline underline-offset-4" target="_blank">個人情報保護方針</a>に同意する
                                    </span>
                                </label>
                            </div>

                            {/* Submit */}
                            <div className="text-center pt-8">
                                <Button
                                    type="submit"
                                    className={cn(
                                        "bg-emerald-500 hover:bg-emerald-600 text-white px-12 py-6 rounded-full text-base font-bold tracking-wider min-w-[240px] shadow-lg hover:shadow-xl transition-all",
                                        !agreed && "opacity-50 cursor-not-allowed hover:shadow-none hover:bg-emerald-500"
                                    )}
                                    disabled={!agreed}
                                >
                                    送信する
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
