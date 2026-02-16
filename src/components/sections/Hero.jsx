import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center bg-mist">

            {/* Background Image Layer with Parallax-like static feel or actual parallax */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // "Cinematic Image Reveal"
                className="absolute inset-0 z-0"
            >
                {/* Placeholder for Industrial Image. Replace with actual asset later. */}
                <div className="relative w-full h-full bg-neutral-200">
                    {/* Overlay for text readability (light theme uses white/mist overlays) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-mist via-mist/80 to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                        alt="Industrial Architecture"
                        className="w-full h-full object-cover opacity-80 grayscale mix-blend-multiply"
                    />
                </div>
            </motion.div>

            {/* Content Layer */}
            <div className="container mx-auto px-6 relative z-20 pt-20">
                <div className="max-w-4xl">

                    {/* Staggered Text Rise: Headline */}
                    <div className="overflow-hidden mb-2">
                        <motion.h1
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-graphite leading-[0.95] tracking-tight text-balance"
                        >
                            Precision Infrastructure
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden mb-8">
                        <motion.h1
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-graphite leading-[0.95] tracking-tight"
                        >
                            <span className="text-brand-green">for Modern Industry.</span>
                        </motion.h1>
                    </div>

                    {/* Staggered Text Rise: Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl text-graphite/70 font-light max-w-2xl mb-12 leading-relaxed"
                    >
                        Scalable operational excellence for enterprise logistics, material recovery, and capital infrastructure projects.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex items-center gap-6"
                    >
                        <Button to="/contact" variant="primary" className="px-10 py-5">
                            REQUEST PARTNERSHIP
                        </Button>
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-graphite/20"></div>
                            <span className="text-sm tracking-widest text-graphite/60 uppercase">Global Operations</span>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator or bottom element */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-6 right-6 flex justify-between items-end border-b border-graphite/10 pb-4 text-xs font-medium tracking-widest text-graphite/40 uppercase relative z-20"
            >
                <span>Est. 1998</span>
                <span>Scroll to Explore</span>
                <span>ISO 9001 Certified</span>
            </motion.div>
        </section>
    );
};

export default Hero;
