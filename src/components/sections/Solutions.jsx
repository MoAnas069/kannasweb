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
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group relative p-8 border border-border-subtle bg-white hover:border-steel/30 hover:shadow-xl hover:shadow-mineral/10 transition-all duration-300 rounded-lg overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-0 bg-steel group-hover:h-full transition-all duration-500 ease-out" />

                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-display font-medium text-graphite group-hover:text-brand-green transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <div className="p-2 bg-mist rounded-full group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" size={20} />
                                </div>
                            </div>

                            <p className="text-graphite/60 font-light leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <div className="w-full h-[1px] bg-border-subtle group-hover:bg-steel/30 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section >
    );
};

export default Solutions;
