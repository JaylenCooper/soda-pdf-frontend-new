"use client"
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValid(validateEmail(newEmail));
        setIsTouched(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateEmail(email)) {
            // Handle form submission here
            console.log("Valid email submitted:", email);
        }
    };

    return (
        <section className='relative'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md ">
                <div className="bg-primary rounded-Newsletter grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
                    <div className="col-span-7">
                        <div className="m-10 lg:ml-32 lg:mt-20 lg:mb-20">
                            <p className="text-lg font-normal text-white mb-3 ls-51"> NEWSLETTER </p>
                            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8">
                                Subscribe our <br /> newsletter.
                            </h2>

                            <form onSubmit={handleSubmit}>
                                <div className="relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full">
                                    <input 
                                        type="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        onBlur={() => setIsTouched(true)}
                                        className={`py-6 sm:py-8 text-sm w-full text-black dark:text-white rounded-full pl-4 par-87 focus:outline-none focus:text-black ${
                                            isTouched && !isValid ? 'border-2 border-red-500' : ''
                                        }`}
                                        placeholder="@ enter your email-address"
                                        autoComplete="off"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                        <button 
                                            type="submit"
                                            className={`p-2 rounded-full transition-all duration-200 ${
                                                isValid ? 'bg-gray-900 hover:scale-110' : 'bg-red-500 cursor-not-allowed'
                                            }`}
                                            disabled={!isValid}
                                        >
                                            <Icon
                                                icon="tabler:arrow-narrow-right"
                                                width="32"
                                                height="32"
                                                className="text-white"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {isTouched && !isValid && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-white text-sm mt-2 ml-4"
                                        >
                                            Please enter a valid email address
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </div>
                    <div className="col-span-5 relative hidden md:block">
                        <div>
                            <Image src={'/images/Newsletter/soup.png'} alt="soup-image" width={400} height={400} className='-mt-24' />
                        </div>
                        <div className="absolute top-[78%]">
                            {/* <Image src={'/images/Newsletter/onion.svg'} alt="onion-image" width={300} height={122} /> */}
                        </div>
                        <div className="absolute top-[30%] right-[-23%] hidden lg:block">
                            <Image src={'/images/Newsletter/lec.png'} alt="lettuce-image" width={300} height={122} />
                        </div>
                        <div className="absolute bottom-[10%] left-[0%]">
                            <Image src={'/images/Newsletter/yellow.svg'} alt="yellow-image" width={59} height={59} />
                        </div>
                        <div className="absolute bottom-[20%] right-[20%]">
                            <Image src={'/images/Newsletter/blue.svg'} alt="blue-image" width={25} height={25} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Newsletter;