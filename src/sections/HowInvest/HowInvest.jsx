import React from 'react'
import img from '../../assets/invest.png'
import { motion } from 'framer-motion'
import invest1 from '../../assets/invest1.png'
import invest2 from '../../assets/invest2.png'
import invest3 from '../../assets/invest3.png'

const HowInvest = () => {
    return (
        <div className='bg-[#080513] relative' id='invest'>
            <div className='light-blue absolute bottom-0 left-[-30px] h-[250px] md:h-[300px] w-[250px] md:w-[300px] z-30' />

            <div className='max-w-screen-xl mx-auto px-5 py-5 md:py-10 pt-[90px]  '>

                <h2 className='text-[#ECE8F0] text-center text-[30px] sm:text-[35px] md:text-[44px] font-bold leading-8 md:leading-9'>
                Investment  <span className='text-green-600'>Opportunities?</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-14 gap-3 items-center'>

                    <motion.div
                        whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                        initial='hidden'
                        style={{ opacity: 0 }}
                        className='w-[70%] mx-auto'
                    >
                        <div >
                            <img src={img} alt='img' className='object-contain' />
                        </div>
                    </motion.div>

                    <div className='flex gap-4 items-center'>
                        <div className='flex flex-col justify-center w-[50px]'>
                            <div className='h-[50px] w-[50px] rounded-full btn-bg flex justify-center items-center hover:scale-110 duration-700'>
                                <img src={invest1} alt='img' className='w-[50%] h-[50%]' />
                            </div>
                            <div className='flex justify-center'>
                                <div className='h-[130px] w-[2px]' style={{
                                    background: 'rgba(22,163,74,0.6)'
                                }} />
                            </div>
                            <div className='h-[50px] w-[50px] rounded-full btn-bg flex justify-center items-center hover:scale-110 duration-700'>
                                <img src={invest2} alt='img' className='w-[50%] h-[50%]' />
                            </div>
                            <div className='flex justify-center'>
                                <div className='h-[130px] w-[2px]' style={{
                                    background: 'rgba(22,163,74,0.6)'
                                }} />
                            </div>
                            <div className='h-[50px] w-[50px] rounded-full btn-bg flex justify-center items-center hover:scale-110 duration-700'>
                                <img src={invest3} alt='img' className='w-[50%] h-[50%]' />
                            </div>
                        </div>
                        <div className='space-y-[25px] md:space-y-[80px] mt-5 md:mt-0'>
                            <div>
                                <h1 className='text-[19px] md:text-[23px] font-semibold text-[#ECE8F0]'>
                                Oil Investments
                                </h1>
                                <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                Oil remains a valuable resource with potential for strong returns. Our team at Green Global Energies Investment carefully analyzes each project.                            </p>
                            </div>
                            <div>
                                <h1 className='text-[19px] md:text-[23px] font-semibold text-[#ECE8F0]'>
                                Gas Investments

                                </h1>
                                <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                Natural gas continues to be a vital part of the global energy mix. Our gas investment projects prioritize efficiency and environmental responsibility.                                </p>
                            </div>
                            <div>
                                <h1 className='text-[19px] md:text-[23px] font-semibold text-[#ECE8F0]'>
                                Renewable Energies Investments
                                </h1>
                                <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                The future of energy lies in renewable sources, such as solar, wind, and hydro power. Global Energies Investment offers a portfolio of renewable energy projects.  </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HowInvest