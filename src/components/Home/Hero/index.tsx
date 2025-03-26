"use client"
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {

    return (
        <section id="home-section" className='bg-gray-50 dark:bg-gray-700'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                    <div className='col-span-6'>
                    <h1 className="mt-0 text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white leading-loose md:4px lg:text-start text-center">
                        Simplifying PDFs with powerful, <span className='text-primary'>easy-to-use</span> software
                    </h1>
                        <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>Make managing your PDFs effortless. Edit, merge, convert, compress, sign, and secure your documents—everything you need is just a few clicks away.</p>
                        <div className='md:flex align-middle justify-center lg:justify-start'>
                            <Link href='#cook-section' className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-white bg-primary hover:text-primary hover:bg-transparent'>EXPLORER</Link>
                            <Link href='#about-section' className='flex border ml-5 w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary'>BUY NOW</Link>
                        </div>
                    </div>
                    <div className='col-span-6 flex justify-center relative'>
                        <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
                            <Image src={'/images/hero/pdfbanner2.jpg'} alt="pizza-image" width={68} height={68} style={{borderRadius: '20%'}}/>
                            <p className='text-lg font-normal'><span className='text-primary'><b>50K+</b></span> people are <br/>using our software.</p>
                        </div>
                        <video autoPlay muted loop>
                            <source src="/images/hero/hero-animation.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
