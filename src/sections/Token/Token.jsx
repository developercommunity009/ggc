import React from 'react'
import img from '../../assets/logo.png'
import { motion } from 'framer-motion'

const Token = () => {
    return (
        <div className='bg-[#080513] relative' id='token'>
            <div className='max-w-screen-xl mx-auto px-5 py-10 pt-[80px] md:py-9'>
                <div className='grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-3'>
                    <div className='lg:py-7'>
                        <h2 className='text-[#ECE8F0] text-center sm:text-left text-[30px] sm:text-[35px]  lg:text-[44px] font-bold leading-6 md:leading-9'>
                        Token - Green Global Energy                         </h2>
                        <p className='text-[#ADA9B2] mt-4 text-[14px] sm:text-[17px] lg:max-w-[500px]'>
                        The “Green Global Energy Token” (GGE) promotes the transition to a sustainable energy supply.  Purchasing the token gives you access to a community that invests in innovative green oil and gas projects.  The aim of these is to develop previously unused resources using innovative, environmentally friendly methods . <br/> <br/>   With the GGE you can become part of this movement to actively shape the energy transition.  Modern, low-emission fracking methods and advanced processing technologies drastically reduce the ecological footprint compared to conventional oil and gas production.  At the same time, these new, clean projects contribute to security of supply.                                                  </p>
                    </div>
                    <motion.div
                        whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                        initial='hidden'
                        style={{ opacity: 0 }}
                        className='w-[80%] mx-auto'
                    >
                        <div className='flex justify-center'>
                            <img src={img} alt='img' className='object-contain w-[300px] sm:w-[400px] md:w-[500px] lg:w-full mt-[50px] lg:mt-0 hover:scale-95 duration-700' />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Token