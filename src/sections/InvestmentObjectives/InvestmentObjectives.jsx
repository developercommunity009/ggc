import React from 'react'
import img from '../../assets/investmentObjectives.png'
import { motion } from 'framer-motion'


const InvestmentObjectives = () => {

    return (
        <div className='bg-[#080513] relative'>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                initial='hidden'
                style={{ opacity: 0 }}
                viewport={{ once: true }}
            >
                <div className='max-w-screen-xl mx-auto px-5 py-16'>
                    <div className='flex gap-12 lg:gap-7 flex-col lg:flex-row'>
                        <div className='flex-[0.7]'>
                            <div className='flex justify-center'>
                                <div className='relative h-[400px] sm:h-[500px] lg:h-[700px]'>
                                    <img src={img} className='w-full h-full object-contain relative z-10' alt='img' />
                                    <div className='btn-bg h-[30%] rounded-[40px] absolute -bottom-2 -left-2 -right-2' />
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <h2 className='text-[#ECE8F0] text-[30px] sm:text-[35px] md:text-[44px] font-bold max-w-[550px] leading-9 text-center sm:text-left'>
                                The investment objectives of <span className='text-green-600'>Global Energies are</span>
                            </h2>

                            <div className='mt-7 max-w-[640px] space-y-5'>
                                <div className='flex  gap-5' style={{ paddingTop: "9px" }}>
                                    <div className='bg-[rgba(22,163,74,0.6)] h-[2px] w-[50px] sm:w-[70px]my-auto box-border' style={{ marginTop: "9px" }} />
                                    <h4 className='text-[#ECE8F0] text-[18px]  w-full'>
                                        To achieve a combination of long-term and short-term capital growth by <span className='font-bold'>investing in a diverse range</span> of high yield trading strategies and major cryptocurrencies.
                                    </h4>
                                </div>

                                <div className='flex gap-5' style={{ paddingTop: "9px" }}>
                                    <div className='bg-[rgba(22,163,74,0.6)] h-[2px] w-[50px] sm:w-[70px]my-auto box-border' style={{ marginTop: "9px" }} />
                                    <h4 className='text-[#ECE8F0] text-[18px] w-full'>
                                        To provide investors with a choice of investment options, including a variable option with quarterly or annual returns and a fixed <span className='font-bold'> passive income model for a more steady approach.</span>
                                    </h4>
                                </div>

                                <div className='flex gap-5' style={{ paddingTop: "9px" }}>
                                    <div className='bg-[rgba(22,163,74,0.6)] h-[2px] w-[50px] sm:w-[70px]my-auto box-border' style={{ marginTop: "9px" }} />
                                    <h4 className='text-[#ECE8F0] text-[18px] w-full'>
                                        <span className='font-bold'>To invest in a diverse range of assets, including Bitcoin (BTC), Ethereum (ETH),</span> capital protected structured notes, other highly liquid cryptocurrencies and more aggressive trading strategies.
                                    </h4>
                                </div>

                                <div className='flex gap-5' style={{ paddingTop: "9px" }}>
                                    <div className='bg-[rgba(22,163,74,0.6)] h-[2px] w-[50px] sm:w-[70px]my-auto box-border' style={{ marginTop: "9px" }} />
                                    <h4 className='text-[#ECE8F0] text-[18px] w-full'>
                                        To engage in yield enhancement <span className='font-bold'>strategies with cryptocurrencies</span> as underlying holdings to maximize returns.
                                    </h4>
                                </div>

                                <div className='flex gap-5' style={{ paddingTop: "9px" }}>
                                    <div className='bg-[rgba(22,163,74,0.6)] h-[2px] w-[50px] sm:w-[70px]my-auto box-border' style={{ marginTop: "9px" }} />
                                    <h4 className='text-[#ECE8F0] text-[18px] w-full'>
                                        To provide investors access to <span className='font-bold'>cutting-edge technologies</span> and investment tactics that are proven to deliver consistent, <span className='font-bold'>exemplary performance.</span>
                                    </h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default InvestmentObjectives