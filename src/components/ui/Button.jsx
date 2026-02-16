import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import clsx from 'clsx';

const MotionButton = motion.button;
const MotionLink = motion(Link);
const MotionAnchor = motion.a;

const Button = ({
    variant = 'primary', // 'primary', 'secondary', 'ghost'
    size = 'md', // 'sm', 'md', 'lg'
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    className,
    as = 'button', // 'button', 'a', Link
    href,
    to,
    onClick,
    ...props
}) => {

    // Base Styles
    const baseStyles = "inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-graphite/20";

    // Variants
    const variants = {
        primary: "bg-graphite text-white hover:bg-steel shadow-sm",
        secondary: "bg-transparent border border-graphite/20 text-graphite hover:bg-graphite/5 hover:border-graphite/40",
        ghost: "bg-transparent text-graphite/60 hover:text-steel hover:bg-graphite/5"
    };

    // Sizes
    const sizes = {
        sm: "text-xs px-4 py-2 gap-2 rounded-sm",
        md: "text-xs px-6 py-3 gap-3 rounded-md",
        lg: "text-sm px-8 py-4 gap-4 rounded-md"
    };

    // Motion Properties for Subtle "Engineered" Feel
    const motionProps = {
        whileHover: { y: -1, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
        whileTap: { y: 1, scale: 0.99, transition: { duration: 0.1 } }
    };

    let Component = MotionButton;
    if (as === 'link') Component = MotionLink;
    else if (as === 'a') Component = MotionAnchor;

    const checkLoading = (e) => {
        if (isLoading) {
            e.preventDefault();
            return;
        }
        if (onClick) onClick(e);
    };

    return (
        <Component
            {...motionProps}
            className={clsx(baseStyles, variants[variant], sizes[size], className)}
            onClick={checkLoading}
            href={as === 'a' ? href : undefined}
            to={as === 'link' ? to : undefined}
            disabled={isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="animate-spin" size={size === 'lg' ? 20 : 16} />}
            {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}

            <span>{children}</span>

            {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </Component>
    );
};

export default Button;
