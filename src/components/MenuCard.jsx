import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const MenuCard = ({ image, title, price, desc, category }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-brand-dark/50 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden group hover:border-brand-gold/50 transition-colors"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark font-bold px-3 py-1 rounded-full text-sm">
                    {price}
                </div>
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <span className="text-xs text-brand-gold uppercase tracking-widest">{category}</span>
                        <h3 className="text-xl font-playfair font-bold text-white mt-1">{title}</h3>
                    </div>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{desc}</p>
                <button className="w-full py-3 border border-white/10 rounded-lg text-gray-300 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all flex items-center justify-center gap-2">
                    <Plus size={18} /> Add to Order
                </button>
            </div>
        </motion.div>
    );
};

export default MenuCard;
