import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motions';
import Web3 from 'web3';
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect } from 'wagmi'

const MobNav = ({ setisOpen }) => {

    const { open } = useWeb3Modal()
    const { address, isConnecting } = useAccount()
    const { disconnect } = useDisconnect()
    const[wallet , setWallet] = useState("Connect Wallet");
    function extractFirstAndLastFive(address) {
        const firstFive = address.slice(0, 5);
        const lastFive = address.slice(-5);
        return firstFive + "..." + lastFive;
      }
    const links = [
        
        'How to invest',
        'token',
        'How to Buy GGE'
    ]

    let isConnect = false
    

    return (
        <div className='block md:hidden'>

            <div className='fixed inset-0 bg-black px-[20px] py-[20px]'>
                <div className='relative h-full'>
                    <div className='flex justify-between items-center'>
                        <img src={logo} alt="logo" className='w-[110px]' />

                        <XMarkIcon
                            onClick={() => setisOpen(false)} className='w-[35px] text-white'
                        />
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className='lg:pt-[90px]'
                    >
                        <div className='mt-[89px] flex flex-col gap-[36px]'>
                            {links.map((item, i) => {


                                let x = item
                                if (x === 'How to invest') {
                                    x = 'invest'
                                }
                                if (x === 'How to Buy GGE') {
                                    x = 'buy'
                                }

                                return <motion.a
                                    variants={textVariant(0.2 * (i + 1))}
                                    className={'text-[24px] font-bold capitalize text-center text-white list-none'}
                                    viewport={{ once: true }}
                                    href={`#${x}`}
                                    onClick={() => setisOpen(false)}
                                >
                                    {item}
                                </motion.a>
                            })}

                        </div>
                    </motion.div>


                    <div className='absolute bottom-[20px] left-0 right-0 '>
                        <motion.div
                            whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                            initial='hidden'
                            style={{ opacity: 0 }}
                            viewport={{ once: true }}
                        >

                            <div
                                className='flex flex-col gap-[20px]'
                            >
                                <button className='text-white btn-bg text-[14px] h-[51px] w-full font-medium rounded-[10px]'

                                    onClick={() => {
                                        open()
                                    }}

                                >
                                    {address ? extractFirstAndLastFive(address) : 'Connect Wallet'}
                                </button>

                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default MobNav