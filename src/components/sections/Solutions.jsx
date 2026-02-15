import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Box, Anchor, Zap, Shield, Cpu } from 'lucide-react';

const solutions = [
    {
        title: "Material Recovery",
        description: "Advanced separation technologies for ferrous and non-ferrous reclamation.",
        icon: Box,
    },
    {
        title: "Logistics Infrastructure",
        description: "Multimodal transport network integration for high-volume deployment.",
        icon: Anchor,
    },
    {
        title: "Energy & Power",
        description: "Sustainable fuel processing and energy recovery systems.",
        icon: Zap,
    },
    {
        title: "Compliance & Safety",
        description: "ISO-certified protocols for hazardous material handling.",
        icon: Shield,
    },
    {
        title: "Technological Integration",
        description: "Real-time tracking and automated processing capabilities.",
        icon: Cpu,
    },
    {
        title: "Strategic Consulting",
        description: "Capital allocation and operational efficiency analysis.",
        icon: ArrowUpRight,
    },
];

const Solutions = () => {
    return (
        <section id="industries" className="py-32 bg-mist">
            <div className="container mx-auto px-6">

                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-graphite mb-6">
                        Industrial Solutions
                    </h2>
                    <div className="h-[1px] w-32 bg-steel"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-mineral border border-mineral">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-mist p-12 h-96 flex flex-col justify-between hover:z-10 transition-all duration-500 hover:shadow-2xl hover:shadow-mineral/50"
                        >
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />

                            <div className="relative z-10 flex justify-between items-start">
                                <item.icon
                                    size={48}
                                    strokeWidth={1}
                                    className="text-graphite group-hover:text-steel transition-colors duration-500"
                                />
                                <ArrowUpRight
                                    size={24}
                                    strokeWidth={1}
                                    className="text-mineral group-hover:text-steel opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                                />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-display text-graphite mb-3 group-hover:translate-x-2 transition-transform duration-500">
                                    {item.title}
                                </h3>
                                <p className="text-graphite/60 leading-relaxed font-light group-hover:text-graphite/80 transition-colors duration-500">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Solutions;
