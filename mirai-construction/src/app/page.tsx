import { HeroSection } from '@/components/HeroSection';
import { LogoGrid } from '@/components/LogoGrid';
import { NewsList } from '@/components/NewsList';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Concept Section */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-center">
            <div className="w-full md:w-1/2">
              <p className="text-xs tracking-[0.3em] text-[#10B981] font-medium mb-4">CONCEPT</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">私たちの想い</h2>
              <p className="text-[#555] leading-[2.2] mb-6">
                株式会社リッチ＆ビルドは、施工管理の人材派遣を通じて建設業界に新しい風を吹き込みます。
              </p>
              <p className="text-[#555] leading-[2.2] mb-10">
                経験やスキルがなくても、「やり続ける力」があれば必ず成長できる。
                若い力と情熱で、日本の建設現場をもっと元気に、もっと魅力的に。
              </p>
              <Link
                href="/company"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#111] hover:text-[#10B981] transition-colors"
              >
                VIEW MORE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/images/concept-team.png"
                  alt="チームワーク"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-28 md:py-36 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-[#10B981] font-medium mb-4">BUSINESS</p>
            <h2 className="text-3xl md:text-4xl font-bold">事業内容</h2>
          </div>

          <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-2/5">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/images/business-construction.png"
                    alt="施工管理"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl font-bold mb-6">施工管理人材派遣</h3>
                <p className="text-[#555] leading-[2.2] mb-8">
                  建築・土木・設備・電気など、あらゆる建設現場において即戦力となる施工管理技術者を派遣します。
                  未経験者の育成から、経験豊富なベテランまで、現場のニーズに合わせた最適な人材をマッチングします。
                </p>
                <ul className="space-y-3 text-[#333]">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                    若手人材の積極採用・育成
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                    キャリアアップ支援制度
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                    安心のサポート体制
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/service"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#111] hover:text-[#10B981] transition-colors"
            >
              VIEW MORE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-[#10B981] font-medium mb-4">CLIENT</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">取引実績</h2>
            <p className="text-[#555]">
              大手ゼネコン・サブコンを含む多数の企業様との取引実績があります
            </p>
          </div>

          <LogoGrid logos={[
            { src: '', alt: 'Client 1' },
            { src: '', alt: 'Client 2' },
            { src: '', alt: 'Client 3' },
            { src: '', alt: 'Client 4' },
            { src: '', alt: 'Client 5' },
            { src: '', alt: 'Client 6' },
            { src: '', alt: 'Client 7' },
            { src: '', alt: 'Client 8' },
          ]} />

          <div className="text-center mt-12">
            <Link
              href="/client"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#111] hover:text-[#10B981] transition-colors"
            >
              VIEW MORE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-28 md:py-36 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#10B981] font-medium mb-4">NEWS</p>
              <h2 className="text-3xl md:text-4xl font-bold">お知らせ</h2>
            </div>
            <Link
              href="/news"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-[#111] hover:text-[#10B981] transition-colors"
            >
              VIEW ALL <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <NewsList />
        </div>
      </section>

      {/* Member Section */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-[#10B981] font-medium mb-4">MEMBER</p>
            <h2 className="text-3xl md:text-4xl font-bold">経営陣</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* CEO */}
            <div className="text-center">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-300 font-medium">
                  PHOTO
                </div>
              </div>
              <p className="text-xs tracking-[0.2em] text-[#10B981] font-medium mb-2">CEO</p>
              <h3 className="text-xl font-bold mb-1">荒井 武志</h3>
              <p className="text-sm text-[#555] mb-4">代表取締役</p>
              <p className="text-sm text-[#555] leading-relaxed">
                「継続は力なり」をモットーに、仲間と一緒に大きな成長を目指す会社を創る。
              </p>
            </div>

            {/* Director */}
            <div className="text-center">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-300 font-medium">
                  PHOTO
                </div>
              </div>
              <p className="text-xs tracking-[0.2em] text-[#10B981] font-medium mb-2">DIRECTOR</p>
              <h3 className="text-xl font-bold mb-1">鵜山 康宏</h3>
              <p className="text-sm text-[#555] mb-4">取締役</p>
              <p className="text-sm text-[#555] leading-relaxed">
                営業の世界で叩き上げ。23歳で起業し、現在は複数の会社を経営する実業家。
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/company"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#111] hover:text-[#10B981] transition-colors"
            >
              VIEW MORE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recruit CTA Section */}
      <section className="relative py-32 overflow-hidden bg-[#111]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <p className="text-xs tracking-[0.3em] text-[#10B981] font-medium mb-4">RECRUIT</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">一緒に、未来を創ろう。</h2>
          <p className="text-[#999] mb-10 leading-relaxed">
            経験は問いません。大切なのは「やり続ける力」。<br />
            私たちと一緒に、建設業界の新しいスタンダードを創りませんか？
          </p>
          <Link
            href="/recruit"
            className="inline-flex items-center gap-2 bg-[#10B981] text-white px-10 py-4 rounded font-medium hover:bg-[#059669] transition-colors"
          >
            採用情報を見る <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] text-[#10B981] font-medium mb-4">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-[#555] mb-10">
            人材に関するご相談、お見積もりなど、お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#111] text-[#111] px-10 py-4 rounded font-medium hover:bg-[#111] hover:text-white transition-colors"
          >
            お問い合わせはこちら <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
