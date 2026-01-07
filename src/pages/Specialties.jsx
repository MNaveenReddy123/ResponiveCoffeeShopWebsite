import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';
import p1 from '../assets/p1.png';
import p5 from '../assets/p5.png';

const Specialties = () => {
    return (
        <div className="bg-brand-dark min-h-screen">
            <PageHeader title="Signature Blends" subtitle="Experience Our Masterpieces" image={heroBg} />

            {/* Specialty 1 */}
            <SpecialtySection
                image={p1}
                title="The Royal Espresso"
                desc="A double shot of our finest Arabica beans, extracted to perfection for a rich, velvety crema and bold flavor profile. Served with a glass of sparkling water to cleanse the palate."
                reverse={false}
            />

            {/* Specialty 2 */}
            <SpecialtySection
                image={p5}
                title="Nitro Cold Brew"
                desc="Slow-steeped for 24 hours and infused with nitrogen for a creamy, stout-like texture. No dairy or sugar needed â€“ just pure, smooth coffee bliss."
                reverse={true}
            />

            {/* Call to Action */}
            <section className="py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block p-12 border border-brand-gold/30 rounded-2xl bg-brand-coffee/5 backdrop-blur-sm"
                >
                    <h2 className="text-4xl font-playfair font-bold text-white mb-4">Taste the Difference</h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">Visit us today and discover why our specialties are the talk of the town.</p>
                    <button className="px-8 py-3 bg-brand-gold text-brand-dark font-bold rounded-full hover:bg-white transition-colors">
                        Find a Location
                    </button>
                </motion.div>
            </section>
        </div>
    );
};

const SpecialtySection = ({ image, title, desc, reverse }) => (
    <section className="py-24 px-6 overflow-hidden">
        <div className={`container mx-auto flex flex-col md:flex-row items-center gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <motion.div
                initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-brand-gold/10 rounded-full blur-3xl transform scale-110" />
                    <img src={image} alt={title} className="relative z-10 w-3/4 mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-6 text-center md:text-left"
            >
                <h2 className="text-5xl font-playfair font-bold text-white">{title}</h2>
                <div className="h-1 w-20 bg-brand-gold mx-auto md:mx-0" />
                <p className="text-xl text-gray-300 font-light leading-relaxed">{desc}</p>
            </motion.div>
        </div>
    </section>
);

export default Specialties;
