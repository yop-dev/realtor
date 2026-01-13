"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function FindYourHome() {
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

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // This would typically connect to a property search API or MLS
        alert("Property search functionality would connect to MLS or property database here!");
    };

    return (
        <section
            id="find-home"
            ref={sectionRef}
            className="relative min-h-[600px] md:h-[600px] flex items-center justify-center overflow-hidden py-16 md:py-0"
        >
            {/* Background Video with Overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/assets/videos/find-your-dream-home-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-luxury-navy/80 via-luxury-navy/60 to-luxury-navy/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-6 md:mb-8"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-luxury-cream mb-4">
                        Find Your Dream Home
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-dark rounded-2xl p-6 md:p-8"
                >
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-luxury-gold mb-4 md:mb-6 text-center">
                        Search Listings
                    </h3>

                    <form onSubmit={handleSearch} className="space-y-4 md:space-y-6">
                        {/* Row 1: Location, Type, Sort By */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                            <div>
                                <label className="block text-luxury-cream/90 text-sm mb-2">
                                    Location
                                </label>
                                <select className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-luxury-cream focus:outline-none focus:border-luxury-gold transition-colors text-sm md:text-base">
                                    <option value="">Select Location</option>
                                    <option value="pahrump">Pahrump</option>
                                    <option value="mountain-falls">Mountain Falls</option>
                                    <option value="southern-nevada">Southern Nevada</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-luxury-cream/90 text-sm mb-2">
                                    Type
                                </label>
                                <select className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-luxury-cream focus:outline-none focus:border-luxury-gold transition-colors text-sm md:text-base">
                                    <option value="">Any Type</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="land">Land</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-luxury-cream/90 text-sm mb-2">
                                    Sort By
                                </label>
                                <select className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-luxury-cream focus:outline-none focus:border-luxury-gold transition-colors text-sm md:text-base">
                                    <option value="">Default</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="newest">Newest Listings</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 2: Bedrooms, Baths, Prices */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                            <div>
                                <label className="block text-luxury-cream/90 text-sm mb-2">
                                    Bedrooms
                                </label>
                                <select className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-luxury-cream focus:outline-none focus:border-luxury-gold transition-colors text-sm md:text-base">
                                    <option value="">Any</option>
                                    <option value="1">1+</option>
                                    <option value="2">2+</option>
                                    <option value="3">3+</option>
                                    <option value="4">4+</option>
                                    <option value="5">5+</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-luxury-cream/90 text-sm mb-2">
                                    Baths
                                </label>
                                <select className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-luxury-cream focus:outline-none focus:border-luxury-gold transition-colors text-sm md:text-base">
                                    <option value="">Any</option>
                                    <option value="1">1+</option>
                                    <option value="2">2+</option>
                                    <option value="3">3+</option>
                                    <option value="4">4+</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-luxury-cream/90 text-sm mb-2">
                                    Min Price
                                </label>
                                <input
                                    type="text"
                                    placeholder="$0"
                                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-luxury-cream placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold transition-colors text-sm md:text-base"
                                />
                            </div>

                            <div>
                                <label className="block text-luxury-cream/90 text-sm mb-2">
                                    Max Price
                                </label>
                                <input
                                    type="text"
                                    placeholder="Any"
                                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-luxury-cream placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold transition-colors text-sm md:text-base"
                                />
                            </div>
                        </div>

                        {/* Search Button */}
                        <div className="text-center pt-2">
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-luxury-gold text-luxury-navy px-8 md:px-12 py-3 md:py-4 rounded-lg text-base md:text-lg font-bold hover:bg-luxury-lightGold transition-all duration-300 shadow-2xl hover:shadow-luxury-gold/50 hover:scale-105 inline-flex items-center justify-center gap-2"
                            >
                                <Search size={20} className="md:w-6 md:h-6" />
                                SEARCH NOW
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
