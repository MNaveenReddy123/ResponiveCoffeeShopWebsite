import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [focused, setFocused] = useState({ name: false, email: false, message: false });

    const handleFocus = (field) => setFocused(prev => ({ ...prev, [field]: true }));
    const handleBlur = (field) => setFocused(prev => ({ ...prev, [field]: false }));
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="bg-brand-dark min-h-screen">
            <PageHeader title="Contact Us" subtitle="Get in Touch" image={heroBg} />

            <section className="py-20 px-6 container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-playfair font-bold text-white mb-6">Visit Our Cafe</h2>
                        <p className="text-gray-400 mb-8">
                            We'd love to hear from you. Whether you have a question about our menu, need assistance,
                            or just want to say hello, feel free to reach out.
                        </p>

                        <div className="space-y-6">
                            <ContactInfoItem icon={<MapPin />} title="Address" desc="123 Coffee Street, Seattle, WA 98101" />
                            <ContactInfoItem icon={<Phone />} title="Phone" desc="+1 (555) 123-4567" />
                            <ContactInfoItem icon={<Mail />} title="Email" desc="hello@koffee.com" />
                        </div>

                        <div className="mt-12 w-full h-64 bg-gray-800 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            {/* Placeholder for map */}
                            <div className="w-full h-full flex items-center justify-center bg-gray-900 border border-white/10">
                                <span className="text-gray-500">Map View</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-dark/50 border border-white/5 p-8 md:p-12 rounded-2xl backdrop-blur-md"
                    >
                        <h3 className="text-2xl font-playfair font-bold text-white mb-8">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="relative">
                                <label
                                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${focused.name || formData.name ? '-top-6 text-sm text-brand-gold' : 'top-2 text-gray-500'
                                        }`}
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onFocus={() => handleFocus('name')}
                                    onBlur={() => handleBlur('name')}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-700 text-white py-2 focus:outline-none focus:border-brand-gold transition-colors"
                                />
                            </div>

                            <div className="relative">
                                <label
                                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${focused.email || formData.email ? '-top-6 text-sm text-brand-gold' : 'top-2 text-gray-500'
                                        }`}
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onFocus={() => handleFocus('email')}
                                    onBlur={() => handleBlur('email')}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-700 text-white py-2 focus:outline-none focus:border-brand-gold transition-colors"
                                />
                            </div>

                            <div className="relative">
                                <label
                                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${focused.message || formData.message ? '-top-6 text-sm text-brand-gold' : 'top-2 text-gray-500'
                                        }`}
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onFocus={() => handleFocus('message')}
                                    onBlur={() => handleBlur('message')}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-700 text-white py-2 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2 mt-4"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const ContactInfoItem = ({ icon, title, desc }) => (
    <div className="flex items-start gap-4">
        <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full">
            {icon}
        </div>
        <div>
            <h4 className="text-white font-medium mb-1">{title}</h4>
            <p className="text-gray-400">{desc}</p>
        </div>
    </div>
);

export default Contact;
