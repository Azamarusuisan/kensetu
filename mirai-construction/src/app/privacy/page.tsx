import { SubpageHero } from '@/components/SubpageHero';

export default function PrivacyPage() {
    return (
        <main>
            <SubpageHero titleEn="PRIVACY POLICY" titleJa="個人情報保護方針" />

            <div className="container mx-auto px-6 py-24">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-2xl shadow-sm border border-emerald-100">
                    <div className="prose prose-emerald max-w-none prose-headings:font-bold prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:text-emerald-800/70">
                        <p className="text-[#064E3B] font-medium">
                            当社は、お客様の個人情報を適切に保護することを重要な責務と考え、以下の方針に基づき個人情報の保護に努めます。
                        </p>

                        <h3 className="flex items-center gap-3 text-[#064E3B] border-b border-emerald-100 pb-2">
                            <span className="text-emerald-500 font-bold">01</span>
                            個人情報の収集について
                        </h3>
                        <p>
                            当社は、適法かつ公正な手段によって個人情報を収集いたします。
                        </p>

                        <h3 className="flex items-center gap-3 text-[#064E3B] border-b border-emerald-100 pb-2">
                            <span className="text-emerald-500 font-bold">02</span>
                            個人情報の利用目的
                        </h3>
                        <p>
                            収集した個人情報は、以下の目的で利用いたします。
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-emerald-800/70">
                            <li>お客様へのサービス提供</li>
                            <li>お問い合わせへの対応</li>
                            <li>サービス改善のための分析</li>
                        </ul>

                        <h3 className="flex items-center gap-3 text-[#064E3B] border-b border-emerald-100 pb-2">
                            <span className="text-emerald-500 font-bold">03</span>
                            個人情報の第三者提供
                        </h3>
                        <p>
                            当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                        </p>

                        <h3 className="flex items-center gap-3 text-[#064E3B] border-b border-emerald-100 pb-2">
                            <span className="text-emerald-500 font-bold">04</span>
                            個人情報の管理
                        </h3>
                        <p>
                            当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
                        </p>

                        <h3 className="flex items-center gap-3 text-[#064E3B] border-b border-emerald-100 pb-2">
                            <span className="text-emerald-500 font-bold">05</span>
                            お問い合わせ
                        </h3>
                        <p>
                            個人情報の取り扱いに関するお問い合わせは、当社までご連絡ください。
                        </p>
                        <div className="bg-[#F0FDF4] p-6 rounded-lg mt-4 not-prose">
                            <p className="font-bold text-[#064E3B] mb-2">株式会社リッチ＆ビルド</p>
                            <p className="text-sm text-emerald-800/70">
                                メール：takeshi.arai625@gmail.com<br />
                                電話：090-7797-6699<br />
                                担当：荒井 武志
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-emerald-100 text-right">
                        <p className="text-sm text-emerald-600/70">
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
