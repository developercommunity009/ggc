import React from 'react'
import { motion } from 'framer-motion'
import logo from '../../assets/logo.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/twitter.png'
import icon3 from '../../assets/mxg.png'

const Footer = () => {
    return (
        <div className='bg-[#080513]'>

            <div className='max-w-screen-xl mx-auto px-5 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 lg:gap-[120px]'>

                    <div className='space-y-4'>
                        <img src={logo} alt='logo' className='w-[120px]' />
                        <p className='text-[13px] text-[#ADA9B2]'>
                            The utility token for sustainable fracking in the oil and gas sector combines innovative technologies, responsible energy production and the transition to renewable energies. It enables investors to be part of a green energy revolution while achieving economic benefits. Together we are shaping a sustainable future in which oil and gas are produced responsibly and the energy transition advances.                        </p>
                        {/* <div className='flex items-center gap-3'>
                            <img src={icon1} alt='icon' className='cursor-pointer' />
                            <img src={icon2} alt='icon' className='cursor-pointer' />
                            <img src={icon3} alt='icon' className='cursor-pointer' />
                        </div> */}
                    </div>

                    <div className='flex  md:justify-center gap-10 md:gap-2'>
                        {/* <div className='space-y-3'>
                            <h1 className='text-[18px] text-[#ECE8F0] font-bold'>
                                Useful Links
                            </h1>
                            <p className='text-[16px] text-[#ADA9B2] cursor-pointer'>
                                Home
                            </p>
                            <p className='text-[16px] text-[#ADA9B2] cursor-pointer'>
                                Support
                            </p>
                            <p className='text-[16px] text-[#ADA9B2] cursor-pointer'>
                                Help
                            </p>
                            <p className='text-[16px] text-[#ADA9B2] cursor-pointer'>
                                Terms & Conditions
                            </p>
                        </div> */}
                        <div className='space-y-3'>
                            <h1 className='text-[18px] text-[#ECE8F0] font-bold'>
                                Contact
                            </h1>

                            <p className='text-[16px] text-[#ADA9B2] cursor-pointer'
                                onClick={()=>{
                                    window.location.href='tel:+97142285285'
                                }}
                            >
Info@greenglobalenergies.com                             </p>
                        </div>
                    </div>

                    <div className=''>
                        <div className='space-y-3 '>
                            <h1 className='text-[18px] text-[#ECE8F0] font-bold'>
                                Office Location
                            </h1>
                            <p className='text-[16px] text-[#ADA9B2] cursor-pointer'>
                                Dubai Silicon Oasis, DDP, Building A1, Dubai, United Arab Emirates
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer