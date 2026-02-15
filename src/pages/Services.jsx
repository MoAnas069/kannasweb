import React from 'react';

const Services = () => {
    return (
        <div className="pt-32 pb-20 px-6 container mx-auto bg-executive min-h-screen">
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-16 text-graphite">
                Industrial Services
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border-subtle pt-12">
                <div>
                    <h3 className="text-2xl font-medium mb-4">Scrap Collection</h3>
                    <p className="text-graphite/60 font-light">Industrial-scale recovery of ferrous and non-ferrous materials.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-medium mb-4">Demolition Services</h3>
                    <p className="text-graphite/60 font-light">Safe, controlled dismantling of buildings and structures.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-medium mb-4">Annual Contracts</h3>
                    <p className="text-graphite/60 font-light">Long-term recovery partnerships for continuous operations.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
