import React from 'react'
import bgImg from '../../assets/Looperbg.png'

const HelpSection = () => {


    return (
        <div className='btn-bg relative '

        >
            <div className='absolute inset-0'
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    opacity: '0.1'
                }}
            />
            <div className='px-4 py-6 md:py-8 flex flex-col items-center relative z-10'>
                <h2 className='text-[#ECE8F0] text-center text-[30px] sm:text-[35px] md:text-[40px] font-extrabold'>
                    Need Any Help?
                </h2>
                <button className=" text-[16px] bg-[#ECE8F0] px-5 md:px-9 py-2 md:py-3 my-4 rounded-md hover:scale-105 duration-700">
                 Contact Us
                </button>
            </div>
        </div>
    )
}

export default HelpSection