import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motions'


const Portfolio = () => {

    return (
        <div className='bg-[#080513] relative' id='portfolio'>

            <div className='max-w-screen-xl mx-auto px-5 md:py-10 pt-[40px] md:pt-[90px]'>
                <h2 className='text-[#ECE8F0] text-center text-[25px] sm:text-[35px] md:text-[44px] font-bold leading-8 md:leading-9'>
                    <span className='text-green-600'>Green Energy Revolution</span>
                </h2>
                <p className='text-[#ECE8F0] text-center text-[16px] sm:text-[20px] font-semibold mt-[5px]'>
                    A utility token for sustainable fracking in the oil and gas sector
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-[50px] md:mt-10'>

                    <div>
                        <div className='rounded-lg space-y-[20px] hover:scale-95 duration-700 p-4 md:py-5 md:px-7 bg-[#130D1B]'>
                            <div>
                                <h1 className='text-[18px] text-[#ECE8F0] font-bold'>
                                    Introduction:
                                </h1>
                                <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                    Enter a world where green technologies and sustainable fracking are redefining the boundaries of the energy industry.  Learn how an innovative utility token is paving the way to a green oil and gas industry while driving the energy transition.
                                </p>
                            </div>
                            <div>
                                <h1 className='text-[18px] text-[#ECE8F0] font-bold'>
                                The Challenges of the Oil and Gas Industry                                </h1>
                                <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                   
                                    The oil and gas industry has long been associated with environmental problems and negative impacts on the climate footprint.  But today we are on the threshold of a turning point.  By using the latest green technologies and sustainable fracking, we can minimize the ecological impact and enable responsible energy production.
                                </p>
                            </div>
                            <div>
                                <h1 className='text-[18px] text-[#ECE8F0] font-bold'>
                                Sustainable Fracking: The Key to Green Oil and Gas Production                                </h1>
                                <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                    
                                    Our utility token represents a new era of sustainable fracking.  By using advanced technologies and strict environmental regulations, we reduce water consumption, limit greenhouse gas emissions and protect sensitive ecosystems.  Our innovative method makes it possible to develop oil and gas reserves efficiently and in an environmentally friendly way.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <motion.div
                            whileInView={{ x: [300, 0], opacity: [0, 1] }}
                            transition={{ duration: 1.3, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            style={{ opacity: '0' }}
                        >
                            <div className='rounded-lg space-y-[20px] hover:scale-95 duration-700 p-4 md:py-5 md:px-7 bg-[#130D1B] h-full'>
                                <div>
                                    <h1 className='text-[18px] text-[#ECE8F0] font-bold'>
                                    Promotion of renewable energies
                                    </h1>
                                    <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                        However, our utility token goes beyond sustainable fracking.  We also invest in renewable energy and use proceeds from token sales to advance solar, wind and bioenergy projects.  This holistic approach allows us to accelerate the transition to a green energy future and reduce our dependence on fossil fuels.
                                    </p>
                                </div>
                                <div>
                                    <h1 className='text-[18px] text-[#ECE8F0] font-bold'>
                                    Community commitment to the energy transition
                                    </h1>
                                    <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                        Our utility token promotes a strong sense of community and encourages token holders to actively contribute to the energy transition.  By accessing our ecosystem, users can optimize their energy consumption, support renewable energy sources, and benefit from rewards at the same time.
                                    </p>
                                </div>
                                <div>
                                    <h1 className='text-[18px] text-[#ECE8F0] font-bold'>
                                        Conclusion:
                                    </h1>
                                    <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                        The utility token for sustainable fracking in the oil and gas sector combines innovative technologies, responsible energy production and the transition to renewable energies.  It enables investors to be part of a green energy revolution while achieving economic benefits.  Together we are shaping a sustainable future in which oil and gas are produced responsibly and the energy transition advances.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Portfolio