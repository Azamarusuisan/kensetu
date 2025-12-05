import { SubpageHero } from '@/components/SubpageHero';
import { SectionHeader } from '@/components/SectionHeader';
import { Building2, Users, Target, Zap } from 'lucide-react';

export default function CompanyPage() {
    return (
        <main>
            <SubpageHero
                titleEn="COMPANY"
                titleJa="会社情報"
            />

            {/* Mission Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F0FDF4] -skew-x-12 translate-x-1/4 -z-10" />
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">MISSION</p>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-[#064E3B]">
                                    日本の施工管理業界を<br />
                                    新しく創る
                                </h2>
                                <p className="text-emerald-800/70 leading-loose text-lg">
                                    建設業界は日本のインフラを支える重要な産業です。<br />
                                    しかし、人材不足や高齢化など多くの課題を抱えています。<br />
                                    私たちは若い力と情熱で、この業界に新しい風を吹き込み、<br />
                                    施工管理という仕事の魅力を次世代に伝えていきます。
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="aspect-square bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Building2 className="w-32 h-32 text-emerald-200 group-hover:text-emerald-500 transition-colors duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-16 mb-32">
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">VISION</p>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-[#064E3B]">
                                    若者が輝く<br />
                                    建設業界の実現
                                </h2>
                                <p className="text-emerald-800/70 leading-loose text-lg">
                                    施工管理の仕事を通じて、若い人材が成長し、活躍できる場を創出します。<br />
                                    経験やスキルがなくても、「やり続ける力」があれば必ず成功できる。<br />
                                    そんな環境を整え、建設業界の新しいスタンダードを創ります。
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="aspect-square bg-gradient-to-bl from-emerald-50 to-emerald-100 rounded-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Target className="w-32 h-32 text-emerald-200 group-hover:text-emerald-500 transition-colors duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Value */}
                    <div className="mb-16">
                        <div className="text-center mb-16">
                            <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">VALUE</p>
                            <h2 className="text-3xl font-bold text-[#064E3B]">行動指針</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                { num: '01', icon: Zap, title: '継続は力なり', text: '誰よりもやり続けることで道を切り拓く' },
                                { num: '02', icon: Users, title: '仲間を大切に', text: '共に成長し、共に挑戦する' },
                                { num: '03', icon: Target, title: '常に挑戦', text: '変化を恐れず、新しい価値を創造する' },
                                { num: '04', icon: Building2, title: '信頼第一', text: '誠実さとプロ意識で期待に応える' }
                            ].map((item) => (
                                <div key={item.num} className="bg-white border border-emerald-100 p-10 rounded-xl hover:shadow-xl transition-all duration-300 group">
                                    <div className="flex items-start justify-between mb-6">
                                        <span className="text-5xl font-bold text-emerald-50 group-hover:text-emerald-100 transition-colors">{item.num}</span>
                                        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                                            <item.icon className="w-6 h-6 text-emerald-300 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#064E3B] mb-3">{item.title}</h3>
                                    <p className="text-emerald-800/70 leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Member Section */}
            <section className="py-24 bg-[#F0FDF4]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">MEMBER</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">経営陣</h2>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* CEO */}
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-emerald-100">
                            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                                <div className="w-full md:w-1/3">
                                    <div className="aspect-[3/4] bg-emerald-100 rounded-xl overflow-hidden relative">
                                        <img
                                            src="/images/ceo_portrait.png"
                                            alt="CEO Portrait"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <div className="mb-6">
                                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-2">CEO / 代表取締役</p>
                                        <h3 className="text-3xl font-bold text-[#064E3B] mb-1">荒井 武志</h3>
                                        <p className="text-emerald-600/60 text-sm">Takeshi Arai</p>
                                    </div>

                                    <div className="space-y-6 text-emerald-800/70 leading-relaxed">
                                        <p>
                                            山形県出身。高校卒業後、「行くところがなかった」という理由でアメリカへ渡り、4年間の"筋肉留学"を経験。帰国後、その身体を活かして建築現場でアルバイトを始めるも、腰を痛めて挫折。
                                        </p>
                                        <p>
                                            その後、職を転々としながら営業職に出会い、スキルや経験がなくても「誰よりもやり続ける」ことで営業成績トップを達成。筋トレで培った継続力が仕事でも通用することに気づく。
                                        </p>
                                        <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-[#064E3B] bg-emerald-50 py-4 pr-4 rounded-r-lg">
                                            「仲間と一緒に全部デカくしていく会社を目指して、日々筋トレ中。」
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Director */}
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-emerald-100">
                            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                                <div className="w-full md:w-1/3">
                                    <div className="aspect-[3/4] bg-emerald-100 rounded-xl overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-black/10">
                                            <Users className="w-20 h-20 text-white/50" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <div className="mb-6">
                                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-2">DIRECTOR / 取締役</p>
                                        <h3 className="text-3xl font-bold text-[#064E3B] mb-1">鵜山 康宏</h3>
                                        <p className="text-emerald-600/60 text-sm">Yasuhiro Uyama</p>
                                    </div>

                                    <div className="space-y-6 text-emerald-800/70 leading-relaxed">
                                        <p>
                                            千葉県館山市出身。代々職人の家系に生まれ、中学を出たら大工になるつもりが、まさかの高校進学。偏差値44の高校を卒業後、就職も決まらずフリーターに。
                                        </p>
                                        <p>
                                            20歳の時に恩師と出会い、営業の世界へ。2年間休み0日で働き抜き、営業成績トップを獲得。貯めたお金で23歳で起業。
                                        </p>
                                        <p>
                                            現在は、うやまリゾート株式会社、グリーンサウナ株式会社、株式会社タビルモ、株式会社リモアなど複数の会社を経営する実業家として活躍中。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">OVERVIEW</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">会社概要</h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
                            <table className="w-full">
                                <tbody className="divide-y divide-emerald-50">
                                    {[
                                        { label: '会社名', value: '株式会社リッチ＆ビルド' },
                                        { label: '代表者', value: '代表取締役 荒井 武志' },
                                        { label: '資本金', value: '2,000万円' },
                                        { label: '事業内容', value: '施工管理の人材派遣業' },
                                        { label: '業界', value: '建設 / 施工管理 / 人材派遣' },
                                        { label: 'メールアドレス', value: 'takeshi.arai625@gmail.com' },
                                        { label: '電話番号', value: '090-7797-6699' },
                                    ].map((row, index) => (
                                        <tr key={index} className="hover:bg-emerald-50/50 transition-colors">
                                            <th className="px-8 py-6 text-left font-bold text-[#064E3B] w-1/3 bg-emerald-50/50">{row.label}</th>
                                            <td className="px-8 py-6 text-emerald-800/70">{row.value}</td>
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
