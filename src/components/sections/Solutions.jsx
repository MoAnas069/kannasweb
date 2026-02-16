import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import scrapImage from '../../assets/images/service_scrap.png';
import demolitionImage from '../../assets/images/service_demolition.png';
import contractsImage from '../../assets/images/service_contracts.png';

const services = [
    {
        title: "Scrap Collection",
        description: "Industrial-scale recovery of ferrous and non-ferrous materials.",
        image: scrapImage
    },
    {
        title: "Demolition Services",
        description: "Safe, controlled dismantling of buildings and structures.",
        image: demolitionImage
    },
    {
        title: "Annual Scrap Contracts",
        description: "Long-term recovery partnerships for continuous operations.",
        image: contractsImage
    }
];

const Solutions = () => {
    return (
        <section className="py-20 md:py-32 bg-executive">
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
                            className="group relative h-[400px] border border-border-subtle bg-white hover:border-brand-green/30 hover:shadow-2xl hover:shadow-brand-green/10 transition-all duration-500 rounded-lg overflow-hidden flex flex-col justify-end p-8"
                        >
                            {/* Background Image with Gradient Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/40 to-transparent z-10" />
                            </div>

                            <div className="relative z-20">
                                <div className="absolute top-0 left-0 w-1 h-0 bg-brand-green group-hover:h-full transition-all duration-500 ease-out" />

                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-display font-medium text-white group-hover:text-brand-green transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-brand-green group-hover:text-white text-white transition-colors duration-300">
                                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" size={20} />
                                    </div>
                                </div>

                                <p className="text-mist/80 font-light leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section >
    );
};

export default Solutions;
