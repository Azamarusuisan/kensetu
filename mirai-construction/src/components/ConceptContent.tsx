import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const ConceptContent = () => {
    return (
        <section className="py-32 bg-[#F7FAFC]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Left: Text Content */}
                    <div className="w-full md:w-1/2">
                        <div className="mb-12">
                            <h2 className="text-5xl font-bold tracking-widest mb-2 font-sans">CONCEPT</h2>
                            <p className="text-sm font-bold tracking-widest text-gray-500">NEXT CONSTRUCTIONについて</p>
                        </div>

                        <h3 className="text-2xl font-bold mb-8 leading-relaxed">
                            建設業界のNEXTリーダーをつくる。
                        </h3>

                        <p className="text-gray-600 leading-loose mb-12 font-medium">
                            “ゼロからの挑戦”　設備・電気のスペシャリストとして成長し、<br />
                            あなたの力で業界の未来を切り拓くNEXTリーダーになりませんか？
                        </p>

                        <Link href="/company">
                            <Button variant="outline" className="rounded-full px-12 py-6 text-sm tracking-widest border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
                                VIEW MORE
                            </Button>
                        </Link>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-1/2">
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/images/concept-workers.png"
                                alt="Concept Workers"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
