import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motions';



const ExploreCard = ({ PhaseNo, title, index, desc, active, handleClick }) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className={`relative ${active === PhaseNo ? 'lg:flex-[4.5] flex-[10]' : 'lg:flex-[0.5] flex-[5]'
                } flex items-center justify-center min-w-[30px] h-[530px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
            onClick={() => handleClick(PhaseNo)}
        >
            <div className="absolute w-full h-full object-cover"
                style={{
                    background: PhaseNo !== active && 'linear-gradient(180deg, #0C0713 0%, rgba(12, 7, 19, 0) 100%)'
                }}
            />
            {active !== PhaseNo ? (
                <h3 className="font-medium text-[14px] lg:text-[20px] text-center w-24 text-[#ADA9B2] absolute z-0 lg:top-10 lg:rotate-[-270deg]"

                >
                    {PhaseNo}
                </h3>
            ) : (
                <div className="px-6 py-5 btn-bg w-full max-h-[250px] lg:max-h-full mb-3 overflow-auto lg:overflow-hidden relative z-20 ">
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
                        initial='hidden'
                        style={{ opacity: 0 }}
                        viewport={{ once: true }}
                    >

                        <p className="text-[17px] font-medium text-white uppercase">
                            {PhaseNo}
                        </p>
                        <h2 className="font-semibold sm:text-[32px] text-[24px] my-2 text-white">
                            {title}
                        </h2>
                        <p dangerouslySetInnerHTML={{ __html: desc }} className='text-white text-[13px] md:text-[15px]'></p>
                    </motion.div>
                </div>

            )}
        </motion.div>
    )
}

export default ExploreCard