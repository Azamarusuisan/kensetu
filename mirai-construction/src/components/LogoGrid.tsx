interface LogoGridProps {
    logos: { src: string; alt: string }[];
}

export const LogoGrid = ({ logos }: LogoGridProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {logos.map((logo, index) => (
                <div
                    key={index}
                    className="flex items-center justify-center h-24 bg-[#f8f8f8] rounded"
                >
                    {logo.src ? (
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-w-[70%] max-h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                        />
                    ) : (
                        <span className="text-sm text-[#ccc] font-medium">
                            {logo.alt}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};
