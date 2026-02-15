import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
    return (
        <section className="py-48 bg-mist relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mineral to-transparent"></div>

            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-display font-medium text-graphite mb-12 tracking-tight"
                >
                    Built for Industrial Scale.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <button className="group bg-graphite text-white pl-10 pr-8 py-6 flex items-center gap-4 hover:bg-steel transition-all duration-500">
                        <span className="font-medium tracking-widest text-sm uppercase">Start a Conversation</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
