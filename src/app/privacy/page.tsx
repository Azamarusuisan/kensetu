import type { Metadata } from 'next';
import { SubpageHero } from '@/components/SubpageHero';
import { Mail, Phone } from 'lucide-react';
import { PAGE_METADATA, SITE_URL } from '@/lib/metadata';
import { JsonLd, generateBreadcrumbList } from '@/lib/jsonld';

export const metadata: Metadata = {
    title: PAGE_METADATA.privacy.title,
    description: PAGE_METADATA.privacy.description,
    keywords: PAGE_METADATA.privacy.keywords,
    alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
    const breadcrumb = generateBreadcrumbList([
        { name: 'ホーム', path: '/' },
        { name: 'プライバシーポリシー', path: '/privacy' },
    ]);
    return (
        <main>
            <JsonLd data={breadcrumb} />
            <SubpageHero
                titleEn="PRIVACY POLICY"
                titleJa="個人情報保護方針"
                backgroundImage="/images/business-construction.png"
            />

            <div className="container mx-auto px-5 md:px-6 py-16 md:py-24">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-14 rounded-2xl shadow-sm border border-[var(--color-border)]">
                    <div className="prose max-w-none">
                        <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                            当社は、お客様の個人情報を適切に保護することを重要な責務と考え、以下の方針に基づき個人情報の保護に努めます。
                        </p>

                        {[
                            { num: '01', title: '個人情報の収集について', text: '当社は、適法かつ公正な手段によって個人情報を収集いたします。' },
                            { num: '02', title: '個人情報の利用目的', text: '収集した個人情報は、以下の目的で利用いたします。' },
                            { num: '03', title: '個人情報の第三者提供', text: '当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。' },
                            { num: '04', title: '個人情報の管理', text: '当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。' },
                            { num: '05', title: 'お問い合わせ', text: '個人情報の取り扱いに関するお問い合わせは、当社までご連絡ください。' },
                        ].map((section) => (
                            <div key={section.num} className="mt-8">
                                <h3 className="flex items-center gap-3 text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-2 text-lg font-extrabold">
                                    <span className="text-[var(--color-primary)] font-extrabold">{section.num}</span>
                                    {section.title}
                                </h3>
                                <p className="mt-3 text-base text-[var(--color-text-secondary)] leading-relaxed">{section.text}</p>
                                {section.num === '02' && (
                                    <ul className="list-disc pl-5 space-y-1.5 mt-3 text-base text-[var(--color-text-secondary)]">
                                        <li>お客様へのサービス提供</li>
                                        <li>お問い合わせへの対応</li>
                                        <li>サービス改善のための分析</li>
                                    </ul>
                                )}
                            </div>
                        ))}

                        <div className="bg-[var(--color-secondary)] p-6 rounded-xl mt-8">
                            <p className="font-extrabold text-[var(--color-text-primary)] text-base mb-3">株式会社リッチ＆ビルド</p>
                            <div className="space-y-2 text-base text-[var(--color-text-secondary)]">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                                    <span className="font-bold">メール：</span>
                                    <a href="mailto:info@richandbuild.com" className="hover:text-[var(--color-primary)] hover:underline transition-colors">
                                        info@richandbuild.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                                    <span className="font-bold">電話：</span>
                                    <a href="tel:03-6277-5090" className="hover:text-[var(--color-primary)] hover:underline transition-colors">
                                        03-6277-5090
                                    </a>
                                </div>
                                <p className="pl-6">担当：荒井 武志</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-[var(--color-border)] text-right">
                        <p className="text-sm text-[var(--color-text-muted)]">
                            制定日：{new Date().getFullYear()}年1月1日<br />
                            株式会社リッチ＆ビルド<br />
                            代表取締役 荒井 武志
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
