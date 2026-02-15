import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Assessment",
        description: "Detailed analysis of material volume, composition, and logistical constraints."
    },
    {
        number: "02",
        title: "Deployment",
        description: "Rapid mobilization of specialized extraction teams and heavy machinery."
    },
    {
        number: "03",
        title: "Recovery",
        description: "High-yield processing with real-time weight and grade verification."
    },
    {
        number: "04",
        title: "Integration",
        description: "Seamless re-entry of recovered materials into the supply chain."
    }
];

const Process = () => {
    return (
        <section className="py-32 bg-mist border-b border-mineral overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-graphite mb-6">
                        Execution Framework
                    </h2>
                    <div className="h-[1px] w-32 bg-steel"></div>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-mineral z-0"></div>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-steel origin-left z-0"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative z-10"
                            >
                                <div className="w-24 h-24 bg-mist border border-mineral flex items-center justify-center mb-8 relative md:mt-0">
                                    {/* Dot on line */}
                                    <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-steel rounded-full outline outline-4 outline-mist"></div>

                                    <span className="text-3xl font-display font-light text-steel">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="text-xl font-display text-graphite mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-graphite/60 leading-relaxed font-light">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
