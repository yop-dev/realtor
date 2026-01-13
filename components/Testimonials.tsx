"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const testimonials = [
        {
            text: "Marci was very professional and knowledgeable. She made the home buying process smooth and stress-free!",
            author: "Sarah M.",
            location: "Mountain Falls",
        },
        {
            text: "Working with Marci was a pleasure. Her expertise in the Pahrump market is unmatched. Highly recommend!",
            author: "John D.",
            location: "Pahrump",
        },
        {
            text: "Marci went above and beyond to help us find our dream home. Her dedication and professionalism are outstanding!",
            author: "Linda R.",
            location: "Southern Nevada",
        },
    ];

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="bg-white py-16"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-luxury-navy">
                        What Clients Say
                    </h2>
                    <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
                    <p className="text-xl text-luxury-charcoal max-w-2xl mx-auto">
                        Trusted by homebuyers and sellers across Southern Nevada
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="bg-luxury-cream rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Quote className="text-luxury-gold mb-4" size={40} />
                            <p className="text-luxury-charcoal mb-6 leading-relaxed italic">
                                "{testimonial.text}"
                            </p>
                            <div className="border-t border-luxury-gold/30 pt-4">
                                <p className="font-bold text-luxury-navy">{testimonial.author}</p>
                                <p className="text-sm text-luxury-charcoal/70">{testimonial.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Professional Credentials/Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="border-t border-luxury-charcoal/10 pt-12"
                >
                    <h3 className="text-center text-2xl font-serif font-bold text-luxury-navy mb-12">
                        Professional Credentials & Affiliations
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {/* The Ridge Realty Group */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-luxury-gold/20">
                                <div className="w-28 h-28 flex items-center justify-center">
                                    <Image
                                        src="/assets/the-ridge.png"
                                        alt="The Ridge Realty Group"
                                        width={112}
                                        height={112}
                                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                            <p className="text-sm text-luxury-charcoal mt-4 text-center font-medium">
                                The Ridge Realty Group
                            </p>
                        </motion.div>

                        {/* Equal Housing Opportunity */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-luxury-gold/20">
                                <div className="w-28 h-28 flex items-center justify-center">
                                    <Image
                                        src="/assets/equal-housing-opportunity.png"
                                        alt="Equal Housing Opportunity"
                                        width={112}
                                        height={112}
                                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                            <p className="text-sm text-luxury-charcoal mt-4 text-center font-medium">
                                Equal Housing Opportunity
                            </p>
                        </motion.div>

                        {/* Realtor */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-luxury-gold/20">
                                <div className="w-28 h-28 flex items-center justify-center">
                                    <Image
                                        src="/assets/realtor.png"
                                        alt="REALTOR®"
                                        width={112}
                                        height={112}
                                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                            <p className="text-sm text-luxury-charcoal mt-4 text-center font-medium">
                                REALTOR®
                            </p>
                        </motion.div>

                        {/* Pahrump Valley Times Reader's Choice */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-luxury-gold/20">
                                <div className="w-28 h-28 flex items-center justify-center">
                                    <Image
                                        src="/assets/pahrump-valley.png"
                                        alt="Pahrump Valley Times Reader's Choice"
                                        width={112}
                                        height={112}
                                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                            <p className="text-sm text-luxury-charcoal mt-4 text-center font-medium">
                                Reader's Choice Award
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
