import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';


// Note: I'm not using Radix Slot yet as I haven't installed it, 
// but I'll implement a simple asChild behavior if needed or just standard button for now.
// Actually, for "asChild" support (like Button as Link), Radix Slot is best.
// But to keep it simple without extra deps for now, I'll just accept standard props.
// If I need asChild, I'll install @radix-ui/react-slot.
// For now, I'll just wrap children.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                    {
                        'bg-primary text-white hover:bg-primary-hover border border-transparent': variant === 'primary',
                        'bg-secondary text-white hover:bg-opacity-90 border border-transparent': variant === 'secondary',
                        'border-2 border-primary text-primary hover:bg-primary/10': variant === 'outline',
                        'hover:bg-gray-100 text-text-primary border border-transparent': variant === 'ghost',
                        'bg-white text-primary hover:bg-gray-50 border border-transparent': variant === 'white',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-6 text-base': size === 'md',
                        'h-14 px-8 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
