"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertyGallery() {
    const [isVisible, setIsVisible] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
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

    // Close lightbox on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;

            if (e.key === "Escape") {
                setLightboxOpen(false);
            } else if (e.key === "ArrowLeft") {
                goToPrevious();
            } else if (e.key === "ArrowRight") {
                goToNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen, currentImageIndex]);

    const properties = [
        {
            src: "/assets/property-beacon-ridge-exterior.jpg",
            alt: "4787 E Beacon Ridge - Exterior View",
            title: "Beacon Ridge Estate - Exterior",
        },
        {
            src: "/assets/property-beacon-ridge-kitchen.jpg",
            alt: "4787 E Beacon Ridge - Gourmet Kitchen",
            title: "Beacon Ridge - Modern Luxury Kitchen",
        },
        {
            src: "/assets/property-roseworthy.jpg",
            alt: "4460 Roseworthy - Exterior",
            title: "Roseworthy Residence",
        },
        {
            src: "/assets/property-ailanto-living.jpg",
            alt: "5570 Ailanto - Living Area",
            title: "Ailanto - Elegant Living Space",
        },
        {
            src: "/assets/property-ailanto-patio.jpg",
            alt: "5570 Ailanto - Patio with View",
            title: "Ailanto - Stunning Outdoor Views",
        },
        {
            src: "/assets/hero-luxury-home.jpg",
            alt: "Luxury Home - Evening View",
            title: "Premium Estate - Twilight",
        },
    ];

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "unset";
    };

    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % properties.length);
    };

    const goToPrevious = () => {
        setCurrentImageIndex((prev) => (prev - 1 + properties.length) % properties.length);
    };

    return (
        <>
            <section
                id="properties"
                ref={sectionRef}
                className="bg-gradient-to-b from-white to-luxury-cream"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-luxury-navy">
                            Featured Properties
                        </h2>
                        <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
                        <p className="text-xl text-luxury-charcoal max-w-2xl mx-auto">
                            Explore a selection of stunning homes in Southern Nevada
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {properties.map((property, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="relative h-80 w-full overflow-hidden">
                                    <Image
                                        src={property.src}
                                        alt={property.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/80 via-luxury-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    {/* Title */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-white text-xl font-bold">
                                            {property.title}
                                        </h3>
                                        <p className="text-luxury-gold text-sm mt-1">Click to view larger</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-luxury-navy/95 backdrop-blur-sm flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-luxury-cream hover:text-luxury-gold transition-colors z-50"
                        >
                            <X size={40} />
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPrevious();
                            }}
                            className="absolute left-6 text-luxury-cream hover:text-luxury-gold transition-colors z-50"
                        >
                            <ChevronLeft size={60} />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNext();
                            }}
                            className="absolute right-6 text-luxury-cream hover:text-luxury-gold transition-colors z-50"
                        >
                            <ChevronRight size={60} />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-7xl max-h-[90vh] w-full mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[80vh]">
                                <Image
                                    src={properties[currentImageIndex].src}
                                    alt={properties[currentImageIndex].alt}
                                    fill
                                    className="object-contain"
                                    quality={100}
                                />
                            </div>

                            {/* Title and Counter */}
                            <div className="text-center mt-6">
                                <h3 className="text-luxury-cream text-2xl font-serif font-bold mb-2">
                                    {properties[currentImageIndex].title}
                                </h3>
                                <p className="text-luxury-gold">
                                    {currentImageIndex + 1} / {properties.length}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
