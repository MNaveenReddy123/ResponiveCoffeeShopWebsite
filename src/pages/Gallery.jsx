import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import interior from '../assets/interior.png';
import aboutImg from '../assets/about.jpg';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';

const images = [
    { id: 1, src: interior, alt: 'Interior' },
    { id: 2, src: p1, alt: 'Espresso' },
    { id: 3, src: aboutImg, alt: 'Roasting' },
    { id: 4, src: p2, alt: 'Latte Art' },
    { id: 5, src: p3, alt: 'Iced Coffee' },
    { id: 6, src: p4, alt: 'Matcha' },
    { id: 7, src: p5, alt: 'Cold Brew' },
    { id: 8, src: p6, alt: 'Frappe' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="bg-brand-dark min-h-screen">
            <PageHeader title="Gallery" subtitle="Moments of Perfection" image={interior} />

            <section className="py-20 px-6 container mx-auto">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-playfair tracking-widest uppercase border border-white px-4 py-2">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white hover:text-brand-gold transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
