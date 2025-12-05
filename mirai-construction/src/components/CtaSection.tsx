import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface CtaSectionProps {
    title: string;
    subtitle: string;
    buttonText: string;
    href: string;
    backgroundImage?: string;
    variant?: 'default' | 'simple';
}

export const CtaSection = ({ title, subtitle, buttonText, href, backgroundImage, variant = 'default' }: CtaSectionProps) => {
    if (variant === 'simple') {
        return (
            <section id="contact" className="bg-primary py-20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-sans">{title}</h2>
                    <p className="text-white/90 mb-8 font-medium">{subtitle}</p>
                    <Link href={href}>
                        <Button variant="white" size="lg" className="min-w-[200px]">
                            {buttonText}
                        </Button>
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section id="recruit" className="relative py-32 md:py-40 overflow-hidden bg-gray-900">
            {/* Background Placeholder */}
            <div className="absolute inset-0 z-0 bg-gray-800">
                {/* TODO: Insert recruit-bg.jpg here */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight font-sans">{title}</h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">{subtitle}</p>
                <Link href={href}>
                    <Button variant="primary" size="lg" className="h-14 px-10 text-lg">
                        {buttonText}
                    </Button>
                </Link>
            </div>
        </section>
    );
};
