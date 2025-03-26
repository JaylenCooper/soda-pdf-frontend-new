import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';

export interface FeatureCardProps {
  imgSrc: string;
  icon: React.ComponentType<{ className?: string; color?: string }>;
  heading: string;
  subheading: string;
  color: string;
}

export function FeatureCard({imgSrc, icon: IconComponent, heading, subheading, color}: FeatureCardProps) {
  return <motion.div 
    className='p-8 relative rounded-3xl bg-gradient-to-b from-red-500/5 to-white dark:from-white/5 dark:to-black'
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "linear", duration: 0.2 }}
  >
    <div className='work-img-bg rounded-full flex justify-center absolute -top-[50%] sm:top-[-40%] md:top-[-55%] lg:top-[-45%] left-[0%]'>
        <Image src={imgSrc} alt={imgSrc} width={510} height={10} />
    </div>
    <IconComponent className='w-20 h-20 absolute top-[-23%] left-[50%] transform -translate-x-1/2' color={color} />
    <h3 className='text-2xl text-black dark:text-white font-semibold text-center mt-16'>{heading}</h3>
    <p className='text-lg font-normal text-black/50 dark:text-white/50 text-center mt-2'>{subheading}</p>
    <div className='flex items-center justify-center '>
        <Link href='/' className='text-center text-lg group duration-200 ease-in-out font-medium text-primary mt-2 overflow-hidden flex items-center relative after:absolute after:w-full after:h-px after:bg-primary after:bottom-0 after:right-0 after:translate-x-full hover:after:translate-x-0'>
            Learn More
            <Icon
                icon="tabler:chevron-right"
                width="24"
                height="24"
                className="text-primary "
            />
        </Link>
    </div>
  </motion.div>;
}
