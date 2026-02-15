import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-graphite text-mist py-20 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

                    <div className="md:col-span-1">
                        <div className="w-8 h-8 bg-mist flex items-center justify-center mb-6">
                            <div className="w-3 h-3 bg-graphite transform rotate-45"></div>
                        </div>
                        <p className="text-mist/40 text-sm leading-relaxed max-w-xs">
                            Providing advanced material recovery and logistics solutions for the world's most demanding industries.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-8">Company</h4>
                        <ul className="space-y-4 text-sm text-mist/60">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Leadership</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Sustainability</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-8">Solutions</h4>
                        <ul className="space-y-4 text-sm text-mist/60">
                            <li><Link to="/services" className="hover:text-white transition-colors">Material Recovery</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Logistics</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Infrastructure</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Consulting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-8">Contact</h4>
                        <ul className="space-y-4 text-sm text-mist/60">
                            <li>London, UK</li>
                            <li>+44 (0) 20 7123 4567</li>
                            <li>partnerships@stoneandsteel.com</li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-mist/30">
                    <p>&copy; {new Date().getFullYear()} Stone & Steel. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
