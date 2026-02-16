import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import heroImage from '../../assets/images/hero_industrial.png';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effect for the background
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center bg-graphite text-white">

            {/* Background Image Layer */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-graphite/40 z-10" /> {/* Overlay for readability */}
                <img
                    src={heroImage}
                    alt="Industrial Facility"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-tight tracking-tight mb-8">
                        Sustainable <br />
                        <span className="text-brand-green">Material Recovery</span> <br />
                        <span className="text-white">for Modern Industry.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-mist/80 max-w-2xl font-light mb-12 border-l-2 border-brand-green pl-6">
                        We transform industrial by-products into valuable resources through advanced processing and ethical stewardship.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
                            Start a Conversation
                        </Button>
                        <Button to="/services" variant="outline" className="text-lg px-8 py-4 bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10">
                            Explore Solutions
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-[0.2em] text-mist/60">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown className="text-brand-green" size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
