import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project }) => {

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-graphite/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-executive w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative flex flex-col md:flex-row"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-graphite hover:text-steel transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Image Side */}
                            <div className="md:w-1/2 h-64 md:h-auto bg-concrete relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-graphite/50 to-transparent md:hidden"></div>
                            </div>

                            {/* Content Side */}
                            <div className="md:w-1/2 p-8 md:p-12 flex flex-col relative bg-executive">
                                <div className="mb-8">
                                    <span className="text-steel uppercase tracking-widest text-xs font-bold mb-2 block">
                                        Project Detail
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-display font-medium text-graphite mb-2">
                                        {project.title}
                                    </h2>
                                    <p className="text-graphite/60 font-light text-lg">
                                        {project.type}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-6 mb-8 border-y border-graphite/10 py-6">
                                    <div>
                                        <h4 className="text-xs uppercase tracking-widest text-graphite/40 mb-1">Scale</h4>
                                        <p className="text-xl font-display text-graphite">{project.scale}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-widest text-graphite/40 mb-1">Timeline</h4>
                                        <p className="text-xl font-display text-graphite">18 Months</p> {/* Placeholder if not in data */}
                                    </div>
                                    <div className="col-span-2">
                                        <h4 className="text-xs uppercase tracking-widest text-graphite/40 mb-1">Location</h4>
                                        <p className="text-lg font-display text-graphite">Industrial Sector 4, UK</p> {/* Placeholder */}
                                    </div>
                                </div>

                                <div className="prose prose-sm text-graphite/70 font-light">
                                    <p>
                                        A comprehensive industrial recovery operation requiring surgical precision in a high-density environment.
                                        Our team executed the seamless removal of critical infrastructure while maintaining zero operational downtime for adjacent facilities.
                                    </p>
                                    <p className="mt-4">
                                        <strong>Key Deliverables:</strong>
                                    </p>
                                    <ul className="list-disc pl-4 mt-2 space-y-1">
                                        <li>Hazardous material containment</li>
                                        <li>Strategic asset liquidation</li>
                                        <li>Full site remediation</li>
                                    </ul>
                                </div>

                                <div className="mt-auto pt-8">
                                    <button className="w-full py-4 border border-graphite/20 text-graphite uppercase tracking-widest text-xs font-medium hover:bg-graphite hover:text-white transition-colors duration-300">
                                        Download Case Study
                                    </button>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
