import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
    return (
        <section className="py-32 bg-executive">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-graphite">
                        Featured<br />Cases
                    </h2>
                    <a href="/projects" className="text-sm font-medium tracking-widest text-graphite/60 hover:text-steel uppercase transition-colors hidden md:block">
                        View All Projects
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Project 1 */}
                    <div className="group cursor-pointer">
                        <div className="w-full aspect-[4/3] bg-concrete overflow-hidden relative mb-6">
                            {/* Placeholder for Image */}
                            <div className="absolute inset-0 bg-graphite/5 group-hover:bg-graphite/0 transition-colors duration-500"></div>
                            <img
                                src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2609&auto=format&fit=crop"
                                alt="Industrial Facility Demolition"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                            />
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-display font-medium text-graphite mb-1">
                                    Terminal Point 4
                                </h3>
                                <p className="text-graphite/60 font-light text-sm">
                                    Heavy Industrial Demolition • 45,000 Tons
                                </p>
                            </div>
                            <span className="text-sm text-graphite/40 font-mono">01</span>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group cursor-pointer lg:mt-24">
                        <div className="w-full aspect-[4/3] bg-concrete overflow-hidden relative mb-6">
                            {/* Placeholder for Image */}
                            <div className="absolute inset-0 bg-graphite/5 group-hover:bg-graphite/0 transition-colors duration-500"></div>
                            <img
                                src="https://images.unsplash.com/photo-1565626424177-8c339d9368d4?q=80&w=2670&auto=format&fit=crop"
                                alt="Steel Processing Plant"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                            />
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-display font-medium text-graphite mb-1">
                                    Sector 7 Foundry
                                </h3>
                                <p className="text-graphite/60 font-light text-sm">
                                    Strategic Asset Recovery • 18 Months
                                </p>
                            </div>
                            <span className="text-sm text-graphite/40 font-mono">02</span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 md:hidden">
                    <a href="/projects" className="text-sm font-medium tracking-widest text-graphite/60 hover:text-steel uppercase transition-colors">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
