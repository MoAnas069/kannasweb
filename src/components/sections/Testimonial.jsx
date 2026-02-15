import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonial = () => {
    return (
        <section className="py-40 bg-white border-b border-mineral">
            <div className="container mx-auto px-6 max-w-5xl text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-12"
                >
                    <Quote size={48} className="text-steel/20" />
                </motion.div>

                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl md:text-5xl font-display font-medium text-graphite leading-tight tracking-tight mb-12 text-balance"
                >
                    "Their ability to handle complex, hazardous deconstruction at this scale is unmatched. A true infrastructure partner."
                </motion.blockquote>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <cite className="not-italic flex flex-col items-center">
                        <span className="text-lg font-bold text-graphite uppercase tracking-widest mb-1">
                            David Harrison
                        </span>
                        <span className="text-sm text-graphite/50 font-medium tracking-widest uppercase">
                            Chief Operations Officer, Apex Construction
                        </span>
                    </cite>
                </motion.div>

            </div>
        </section>
    );
};

export default Testimonial;
