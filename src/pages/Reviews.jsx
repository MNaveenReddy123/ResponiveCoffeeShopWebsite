import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';
import rev1 from '../assets/rev1.jpg';
import rev2 from '../assets/rev2.jpg';
import rev3 from '../assets/rev3.jpg';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        role: 'Coffee Enthusiast',
        image: rev1,
        rating: 5,
        text: "The best coffee I've ever had! The ambiance is perfect for working or catching up with friends. The espresso is rich and smooth."
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Food Blogger',
        image: rev2,
        rating: 5,
        text: "Truly a premium experience. The nitro cold brew is a game changer. Staff is incredibly knowledgeable and friendly."
    },
    {
        id: 3,
        name: 'Sarah Williams',
        role: 'Daily Regular',
        image: rev3,
        rating: 5,
        text: "I come here every morning. The consistency is unmatched, and the pastries are divine. Highly recommended!"
    }
];

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextReview();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="bg-brand-dark min-h-screen">
            <PageHeader title="Testimonials" subtitle="What Our Customers Say" image={heroBg} />

            <section className="py-20 px-6 container mx-auto">
                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-10 hidden md:block">
                        <button onClick={prevReview} className="p-3 rounded-full border border-white/10 text-brand-gold hover:bg-brand-gold hover:text-white transition-all">
                            <ChevronLeft size={24} />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-10 hidden md:block">
                        <button onClick={nextReview} className="p-3 rounded-full border border-white/10 text-brand-gold hover:bg-brand-gold hover:text-white transition-all">
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="relative overflow-hidden min-h-[400px]">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-brand-dark/50 border border-white/5 rounded-2xl p-8 md:p-12 text-center backdrop-blur-md"
                            >
                                <Quote className="w-12 h-12 text-brand-gold mx-auto mb-6 opacity-50" />
                                <p className="text-xl md:text-2xl text-gray-200 font-light italic mb-8 leading-relaxed">"{reviews[currentIndex].text}"</p>

                                <div className="flex flex-col items-center gap-4">
                                    <img
                                        src={reviews[currentIndex].image}
                                        alt={reviews[currentIndex].name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold"
                                    />
                                    <div>
                                        <h4 className="text-xl font-playfair font-bold text-white">{reviews[currentIndex].name}</h4>
                                        <span className="text-sm text-brand-gold uppercase tracking-wider">{reviews[currentIndex].role}</span>
                                    </div>
                                    <div className="flex gap-1 text-brand-gold">
                                        {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-brand-gold w-6' : 'bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;
