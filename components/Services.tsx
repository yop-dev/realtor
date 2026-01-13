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
                "Exhaustive marketing strategies designed to ensure your property receives maximum exposure and achieves top dollar.",
            features: ["Professional Staging", "HDR Photography", "MLS Syndication", "Top Dollar Results"]
        },
        {
            icon: <Users size={40} />,
            title: "For Buyers",
            subtitle: "Your Guide",
            description:
                "Comprehensive market analysis, detailed recommendations, and access to a trusted network for a seamless journey.",
            features: ["Market Analysis", "Credit Optimization", "Renovation Advice", "Seamless Closing"]
        },
        {
            icon: <Calculator size={40} />,
            title: "Consulting",
            subtitle: "Expert Guidance",
            description:
                "In-depth expertise in affordability assessment and loan options to empower you throughout the entire process.",
            features: ["Loan Analysis", "Affordability Review", "Financial Planning", "Credit Support"]
        },
        {
            icon: <TrendingUp size={40} />,
            title: "Market Expertise",
            subtitle: "Real Estate Done Right",
            description:
                "Proven results with residential and commercial real estate expertise: Top Sales for the last 5 consecutive years.",
            features: ["Market Trends", "Commercial Assets", "Investment ROI", "Local Knowledge"]
        },
    ];

    return (
        <section
            id="services"
            ref={sectionRef}
            className="bg-gradient-to-b from-luxury-cream to-white py-24"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
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
                            className="group relative h-[420px] glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-luxury-gold/20 bg-white/90 overflow-hidden cursor-default"
                        >
                            {/* Hover Background Accent */}
                            <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon & Title Section - Stays visible but moves slightly */}
                            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="text-luxury-gold mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-luxury-navy mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-luxury-gold font-semibold mb-6 text-sm tracking-widest uppercase">
                                    {service.subtitle}
                                </p>
                            </div>

                            {/* Info Area - Switches between Description and Features */}
                            <div className="relative z-10">
                                {/* Description */}
                                <p className="text-luxury-charcoal leading-relaxed transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4 group-hover:pointer-events-none">
                                    {service.description}
                                </p>

                                {/* Features Reveal */}
                                <div className="absolute top-0 left-0 w-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-8 transition-all duration-500 ease-out pointer-events-none group-hover:pointer-events-auto">
                                    <ul className="space-y-3">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="text-luxury-navy flex items-center text-sm font-semibold">
                                                <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-3 flex-shrink-0"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 pt-6 border-t border-luxury-gold/20">
                                        <span className="text-luxury-gold text-xs font-bold tracking-widest uppercase hover:underline cursor-pointer">
                                            Learn More →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
