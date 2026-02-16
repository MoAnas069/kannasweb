import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
    return (
        <section className="py-48 bg-mist relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mineral to-transparent"></div>

            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-display font-medium text-graphite mb-12 tracking-tight"
                >
                    Built for Industrial Scale.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <Button
                        variant="primary"
                        size="lg"
                        to="/contact"
                        as="link"
                        rightIcon={<ArrowRight size={20} />}
                        className="bg-graphite text-white hover:bg-steel transition-all duration-500"
                    >
                        Start a Conversation
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
