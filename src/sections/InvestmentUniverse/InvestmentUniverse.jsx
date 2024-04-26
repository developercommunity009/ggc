import React from 'react'
import book from '../../assets/book.png'
import chart from '../../assets/chart.png'
import sheild from '../../assets/sheild.png'
import dollar from '../../assets/dollar.png'
import flower from '../../assets/flower.png'
import position from '../../assets/position.png'
import { motion } from 'framer-motion'


const InvestmentUniverse = () => {

    const data = [
        {
            title: 'Heading 1',
            img: position,
            desc: 'Digital Assets - Cryptocurrencies, Crypto Securities'
        },
        {
            title: 'Heading 1',
            img: chart,
            desc: 'Equities Exchange Traded Stocks, Derivatives on Listed Equities and Global Indices'
        },
        {
            title: 'Heading 1',
            img: dollar,
            desc: 'Exchange Traded Funds (ETFs), Mutual Funds, Structured Products'
        },
        {
            title: 'Heading 1',
            img: book,
            desc: 'Fixed Income of all Ratings and Maturities'
        },
        {
            title: 'Heading 1',
            img: flower,
            desc: 'Futures and options of all currency pairs, cash in any currency different than the product currency.'
        },
        {
            title: 'Heading 1',
            img: sheild,
            desc: 'Futures and options of all currency pairs, cash in any currency different than the product currency.'
        },
    ]


    return (
        <div className='bg-[#080513] '>
            <div className='max-w-screen-xl mx-auto px-5 pt-10 md:py-16'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <h2 className='text-[#ECE8F0] text-center sm:text-left text-[30px] sm:text-[35px]  lg:text-[44px] font-bold leading-9'>
                            Global Energies AMC <br /><span className='text-green-600'>Investment Universe</span>
                        </h2>
                    </div>
                    <div className='flex md:justify-end'>
                        <p className='text-[#ECE8F0] text-[14px] sm:text-[17px] font-normal md:max-w-[540px]'>
                            The Investment Universe consists of the following assets/ asset classes and represents the basis for the selection, adjustment, and rebalancing of the Strategy-Components by the Strategy- Manager.
                        </p>
                    </div>
                </div>

                <div className='my-5 md:my-7'>
                    <h4 className='text-[#ECE8F0] text-center sm:text-left text-[20px] sm:text-[25px]  lg:text-[30px] font-semibold'>
                        Permitted Instruments
                    </h4>

                    <motion.div
                        whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                        initial='hidden'
                        style={{ opacity: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className='grid grid-cols-1 gap-4 lg:gap-7 sm:grid-cols-2 md:grid-cols-3 my-4'>
                            {data.map((item, i) => (
                                <div key={i} className='rounded-lg hover:scale-95 duration-700 px-4 py-8 bg-[#130D1B]'>
                                    <img src={item.img} alt='img' />
                                    <h1 className='text-[17px] text-[#ECE8F0] font-bold my-3'>
                                        {item.title}
                                    </h1>
                                    <p className='text-[#ADA9B2] text-[15px]'>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 py-4'>
                    <div className='relative'>

                        <div className='light-blue absolute top-0 left-[-30px] h-[250px] md:h-[300px] w-[250px] md:w-[300px] z-30' />

                        <h5 className='text-[#ADA9B2] text-[16px]'>
                            <span className='font-bold'>Once an investor</span>has subscribed to the fund, they will then have access to additional opportunities which may offer significantly higher yields. This will include early-stage venture <span className='font-bold'>capital investment</span>in crypto protocols. The investment manager may deploy a percentage of an investors existing cash holding into such venture capital and growth opportunities.<br /><br />The fund management team includes qualified and skilled analysts who seek to identify <span className='font-bold'>further promising opportunities.</span> Subscribers to the fund will further have the option to participate in new innovative projects.
                        </h5>
                        <h1 className='text-[#ECE8F0] text-[17px] my-3 font-bold'>
                            Advantages over Direct Investment into Cryptocurrency
                        </h1>
                        <div className='space-y-2'>
                            <p className='text-[#ADA9B2] text-[16px]'>
                                -  Structured products created by leading financial institutions
                            </p>
                            <p className='text-[#ADA9B2] text-[16px]'>
                                -  Capital protected products
                            </p>
                            <p className='text-[#ADA9B2] text-[16px]'>
                                -  Fixed rates of interest averaging at double digits per annum                             </p>
                            <p className='text-[#ADA9B2] text-[16px]'>
                                -  Access to high growth venture capital projects
                            </p>
                            <p className='text-[#ADA9B2] text-[16px]'>
                                -  All investments must pass rigorous compliance checks                             </p>
                            <p className='text-[#ADA9B2] text-[16px]'>
                                -  Opportunities carefully sourced by qualified financial analysts
                            </p>
                            <p className='text-[#ADA9B2] text-[16px]'>
                                -  Invest safely through your own bank or personal brokerage account
                                globally
                            </p>
                            <p className='text-[#ADA9B2] text-[16px]'>
                                -  Track performance of the fund globally from anywhere in the world
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[#ECE8F0] text-[17px] font-bold'>
                            ISIN Codes Explained
                        </h1>
                        <h5 className='text-[#ADA9B2] text-[16px] my-3'>
                            An ISIN (International Securities Identification Number) is a 12-digit alphanumeric code that uniquely identifies a specific security. The ISIN is a unique number assigned to a regulated security that is universally recognisable by banks, financial advisers, wealth managers and other financial institutions worldwide.<br /><br />Global Energies AMC also has a unique ISIN code, and therefore investors can easily and securely move their investment capital into the fund via their personal bank or brokerage account. An investor simply needs to provide their bank with our ‘term sheet’ which includes the ISIN code, or ‘look-up’ our ISIN code using their broker platform and move their desired amount of capital into our fund.
                        </h5>
                        <h1 className='text-[#ECE8F0] text-[17px] mt-4 md:mt-8 font-bold'>
                            Global Energies AMC:
                        </h1>
                        <h5 className='text-[#ADA9B2] text-[16px] my-2'>
                            International Securities Identification Number (ISIN) : CH1134836233
                        </h5>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default InvestmentUniverse