"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
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
            id="contact"
            ref={sectionRef}
            className="bg-luxury-navy text-luxury-cream relative overflow-hidden"
        >
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-luxury-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luxury-gold rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-luxury-gold">
                        Let's Connect
                    </h2>
                    <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
                    <p className="text-xl text-luxury-cream/90 max-w-2xl mx-auto">
                        Ready to make your real estate dreams a reality? Get in touch today.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="glass-dark rounded-2xl p-6 flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
                            <Phone className="text-luxury-gold flex-shrink-0 mt-1" size={28} />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Phone</h3>
                                <a
                                    href="tel:+12069196886"
                                    className="text-luxury-cream/90 hover:text-luxury-gold transition-colors"
                                >
                                    (206) 919-6886
                                </a>
                            </div>
                        </div>

                        <div className="glass-dark rounded-2xl p-6 flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
                            <MessageCircle className="text-luxury-gold flex-shrink-0 mt-1" size={28} />
                            <div>
                                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                                <a
                                    href="https://wa.me/14259412560"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-luxury-cream/90 hover:text-luxury-gold transition-colors"
                                >
                                    +1 (425) 941-2560
                                </a>
                            </div>
                        </div>

                        <div className="glass-dark rounded-2xl p-6 flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
                            <MapPin className="text-luxury-gold flex-shrink-0 mt-1" size={28} />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Office Location</h3>
                                <p className="text-luxury-cream/90">
                                    3190 HW-160, Suite F<br />
                                    Pahrump, Nevada 89048<br />
                                    United States
                                </p>
                            </div>
                        </div>

                        <div className="glass-dark rounded-2xl p-6 flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
                            <Clock className="text-luxury-gold flex-shrink-0 mt-1" size={28} />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                                <p className="text-luxury-cream/90">
                                    Open Daily<br />
                                    8:00 AM – 7:00 PM
                                </p>
                            </div>
                        </div>
                    </motion.div>


                    {/* Send Message Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="glass-dark rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-serif font-bold mb-6">
                            Send Message
                        </h3>
                        <form className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-luxury-cream/90 text-sm mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-luxury-cream placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold transition-colors"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-luxury-cream/90 text-sm mb-2">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-luxury-cream placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold transition-colors"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-luxury-cream/90 text-sm mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us about your real estate needs..."
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-luxury-gold/30 text-luxury-cream placeholder-luxury-cream/50 focus:outline-none focus:border-luxury-gold transition-colors resize-none"
                                ></textarea>
                            </div>

                            {/* Send Button */}
                            <div className="flex flex-col items-center gap-4">
                                <button
                                    type="submit"
                                    className="bg-luxury-gold text-luxury-navy px-12 py-4 rounded-lg text-lg font-bold hover:bg-luxury-lightGold transition-all duration-300 shadow-2xl hover:shadow-luxury-gold/50 hover:scale-105"
                                >
                                    SEND
                                </button>
                                <p className="text-xs text-luxury-cream/60 text-center">
                                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </div>

                {/* Google Maps Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-12"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-luxury-gold/20">
                        {/* Map Embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.8757891234567!2d-116.00892678472835!3d36.209876280074385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c92b9e6e1e1e1e%3A0x1e1e1e1e1e1e1e1e!2s3190%20NV-160%2C%20Pahrump%2C%20NV%2089048!5e0!3m2!1sen!2sus!4v1234567890123"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>

                        {/* Get Directions Button Overlay */}
                        <div className="absolute top-4 right-4">
                            <a
                                href="https://www.google.com/maps/dir//3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 glass-dark text-luxury-cream px-6 py-3 rounded-lg font-semibold shadow-xl hover:bg-luxury-gold hover:text-luxury-navy hover:scale-105 transition-all duration-300 border border-luxury-gold/30"
                            >
                                <MapPin size={20} />
                                Get Directions
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* The Ridge Realty Group */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center pt-8 border-t border-luxury-gold/30"
                >
                    <p className="text-luxury-gold font-semibold text-lg">
                        The Ridge Realty Group
                    </p>
                    <p className="text-luxury-cream/70 mt-2">
                        Your trusted partner in Southern Nevada real estate
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
