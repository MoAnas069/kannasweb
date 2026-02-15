import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScrollPosition from '../../hooks/useScrollPosition';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    const scrollPosition = useScrollPosition();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Threshold for frosted glass effect
    // Also apply if not on Home page for better visibility on white backgrounds
    const isHome = location.pathname === '/';
    const isScrolled = scrollPosition > 50 || !isHome;

    const navItems = [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out border-b py-4",
                isScrolled
                    ? "bg-mist/80 backdrop-blur-md border-mineral shadow-sm h-16"
                    : "bg-transparent border-transparent h-24"
            )}
        >
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo Area */}
                <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                    {/* Abstract minimalist logo mark */}
                    <div className={clsx(
                        "w-8 h-8 flex items-center justify-center transition-colors duration-300",
                        isScrolled ? "bg-graphite" : "bg-white"
                    )}>
                        <div className={clsx(
                            "w-3 h-3 transform rotate-45 transition-colors duration-300",
                            isScrolled ? "bg-mist" : "bg-graphite"
                        )}></div>
                    </div>
                    <span className={clsx(
                        "font-display font-bold tracking-tight text-xl transition-colors duration-300",
                        isScrolled ? "text-graphite" : "text-white"
                    )}>
                        STONE & STEEL
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={clsx(
                                "text-sm font-medium transition-colors duration-300 uppercase tracking-wide",
                                isScrolled
                                    ? "text-graphite/80 hover:text-steel"
                                    : "text-white/80 hover:text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link to="/contact" className={clsx(
                        "transition-colors duration-500 px-6 py-2 text-sm font-medium tracking-wide",
                        isScrolled
                            ? "bg-graphite text-mist hover:bg-steel"
                            : "bg-white text-graphite hover:bg-white/90"
                    )}>
                        PARTNER ACCESS
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={clsx(
                            "p-1 transition-colors duration-300",
                            isScrolled ? "text-graphite" : "text-white"
                        )}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-mist border-b border-mineral p-6 shadow-xl md:hidden"
                    >
                        <div className="flex flex-col gap-4 items-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-display font-medium text-graphite hover:text-steel"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="w-full bg-graphite text-mist py-3 mt-4 text-sm tracking-wide text-center">
                                PARTNER ACCESS
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
