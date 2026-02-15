import React from 'react';

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
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-8">Solutions</h4>
                        <ul className="space-y-4 text-sm text-mist/60">
                            <li><a href="#" className="hover:text-white transition-colors">Material Recovery</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Logistics</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Infrastructure</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-8">Contact</h4>
                        <ul className="space-y-4 text-sm text-mist/60">
                            <li>New York, NY</li>
                            <li>+1 (555) 000-0000</li>
                            <li>partnerships@stoneandsteel.com</li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-mist/30">
                    <p>&copy; {new Date().getFullYear()} Stone & Steel. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
