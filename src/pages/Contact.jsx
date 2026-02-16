import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSent(true);
    };

    return (
        <div className="bg-executive min-h-screen text-graphite">
            <div className="pt-32 pb-20 px-6 container mx-auto">
                <h1 className="text-5xl md:text-7xl font-display font-medium mb-16 text-graphite">
                    Discuss Your Next Project
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                    {/* Left Column: Info */}
                    <div>
                        <p className="text-2xl text-graphite font-light leading-relaxed mb-12">
                            Trusted for high-stakes industrial work.<br />
                            Secure operational excellence for your supply chain.
                        </p>

                        <div className="space-y-12">
                            <div>
                                <h4 className="text-sm font-medium uppercase tracking-widest mb-4 opacity-50">Headquarters</h4>
                                <p className="text-lg font-display text-graphite">
                                    100 Industrial Parkway<br />
                                    Sector 4, London, UK
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium uppercase tracking-widest mb-4 opacity-50">Direct Contact</h4>
                                <p className="text-lg font-display text-graphite">
                                    +44 (0) 20 7123 4567<br />
                                    partnerships@stoneandsteel.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white p-8 md:p-12 border border-border-subtle shadow-lg shadow-mineral/20 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {!isSent ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-graphite/40 uppercase tracking-widest text-sm mb-8">Initiate Inquiry</p>

                                    <form className="space-y-8" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-medium text-graphite/60">Full Name</label>
                                                <input type="text" required className="bg-concrete border-none px-4 py-3 focus:ring-1 focus:ring-steel outline-none transition-all" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-medium text-graphite/60">Company</label>
                                                <input type="text" className="bg-concrete border-none px-4 py-3 focus:ring-1 focus:ring-steel outline-none transition-all" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium text-graphite/60">Email Address</label>
                                            <input type="email" required className="bg-concrete border-none px-4 py-3 focus:ring-1 focus:ring-steel outline-none transition-all" />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium text-graphite/60">Project Details</label>
                                            <textarea rows="4" required className="bg-concrete border-none px-4 py-3 focus:ring-1 focus:ring-steel outline-none transition-all resize-none"></textarea>
                                        </div>

                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            isLoading={isSubmitting}
                                            className="w-full"
                                        >
                                            Send Request
                                        </Button>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                                >
                                    <div className="w-16 h-16 bg-steel/10 rounded-full flex items-center justify-center mb-6">
                                        <motion.div
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="w-8 h-8 text-steel"
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </motion.div>
                                    </div>
                                    <h3 className="text-2xl font-display font-medium text-graphite mb-2">Request Received</h3>
                                    <p className="text-graphite/60">Our team will review your inquiry and respond within 24 hours.</p>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setIsSent(false)}
                                        className="mt-8"
                                    >
                                        Send Another Message
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
