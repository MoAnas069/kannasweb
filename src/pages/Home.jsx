import React from 'react';
import BicycleSequence from '../components/BicycleSequence';

const Home = () => {
    return (
        <>
            {/* Hero Section - Keeps the dark cinematic feel */}
            <BicycleSequence />

            {/* Post-Hero Content - Transitions to Executive White */}
            <div className="bg-executive text-graphite">

                {/* Transition Section */}
                <section className="py-24 px-6 md:px-12 container mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
                        Built for Industrial Scale.
                    </h2>
                    <p className="text-xl md:text-2xl text-graphite/60 max-w-2xl font-light">
                        Precision recovery. Controlled execution.
                    </p>
                </section>

                {/* Placeholders for other sections */}
                {/* <ProofOfScale /> */}
                {/* <ServicesOverview /> */}
                {/* <ProcessSection /> */}
                {/* <FeaturedProjects /> */}

            </div>
        </>
    );
};

export default Home;
