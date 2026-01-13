"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function StickyContactButton() {
    return (
        <motion.a
            href="tel:+12069196886"
            className="fixed bottom-8 right-8 z-50 bg-luxury-gold text-luxury-navy p-4 rounded-full shadow-2xl hover:bg-luxury-lightGold transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Phone size={28} className="animate-pulse-slow" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 bg-luxury-navy text-luxury-cream px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                Call Marci Now
            </span>
        </motion.a>
    );
}
