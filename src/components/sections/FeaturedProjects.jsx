import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const FeaturedProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Terminal Point 4",
            subtitle: "Heavy Industrial Demolition",
            metric: "45,000 Tons",
            image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2609&auto=format&fit=crop",
            description: "A complex dismantling operation of a coastal industrial terminal. The project required precise structural engineering to ensure zero environmental contamination of the adjacent marine ecosystem.",
            details: ["14 Month Duration", "Zero Lost Time Injuries", "98% Material Recovery Rate"]
        },
        {
            id: 2,
            title: "Sector 7 Foundry",
            subtitle: "Strategic Asset Recovery",
            metric: "18 Months",
            image: "https://images.unsplash.com/photo-1565626424177-8c339d9368d4?q=80&w=2670&auto=format&fit=crop",
            description: "Full-scale decommissioning of a high-capacity steel foundry. Our team managed the liquidation of assets and the safe recycling of hazardous processing units.",
            details: ["Specialized Heavy Lift", "Hazardous Material Abatement", "Site Clearance Certified"]
        }
    ];

    return (
        <section className="py-32 bg-executive">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-graphite">
                        Featured<br />Cases
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className={`group cursor-pointer ${index === 1 ? 'lg:mt-24' : ''}`}
                        >
                            <div className="w-full aspect-[4/3] bg-concrete overflow-hidden relative mb-6">
                                <div className="absolute inset-0 bg-graphite/5 group-hover:bg-graphite/0 transition-colors duration-500"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-display font-medium text-graphite mb-1 group-hover:text-steel transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-graphite/60 font-light text-sm">
                                        {project.subtitle} • {project.metric}
                                    </p>
                                </div>
                                <span className="text-sm text-graphite/40 font-mono">0{project.id}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title || 'Project Details'}
            >
                {selectedProject && (
                    <div className="space-y-6">
                        <div className="w-full h-48 md:h-64 overflow-hidden rounded-md">
                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex justify-between items-center border-b border-border-subtle pb-4">
                            <div>
                                <h4 className="text-lg font-medium text-graphite">{selectedProject.subtitle}</h4>
                                <span className="text-steel text-sm font-mono tracking-wider">{selectedProject.metric}</span>
                            </div>
                        </div>
                        <p className="text-graphite/70 font-light leading-relaxed">
                            {selectedProject.description}
                        </p>
                        <div>
                            <h5 className="text-sm uppercase tracking-widest text-graphite/50 mb-3">Key Outcomes</h5>
                            <ul className="space-y-2">
                                {selectedProject.details.map((detail, i) => (
                                    <li key={i} className="flex items-center text-sm text-graphite/80">
                                        <div className="w-1.5 h-1.5 bg-steel rounded-full mr-3"></div>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-4 flex justify-end">
                            <Button variant="secondary" onClick={() => setSelectedProject(null)}>close</Button>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default FeaturedProjects;
