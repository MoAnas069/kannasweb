import React from 'react';
import BicycleSequence from '../components/BicycleSequence';
import Metrics from '../components/sections/Metrics';
import Solutions from '../components/sections/Solutions';
import Process from '../components/sections/Process';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import CallToAction from '../components/sections/CallToAction';

const Home = () => {
    return (
        <>
            {/* Hero Section - Keeps the dark cinematic feel */}
            <BicycleSequence />

            {/* Post-Hero Content - Transitions to Executive White */}
            <div className="bg-executive text-graphite relative z-20">

                {/* Transition Section */}
                <section className="py-24 px-6 md:px-12 container mx-auto">
                    <h2 className="text-4xl md:text-5xl md:leading-tight lg:text-6xl font-display font-medium mb-6 text-balance text-graphite">
                        Built for Industrial Scale.
                    </h2>
                    <p className="text-xl md:text-2xl text-graphite/60 max-w-2xl font-light leading-relaxed">
                        Precision recovery. Controlled execution.<br />
                        We engineer value from complex demolition and scrap ecosystems.
                    </p>
                </section>

                {/* Sections */}
                <Metrics />
                <Solutions />
                <Process />
                <FeaturedProjects />
                <CallToAction />

            </div>
        </>
    );
};

export default Home;
