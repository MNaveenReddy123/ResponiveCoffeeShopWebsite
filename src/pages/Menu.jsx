import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import MenuCard from '../components/MenuCard';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';

const menuItems = [
    { id: 1, title: 'Espresso Romano', category: 'Hot Coffee', price: '$4.50', desc: 'A strong shot of espresso with a twist of lemon.', image: p1 },
    { id: 2, title: 'Cappuccino Art', category: 'Hot Coffee', price: '$5.50', desc: 'Rich espresso with steamed milk and thick foam.', image: p2 },
    { id: 3, title: 'Iced Caramel Macchiato', category: 'Cold Coffee', price: '$6.00', desc: 'Espresso, vanilla syrup, milk, and caramel drizzle.', image: p3 },
    { id: 4, title: 'Matcha Latte', category: 'Tea', price: '$5.00', desc: 'Premium matcha green tea with steamed almond milk.', image: p4 },
    { id: 5, title: 'Cold Brew Delight', category: 'Cold Coffee', price: '$5.50', desc: 'Slow-steeped cold brew with a splash of cream.', image: p5 },
    { id: 6, title: 'Mocha Frappe', category: 'Cold Coffee', price: '$6.50', desc: 'Blended coffee, chocolate, milk, and whipped cream.', image: p6 },
    { id: 7, title: 'Americano', category: 'Hot Coffee', price: '$4.00', desc: 'Hot water poured over a double shot of espresso.', image: p1 },
    { id: 8, title: 'Affogato', category: 'Dessert', price: '$7.00', desc: 'Vanilla ice cream topped with a shot of hot espresso.', image: p2 },
];

const categories = ['All', 'Hot Coffee', 'Cold Coffee', 'Tea', 'Dessert'];

const Menu = () => {
    const [filter, setFilter] = useState('All');

    const filteredItems = filter === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === filter);

    return (
        <div className="bg-brand-dark min-h-screen">
            <PageHeader title="Our Menu" subtitle="Explore Our Signature Blends" image={heroBg} />

            <section className="py-20 px-6 container mx-auto">
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full border transition-all ${filter === cat
                                    ? 'bg-brand-gold border-brand-gold text-white'
                                    : 'border-white/20 text-gray-400 hover:border-brand-gold hover:text-brand-gold'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <MenuCard key={item.id} {...item} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
        </div>
    );
};

export default Menu;
