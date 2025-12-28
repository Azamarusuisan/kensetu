import { SubpageHero } from '@/components/SubpageHero';
import { ChevronRight, CheckCircle2, Users, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicePage() {
    return (
        <main className="overflow-x-hidden">
            <SubpageHero
                titleEn="SERVICE"
                titleJa="事業紹介"
                backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Intro */}
            <section className="py-10 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <h2 className="text-2xl md:text-4xl font-black mb-6 md:mb-10 leading-tight text-[var(--color-text-primary)] tracking-tight">
                        人材の<br className="md:hidden" />総合コンサルタント
                    </h2>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg font-bold">
                        企業の成長は「人」で決まります。<br />
                        私たちは、人材派遣、人材紹介、そしてコンサルティングを通じて、<br className="hidden md:block" />
                        トータルで企業の課題解決と成長を支援します。
                    </p>
                </div>
            </section>

            {/* Service 1: Staffing */}
            <section className="py-10 md:py-20 bg-[var(--color-secondary)]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
                                        alt="人材派遣"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                                        <Users className="w-7 h-7" />
                                    </div>
                                    <span className="text-[var(--color-text-muted)] font-bold tracking-widest text-sm">SERVICE 01</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 text-[var(--color-text-primary)]">人材派遣</h3>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 font-bold text-sm">
                                    企業のニーズに徹底的に寄り添い、最適な人材を派遣します。
                                    単なる人員補充ではなく、伴走型のパートナーとして、
                                    一緒に事業拡大に貢献することを目指します。
                                </p>
                                <ul className="space-y-2">
                                    {['ニーズへの深い理解', '最適な人材のマッチング', '事業拡大への貢献', '伴走型サポート'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[var(--color-text-primary)]">
                                            <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 2: Recruitment */}
            <section className="py-10 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=2070&auto=format&fit=crop"
                                        alt="人材紹介"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                                        <Briefcase className="w-7 h-7" />
                                    </div>
                                    <span className="text-[var(--color-text-muted)] font-bold tracking-widest text-sm">SERVICE 02</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black mb-6 text-[var(--color-text-primary)]">人材紹介</h3>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 font-bold">
                                    企業のビジョンやカルチャーに共感し、活躍できる最適な人材を紹介します。
                                    求職者の「やりたいこと」と企業の「やってほしいこと」を高い精度で結びつけ、
                                    双方にとって幸せな出会いを創出します。
                                </p>
                                <ul className="space-y-3">
                                    {['ビジョン共感型マッチング', '丁寧なヒアリング', '定着率の向上', '採用工数の削減'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[var(--color-text-primary)]">
                                            <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 3: Consulting */}
            <section className="py-10 md:py-20 bg-[var(--color-secondary)]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                                        alt="人材コンサル"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                                        <GraduationCap className="w-7 h-7" />
                                    </div>
                                    <span className="text-[var(--color-text-muted)] font-bold tracking-widest text-sm">SERVICE 03</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 text-[var(--color-text-primary)]">人材コンサル</h3>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 font-bold text-sm">
                                    採用戦略の立案から、入社後の人材育成、評価制度の設計、
                                    そして組織開発まで。
                                    「人」に関わるあらゆる課題に対し、専門的な知見で解決策を提示します。
                                </p>
                                <ul className="space-y-2">
                                    {['採用戦略の策定', '人材育成プログラム', '評価制度設計', '組織開発支援'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[var(--color-text-primary)]">
                                            <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 md:py-24 bg-gradient-to-br from-[var(--color-primary)] to-[#3D5A87]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-6">
                        人材に関する課題、<br className="md:hidden" />ご相談ください
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto font-bold text-sm md:text-base">
                        貴社の「人」に関するお悩みを、私たちが解決します。<br />
                        まずはお気軽にお問い合わせください。
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-bold text-base hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-xl"
                    >
                        お問い合わせ
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
