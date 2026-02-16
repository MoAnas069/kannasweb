import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ui/ScrollReveal';

const About = () => {
    return (
        <div className="bg-executive min-h-screen text-graphite">

            {/* Header */}
            <div className="pt-32 pb-20 px-6 container mx-auto">
                <ScrollReveal>
                    <h1 className="text-5xl md:text-7xl font-display font-medium mb-12 text-graphite leading-tight">
                        Engineered to Handle<br />Complex Industrial Demands
                    </h1>
                </ScrollReveal>
                <div className="max-w-3xl">
                    <ScrollReveal delay={0.2}>
                        <p className="text-xl md:text-2xl text-graphite/70 font-light leading-relaxed mb-8">
                            We operate at the intersection of heavy industry and precision engineering.
                            Our philosophy is built on disciplined workflows, absolute safety compliance,
                            and the capability to execute large-scale recovery projects with surgical precision.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* Image Strip */}
            <ScrollReveal className="w-full h-[60vh] bg-concrete overflow-hidden relative" delay={0.3}>
                <div className="absolute inset-0 bg-graphite/10"></div>
                <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
                    alt="Industrial Operations"
                    className="w-full h-full object-cover grayscale opacity-80"
                />
            </ScrollReveal>

            {/* Content Grid */}
            <div className="py-24 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">

                    <ScrollReveal delay={0.4}>
                        <h3 className="text-2xl font-display font-medium mb-6">Operational Philosophy</h3>
                        <p className="text-graphite/60 font-light leading-relaxed">
                            We do not view scrap as waste, but as a material asset requiring engineered recovery.
                            Our approach leverages data-driven logistics and advanced separation technologies to maximize
                            yield and minimize environmental impact. Every project is planned with the rigor of a construction operation.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.5}>
                        <h3 className="text-2xl font-display font-medium mb-6">Safety & Compliance</h3>
                        <ul className="space-y-4 border-t border-border-subtle pt-6">
                            <li className="flex justify-between items-center">
                                <span className="text-graphite/80">ISO 45001 Certified Health & Safety</span>
                                <span className="text-steel">Verified</span>
                            </li>
                            <li className="flex justify-between items-center border-t border-border-subtle pt-4">
                                <span className="text-graphite/80">Hazardous Material Handling Protocols</span>
                                <span className="text-steel">Certified</span>
                            </li>
                            <li className="flex justify-between items-center border-t border-border-subtle pt-4">
                                <span className="text-graphite/80">Zero-Incident Target Methodology</span>
                                <span className="text-steel">Active</span>
                            </li>
                        </ul>
                    </ScrollReveal>

                </div>
            </div>

        </div>
    );
};

export default About;
