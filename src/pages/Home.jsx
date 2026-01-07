import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Award, Users } from 'lucide-react';
import interior from '../assets/interior.png';

const Home = () => {
    return (
        <div className="bg-brand-dark min-h-screen">
            <Hero />

            {/* Intro / About Preview */}
            <section className="py-20 px-6 md:px-12 bg-brand-dark">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={interior}
                            alt="Coffee Shop Interior"
                            className="rounded-lg shadow-2xl w-full h-auto object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="text-brand-gold font-medium uppercase tracking-widest">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-light">History of Passion</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Founded in 2010, Koffee began with a simple mission: to serve the perfect cup of coffee.
                            We travel the world to source the finest beans, roasting them in small batches to preserve
                            their unique flavors and aromas.
                        </p>
                        <Link to="/about" className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:gap-4 transition-all">
                            Read More <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-brand-coffee/10">
                <div className="container mx-auto px-6 text-center">
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Coffee size={40} />}
                            title="Premium Beans"
                            desc="Sourced directly from sustainable farms across the globe."
                        />
                        <FeatureCard
                            icon={<Award size={40} />}
                            title="Expert Roasting"
                            desc="Master roasters ensuring consistent quality and taste."
                        />
                        <FeatureCard
                            icon={<Users size={40} />}
                            title="Community"
                            desc="A place for friends, family, and coffee lovers to connect."
                        />
                    </div>
                </div>
            </section>

            {/* Menu Preview (Simple) */}
            <section className="py-20 px-6 bg-brand-dark text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-brand-gold uppercase tracking-widest">Specialties</span>
                    <h2 className="text-4xl font-playfair font-bold text-brand-light mb-12">Handcrafted for You</h2>

                    <div className="flex justify-center flex-wrap gap-4">
                        <Link to="/menu" className="px-8 py-3 border border-brand-gold text-brand-gold rounded-full hover:bg-brand-gold hover:text-white transition-colors">
                            View Full Menu
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 bg-brand-dark/50 backdrop-blur-sm border border-white/5 rounded-xl hover:border-brand-gold/30 transition-colors group"
    >
        <div className="text-brand-gold mb-6 flex justify-center group-hover:scale-110 transition-transform">{icon}</div>
        <h3 className="text-xl font-playfair font-bold text-brand-light mb-3">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </motion.div>
);

export default Home;
