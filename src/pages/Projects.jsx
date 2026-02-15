import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Terminal Point 4",
            type: "Heavy Demolition",
            scale: "45,000 Tons",
            image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2609&auto=format&fit=crop"
        },
        {
            title: "Sector 7 Foundry",
            type: "Asset Recovery",
            scale: "18 Months",
            image: "https://images.unsplash.com/photo-1565626424177-8c339d9368d4?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Maritime Decommission",
            type: "Hazardous Materials",
            scale: "Zero Incidents",
            image: "https://images.unsplash.com/photo-1605218427306-0033d870c2a8?q=80&w=2669&auto=format&fit=crop"
        },
        {
            title: "Automotive Plant A",
            type: "Scrap Logistics",
            scale: "Ongoing Contract",
            image: "https://images.unsplash.com/photo-1518709384755-6b455cf9426f?q=80&w=2669&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-executive min-h-screen text-graphite">
            <div className="pt-32 pb-20 px-6 container mx-auto">
                <h1 className="text-5xl md:text-7xl font-display font-medium mb-16 text-graphite">
                    Selected Projects
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="w-full aspect-[4/3] bg-concrete overflow-hidden relative mb-6">
                                <div className="absolute inset-0 bg-graphite/5 group-hover:bg-graphite/0 transition-colors duration-500 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                                />
                            </div>
                            <div className="flex justify-between items-start border-b border-border-subtle pb-6 group-hover:border-steel transition-colors duration-500">
                                <div>
                                    <h3 className="text-2xl font-display font-medium text-graphite mb-1">{project.title}</h3>
                                    <p className="text-graphite/60 font-light text-sm">{project.type}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-medium tracking-widest uppercase block text-graphite/40">Scale</span>
                                    <span className="text-steel font-display">{project.scale}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
