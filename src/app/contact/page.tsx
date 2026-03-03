'use client';

import { SubpageHero } from '@/components/SubpageHero';
import { Button } from '@/components/ui/Button';
import { useState, FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
    const [agreed, setAgreed] = useState(false);
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const form = e.currentTarget;
        const formData = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            company: (form.elements.namedItem('company') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
            category: (form.elements.namedItem('category') as HTMLSelectElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || '送信に失敗しました。');
            }

            setStatus('success');
            form.reset();
            setAgreed(false);
        } catch (err) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : '送信に失敗しました。しばらくしてからもう一度お試しください。');
        }
    };

    return (
        <main className="overflow-x-hidden">
            <SubpageHero
                titleEn="CONTACT"
                titleJa="お問い合わせ"
                backgroundImage="/images/contact-bg.png"
            />

            <div className="container mx-auto px-5 md:px-6 py-12 md:py-24">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="text-center mb-10 md:mb-16">
                        <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                            人材に関するご相談、お見積もり、採用に関するお問い合わせは<br className="hidden md:block" />
                            以下のフォームよりお気軽にご連絡ください。<br />
                            担当者より3営業日以内にご連絡させていただきます。
                        </p>
                    </motion.div>

                    {/* 送信完了メッセージ */}
                    {status === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl mb-8 text-center"
                        >
                            <p className="font-bold text-lg mb-1">送信が完了しました</p>
                            <p className="text-sm">お問い合わせありがとうございます。担当者より3営業日以内にご連絡いたします。</p>
                        </motion.div>
                    )}

                    {/* エラーメッセージ */}
                    {status === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl mb-8 text-center"
                        >
                            <p className="font-bold">送信に失敗しました</p>
                            <p className="text-sm mt-1">{errorMessage}</p>
                        </motion.div>
                    )}

                    <motion.form onSubmit={handleSubmit} variants={itemVariants} className="bg-white p-5 md:p-10 rounded-2xl shadow-sm border border-[var(--color-border)]">
                        <div className="space-y-6 md:space-y-8">
                            {/* Row 1: Name & Company */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-base font-extrabold text-[var(--color-text-primary)] block">
                                        お名前 <span className="text-[var(--color-primary)] ml-1">*</span>
                                    </label>
                                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 md:py-4 text-base rounded-xl bg-[var(--color-secondary)] border border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] outline-none transition-all placeholder:text-[var(--color-text-muted)]" placeholder="山田 太郎" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-base font-extrabold text-[var(--color-text-primary)] block">
                                        貴社名
                                    </label>
                                    <input type="text" id="company" name="company" className="w-full px-4 py-3 md:py-4 text-base rounded-xl bg-[var(--color-secondary)] border border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] outline-none transition-all placeholder:text-[var(--color-text-muted)]" placeholder="株式会社サンプル" />
                                </div>
                            </div>

                            {/* Row 2: Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-base font-extrabold text-[var(--color-text-primary)] block">
                                        メールアドレス <span className="text-[var(--color-primary)] ml-1">*</span>
                                    </label>
                                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 md:py-4 text-base rounded-xl bg-[var(--color-secondary)] border border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] outline-none transition-all placeholder:text-[var(--color-text-muted)]" placeholder="example@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-base font-extrabold text-[var(--color-text-primary)] block">
                                        電話番号 <span className="text-[var(--color-primary)] ml-1">*</span>
                                    </label>
                                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 md:py-4 text-base rounded-xl bg-[var(--color-secondary)] border border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] outline-none transition-all placeholder:text-[var(--color-text-muted)]" placeholder="090-1234-5678" />
                                </div>
                            </div>

                            {/* Category */}
                            <div className="space-y-2">
                                <label htmlFor="category" className="text-base font-extrabold text-[var(--color-text-primary)] block">
                                    お問い合わせ種別 <span className="text-[var(--color-primary)] ml-1">*</span>
                                </label>
                                <div className="relative">
                                    <select id="category" name="category" className="w-full px-4 py-3 md:py-4 text-base rounded-xl bg-[var(--color-secondary)] border border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] outline-none transition-all appearance-none text-[var(--color-text-primary)]">
                                        <option>人材に関するご相談</option>
                                        <option>採用について</option>
                                        <option>お見積もり依頼</option>
                                        <option>その他</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-primary)] text-sm">
                                        ▼
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-base font-extrabold text-[var(--color-text-primary)] block">
                                    お問い合わせ内容 <span className="text-[var(--color-primary)] ml-1">*</span>
                                </label>
                                <textarea id="message" name="message" required rows={3} className="w-full px-4 py-3 md:py-4 text-base rounded-xl bg-[var(--color-secondary)] border border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] outline-none transition-all resize-none placeholder:text-[var(--color-text-muted)] md:!h-[200px]" placeholder="お問い合わせ内容をご記入ください"></textarea>
                            </div>

                            {/* Privacy */}
                            <div className="pt-2 text-center">
                                <label className="flex items-center justify-center gap-3 cursor-pointer group select-none">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                        />
                                        <div className="w-5 h-5 border-2 border-[var(--color-border)] rounded bg-white peer-checked:bg-[var(--color-primary)] peer-checked:border-[var(--color-primary)] transition-all"></div>
                                        <svg className="absolute w-3.5 h-3.5 text-white left-[3px] top-[3px] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-base text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                                        <a href="/privacy" className="text-[var(--color-primary)] font-extrabold hover:underline underline-offset-4" target="_blank">個人情報保護方針</a>に同意する
                                    </span>
                                </label>
                            </div>

                            {/* Submit */}
                            <div className="text-center pt-4">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        className={cn(
                                            "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-12 py-4 rounded-full text-base font-extrabold tracking-wider min-w-full md:min-w-[300px] shadow-md hover:shadow-lg transition-all h-auto",
                                            (!agreed || status === 'submitting') && "opacity-40 cursor-not-allowed hover:shadow-none"
                                        )}
                                        disabled={!agreed || status === 'submitting'}
                                    >
                                        {status === 'submitting' ? '送信中...' : '送信する'}
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.form>
                </motion.div>
            </div>
        </main>
    );
}
