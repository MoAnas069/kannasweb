import React from 'react';

const Projects = () => {
    return (
        <div className="pt-32 pb-20 px-6 container mx-auto bg-executive min-h-screen">
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-16 text-graphite">
                Selected Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Placeholder for project grid */}
                <div className="bg-concrete aspect-video p-8 flex items-end">
                    <span className="text-lg font-medium">Coming Soon</span>
                </div>
                <div className="bg-concrete aspect-video p-8 flex items-end">
                    <span className="text-lg font-medium">Coming Soon</span>
                </div>
            </div>
        </div>
    );
};

export default Projects;
