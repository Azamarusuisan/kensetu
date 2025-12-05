import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    href: string;
    index: number;
}

export const ServiceCard = ({ title, description, icon, href, index }: ServiceCardProps) => {
    return (
        <Link href={href} className="group block h-full">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                    {icon || <div className="w-6 h-6 bg-current rounded-full" />}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4 font-sans">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>
                <div className="flex items-center text-primary font-bold text-sm group-hover:underline tracking-wide">
                    LEARN MORE <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
};
