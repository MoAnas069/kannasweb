import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: "Scrap Collection",
        description: "Industrial-scale recovery of ferrous and non-ferrous materials."
    },
    {
        title: "Demolition Services",
        description: "Safe, controlled dismantling of buildings and structures."
    },
    {
        title: "Annual Scrap Contracts",
        description: "Long-term recovery partnerships for continuous operations."
    }
];

const Solutions = () => {
    return (
        <section className="py-32 bg-executive">
            <div className="container mx-auto px-6 md:px-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="h-[1px] w-full bg-border-subtle mb-8 group-hover:bg-steel transition-colors duration-500"></div>

                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-3xl font-display font-medium text-graphite group-hover:text-steel transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <ArrowUpRight className="text-border-subtle group-hover:text-steel transition-all duration-300 opacity-0 group-hover:opacity-100" size={24} />
                            </div>

                            <p className="text-lg text-graphite/60 font-light leading-relaxed max-w-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Solutions;
