```
import React from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import clsx from 'clsx';

const Button = ({
    variant = 'primary', // 'primary', 'secondary', 'ghost'
    size = 'md', // 'sm', 'md', 'lg'
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    className,
    as = 'button', // 'button', 'a', 'link'
    href,
    to,
    onClick,
    ...props
}) => {
    
    // Base Styles
    const baseStyles = "inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-graphite/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95";
    
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

    const checkLoading = (e) => {
        if (isLoading) {
            e.preventDefault();
            return;
        }
        if (onClick) onClick(e);
    };

    const commonProps = {
        className: clsx(baseStyles, variants[variant], sizes[size], className),
        onClick: checkLoading,
        ...props
    };

    if (as === 'link' && to) {
        return (
            <Link to={to} {...commonProps}>
                {isLoading && <Loader2 className="animate-spin mr-2" size={size === 'lg' ? 20 : 16} />}
                {!isLoading && leftIcon && <span className="mr-2 flex-shrink-0">{leftIcon}</span>}
                <span>{children}</span>
                {!isLoading && rightIcon && <span className="ml-2 flex-shrink-0">{rightIcon}</span>}
            </Link>
        );
    }

    if (as === 'a' && href) {
        return (
            <a href={href} {...commonProps}>
                {isLoading && <Loader2 className="animate-spin mr-2" size={size === 'lg' ? 20 : 16} />}
                {!isLoading && leftIcon && <span className="mr-2 flex-shrink-0">{leftIcon}</span>}
                <span>{children}</span>
                {!isLoading && rightIcon && <span className="ml-2 flex-shrink-0">{rightIcon}</span>}
            </a>
        );
    }

    return (
        <button disabled={isLoading} {...commonProps}>
             {isLoading && <Loader2 className="animate-spin mr-2" size={size === 'lg' ? 20 : 16} />}
            {!isLoading && leftIcon && <span className="mr-2 flex-shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {!isLoading && rightIcon && <span className="ml-2 flex-shrink-0">{rightIcon}</span>}
        </button>
    );
};

export default Button;
```
