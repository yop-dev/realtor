"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-dark shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection("hero")}>
                        <Image
                            src="/assets/logo.png"
                            alt="Marci Metzger Homes"
                            width={120}
                            height={50}
                            className="h-12 w-auto invert brightness-200 contrast-125 transition-all duration-300"
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-luxury-cream hover:text-luxury-gold transition-colors duration-200 font-medium"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("services")}
                            className="text-luxury-cream hover:text-luxury-gold transition-colors duration-200 font-medium"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection("properties")}
                            className="text-luxury-cream hover:text-luxury-gold transition-colors duration-200 font-medium"
                        >
                            Properties
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="bg-luxury-gold text-luxury-navy px-6 py-2.5 rounded-md hover:bg-luxury-lightGold transition-all duration-200 font-semibold shadow-lg"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-luxury-cream"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-dark">
                    <div className="px-4 pt-2 pb-6 space-y-3">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="block w-full text-left text-luxury-cream hover:text-luxury-gold transition-colors duration-200 py-2 font-medium"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("services")}
                            className="block w-full text-left text-luxury-cream hover:text-luxury-gold transition-colors duration-200 py-2 font-medium"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection("properties")}
                            className="block w-full text-left text-luxury-cream hover:text-luxury-gold transition-colors duration-200 py-2 font-medium"
                        >
                            Properties
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="bg-luxury-gold text-luxury-navy px-8 py-2.5 rounded-md hover:bg-luxury-lightGold transition-all duration-200 font-semibold mt-2 mx-auto block"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
