import { SubpageHero } from '@/components/SubpageHero';
import { LogoGrid } from '@/components/LogoGrid';

export default function ClientPage() {
    return (
        <main>
            <SubpageHero
                titleEn="CLIENT"
                titleJa="企業の皆様へ"
                backgroundImage="/images/business-building.png"
            />

            {/* Intro */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight text-[#064E3B] tracking-tight">
                        人材の質が、<br />
                        現場の質を変える。
                    </h2>
                    <p className="text-[#064E3B] leading-loose text-2xl font-bold text-left md:text-center">
                        建設現場における「人」の課題は、年々深刻化しています。<br />
                        リッチ＆ビルドは、単なる頭数合わせの派遣は行いません。<br />
                        独自の教育システムで育成された、高い意欲と基礎スキルを持つ人材のみを派遣。<br />
                        貴社のプロジェクトの成功に貢献する「人財」をご提案します。
                    </p>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-24 bg-[#F0FDF4]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-[#10B981] font-black tracking-widest text-base mb-4">VALUE</p>
                        <h2 className="text-4xl md:text-5xl font-black text-[#064E3B]">提供価値</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                num: '01',
                                title: '若手人材の\n定着と活躍',
                                desc: '平均年齢20代の若手人材が中心。素直で吸収力のある人材が、現場の活性化に貢献します。高い定着率も自慢です。'
                            },
                            {
                                num: '02',
                                title: 'スピーディーな\nマッチング',
                                desc: '独自のデータベースとマッチングシステムにより、急な欠員や増員にも迅速に対応。最短3日での派遣開始も可能です。'
                            },
                            {
                                num: '03',
                                title: '万全の\nフォロー体制',
                                desc: '派遣後も専任担当者が定期的に現場を訪問。スタッフのメンタルケアや労務管理を徹底し、トラブルを未然に防ぎます。'
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-10 rounded-xl shadow-sm border border-emerald-100 hover:shadow-xl transition-all duration-300 group">
                                <div className="text-[#10B981] font-black text-5xl mb-6">{item.num}</div>
                                <h3 className="text-2xl font-black mb-4 whitespace-pre-line text-[#064E3B]">{item.title}</h3>
                                <p className="text-[#064E3B]/80 font-medium leading-relaxed text-base">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education System */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <p className="text-[#10B981] font-bold tracking-widest text-sm mb-4">EDUCATION</p>
                                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-[#064E3B]">
                                    独自の教育システムで<br />
                                    即戦力を育成
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        'ビジネスマナー研修（挨拶、名刺交換、電話対応など）',
                                        '建設業界の基礎知識（用語、法規、安全管理など）',
                                        '図面の見方・現場管理の基礎',
                                        'PCスキル研修（Excel、Word、メール作成など）',
                                        '安全衛生教育・フルハーネス講習'
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <span className="text-[#10B981] font-bold mt-1 text-xl">●</span>
                                            <p className="text-[#064E3B] font-bold text-xl">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 p-6 bg-[#F0FDF4] rounded-xl border border-emerald-100">
                                    <h4 className="font-bold text-[#064E3B] text-lg mb-2">資格取得もサポート</h4>
                                    <p className="text-[#064E3B]/70 text-sm">
                                        施工管理技士などの国家資格取得を全面的にバックアップ。社員のスキルアップが、貴社の現場の品質向上に直結します。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="aspect-[4/3] bg-emerald-50 rounded-2xl relative overflow-hidden shadow-lg border border-emerald-100">
                                <img
                                    src="/images/education_system_visual.png"
                                    alt="Education System Visualization"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Grid */}
            <section className="py-24 bg-[#F0FDF4]">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-[#10B981] font-bold tracking-widest text-sm mb-4">PARTNERS</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B] mb-16">主要取引先</h2>
                    <LogoGrid
                        logos={[
                            '住友電設株式会社',
                            '株式会社日比谷アメニス',
                            '株式会社関電工',
                            '東急建設株式会社',
                            '大成建設株式会社',
                            '鹿島建設株式会社',
                            '清水建設株式会社',
                            '株式会社大林組',
                            '株式会社竹中工務店',
                            '戸田建設株式会社'
                        ].map(name => ({ src: '', alt: name }))}
                    />
                    <p className="mt-12 text-[#064E3B]/50 text-sm">※順不同・敬称略</p>
                </div>
            </section>
        </main>
    );
}
