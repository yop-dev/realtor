"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home, Users, Calculator, TrendingUp } from "lucide-react";

export default function Services() {
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

    const services = [
        {
            icon: <Home size={40} />,
            title: "For Sellers",
            subtitle: "Get It Sold",
            description:
                "Exhaustive marketing strategies designed to ensure your property receives maximum exposure and achieves top dollar in today's competitive market.",
        },
        {
            icon: <Users size={40} />,
            title: "For Buyers",
            subtitle: "Your Guide",
            description:
                "Comprehensive market analysis, detailed upgrade recommendations, and access to a trusted network of contractors to make your home-buying journey seamless.",
        },
        {
            icon: <Calculator size={40} />,
            title: "Consulting",
            subtitle: "Expert Guidance",
            description:
                "In-depth expertise in affordability assessment, credit optimization, and loan options to educate and empower clients throughout the entire process.",
        },
        {
            icon: <TrendingUp size={40} />,
            title: "Market Expertise",
            subtitle: "Real Estate Done Right",
            description:
                "Residential and commercial real estate expertise combined with proven results: Top Residential Sales for the last 5 consecutive years.",
        },
    ];

    return (
        <section
            id="services"
            ref={sectionRef}
            className="bg-gradient-to-b from-luxury-cream to-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-luxury-navy">
                        Premium Services
                    </h2>
                    <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
                    <p className="text-xl text-luxury-charcoal max-w-2xl mx-auto">
                        Comprehensive real estate solutions tailored to your unique needs
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                            className="glass rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-luxury-gold/20 bg-white/80"
                        >
                            <div className="text-luxury-gold mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-luxury-navy mb-1">
                                {service.title}
                            </h3>
                            <p className="text-luxury-gold font-semibold mb-4 text-sm">
                                {service.subtitle}
                            </p>
                            <p className="text-luxury-charcoal leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
