import Hero from "@/components/Hero";
import About from "@/components/About";
import FindYourHome from "@/components/FindYourHome";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import PropertyGallery from "@/components/PropertyGallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <FindYourHome />
            <Services />
            <Stats />
            <PropertyGallery />
            <Testimonials />
            <Contact />
        </main>
    );
}
