import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Philosophy = () => {
    return (
        <section id="process" className="py-32 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-mineral/10 transform skew-x-12 translate-x-32" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-start">

                    <div className="lg:w-1/3">
                        <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-4">
                            Operational Philosophy
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-display font-medium text-graphite leading-tight mb-8">
                            Precision in every metric.
                        </h3>
                        <p className="text-lg text-graphite/70 font-light leading-relaxed mb-8">
                            We don't just move materials; we engineer supply chain stability. Our approach relies on rigorous data analysis, strict safety compliance, and capital efficiency.
                        </p>
                        <Button variant="link" to="/about">
                            Read Our Safety Report
                        </Button>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            {
                                title: "Compliance First",
                                body: "Adhering to the strictest environmental and safety regulations globally. We operate with full transparency."
                            },
                            {
                                title: "Zero-Error Logistics",
                                body: "Our logistics network is managed with algorithmic precision to ensure timeline integrity."
                            },
                            {
                                title: "Capital Protection",
                                body: "Maximizing yield recovery and minimizing operational overhead for our partners."
                            },
                            {
                                title: "Long-Term Deployment",
                                body: "Building infrastructure meant to last decades, not fiscal quarters."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-[1px] w-full bg-mineral mb-6 group-hover:bg-brand-green transition-colors duration-500" />
                                <h4 className="text-xl font-display text-graphite mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                    {item.title}
                                </h4>
                                <p className="text-graphite/60 font-light leading-relaxed">
                                    {item.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Philosophy;
