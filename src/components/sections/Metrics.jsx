import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const MetricItem = ({ label, value, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const numericValue = parseInt(value.toString().replace(/,/g, ''), 10);
    const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20, duration: 2000 });
    const display = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView) spring.set(numericValue);
    }, [isInView, numericValue, spring]);

    return (
        <div ref={ref} className="flex flex-col gap-2">
            <div className="flex items-baseline gap-1">
                <motion.span className="text-5xl md:text-7xl font-display font-medium text-graphite tracking-tight">
                    {display}
                </motion.span>
                <span className="text-5xl md:text-7xl font-display font-medium text-steel tracking-tight">
                    {suffix}
                </span>
            </div>
            <p className="text-sm font-medium tracking-widest text-graphite/40 uppercase mt-2">
                {label}
            </p>
        </div>
    );
};

const Metrics = () => {
    return (
        <section className="py-24 bg-executive border-b border-border-subtle">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
                    <MetricItem value="45000" suffix="+" label="Tons Recovered Annually" />
                    <MetricItem value="280" suffix="" label="Demolition Projects Completed" />
                    <MetricItem value="25" suffix="" label="Years Operational Experience" />
                    <div className="flex flex-col justify-center">
                        <span className="text-3xl font-display font-medium text-graphite leading-tight mb-2">
                            Long-term<br />Partnerships
                        </span>
                        <p className="text-sm font-medium tracking-widest text-graphite/40 uppercase">
                            Contract Operations
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Metrics;
