import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const serviceList = [
        {
            title: "Scrap Collection",
            subtitle: "Ferrous & Non-Ferrous Recovery",
            description: "We implement large-scale containerization and logistics solutions for manufacturing facilities, ensuring continuous material flow without operational disruption.",
            details: ["Automated Collection Units", "Real-time Weight Tracking", "Hazardous Material Segregation"]
        },
        {
            title: "Demolition Services",
            subtitle: "Controlled Deconstruction",
            description: "From industrial plant dismantling to structural decommissioning, our teams execute high-risk projects with absolute precision and regulatory compliance.",
            details: ["Site Decommissioning", "Heavy Machinery Deployment", "Asset Recovery & Liquidation"]
        },
        {
            title: "Annual Contracts",
            subtitle: "Strategic Partnership",
            description: "Long-term agreements designed for enterprise stability. We provide predictable pricing models and priority operational support for large volume partners.",
            details: ["Fixed-Rate Pricing", "Priority Logistics", "Dedicated Account Management"]
        }
    ];

    return (
        <div className="bg-executive min-h-screen text-graphite">
            <div className="pt-32 pb-12 px-6 container mx-auto">
                <h1 className="text-5xl md:text-7xl font-display font-medium mb-16 text-graphite">
                    Industrial Services
                </h1>

                <div className="space-y-24">
                    {serviceList.map((service, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-graphite/10 pt-12">
                            <div className="lg:col-span-4">
                                <h2 className="text-3xl font-display font-medium mb-2">{service.title}</h2>
                                <span className="text-steel uppercase tracking-widest text-sm font-medium">{service.subtitle}</span>
                            </div>

                            <div className="lg:col-span-5">
                                <p className="text-xl text-graphite/70 font-light leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="lg:col-span-3">
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
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Services;
