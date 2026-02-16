import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: "Assess",
        description: "Site evaluation and material logic."
    },
    {
        title: "Plan",
        description: "Engineering the safe dismantling path."
    },
    {
        title: "Execute",
        description: "Controlled demolition and extraction."
    },
    {
        title: "Recover",
        description: "Sorting and processing capability."
    },
    {
        title: "Process",
        description: "Material preparation for market."
    }
];

const Process = () => {
    return (
        <section className="py-32 bg-executive border-t border-b border-border-subtle">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-20 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-graphite mb-6">
                        A Disciplined Recovery Process
                    </h2>
                    <p className="text-xl text-graphite/60 font-light">
                        Industrial buyers trust structured process.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between relative">
                    {/* Animated Horizontal Line for Desktop */}
                    <div className="hidden md:block absolute top-[18px] left-0 w-full h-[1px] bg-border-subtle z-0">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-steel"
                        />
                    </div>

                    {steps.map((step, index) => ( // Wait, the variable is 'steps', not 'services'. Previous file view showed 'steps'.
                        <div key={index} className="relative z-10 flex-1 group">
                            {/* Dot */}
                            <motion.div
                                initial={{ scale: 0.8, backgroundColor: "#fff" }} // executive white
                                whileInView={{ scale: 1, backgroundColor: "#fff" }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3, duration: 0.3 }}
                                className="w-10 h-10 rounded-full bg-executive border border-border-subtle flex items-center justify-center mb-6 z-10 relative group-hover:border-steel group-hover:scale-110 transition-all duration-300 shadow-sm"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: index * 0.3 + 0.2 }}
                                    className="w-2 h-2 bg-brand-green rounded-full"
                                />
                            </motion.div>

                            <div className="pr-8 group-hover:translate-x-1 transition-transform duration-300">
                                <h3 className="text-xl font-display font-medium text-graphite mb-2 group-hover:text-steel transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-graphite/50 leading-relaxed font-light">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
