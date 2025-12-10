interface SubpageHeroProps {
    titleEn: string;
    titleJa: string;
    backgroundImage?: string;
}

export const SubpageHero = ({ titleEn, titleJa, backgroundImage }: SubpageHeroProps) => {
    return (
        <div className="relative pt-52 pb-24 md:pt-64 md:pb-32 overflow-hidden bg-[#064E3B]">
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            )}
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-4 shadow-lg">
                    {titleEn}
                </h1>
                <p className="text-white/90 text-lg md:text-xl font-bold tracking-widest pl-1">{titleJa}</p>
            </div>
        </div>
    );
};
