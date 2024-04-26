import React from 'react'
import playImg from '../../assets/play.png'
import { motion } from 'framer-motion'

import Pdf from './WHITEPAPER.pdf';

const Left = () => {
    return (
        <div>

            <motion.div
                whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                initial='hidden'
                style={{ opacity: 0 }}
                viewport={{ once: true }}
            >
                <h5 className='text-white font-bold text-[16px] sm:text-[18px] uppercase'>
                Green Energy Revolution
                                </h5>

                <h2 className='font-extrabold  text-[32px] sm:text-[42px] md:text-[52px] text-green-600 mt-3'>
                A utility token for                </h2>
                <h2 className='font-extrabold  text-[28px] sm:text-[42px] md:text-[52px] text-green-600'>
                sustainable fracking in the oil and gas sector  
                                </h2>

                                
                               

                <p className='text-[#ADA9B2] text-[17px] sm:text-[20px] my-5'>
                Enter a world where green technologies and sustainable fracking are redefining the boundaries of the energy industry.  Learn how an innovative utility token is paving the way to a green oil and gas industry while driving the energy transition.
                </p>

                <div className='py-2 flex items-center gap-6 flex-wrap'>
                    <button className="rounded text-[16px] relative overflow-hidden inline-flex group items-center justify-center px-6 py-2  cursor-pointer active:shadow-none shadow-lg btn-bg text-white">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                     <a href={Pdf} >  <span className="relative">Whitepaper</span></a> 
                    </button>
                    {/* <div className='flex items-center gap-2 hover:scale-105 cursor-pointer duration-700'>
                        <img src={playImg} alt="img" />
                        <h4 className='text-[#ADA9B2] text-[17px]'>
                            Learn more
                        </h4>
                    </div> */}
                </div>
            </motion.div>
        </div>
    )
}

export default Left