import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-brand-dark/95 border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-playfair font-bold text-brand-cream">
                            <Coffee className="w-8 h-8 text-brand-gold" />
                            <span>Koffee</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Experience the art of coffee in every cup. Sourced from the finest beans, brewed with passion.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink icon={<Facebook size={18} />} />
                            <SocialLink icon={<Instagram size={18} />} />
                            <SocialLink icon={<Twitter size={18} />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-brand-gold font-playfair font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
                            <li><Link to="/menu" className="hover:text-brand-gold transition-colors">Menu</Link></li>
                            <li><Link to="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-brand-gold font-playfair font-semibold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                                <span>123 Coffee Street, Seattle, WA 98101</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                                <span>hello@koffee.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-brand-gold font-playfair font-semibold text-lg mb-6">Opening Hours</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex justify-between">
                                <span>Mon - Fri</span>
                                <span>7:00 AM - 9:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span>8:00 AM - 10:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>8:00 AM - 8:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Koffee. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ icon }) => (
    <a
        href="#"
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-white transition-all duration-300"
    >
        {icon}
    </a>
);

export default Footer;
