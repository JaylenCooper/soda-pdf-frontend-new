"use client"
import Image from 'next/image';


const Cook = () => {

    return (
        <section className='relative' id="cook-section">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
                    <Image src='/images/Cook/burger.png' alt="burger-image" width={463} height={622} />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
                    <div className='col-span-6 flex justify-start'>
                        <Image src="/images/Cook/ai-tools-en.png" alt="nothing" width={665} height={427} />
                    </div>
                    <div className='col-span-6 flex flex-col justify-center'>
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start'>join with us</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
                            Unlock the power of AI with PDFProdigy
                        </h2>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2'><b>Try out our latest AI tools available exclusively with Soda PDF Online:</b></p>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-1'><b>*</b> AI Assistant lets you explore your documents effortlessly—ask questions, find answers, or get quick summaries to save time on research and review.
                        <br/><br /><b>*</b> With Translate PDF, language is no longer a barrier. Translate your files into different languages while keeping the original layout intact.</p>
                        <button className='text-xl font-medium rounded-full text-white py-5 px-6 bg-primary lg:px-10 mr-6 w-fit border border-primary hover:bg-transparent hover:text-primary'>Learn more</button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Cook;
