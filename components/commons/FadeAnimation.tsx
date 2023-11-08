"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
};

const FadeAnimation = ({ children }: { children: ReactNode }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInVariant}
        >
            {children}
        </motion.div>
    );
};

export default FadeAnimation;