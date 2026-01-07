import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import interior from '../assets/interior.png';
import aboutImg from '../assets/about.jpg';
import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-brand-dark min-h-screen">
            <PageHeader
                title="Our Story"
                subtitle="Crafting the Perfect Cup Since 2010"
                image={interior}
            />

            <section className="py-20 px-6 md:px-12">
                <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={aboutImg} alt="Roasting Coffee" className="rounded-lg shadow-xl w-full" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 text-gray-300"
                    >
                        <h2 className="text-4xl font-playfair font-bold text-brand-light">Passion Strategy</h2>
                        <p className="leading-relaxed">
                            At Koffee, we believe that coffee is more than just a drink; it's an experience.
                            Our journey began with a small roastery in Seattle, driven by a passion for exploring
                            distinct flavor profiles.
                        </p>
                        <p className="leading-relaxed">
                            We work directly with farmers to source the highest quality beans, ensuring ethical
                            practices and sustainable farming. Every batch is roasted with precision to unlock
                            its full potential.
                        </p>

                        <div className="space-y-2 mt-4">
                            <ListItem text="Ethically Sourced Beans" />
                            <ListItem text="Master Roasting Techniques" />
                            <ListItem text="Award-Winning Baristas" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-brand-coffee/5 text-center px-6">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-playfair font-bold text-brand-light mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ValueCard title="Quality" desc="We never compromise on the quality of our beans or our brew." />
                        <ValueCard title="Sustainability" desc="Committed to eco-friendly practices from farm to cup." />
                        <ValueCard title="Community" desc="Building connections one cup at a time." />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ListItem = ({ text }) => (
    <div className="flex items-center gap-3 text-brand-gold">
        <CheckCircle size={20} />
        <span className="text-gray-300">{text}</span>
    </div>
);

const ValueCard = ({ title, desc }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 bg-brand-dark border border-white/5 rounded-xl hover:border-brand-gold/50 transition-colors"
    >
        <h3 className="text-2xl font-playfair font-bold text-brand-gold mb-4">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </motion.div>
);

export default About;
