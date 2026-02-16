import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Loader2 } from 'lucide-react';

const Button = ({
    children,
    variant = 'primary', // primary, secondary, outline
    to,
    onClick,
    className,
    isLoading = false,
    disabled = false,
    type = 'button',
    ...props
}) => {
    // Base styles for all buttons
    const baseStyles = "relative inline-flex items-center justify-center font-medium tracking-wide border transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-steel/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none active:scale-[0.99]";

    // Variant-specific styles
    const variants = {
        primary: "bg-graphite text-white border-transparent hover:bg-brand-green hover:text-white shadow-sm hover:shadow-md hover:-translate-y-[1px] active:translate-y-[1px]",
        secondary: "bg-transparent text-graphite border-border-subtle hover:bg-concrete hover:border-brand-green shadow-none hover:-translate-y-[1px] active:translate-y-[1px]",
        outline: "bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white/40 shadow-none hover:-translate-y-[1px] active:translate-y-[1px]", // For dark backgrounds
        white: "bg-white text-graphite border-transparent hover:bg-mist shadow-sm hover:shadow-md hover:-translate-y-[1px] active:translate-y-[1px]",
        link: "bg-transparent text-brand-green border-b border-graphite rounded-none px-0 py-1 hover:text-graphite hover:border-steel shadow-none hover:translate-y-0 active:translate-y-0 h-auto tracking-widest text-xs uppercase"
    };

    // Size/Spacing
    const sizes = "px-8 py-4 text-sm uppercase tracking-[0.1em] rounded-md"; // Slightly rounded for premium feel, not full pill unless specified

    const classes = clsx(
        baseStyles,
        variants[variant],
        variant !== 'link' && sizes,
        className
    );

    // Initial and tap animation props for Framer Motion (optional, but CSS transition is preferred for simple effects as per prompt)
    // The prompt asked for "Apple-level" simplicity, so CSS transitions (duration-200) handled in classes are best.
    // However, the prompt specifically asked for "translateY(1px)" on click. We can achieve this with active: classes.

    // Logic to render Link or button
    if (to && !disabled) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {children}
        </button>
    );
};

export default Button;
