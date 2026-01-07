import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, image }) => {
    return (
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-brand-gold font-light tracking-wide"
                >
                    {subtitle}
                </motion.p>
            </div>
        </div>
    );
};

export default PageHeader;
