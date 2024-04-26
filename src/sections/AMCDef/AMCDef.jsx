import React from 'react'
import img from '../../assets/Layer1.png'
import { motion } from 'framer-motion'

const AMCDef = () => {
    return (
        <div className='bg-[#080513] relative'>
            <div className='max-w-screen-xl mx-auto px-5 py-10 md:py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center'>
                    <div>
                        <h2 className='text-[#ECE8F0] text-center sm:text-left text-[30px] sm:text-[35px]  lg:text-[44px] font-bold leading-6 md:leading-9'>
                            What is am <span className='text-green-600'>AMC?</span>
                        </h2>
                        <p className='text-[#ADA9B2] mt-4 text-[14px] sm:text-[17px] md:max-w-[500px]'>
                            AMCs (Actively Managed Certificates) are securities that can be offered to the public as well as professional and institutional investors without any minimum requirements. The structure allows for participation in an underlying portfolio of assets.<br /><br />AMCs offer investment managers excellent flexibility for tailoring investment strategies, providing the ability to combine capital protected instruments, high yield products as well as emerging market or other related instruments which may be used for yield optimisation or hedging.<br /><br />This structure is vital in allowing the investment manager to achieve its objective of long-term capital growth within the cryptocurrency and digital asset sector.
                        </p>
                    </div>
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
                </div>
            </div>
        </div>
    )
}

export default AMCDef