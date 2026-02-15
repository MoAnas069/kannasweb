import React from 'react';

const Contact = () => {
    return (
        <div className="pt-32 pb-20 px-6 container mx-auto bg-executive min-h-screen">
            <h1 className="text-5xl md:text-7xl font-display font-medium mb-16 text-graphite">
                Discuss Your Next Project
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <p className="text-xl text-graphite/70 font-light mb-8">
                        Trusted for high-stakes industrial work.
                    </p>
                    <div className="space-y-4">
                        <p className="text-lg font-medium">Global Operations</p>
                        <p className="text-graphite/60">London • New York • Dubai</p>
                    </div>
                </div>

                <div className="bg-white p-8 border border-border-subtle">
                    <p className="text-graphite/40 uppercase tracking-widest text-sm mb-6">Inquiry Form</p>
                    {/* Form Placeholder */}
                    <div className="space-y-6">
                        <div className="h-12 bg-concrete w-full"></div>
                        <div className="h-12 bg-concrete w-full"></div>
                        <div className="h-32 bg-concrete w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
