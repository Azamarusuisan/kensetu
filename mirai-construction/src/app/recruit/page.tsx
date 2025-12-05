import { SubpageHero } from '@/components/SubpageHero';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Users, Briefcase, GraduationCap, Heart } from 'lucide-react';

export default function RecruitPage() {
    return (
        <main>
            <SubpageHero
                titleEn="RECRUIT"
                titleJa="採用情報"
            />

            {/* Intro */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md::text-5xl font-bold mb-12 leading-tight text-[#064E3B]">
                        未経験から、<br />
                        一生モノのスキルを。
                    </h2>
                    <p className="text-emerald-800/70 leading-loose text-lg text-left md:text-center">
                        「自分には何もない」と思っていませんか？<br />
                        リッチ＆ビルドでは、学歴も経験も関係ありません。<br />
                        必要なのは、「変わりたい」「成長したい」という気持ちだけ。<br />
                        充実した研修制度と先輩たちのサポートで、<br />
                        あなたの「なりたい自分」への第一歩を応援します。
                    </p>
                </div>
            </section>

            {/* CEO Message */}
            <section className="py-24 bg-[#F0FDF4]">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 relative min-h-[500px]">
                                <div className="absolute inset-0 bg-gray-200">
                                    <img
                                        src="/images/ceo_portrait.png"
                                        alt="CEO Portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-lg max-w-xs">
                                    <p className="text-emerald-500 font-bold tracking-widest text-xs mb-1">REPRESENTATIVE DIRECTOR</p>
                                    <p className="text-xl font-bold text-[#064E3B]">荒井 武志</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 bg-white p-12 md:p-20 flex flex-col justify-center">
                                <p className="text-emerald-500 font-bold tracking-widest text-sm mb-6">MESSAGE</p>
                                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-[#064E3B]">
                                    「やり続ける力」が<br />
                                    未来を切り拓く
                                </h3>
                                <div className="space-y-6 text-emerald-800/70 leading-relaxed">
                                    <p>
                                        私は、特別な才能があったわけではありません。勉強ができたわけでも、器用だったわけでもない。<br />
                                        ただ一つ、「決めたことをやり続ける」ことだけは誰にも負けませんでした。
                                    </p>
                                    <p>
                                        建設業界は今、大きな変革期を迎えています。若い力が求められています。<br />
                                        経験がないことは、ハンデではありません。真っ白なキャンバスだからこそ、どんな色にも染まれる。<br />
                                        無限の可能性を秘めているのです。
                                    </p>
                                    <p>
                                        私たちと一緒に、地図に残る仕事をしませんか？<br />
                                        あなたの挑戦を、全力でサポートします。
                                    </p>
                                </div>
                                <div className="mt-10">
                                    <img src="/images/sign.png" alt="Takeshi Arai Signature" className="h-12 opacity-50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Rich & Build */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">WHY RICH & BUILD</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">リッチ＆ビルドが選ばれる理由</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: GraduationCap,
                                title: '充実の研修制度',
                                desc: '入社後のビジネスマナー研修から、専門知識を学ぶ技術研修まで。未経験からでも安心してスタートできるカリキュラムを用意しています。'
                            },
                            {
                                icon: Heart,
                                title: '手厚いサポート',
                                desc: '専任のキャリアアドバイザーが、あなたの仕事の悩みや将来の不安に寄り添います。定期的な面談で、安心して働ける環境を整えます。'
                            },
                            {
                                icon: Briefcase,
                                title: '豊富なキャリアパス',
                                desc: '施工管理としてのスキルアップはもちろん、国家資格の取得支援や、将来的には大手ゼネコンへの転籍など、多様なキャリアを描けます。'
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-[#F0FDF4] p-10 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-emerald-400 mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-[#064E3B]">{item.title}</h3>
                                <p className="text-emerald-800/70 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Types */}
            <section className="py-24 bg-[#F0FDF4]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">JOB TYPE</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">募集職種</h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {[
                            {
                                title: '施工管理（未経験）',
                                tags: ['正社員', '未経験歓迎', '研修あり'],
                                desc: '建設プロジェクトの進行管理、安全管理、品質管理などのサポート業務からスタートします。',
                                salary: '月給 25万円〜'
                            },
                            {
                                title: '施工管理（経験者）',
                                tags: ['正社員', '経験者優遇', '高収入'],
                                desc: '即戦力として、大規模プロジェクトの施工管理業務をお任せします。',
                                salary: '月給 40万円〜'
                            },
                            {
                                title: 'CADオペレーター',
                                tags: ['正社員', '契約社員', '女性活躍中'],
                                desc: '設計図面の作成・修正業務。専用ソフト（CAD）を使用しますが、操作方法は研修で学べます。',
                                salary: '月給 23万円〜'
                            }
                        ].map((job, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 hover:border-emerald-300 transition-colors group cursor-pointer">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {job.tags.map((tag, i) => (
                                                <span key={i} className="bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#064E3B] mb-2 group-hover:text-emerald-600 transition-colors">{job.title}</h3>
                                        <p className="text-emerald-800/70 mb-4 md:mb-0">{job.desc}</p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end gap-2 min-w-[140px]">
                                        <span className="text-lg font-bold text-[#064E3B]">{job.salary}</span>
                                        <span className="text-emerald-400 group-hover:translate-x-2 transition-transform duration-300">
                                            <ArrowRight className="w-6 h-6" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-emerald-500 font-bold tracking-widest text-sm mb-4">REQUIREMENTS</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#064E3B]">募集要項</h2>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-emerald-100 overflow-hidden">
                        <table className="w-full">
                            <tbody className="divide-y divide-emerald-50">
                                {[
                                    { label: '雇用形態', value: '正社員（試用期間あり）' },
                                    { label: '勤務地', value: '東京、神奈川、千葉、埼玉の各プロジェクト先\n※転居を伴う転勤なし' },
                                    { label: '勤務時間', value: '8:00〜17:00（実働8時間）\n※プロジェクトにより異なる場合があります' },
                                    { label: '休日・休暇', value: '週休2日制（土日祝）、GW、夏季休暇、年末年始休暇、有給休暇、慶弔休暇' },
                                    { label: '福利厚生', value: '社会保険完備、交通費全額支給、資格取得支援制度、制服貸与、定期健康診断' },
                                ].map((row, index) => (
                                    <tr key={index} className="hover:bg-emerald-50/50 transition-colors">
                                        <th className="px-8 py-6 text-left font-bold text-[#064E3B] w-1/3 bg-emerald-50/50 whitespace-pre-line align-top">{row.label}</th>
                                        <td className="px-8 py-6 text-emerald-800/70 whitespace-pre-line">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Entry CTA */}
            <section className="py-32 bg-[#064E3B] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <p className="text-emerald-400 font-bold tracking-widest text-sm mb-6">ENTRY</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
                        まずは、話を聞いてみませんか？
                    </h2>
                    <p className="text-emerald-100 text-lg mb-12 max-w-2xl mx-auto">
                        履歴書は不要です。私服でリラックスしてお越しください。<br />
                        あなたの不安や疑問に、包み隠さずお答えします。
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/contact" className="inline-block">
                            <Button size="lg" className="bg-white text-[#064E3B] hover:bg-emerald-50 min-w-[240px] h-16 text-lg">
                                エントリーする
                            </Button>
                        </Link>
                        <Link href="/contact" className="inline-block">
                            <Button variant="outline" size="lg" className="border-emerald-400 text-emerald-100 hover:bg-emerald-900/50 hover:text-white min-w-[240px] h-16 text-lg">
                                カジュアル面談を申し込む
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
