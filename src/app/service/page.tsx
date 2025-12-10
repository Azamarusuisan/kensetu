import { SubpageHero } from '@/components/SubpageHero';

export default function ServicePage() {
    return (
        <main>
            <SubpageHero
                titleEn="SERVICE"
                titleJa="事業紹介"
                backgroundImage="/images/service_main_bg.png"
            />

            {/* Intro */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight text-[#064E3B] tracking-tight">
                        施工管理のプロフェッショナルを、<br />
                        あなたの現場へ
                    </h2>
                    <p className="text-[#064E3B] leading-loose text-2xl font-bold text-left md:text-center">
                        株式会社リッチ＆ビルドは、建設業界における施工管理技術者の派遣を通じて、<br />
                        プロジェクトの円滑な進行をサポートしています。<br />
                        私たちは単なる人材派遣にとどまらず、現場のニーズに合わせた最適な人材をマッチング。<br />
                        未経験から育成した若い力と、信頼のサポート体制で、<br />
                        お客様の現場を強力にバックアップします。
                    </p>
                </div>
            </section>

            {/* Main Service */}
            <section className="py-24 bg-[#F0FDF4]">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-emerald-100">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-1/2 bg-gray-900 relative min-h-[400px]">
                                    <div className="absolute inset-0">
                                        <img
                                            src="/images/service_main_bg.png"
                                            alt="Construction Management"
                                            className="w-full h-full object-cover opacity-60"
                                        />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <p className="text-white font-black tracking-[0.2em] text-3xl">CONSTRUCTION</p>
                                            <p className="text-emerald-200/90 font-bold text-base mt-2">MANAGEMENT</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                                    <p className="text-[#10B981] font-black tracking-widest text-base mb-4">MAIN SERVICE</p>
                                    <h3 className="text-4xl md:text-5xl font-black mb-6 text-[#064E3B]">施工管理人材派遣</h3>
                                    <p className="text-[#064E3B]/80 font-medium text-lg leading-relaxed mb-10">
                                        建築・土木・設備・電気など、あらゆる建設現場において、工程管理・品質管理・安全管理を行う施工管理技術者を派遣します。大規模プロジェクトから改修工事まで、幅広いニーズに対応可能です。
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[#10B981] font-black text-xl">●</span>
                                            <span className="font-bold text-[#064E3B] text-lg">建築・土木・設備・電気工事</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-[#10B981] font-bold">●</span>
                                            <span className="font-bold text-[#064E3B]">即戦力から育成人材まで対応</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-[#10B981] font-bold">●</span>
                                            <span className="font-bold text-[#064E3B]">安心のフォロー体制</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Fields */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-[#10B981] font-bold tracking-widest text-sm mb-4">FIELD</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">対応分野</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { title: '建築工事', desc: 'オフィスビル・マンション・商業施設など' },
                            { title: '土木工事', desc: '道路・橋梁・トンネル・ダムなど' },
                            { title: '設備工事', desc: '空調・衛生・給排水設備など' },
                            { title: '電気工事', desc: '電気設備・通信設備・プラントなど' },
                        ].map((field, index) => (
                            <div key={index} className="bg-[#F0FDF4] p-8 rounded-xl hover:shadow-xl transition-all duration-300 text-center group border border-emerald-100 hover:border-emerald-200">
                                <h3 className="text-xl font-bold mb-4 text-[#064E3B] group-hover:text-emerald-600 transition-colors">{field.title}</h3>
                                <p className="text-[#064E3B]/70 text-sm">{field.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-[#F0FDF4]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-[#10B981] font-bold tracking-widest text-sm mb-4">FEATURE</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">リッチ＆ビルドの強み</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                num: '01',
                                title: '若手人材の\n積極採用・育成',
                                text: '未経験者でも安心。独自の研修プログラムで基礎からしっかり学べる環境を整えています。若い力で現場に活気を。'
                            },
                            {
                                num: '02',
                                title: '実践的な\n教育カリキュラム',
                                text: '現場経験豊富な講師陣による実践的な研修。資格取得支援制度も充実しており、着実にスキルアップできます。'
                            },
                            {
                                num: '03',
                                title: 'キャリア形成\nサポート',
                                text: '一人ひとりの将来のビジョンに合わせたキャリアプランの作成と実現をサポート。長期的な成長を支援します。'
                            },
                            {
                                num: '04',
                                title: '豊富な\n取引実績',
                                text: '大手ゼネコン・サブコンを中心に多数の取引実績。現場の特性を熟知したマッチングで、最適な人材を派遣します。'
                            },
                            {
                                num: '05',
                                title: '密な\nコミュニケーション',
                                text: '派遣後も定期的なフォローを実施。現場での悩みやトラブルにも迅速に対応し、安心して働ける環境を整えます。'
                            },
                            {
                                num: '06',
                                title: '高い\n定着率',
                                text: '働きやすい環境づくりと手厚いサポートにより、業界平均を上回る定着率を実現。長く安定して働ける職場です。'
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-emerald-100">
                                <div className="text-[#10B981] font-bold text-3xl mb-6">{item.num}</div>
                                <h3 className="text-xl font-bold mb-4 whitespace-pre-line text-[#064E3B]">{item.title}</h3>
                                <p className="text-[#064E3B]/70 text-sm leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flow */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-[#10B981] font-bold tracking-widest text-sm mb-4">FLOW</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">ご利用の流れ</h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8 relative before:absolute before:left-8 before:top-8 before:bottom-8 before:w-0.5 before:bg-emerald-100">
                            {[
                                { step: '01', title: 'お問い合わせ', desc: 'お電話またはお問い合わせフォームよりご連絡ください。' },
                                { step: '02', title: 'ヒアリング', desc: '現場の状況やご要望を詳しくお伺いし、最適な人材をご提案します。' },
                                { step: '03', title: '人材のご紹介', desc: 'ご要望に合った人材をご紹介。事前の顔合わせも可能です。' },
                                { step: '04', title: '派遣開始', desc: '契約締結後、派遣を開始。定期的なフォローで安心のサポート。' },
                            ].map((item, index) => (
                                <div key={index} className="flex gap-8 items-start relative bg-white p-6 rounded-xl hover:shadow-md transition-shadow border border-transparent hover:border-emerald-100">
                                    <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-[#10B981] font-bold text-xl z-10 shadow-sm">
                                        {item.step}
                                    </div>
                                    <div className="flex-1 pt-2">
                                        <h3 className="text-xl font-bold text-[#064E3B] mb-2">{item.title}</h3>
                                        <p className="text-[#064E3B]/70">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
