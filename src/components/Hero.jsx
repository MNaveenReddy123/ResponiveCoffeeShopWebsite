import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax-like fixed position */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed' // Simple parallax effect
                }}
            >
                <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="block text-brand-gold font-medium tracking-widest uppercase mb-4"
                >
                    Premium Coffee Experience
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight"
                >
                    Awaken Your Senses <br /> With Every Sip
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light"
                >
                    Discover the finest artisanal coffee, roasted to perfection and brewed with passion. Join us for a moment of pure indulgence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <Link
                        to="/menu"
                        className="px-8 py-4 bg-brand-coffee text-white rounded-full font-semibold hover:bg-brand-gold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Veiw Our Menu
                    </Link>
                    <Link
                        to="/about"
                        className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:scale-105"
                    >
                        Our Story
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <span className="text-white text-sm tracking-widest opacity-70">SCROLL</span>
            </motion.div>
        </section>
    );
};

export default Hero;
