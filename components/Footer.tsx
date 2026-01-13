export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-luxury-charcoal text-luxury-cream py-10 border-t border-luxury-gold/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-6 text-center">
                    {/* Social Links */}
                    <div className="flex items-center space-x-6">
                        <a
                            href="https://www.facebook.com/MarciHomes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-luxury-gold/70 hover:text-luxury-gold transition-colors duration-300"
                            title="Facebook"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/marciandlauren_nvrealtors/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-luxury-gold/70 hover:text-luxury-gold transition-colors duration-300"
                            title="Instagram"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.132 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/marci-metzger-30642496/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-luxury-gold/70 hover:text-luxury-gold transition-colors duration-300"
                            title="LinkedIn"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-luxury-gold/70 hover:text-luxury-gold transition-colors duration-300"
                            title="Yelp"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path d="M12.915 14.86c-.463-.046-.575-.194-.583-.45.01-.84.226-2.61.32-3.41.01-.064.032-.12.06-.176.08-.163.26-.255.485-.255h.014c.237.002.43.1.517.264.123.22.18.52.224.847.11 1.05.27 2.505.412 3.86.012.18-.016.34-.084.475-.084.17-.245.282-.44.316-.25.044-.614.053-.925.03zm-2.053-1.636c.27-.406.417-.518.665-.544.85-.098 2.766-.316 3.597-.404.067-.007.13-.01.196-.003.19.014.336.142.385.37h.003c.044.24-.002.46-.118.614-.15.203-.396.39-.672.548-.905.513-2.152 1.258-3.3 1.957-.156.096-.31.144-.457.144-.19 0-.365-.086-.474-.24-.143-.2-.178-.545-.147-.9L10.862 13.224zm-.893 2.656c.435.155.515.285.494.536-.08 1.053-.25 3.394-.325 4.39-.004.08-.018.157-.043.23-.07.2-.24.332-.472.378h-.024c-.167.032-.518.013-.805-.07-.373-.105-.72-.257-.996-.442-.897-.597-2.112-1.428-3.23-2.222-.162-.114-.265-.246-.3-.39-.044-.183-.005-.38.113-.54.153-.205.474-.325.82-.36.337-.03 1.08-.112 2.164-.22 1.345-.13 2.146-.226 2.454-.252.268-.02.395-.01.62.06zm.797-3.078c.032.486-.06.634-.302.733-.765.316-2.522 1.144-3.284 1.488-.06.027-.123.044-.188.048-.19.014-.36-.065-.472-.25-.016-.027-.03-.058-.046-.09-.092-.224-.09-.49.032-.693.15-.253.456-.41.803-.49 1.135-.262 2.693-.614 4.098-.934.183-.04.348-.042.482-.003.205.064.354.223.37.452.02.247.003.53-.024.75zM12.44 9.43c-.417.306-.51.428-.564.673-.186 1.02-.6 3.29-.81 4.364-.016.08-.028.163-.03.245-.004.224.113.435.323.57.016.012.03.023.048.033.204.135.485.163.74.072.26-.093.55-.303.812-.533 1.056-.913 2.3-2 3.328-3.04.148-.152.215-.314.19-.485-.028-.19-.153-.356-.34-.452-.25-.133-.564-.176-.9-.136-1.14.138-2.61.32-4.145.493-.16.018-.344.053-.472.144z" />
                            </svg>
                        </a>
                    </div>

                    <div className="space-y-3">
                        <p className="text-luxury-gold font-serif font-bold text-xl tracking-wide">
                            Marci J Metzger
                        </p>
                        <p className="text-luxury-cream/80 font-medium">
                            The Ridge Realty Group | Pahrump, Nevada
                        </p>
                        <div className="flex flex-col items-center space-y-1 py-2">
                            <p className="text-luxury-cream/60 text-sm">
                                © {currentYear} Marci J Metzger. All rights reserved.
                            </p>
                            <p className="text-luxury-cream/50 text-xs italic">
                                Nearly 3 Decades of Real Estate Excellence
                            </p>
                        </div>
                    </div>

                    {/* Certifications/Logos could go here */}
                    <div className="pt-4 opacity-50 flex items-center justify-center space-x-8">
                        {/* Placeholder for Equal Housing / Realtor logos if needed */}
                        <div className="w-10 h-10 border border-luxury-cream/20 rounded flex items-center justify-center text-[10px]">REALTOR®</div>
                        <div className="w-10 h-10 border border-luxury-cream/20 rounded flex items-center justify-center text-[10px] text-center px-1">EQUAL HOUSING</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
