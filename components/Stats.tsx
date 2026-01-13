"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Users, Trophy } from "lucide-react";

export default function Stats() {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState({ clients: 0, sales: 0, years: 0 });
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
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

    useEffect(() => {
        if (isVisible) {
            const duration = 2000;
            const steps = 60;
            const interval = duration / steps;

            const targets = { clients: 90, sales: 28.5, years: 5 };

            let currentStep = 0;
            const timer = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;

                setCounts({
                    clients: Math.floor(targets.clients * progress),
                    sales: parseFloat((targets.sales * progress).toFixed(1)),
                    years: Math.floor(targets.years * progress),
                });

                if (currentStep >= steps) {
                    setCounts(targets);
                    clearInterval(timer);
                }
            }, interval);

            return () => clearInterval(timer);
        }
    }, [isVisible]);

    return (
        <section
            id="stats"
            ref={sectionRef}
            className="bg-luxury-navy text-luxury-cream relative overflow-hidden py-20"
        >
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-luxury-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-luxury-gold rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-luxury-gold">
                        Proven Track Record
                    </h2>
                    <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Clients Helped */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-dark rounded-2xl p-10 text-center hover:scale-105 transition-transform duration-300"
                    >
                        <Users className="text-luxury-gold mx-auto mb-4" size={56} />
                        <div className="text-6xl font-bold text-luxury-gold mb-2">
                            {counts.clients}
                        </div>
                        <p className="text-xl text-luxury-cream/90">Clients Helped</p>
                        <p className="text-sm text-luxury-cream/70 mt-2">In 2021 alone</p>
                    </motion.div>

                    {/* Sales Volume */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass-dark rounded-2xl p-10 text-center hover:scale-105 transition-transform duration-300"
                    >
                        <DollarSign className="text-luxury-gold mx-auto mb-4" size={56} />
                        <div className="text-6xl font-bold text-luxury-gold mb-2">
                            ${counts.sales}M
                        </div>
                        <p className="text-xl text-luxury-cream/90">In Closed Sales</p>
                        <p className="text-sm text-luxury-cream/70 mt-2">2021 performance</p>
                    </motion.div>

                    {/* Top Producer */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="glass-dark rounded-2xl p-10 text-center hover:scale-105 transition-transform duration-300"
                    >
                        <Trophy className="text-luxury-gold mx-auto mb-4" size={56} />
                        <div className="text-6xl font-bold text-luxury-gold mb-2">
                            {counts.years}
                        </div>
                        <p className="text-xl text-luxury-cream/90">Consecutive Years</p>
                        <p className="text-sm text-luxury-cream/70 mt-2">
                            Top Residential Sales
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
