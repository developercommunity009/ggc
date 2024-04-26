import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import MobNav from './MobNav'
import Web3 from 'web3';
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect } from 'wagmi'


const Navbar = () => {
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
        'Token Info',
         'How to Buy GGE'
    ]

    const [isOpen, setisOpen] = useState(false)
    const [scrolled, setScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 60) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const connectWallet = async () => {
        // if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
        //  await web3.eth.net.setId(networkid);
          const accounts = await window.web3 .eth.getAccounts();
          // changeNetwork();
          const account = accounts[0];
          setWallet(account.slice(0,4) + "..." + account.slice(-4));
          // setmyReferral("https://cryptoindexpool.com/?ref=" + account); 
          // setRef(account);
      
          console.log(account);
          
    }

    return (
        <div>
            <div className={`fixed top-0 left-0 right-0 z-40 ${scrolled ? "bg-black" : "bg-transparent"}`}>
                <div className='flex items-center  md:gap-1 lg:gap-4 max-w-screen-xl mx-auto px-[20px] py-4 md:py-3'>
                    <div>
                        <img src={logo} alt="logo" className='h-[37px] sm:h-[45px]'

                        />
                    </div>
                    <div className='grow'>
                        <div className='hidden md:flex md:gap-3 lg:gap-9 justify-center'>
                            {links.map((item, i) => {
                                let x = item
                                if (x === 'How to invest') {
                                    x = 'invest'
                                }
                                if (x === 'How to Buy GGE') {
                                    x = 'buy'
                                }
                                return <a key={i}
                                    href={`#${x}`}
                                    className='text-[#ADA9B2] capitalize text-[17px] hover:underline underline-offset-8 hover:scale-105 duration-700 cursor-pointer font-medium'>
                                    {item}
                                </a>
                            })}
                        </div>
                    </div>
                    <div className='hidden md:flex relative '>
                        <button onClick={()=>open()} className="rounded text-[16px] relative overflow-hidden inline-flex group items-center justify-center px-3.5 py-1.5  cursor-pointer active:shadow-none shadow-lg btn-bg text-white">
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                            <span className="relative">{address ? extractFirstAndLastFive(address) : 'Connect Wallet'}
            </span>
                        </button>
                    </div>
                    <div className='md:hidden flex'>
                        <div className="cursor-pointer" onClick={() => setisOpen(true)} >
                            <Bars3BottomRightIcon
                                className={`h-[35px] text-white transition-all duration-1000 ease-in-out `}
                            />
                        </div>


                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='fixed inset-0 z-50 h-screen bg-black' >
                    <MobNav setisOpen={setisOpen} />
                </div>
            )}
        </div>
    )
}

export default Navbar