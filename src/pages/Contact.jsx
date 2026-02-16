import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            e.target.reset();

            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    return (
        <div className="bg-executive min-h-screen text-graphite">
            <div className="pt-32 pb-20 px-6 container mx-auto">
                <ScrollReveal>
                    <h1 className="text-5xl md:text-7xl font-display font-medium mb-16 text-graphite">
                        Discuss Your Next Project
                    </h1>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                    {/* Left Column: Info */}
                    <ScrollReveal delay={0.2}>
                        <div>
                            <p className="text-2xl text-graphite font-light leading-relaxed mb-12">
                                Trusted for high-stakes industrial work.<br />
                                Secure operational excellence for your supply chain.
                            </p>

                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-sm font-medium uppercase tracking-widest mb-4 opacity-50">Headquarters</h4>
                                    <p className="text-lg font-display text-graphite">
                                        Kothakurussi<br />
                                        Kerala, India
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium uppercase tracking-widest mb-4 opacity-50">Direct Contact</h4>
                                    <p className="text-lg font-display text-graphite">
                                        8943077661 | 9656487208<br />
                                        info@kannasumkadalasum.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Column: Form */}
                    <ScrollReveal delay={0.4}>
                        <div className="bg-white p-8 md:p-12 border border-border-subtle shadow-lg shadow-mineral/20 relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                                    >
                                        <div className="w-16 h-16 bg-steel/10 rounded-full flex items-center justify-center mb-6 text-steel">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h3 className="text-2xl font-display font-medium text-graphite mb-2">Message Sent</h3>
                                        <p className="text-graphite/60">We will review your inquiry and respond within 24 hours.</p>
                                        <Button variant="secondary" onClick={() => setIsSuccess(false)} className="mt-8">
                                            Send Another
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <p className="text-graphite/40 uppercase tracking-widest text-sm mb-8">Initiate Inquiry</p>

                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-medium text-graphite/60">Full Name</label>
                                                    <input required type="text" className="bg-concrete border-none px-4 py-3 focus:ring-1 focus:ring-steel outline-none transition-all" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-sm font-medium text-graphite/60">Company</label>
                                                    <input type="text" className="bg-concrete border-none px-4 py-3 focus:ring-1 focus:ring-steel outline-none transition-all" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-medium text-graphite/60">Email Address</label>
                                                <input required type="email" className="bg-concrete border-none px-4 py-3 focus:ring-1 focus:ring-steel outline-none transition-all" />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-medium text-graphite/60">Project Details</label>
                                                <textarea required rows="4" className="bg-concrete border-none px-4 py-3 focus:ring-1 focus:ring-steel outline-none transition-all resize-none"></textarea>
                                            </div>

                                            <Button
                                                type="submit"
                                                variant="primary"
                                                className="w-full"
                                                isLoading={isSubmitting}
                                            >
                                                {isSubmitting ? 'Sending...' : 'Send Request'}
                                            </Button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </div>
    );
};

export default Contact;
