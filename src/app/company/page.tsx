import { SubpageHero } from '@/components/SubpageHero';
import { HorizontalScroll } from '@/components/ui/HorizontalScroll';
import { ChevronRight } from 'lucide-react';

export default function CompanyPage() {
    return (
        <main className="overflow-x-hidden">
            <SubpageHero
                titleEn="COMPANY"
                titleJa="会社情報"
                backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            />

            {/* Mission Section */}
            <section className="py-12 md:py-20 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-secondary)] -skew-x-12 translate-x-1/4 -z-10" />
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <p className="text-[var(--color-primary)] font-black tracking-widest text-sm md:text-base mb-3 md:mb-4">MISSION</p>
                                <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight text-[var(--color-text-primary)] tracking-tight">
                                    可能性を解放し、<br />
                                    働くをもっと自由に。
                                </h2>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed text-base font-bold">
                                    私たちは、既成概念にとらわれず、すべての人が持つ無限の可能性を信じています。
                                    「働く」ということを、もっと自由で、もっとワクワクするものへ。
                                    一人ひとりが輝ける場所を創り出します。
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="aspect-square rounded-2xl relative overflow-hidden group shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                                    alt="可能性を解放する"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12 mb-12">
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <p className="text-[var(--color-primary)] font-black tracking-widest text-sm md:text-base mb-3 md:mb-4">VISION</p>
                                <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight text-[var(--color-text-primary)] tracking-tight">
                                    誰もが“自分の選択”で<br />
                                    キャリアを描ける<br />
                                    社会をつくる。
                                </h2>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed text-base font-bold">
                                    誰かに決められたレールではなく、自分自身で選び取る未来。
                                    私たちは、その選択肢を広げ、決断を支える存在でありたい。
                                    自律的なキャリア形成が当たり前の社会を目指します。
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="aspect-square rounded-2xl relative overflow-hidden group shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                                    alt="自分の選択でキャリアを描く"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Values (Action Guidelines) */}
                    <div className="mb-0">
                        <div className="text-center mb-6 md:mb-10">
                            <p className="text-[var(--color-primary)] font-black tracking-widest text-sm md:text-base mb-3 md:mb-4">VALUES</p>
                            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-text-primary)]">行動指針</h2>
                        </div>

                        <HorizontalScroll className="md:grid-cols-4">
                            {[
                                { num: '01', title: '常に挑戦', text: '現状に満足せず、新しいことに挑み続ける姿勢を持ちます。' },
                                { num: '02', title: '仕事に本気', text: 'プロフェッショナルとして、一つひとつの仕事に情熱を注ぎます。' },
                                { num: '03', title: '継続は力なり', text: '日々の小さな積み重ねが、大きな成果を生むと信じて行動します。' },
                                { num: '04', title: 'ヒトに誠実', text: '関わるすべての人に対し、誠意と思いやりを持って接します。' }
                            ].map((item) => (
                                <div key={item.num} className="bg-white border border-[var(--color-border)] p-8 rounded-xl hover:shadow-xl transition-all duration-300 group relative overflow-hidden min-w-[80vw] md:min-w-0 snap-center shadow-sm flex flex-col h-full">
                                    <div className="absolute -right-4 -top-4 text-8xl md:text-9xl font-black text-[var(--color-secondary)] group-hover:text-[var(--color-primary)]/10 transition-colors select-none pointer-events-none">
                                        {item.num}
                                    </div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-[var(--color-primary)] font-black tracking-widest text-sm">VALUE {item.num}</span>
                                            <div className="h-px flex-1 bg-[var(--color-border)] group-hover:bg-[var(--color-primary)]/20 transition-colors" />
                                        </div>
                                        <h3 className="text-2xl font-black text-[var(--color-text-primary)] mb-4">{item.title}</h3>
                                        <p className="text-[var(--color-text-secondary)] font-bold leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </HorizontalScroll>

                        {/* Swipe Hint for Mobile */}
                        <div className="flex justify-center mt-4 md:hidden text-[var(--color-primary)] text-sm font-bold items-center gap-2 animate-pulse">
                            <ChevronRight className="w-4 h-4" />
                            <span>SWIPE</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Message (New Section) */}
            <section className="py-12 md:py-20 bg-[var(--color-secondary)]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-sm border border-[var(--color-border)]">
                        <div className="text-center mb-6">
                            <p className="text-[var(--color-primary)] font-bold tracking-widest text-sm mb-4">TOP MESSAGE</p>
                            <h2 className="text-2xl md:text-4xl font-black leading-tight text-[var(--color-text-primary)]">
                                共に描き、共に創る未来。
                            </h2>
                        </div>
                        <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed text-base font-bold">
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
                                <p className="font-bold text-[var(--color-text-primary)]">代表取締役 荒井 武志</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-8 md:mb-12">
                        <p className="text-[var(--color-primary)] font-bold tracking-widest text-sm mb-4">OVERVIEW</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">会社概要</h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm">
                            <table className="w-full">
                                <tbody className="divide-y divide-[var(--color-border)]">
                                    {[
                                        { label: '会社名', value: '株式会社リッチ＆ビルド' },
                                        { label: '代表者', value: '代表取締役 荒井 武志' },
                                        { label: '住所', value: '〒107-0062 東京都港区南青山2-2-15 ウィン青山1403' },
                                        { label: '事業内容', value: '人材派遣事業 / 人材紹介事業 / 人材コンサルティング事業' },
                                    ].map((row, index) => (
                                        <tr key={index} className="hover:bg-[var(--color-secondary)]/50 transition-colors flex flex-col md:table-row">
                                            <th className="px-6 md:px-8 py-4 md:py-6 text-left font-bold text-[var(--color-text-primary)] w-full md:w-1/3 bg-[var(--color-secondary)]/50 block md:table-cell">{row.label}</th>
                                            <td className="px-6 md:px-8 py-4 md:py-6 text-[var(--color-text-secondary)] block md:table-cell">
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
