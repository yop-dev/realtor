"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToAbout = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Video with Overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-luxury-navy/70 via-luxury-navy/50 to-luxury-navy/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    {/* Portrait - Clean & Minimalist */}
                    <div className="inline-block mb-6">
                        <Image
                            src="/assets/portrait.jpg"
                            alt="Marci J Metzger - Professional Portrait"
                            width={200}
                            height={200}
                            className="rounded-full border-4 border-luxury-gold shadow-xl mx-auto"
                            priority
                        />
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-luxury-cream mb-4 leading-tight">
                        Marci J Metzger
                    </h1>

                    <p className="text-xl sm:text-2xl md:text-3xl text-luxury-gold font-semibold mb-3">
                        The Ridge Realty Group
                    </p>

                    <p className="text-2xl sm:text-3xl md:text-4xl text-luxury-cream font-bold mb-4 tracking-wide">
                        REALTOR FOR NEARLY 3 DECADES!
                    </p>

                    {/* Phone Number */}
                    <a
                        href="tel:+12069196886"
                        className="inline-block text-2xl sm:text-3xl md:text-4xl text-luxury-gold font-bold mb-8 tracking-wider hover:text-luxury-lightGold transition-colors duration-300"
                    >
                        206-919-6886
                    </a>

                    <p className="text-lg sm:text-xl text-luxury-cream/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Specializing in Southern Nevada Real Estate | Pahrump & Mountain Falls Expert
                    </p>

                    {/* CTA Button */}
                    <motion.button
                        onClick={scrollToAbout}
                        className="bg-luxury-gold text-luxury-navy px-10 py-4 rounded-lg text-lg font-bold hover:bg-luxury-lightGold transition-all duration-300 shadow-2xl hover:shadow-luxury-gold/50 hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Discover My Expertise
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
                onClick={scrollToAbout}
            >
                <ArrowDown className="text-luxury-gold animate-bounce" size={40} />
            </motion.div>
        </section>
    );
}
