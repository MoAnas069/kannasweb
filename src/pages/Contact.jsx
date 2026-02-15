import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
                    <div className="bg-white p-8 md:p-12 border border-border-subtle shadow-lg shadow-mineral/20">
                        <p className="text-graphite/40 uppercase tracking-widest text-sm mb-8">Initiate Inquiry</p>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-graphite/60">Full Name</label>
                                    <input type="text" className="bg-concrete border-none px-4 py-3 focus:ring-1 focus:ring-steel outline-none transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-graphite/60">Company</label>
                                    <input type="text" className="bg-concrete border-none px-4 py-3 focus:ring-1 focus:ring-steel outline-none transition-all" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-graphite/60">Email Address</label>
                                <input type="email" className="bg-concrete border-none px-4 py-3 focus:ring-1 focus:ring-steel outline-none transition-all" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-graphite/60">Project Details</label>
                                <textarea rows="4" className="bg-concrete border-none px-4 py-3 focus:ring-1 focus:ring-steel outline-none transition-all resize-none"></textarea>
                            </div>

                            <button className="w-full bg-graphite text-white py-4 font-medium tracking-wide uppercase hover:bg-steel transition-colors duration-300">
                                Send Request
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
