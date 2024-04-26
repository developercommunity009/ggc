import React from 'react'
import img from '../../assets/team.png'
import { motion } from 'framer-motion'

const Team = () => {
    return (
        <div className='bg-[#080513] relative' id='token'>
            <div className='light-blue absolute bottom-0 left-[-30px] h-[250px] md:h-[300px] w-[250px] md:w-[300px] z-30' />
           
            <div className='max-w-screen-xl mx-auto px-5 py-10 md:py-9'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-3 items-center'>
                    <div className='lg:py-7'>
                        <h2 className='text-[#ECE8F0] text-center sm:text-left text-[30px] sm:text-[35px]  lg:text-[40px] font-semibold'>
                            Team <span className='text-green-600'>Global Energies Ltd</span>
                        </h2>
                        <p className='text-[#ADA9B2] mt-4 text-[12px] sm:text-[15px] lg:max-w-[500px]'>
                            <span className='font-bold'>Owner and founder of the Global Energies AMC.</span> He has an extensive track record of working within the Banking sector. His career started off at Lehman Brothers. Lehman was the fourth-largest investment bank in the US specialising in
                            <br />Banking, Equity, Fixed-income sales and trading, research, investment management, private equity, and private banking.
                            <br /><br />His career started in <span className='font-bold'>2000</span> as a security officer and ended in 2010 as one of the youngest Directors in Security for a Major Financial institution. Through a decade of tenure his role and responsibility varied with each year and designation including the key milestone of heading security for PwC through the largest insolvency in financial history and staying on with the administration to relocate 1000+ personnel to a new office location. Other responsibilities and achievements included:
                            <br /><br />Physical and Technological Digital Security design and project manager as European Head.
                            <br /><br />After Lehman Brothers he spent a short spell at the Japanese Investment Bank Nomura International Bank PLC. Here has operated in the areas of Compliance and Audit Management, <span className='font-bold'>Operations Management of their European </span>Technology Systems and implementation of security systems across Europe.
                            <br /><br />In 2010 he later went onto work for one of the worlds largest Data Centre Providers, Global Switch. Global Switch is the leading large-scale, carrier neutral data centre provider in Europe and Asia- Pacific. He was responsible for all aspects of security globally, key areas of responsibility including Operations management, Information security, Compliance with security policies and procedures, Risk management and mitigation.
                        </p>
                    </div>
                    <motion.div
                        whileInView={{ x: [300, 0], opacity: [0, 1] }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                        initial='hidden'
                        style={{ opacity: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className='relative w-[80%] sm:w-[60%] lg:w-[80%] mx-auto'>
                            <div className='flex justify-center'>
                                <img src={img} alt='img' className='object-contain w-full h-full relative z-10' />
                            </div>
                            <div className='absolute bottom-[-40px] left-0 right-0 flex justify-center'>
                                <div className='btn-bg p-2 sm:p-3 rounded-xl w-[80%] md:w-[65%] relative z-10'>
                                    <h2 className='text-[#ECE8F0] text-[13px] sm:text-[15px] font-medium'>Vee Virdi</h2>
                                    <p className='text-[#ECE8F0] text-[11px] sm:text-[13px] pt-1'>
                                        www.Global Energiesamc.io / v.virdi@Global Energiesamc.io
                                    </p>
                                </div>
                            </div>
                            <div className='absolute -inset-2 team-bg rounded-[30px]' />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Team