"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Award, Heart } from "lucide-react";

export default function About() {
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

    return (
        <section
            id="about"
            ref={sectionRef}
            className="bg-luxury-navy text-luxury-cream relative overflow-hidden"
        >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-luxury-gold">
                        About Marci
                    </h2>
                    <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-8 mb-12"
                >
                    {/* Experience Highlight */}
                    <div className="glass-dark rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                        <Award className="text-luxury-gold mx-auto mb-4" size={48} />
                        <h3 className="text-2xl font-bold mb-2">Nearly 30 Years</h3>
                        <p className="text-luxury-cream/80">
                            Licensed realtor and broker since 1995
                        </p>
                    </div>

                    {/* Location Expertise */}
                    <div className="glass-dark rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                        <MapPin className="text-luxury-gold mx-auto mb-4" size={48} />
                        <h3 className="text-2xl font-bold mb-2">Southern Nevada</h3>
                        <p className="text-luxury-cream/80">
                            Pahrump & Mountain Falls specialist
                        </p>
                    </div>

                    {/* Client-Focused */}
                    <div className="glass-dark rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                        <Heart className="text-luxury-gold mx-auto mb-4" size={48} />
                        <h3 className="text-2xl font-bold mb-2">Small-Town Feel</h3>
                        <p className="text-luxury-cream/80">
                            Personalized, dedicated service
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center max-w-3xl mx-auto space-y-6 text-lg leading-relaxed"
                >
                    <p>
                        Marci J Metzger brings <span className="text-luxury-gold font-semibold">nearly three decades</span> of real estate expertise to Southern Nevada. Previously a licensed REALTOR® and Broker in Washington State, she has been helping buyers and sellers navigate diverse markets since 1995.
                    </p>
                    <p>
                        Now focused on <span className="text-luxury-gold font-semibold">Pahrump</span> and the prestigious <span className="text-luxury-gold font-semibold">Mountain Falls community</span>, Marci combines her extensive experience with deep local knowledge to deliver exceptional results for her clients.
                    </p>
                    <p>
                        Whether you're seeking the charm of small-town living with easy access to Las Vegas, exploring golf course properties, or finding your perfect Southern Nevada home, Marci provides the personalized attention and professional expertise you deserve.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
