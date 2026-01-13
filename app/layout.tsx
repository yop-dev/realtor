import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyContactButton from "@/components/StickyContactButton";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Marci J Metzger | Pahrump Realtor - Nearly 3 Decades of Excellence",
    description:
        "Experienced Pahrump realtor with nearly 30 years in real estate. Specializing in Southern Nevada residential and commercial properties. Top residential sales for 5 years. Contact Marci Metzger today!",
    keywords: [
        "Pahrump realtor",
        "Southern Nevada real estate",
        "Mountain Falls homes",
        "Marci Metzger",
        "Ridge Realty Group",
        "Nevada real estate agent",
    ],
    openGraph: {
        title: "Marci J Metzger - Pahrump Realtor",
        description: "Nearly 3 decades of real estate excellence in Southern Nevada",
        type: "website",
    },
    icons: {
        icon: "/assets/logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
            <body>
                <Navigation />
                {children}
                <Footer />
                <StickyContactButton />
            </body>
        </html>
    );
}
