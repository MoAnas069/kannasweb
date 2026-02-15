import React from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const MetricItem = ({ label, value, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Parse numeric part from value if it's mixed, but here we assume 'value' is number
    // If value is a string like "18,500", we need to animate the number 18500
    const numericValue = parseInt(value.toString().replace(/,/g, ''), 10);

    const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20, duration: 2000 });
    const display = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            spring.set(numericValue);
        }
    }, [isInView, numericValue, spring]);

    return (
        <div ref={ref} className="flex flex-col gap-2">
            <div className="flex items-baseline gap-1">
                <motion.span className="text-6xl md:text-7xl font-display font-light text-graphite tracking-tighter">
                    {display}
                </motion.span>
                <span className="text-6xl md:text-7xl font-display font-light text-steel tracking-tighter">
                    {suffix}
                </span>
            </div>
            <p className="text-sm font-medium tracking-widest text-graphite/60 uppercase mt-2 pl-1 border-l-2 border-mineral pl-4">
                {label}
            </p>
        </div>
    );
};

const Metrics = () => {
    return (
        <section className="py-32 bg-mist border-b border-mineral">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">

                    <MetricItem
                        value="18500"
                        suffix="+"
                        label="Tons Processed Annually"
                    />

                    <MetricItem
                        value="97"
                        suffix="%"
                        label="Client Retention Rate"
                    />

                    <div className="flex flex-col gap-2">
                        <span className="text-6xl md:text-7xl font-display font-light text-graphite tracking-tighter">
                            48
                            <span className="text-steel">hr</span>
                        </span>
                        <p className="text-sm font-medium tracking-widest text-graphite/60 uppercase mt-2 pl-1 border-l-2 border-mineral pl-4">
                            Average Turnaround
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 justify-end">
                        <h3 className="text-2xl font-display text-graphite">National Logistics Network</h3>
                        <p className="text-sm text-graphite/60 mt-1">
                            Operating across 4 strategic hubs serving the continental supply chain.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Metrics;
