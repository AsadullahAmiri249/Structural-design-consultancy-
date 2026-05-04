import React from 'react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-navy text-white hover:bg-steel',
      secondary: 'bg-concrete text-navy hover:bg-gray-200',
      outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
      accent: 'bg-accent text-navy hover:bg-[#e09150] font-bold',
      ghost: 'bg-transparent text-navy hover:bg-concrete',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-none font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-steel focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false, 
  dark = false,
  className 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean; 
  dark?: boolean;
  className?: string;
}) => (
  <div className={cn(
    'max-w-4xl mb-12', 
    centered && 'mx-auto text-center',
    className
  )}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn(
        "inline-block mb-3 h-1 w-12",
        dark ? "bg-accent" : "bg-steel"
      )} />
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight',
        dark ? 'text-white' : 'text-navy'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg md:text-xl leading-relaxed',
          dark ? 'text-gray-300' : 'text-gray-600'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  </div>
);

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn('bg-white border-t-4 border-steel p-8 shadow-sm hover:shadow-xl transition-all duration-300', className)}>
    {children}
  </div>
);
