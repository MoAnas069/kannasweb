import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from '../ui/ProjectModal';

const FeaturedProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Terminal Point 4",
            type: "Heavy Industrial Demolition",
            scale: "45,000 Tons",
            image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2609&auto=format&fit=crop",
            number: "01"
        },
        {
            id: 2,
            title: "Sector 7 Foundry",
            type: "Strategic Asset Recovery",
            scale: "18 Months",
            image: "https://images.unsplash.com/photo-1565626424177-8c339d9368d4?q=80&w=2670&auto=format&fit=crop",
            number: "02",
            className: "lg:mt-24"
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
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className={`group cursor-pointer ${project.className || ''}`}
                        >
                            <div className="w-full aspect-[4/3] bg-concrete overflow-hidden relative mb-6">
                                <div className="absolute inset-0 bg-graphite/5 group-hover:bg-graphite/0 transition-colors duration-500 z-10"></div>
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-display font-medium text-graphite mb-1 group-hover:text-steel transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-graphite/60 font-light text-sm">
                                        {project.type} • {project.scale}
                                    </p>
                                </div>
                                <span className="text-sm text-graphite/40 font-mono transition-opacity group-hover:opacity-100">{project.number}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
};

export default FeaturedProjects;
