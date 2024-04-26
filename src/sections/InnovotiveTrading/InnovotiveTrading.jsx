import React from 'react'
import img from '../../assets/Rectangle 9.png'
import bgImg from '../../assets/Maskgroup.png'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motions'

const InnovotiveTrading = () => {

    const data = [
        'Investment objective is to achieve passive income and capital growth through investing in highly liquid trading strategies and cryptocurrencies.',
        'Engages in yield enhancement strategies with structured notes and financial instruments from leading European institutions.',
        'Utilizes an aggressive trading model with algos and bots overseen by expert traders',
        'Investors can invest directly in cryptocurrency or through traditional FIAT route.',
        'Structured products provide trust, longevity, and sustainability for the fund.',
        'Distinguished from other players in the digital asset space.',
    ]

    return (
        <div className='btn-bg relative'

        >
            <div className='absolute inset-0'
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <div className='max-w-screen-xl mx-auto px-4 py-10 md:py-16'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                    <div className='relative z-10'>
                        <h2 className='text-[#ECE8F0] text-center sm:text-left text-[30px] sm:text-[35px]  lg:text-[44px] font-bold leading-9'>
                            Global Energies: Innovative <br /> Trading for Consistent Returns
                        </h2>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            >
                            <div className='space-y-5 md:space-y-6 mt-4'>
                                {data.map((item, i) => (
                                    <motion.div
                                        variants={fadeIn('right', 'tween', 0.6 + (i - 0.8), 0.7)}
                                        key={i}
                                    >
                                        <div  className='flex gap-3 items-center'>
                                            <div className='bg-[#ECE8F0] h-[40px] w-[40px] flex-shrink-0 sm:h-[50px] sm:w-[50px] rounded-full flex justify-center items-center'>
                                                <h6 className='text-[14px] sm:text-[17px]'>{i + 1}</h6>
                                            </div>
                                            <div>
                                                <p className='text-[#ECE8F0] text-[12px] sm:text-[16px] w-full md:max-w-[500px]'>
                                                    {item}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className='w-[70%] sm:w-[90%] mx-auto mt-4 md:mt-0'>
                        <img src={img} alt='img' className='object-contain hover:scale-95 duration-700 relative z-10' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InnovotiveTrading