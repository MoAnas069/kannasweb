import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ui/ScrollReveal';
import scrapImage from '../assets/images/service_scrap.png';
import demolitionImage from '../assets/images/service_demolition.png';
import contractsImage from '../assets/images/service_contracts.png';

const Services = () => {
    const serviceList = [
        {
            title: "Scrap Collection",
            subtitle: "Ferrous & Non-Ferrous Recovery",
            description: "We implement large-scale containerization and logistics solutions for manufacturing facilities, ensuring continuous material flow without operational disruption.",
            details: ["Automated Collection Units", "Real-time Weight Tracking", "Hazardous Material Segregation"],
            image: scrapImage
        },
        {
            title: "Demolition Services",
            subtitle: "Controlled Deconstruction",
            description: "From industrial plant dismantling to structural decommissioning, our teams execute high-risk projects with absolute precision and regulatory compliance.",
            details: ["Site Decommissioning", "Heavy Machinery Deployment", "Asset Recovery & Liquidation"],
            image: demolitionImage
        },
        {
            title: "Annual Contracts",
            subtitle: "Strategic Partnership",
            description: "Long-term agreements designed for enterprise stability. We provide predictable pricing models and priority operational support for large volume partners.",
            details: ["Fixed-Rate Pricing", "Priority Logistics", "Dedicated Account Management"],
            image: contractsImage
        }
    ];

    return (
        <div className="bg-executive min-h-screen text-graphite">
            <div className="pt-24 md:pt-32 pb-12 px-6 container mx-auto">
                <ScrollReveal>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-medium mb-12 md:mb-16 text-graphite">
                        Industrial Services
                    </h1>
                </ScrollReveal>

                <div className="space-y-16 md:space-y-24">
                    {serviceList.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-graphite/10 pt-12 items-start">
                                <div className="lg:col-span-4">
                                    <div className="mb-6 h-48 w-full overflow-hidden rounded-md bg-concrete">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                                    </div>
                                    <h2 className="text-3xl font-display font-medium mb-2">{service.title}</h2>
                                    <span className="text-steel uppercase tracking-widest text-sm font-medium">{service.subtitle}</span>
                                </div>

                                <div className="lg:col-span-5">
                                    <p className="text-xl text-graphite/70 font-light leading-relaxed my-4">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="lg:col-span-3">
                                    <span className="text-sm font-medium text-graphite/40 group-hover:text-brand-green transition-colors">0{index + 1}</span>
                                    <h4 className="text-sm font-medium uppercase tracking-widest mb-4 opacity-50">Capabilities</h4>
                                    <ul className="space-y-3">
                                        {service.details.map((detail, i) => (
                                            <li key={i} className="flex items-center text-graphite/80 font-light">
                                                <div className="w-1.5 h-1.5 bg-steel rounded-full mr-3"></div>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Services;
