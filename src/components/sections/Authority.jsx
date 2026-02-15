import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    "GLOBAL LOGISTICS", "METALS INC.", "INFRA CORP", "PACIFIC ENERGY", "STRATEGIC MATERIALS", "NORTHERN RAIL", "APEX CONSTRUCT"
];

const Authority = () => {
    return (
        <section className="bg-white border-b border-mineral py-12 overflow-hidden">
            <div className="container mx-auto px-6 mb-8">
                <p className="text-xs font-medium tracking-widest text-graphite/40 uppercase text-center md:text-left">
                    Trusted by Enterprise Partners
                </p>
            </div>

            {/* Marquee Effect */}
            <div className="flex relative w-full overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                    className="flex gap-24 whitespace-nowrap min-w-full px-12"
                >
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300">
                            {/* Placeholder Text Logos for now, would be SVGs */}
                            <span className="text-xl font-display font-semibold tracking-tight text-graphite">
                                {logo}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Authority;
