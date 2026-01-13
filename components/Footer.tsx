export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-luxury-charcoal text-luxury-cream py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-3">
                    <p className="text-luxury-gold font-semibold text-lg">
                        Marci J Metzger
                    </p>
                    <p className="text-luxury-cream/80">
                        The Ridge Realty Group | Pahrump, Nevada
                    </p>
                    <p className="text-luxury-cream/60 text-sm">
                        © {currentYear} Marci J Metzger. All rights reserved.
                    </p>
                    <p className="text-luxury-cream/50 text-xs italic">
                        Nearly 3 Decades of Real Estate Excellence
                    </p>
                </div>
            </div>
        </footer>
    );
}
