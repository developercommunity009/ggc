import React from 'react'
import { motion } from 'framer-motion'


const ExpertSupport = () => {
    return (
        <div className='bg-[#080513]'>
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                initial='hidden'
                style={{ opacity: 0 }}
                viewport={{ once: true }}
            >
                <div className='max-w-screen-xl mx-auto px-5 pt-2 pb-4 md:py-12'>
                    <h2 className='text-[#ECE8F0] text-center text-[30px] sm:text-[35px] md:text-[44px] font-bold leading-9'>
                        Expert Support for Global <br /> <span className='text-green-600'>Energies AMC Investors</span>
                    </h2>
                    <div className='flex justify-center'>
                        <p className='text-[#ADA9B2] text-[14px] sm:text-[18px] mt-5 text-center max-w-[700px]'>
                            Global Energies Ltd is the exclusive introducer that provides support to investors in Global Energies AMC. <br /><br /> We offer expert knowledge and assistance to help you make informed decisions and get the most out of your investment. Contact us for more information about our services and to get started with Global Energies AMC.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ExpertSupport