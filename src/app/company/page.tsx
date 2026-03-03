import type { Metadata } from 'next';
import { SubpageHero } from '@/components/SubpageHero';
import { HorizontalScroll } from '@/components/ui/HorizontalScroll';
import { ChevronRight } from 'lucide-react';
import { PAGE_METADATA, SITE_URL, COMPANY_INFO } from '@/lib/metadata';
import { JsonLd, generateBreadcrumbList, generateAboutPage } from '@/lib/jsonld';

export const metadata: Metadata = {
    title: PAGE_METADATA.company.title,
    description: PAGE_METADATA.company.description,
    keywords: PAGE_METADATA.company.keywords,
    alternates: { canonical: `${SITE_URL}/company` },
};

export default function CompanyPage() {
    const breadcrumb = generateBreadcrumbList([
        { name: 'ホーム', path: '/' },
        { name: '会社情報', path: '/company' },
    ]);
    return (
        <main className="overflow-x-hidden">
            <JsonLd data={breadcrumb} />
            <JsonLd data={generateAboutPage()} />
            <SubpageHero
                titleEn="COMPANY"
                titleJa="会社情報"
                backgroundImage="/images/business-construction.png"
            />

            {/* Mission Section */}
            <section className="py-12 md:py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-5 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
                        <div className="w-full md:w-1/2">
                            <p className="text-[var(--color-primary)] font-extrabold tracking-[0.2em] text-sm mb-3">MISSION</p>
                            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight text-[var(--color-text-primary)] tracking-tight">
                                人生を変える"最初の一歩"を<br />
                                ともに踏み出し、<br />
                                人生が変わったと<br className="md:hidden" />
                                心から言えるまで共に歩む。
                            </h2>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="aspect-square rounded-2xl relative overflow-hidden group shadow-lg">
                                <img
                                    src="/images/company-mission.png"
                                    alt="可能性を解放する"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16">
                        <div className="w-full md:w-1/2">
                            <p className="text-[var(--color-primary)] font-extrabold tracking-[0.2em] text-sm mb-3">VISION</p>
                            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight text-[var(--color-text-primary)] tracking-tight">
                                一人ひとりに向き合い、<br />
                                挑戦できる環境と<br className="md:hidden" />
                                成長の機会を<br />
                                提供し続け、<br className="md:hidden" />
                                可能性を最大化する
                            </h2>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="aspect-square rounded-2xl relative overflow-hidden group shadow-lg">
                                <img
                                    src="/images/company-vision.png"
                                    alt="自分の選択でキャリアを描く"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Values (Action Guidelines) */}
                    <div className="mb-0">
                        <div className="text-center mb-8 md:mb-12">
                            <p className="text-[var(--color-primary)] font-extrabold tracking-[0.2em] text-sm mb-3">VALUES</p>
                            <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)]">行動指針</h2>
                        </div>

                        <HorizontalScroll className="md:grid-cols-5">
                            {[
                                { num: '01', title: '可能性を重視する', text: '一人ひとりの可能性を開放し、最大化することで一緒に会社も成長できる。' },
                                { num: '02', title: '一歩目は、一緒に踏み出す', text: '最初の一歩は、才能でも経歴でもなく「環境」で決まる。' },
                                { num: '03', title: '失敗を、成長の通過点にする', text: 'だから私たちは、踏み出す勇気が出るまで何度でも向き合う。' },
                                { num: '04', title: '結果が出るまで、向き合い続ける', text: '一緒に一歩を踏み出したら、結果が出るところまで一緒に走る。' },
                                { num: '05', title: '一人ひとりの人生に責任を持つ', text: '一人ひとりの人生に責任を持ち、決して妥協しない。' }
                            ].map((item) => (
                                <div key={item.num} className="bg-white border border-[var(--color-border)] p-7 rounded-2xl hover:shadow-lg transition-all duration-300 group relative overflow-hidden min-w-[75vw] sm:min-w-[60vw] md:min-w-0 snap-center shadow-sm flex flex-col h-full">
                                    <div className="absolute -right-4 -top-4 text-8xl md:text-9xl font-black text-[var(--color-secondary)] group-hover:text-[var(--color-primary)]/10 transition-colors select-none pointer-events-none">
                                        {item.num}
                                    </div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-[var(--color-primary)] font-extrabold tracking-[0.15em] text-sm">VALUE {item.num}</span>
                                            <div className="h-px flex-1 bg-[var(--color-border)]" />
                                        </div>
                                        <h3 className="text-2xl font-black text-[var(--color-text-primary)] mb-3">{item.title}</h3>
                                        <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </HorizontalScroll>

                        {/* Swipe Hint for Mobile */}
                        <div className="flex justify-center mt-4 md:hidden text-[var(--color-primary)] text-sm font-extrabold items-center gap-2 animate-pulse">
                            <ChevronRight className="w-3.5 h-3.5" />
                            <span>SWIPE</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Message */}
            <section className="py-12 md:py-24 bg-[var(--color-secondary)]">
                <div className="container mx-auto px-5 md:px-6">
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[var(--color-border)]">
                        <div className="text-center mb-8">
                            <p className="text-[var(--color-primary)] font-extrabold tracking-[0.2em] text-sm mb-3">TOP MESSAGE</p>
                            <h2 className="text-3xl md:text-4xl font-black leading-tight text-[var(--color-text-primary)]">
                                共に描き、共に創る未来。
                            </h2>
                        </div>
                        <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed text-base">
                            <p>
                                人の可能性は無限大です。<br />
                                私たちは、スキルや経歴だけを見るマッチングは行いません。
                            </p>
                            <p>
                                その人が「どんな人生を描きたいのか」、<br />
                                その企業が「どんな未来をつくりたいのか」。
                            </p>
                            <p>
                                そこに本気で向き合い、最適な選択肢を共につくり、<br />
                                共に成長し続けること。
                            </p>
                            <p>
                                それこそが、私たちの使命であり、誇りです。<br />
                                あなたの描く未来を、私たちと一緒に実現させましょう。
                            </p>
                            <div className="text-right mt-8">
                                <p className="font-extrabold text-[var(--color-text-primary)]">代表取締役 荒井 武志</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-12 md:py-24 bg-white">
                <div className="container mx-auto px-5 md:px-6">
                    <div className="text-center mb-10 md:mb-14">
                        <p className="text-[var(--color-primary)] font-extrabold tracking-[0.2em] text-sm mb-3">OVERVIEW</p>
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)]">会社概要</h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm">
                            <table className="w-full">
                                <tbody className="divide-y divide-[var(--color-border)]">
                                    {[
                                        { label: '会社名', value: COMPANY_INFO.name },
                                        { label: '代表者', value: `代表取締役 ${COMPANY_INFO.ceo}` },
                                        { label: '住所', value: `〒${COMPANY_INFO.postalCode} ${COMPANY_INFO.address}` },
                                        { label: '事業内容', value: COMPANY_INFO.business },
                                        { label: 'TEL', value: COMPANY_INFO.phone },
                                        { label: 'MAIL', value: COMPANY_INFO.email },
                                    ].map((row, index) => (
                                        <tr key={index} className="hover:bg-[var(--color-secondary)]/50 transition-colors flex flex-col md:table-row">
                                            <th className="px-6 md:px-8 py-4 md:py-5 text-left text-base font-extrabold text-[var(--color-text-primary)] w-full md:w-1/3 bg-[var(--color-secondary)]/50 block md:table-cell">{row.label}</th>
                                            <td className="px-6 md:px-8 py-4 md:py-5 text-base text-[var(--color-text-secondary)] block md:table-cell">
                                                {row.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
