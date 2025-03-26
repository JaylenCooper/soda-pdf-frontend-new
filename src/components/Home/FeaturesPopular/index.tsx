"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FeaturesDataPopular } from '@/app/api/data';
import { Icon } from "@iconify/react";
import { IoGitMerge } from 'react-icons/io5';
import { FeatureCard } from '../FeatureCard/FeatureCard';
import { motion } from 'framer-motion';

const FeaturesPopular = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };
    return (
        <section id="features-popular">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md' id="about-section">
                <div className='text-center mb-14' >
                    <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Features - Most Popular Tools</p>
                    <h2 className='text-3xl lg:text-5xl font-semibold text-black dark:text-white lg:max-w-60% mx-auto'>Included with PDFProdigy Standard, Pro & Business plans</h2>
                </div>
                <motion.div 
                    className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32'
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {FeaturesDataPopular.map((items, i) => (
                        <motion.div key={i} variants={item}>
                            <FeatureCard imgSrc={items.imgSrc} icon={items.icon} heading={items.heading} subheading={items.subheading} color={items.color} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default FeaturesPopular;
