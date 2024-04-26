import React from 'react'
import Left from './Left'
import Right from './Right'
import { motion } from 'framer-motion'


const Banner = () => {
  return (
    <div className='bg-[#080513] relative' id='investment'>
      <div className='pt-[130px] md:pt-[150px] max-w-screen-xl mx-auto px-4 '>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          <Left />
          <motion.div
            whileInView={{ x: [300, 0], opacity: [0, 1] }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{ opacity: '0' }}
            className='flex justify-center mt-[80px] lg:mt-0 relative z-20 w-[90%] mx-auto md:w-full'
          >
            <Right />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Banner