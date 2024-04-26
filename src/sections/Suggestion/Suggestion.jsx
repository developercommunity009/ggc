import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motions'


const Suggestion = () => {

    return (
        <div className='bg-[#080513] relative'>

            <div className='max-w-screen-xl mx-auto px-5 md:py-10 pt-[40px] md:pt-[90px]'>
                <h2 className='text-[#ECE8F0] text-center text-[22px] sm:text-[35px] md:text-[44px] font-bold md:leading-9'>
                    Suggestion for a <span className='text-green-600'>"green"</span> story for marketing the <span className='text-green-600'>utility token</span> for clean <span className='text-green-600'>oil and gas</span> projects
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-[50px] md:mt-10'>

                    <div className='rounded-lg space-y-[20px] hover:scale-95 duration-700 p-4 md:py-5 md:px-7 bg-[#130D1B] h-full'>
                        <div>
                            <h1 className='text-[18px] text-[#ECE8F0] font-bold'>
                                Introduction:
                            </h1>
                            <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                In a world plagued by the challenges of climate change and dependence on fossil fuels, we have found the solution: sustainable fracking combined with alternative energy.  Welcome to a new era of energy supply, where we protect our environment while meeting our energy needs.
                            </p>
                        </div>
                        <div>
                            <h1 className='text-[18px] text-[#ECE8F0] font-bold'>
                                 The Importance of Sustainable Fracking
                            </h1>
                            <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                Fracking has long been a controversial topic, but we have found the key to sustainability.  By using advanced technologies and strict environmental regulations, we have developed a method that minimizes environmental impact.  Our fracking processes are designed to reduce water consumption, limit greenhouse gas emissions and ensure environmental protection.
                            </p>
                        </div>
                        <div>
                            <h1 className='text-[18px] text-[#ECE8F0] font-bold'>
                               Renewable energies in focus
                            </h1>
                            <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                In addition to sustainable fracking, our main focus is on renewable energy.  We invest in innovative technologies such as solar energy, wind power and geothermal energy.  These renewable energies are not only environmentally friendly but also cost-effective and offer a sustainable alternative to fossil fuels.                                    </p>
                        </div>
                        <div>
                            <h1 className='text-[18px] text-[#ECE8F0] font-bold'>
                                 The Benefits for Investors
                            </h1>
                            <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                As an investor in our Green Energy Tokens, you benefit from a unique opportunity.  Not only do you invest in a sustainable future, but you also have the opportunity to benefit from the economic benefits.  By using the proceeds from the token sale, we not only finance our sustainable fracking projects, but also the expansion and further development of our alternative energy projects.  This creates a diversified portfolio with long-term growth potential.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <motion.div
                            whileInView={{ x: [300, 0], opacity: [0, 1] }}
                            transition={{ duration: 1.3, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            style={{ opacity: '0' }}
                        >


                            <div>
                                <div className='rounded-lg space-y-[20px] hover:scale-95 duration-700 p-4 md:py-5 md:px-7 bg-[#130D1B]'>
                                    <div>
                                        <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                            The “Green Global Energy Token” (GGE) promotes the transition to a sustainable energy supply.  Purchasing the token gives you access to a community that invests in innovative green oil and gas projects.  The aim of these is to develop previously unused resources using innovative, environmentally friendly methods.
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                            With the GGE you can become part of this movement to actively shape the energy transition.  Modern, low-emission fracking methods and advanced processing technologies drastically reduce the ecological footprint compared to conventional oil and gas production.  At the same time, these new, clean projects contribute to security of supply.
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                            Each GGE symbolically represents an investment in a green future of energy production.  By becoming part of this community, you are contributing to change.  You also get early access to exciting projects that you can accompany and help shape.  The GGE Community promotes the sustainable development of energy resources.
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-[#ADA9B2] text-[15px] pt-[10px]'>
                                            This positive vision allows the token to be marketed, even if legally it is purely a utility.  The oil and gas projects then of course have to live up to this green story.                                </p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Suggestion