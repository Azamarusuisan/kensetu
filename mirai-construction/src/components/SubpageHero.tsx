interface SubpageHeroProps {
    titleEn: string;
    titleJa: string;
}

export const SubpageHero = ({ titleEn, titleJa }: SubpageHeroProps) => {
    return (
        <div className="bg-[#111] pt-32 pb-16 md:pt-40 md:pb-20">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
                    {titleEn}
                </h1>
                <p className="text-[#888] text-sm tracking-wide">{titleJa}</p>
            </div>
        </div>
    );
};
