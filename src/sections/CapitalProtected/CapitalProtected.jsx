import React from 'react'
import img from '../../assets/_Clip Group_.png'
import { motion } from 'framer-motion'
import arrow from '../../assets/arrow.png'

const CapitalProtected = () => {
    return (
        <div className='bg-[#080513] relative'>
            <div className='max-w-screen-xl mx-auto px-5 py-10 md:py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center'>

                    <motion.div
                        whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                        initial='hidden'
                        style={{ opacity: 0 }}
                        className='w-[80%] mx-auto lg:w-full'
                    >
                        <div >
                            <img src={img} alt='img' className='object-contain hover:scale-95 duration-700' />
                        </div>
                    </motion.div>

                    <div>
                        <h2 className='text-[#ECE8F0] text-center sm:text-left text-[30px] sm:text-[35px]  lg:text-[44px] font-bold leading-9'>
                            What is a <span className='text-green-600'>Capital Protected </span> Structured Note ?                        </h2>
                        <p className='text-[#ADA9B2] mt-4 text-[14px] sm:text-[17px] md:max-w-[500px]'>
                        If you are like many people, you probably have questions about what a <span className='font-bold'>"Capital Protected Structured Note"</span> is. Luckily, Global Energies AMC is here to provide some answers. In simple terms, a capital protected structured note is an investment product that offers investors protection against losses while also providing the potential for gains. This makes it an ideal investment for those who are looking to take a conservative approach to investing in the cryptocurrency markets.<br/><br/>Global Energies AMC offers a variety of different capital protected structured notes that are each designed to meet the unique needs of our clients. Whether you are looking for <span className='font-bold'>short-term or long- term protection</span>, we have a note that is right for you. Each of our notes is backed by a team of experts who regularly monitor the markets to ensure that your investment is safeguarded.<br/><br/>If you are interested in learning more about our Capital Protected Structured Notes or any of the other products and services we offer, please contact us today. We would be more than happy to answer any questions you may have and help you find the investment solution that is right for you.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CapitalProtected