import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    threshold = 0.2
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: threshold }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.22, 1, 0.36, 1] // Custom ease for a premium, weighted feel
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
