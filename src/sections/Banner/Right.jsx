import { Box, InputAdornment, Slider, TextField, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {  GradientBorderBox, GradientChildBox } from './style';
import vector1 from '../../assets/Vector1.png'
import vector2 from '../../assets/Vector2.png'
import icon1 from '../../assets/tether.png'
import icon2 from '../../assets/binance.png'
import icon3 from '../../assets/bitcoin.png'
import tether from '../../assets/tether.png'
import { PaidOutlined } from '@mui/icons-material';
import Web3 from 'web3';


const Right = () => {

    const [value, setValue] = useState(60);
    const [timerHours, setTimerHours] = useState('')
    const [timerMinutes, setTimerMinutes] = useState('')
    const [timerSeconds, setTimerSeconds] = useState('')
    const [timerDays, setTimerDays] = useState('')
    const [open, setOpen] = useState(false)
    const [percentage, setpercentage] = useState(40)
    const [inputValue, setInputValue] = React.useState("");

   

    const CustomSlider = styled(Slider)({
        height: '22px',
        '& .MuiSlider-rail': {
            backgroundColor: 'rgba(255, 255, 255, 0.01)',
            border: '1px solid transparent',
        },
        '& .MuiSlider-thumb': {
            display: 'none'
        },
        '& .MuiSlider-track': {
            color: '#198754',
            position: 'relative',
            zIndex: '10',
            borderTopRightRadius: percentage !== 100 && '0px',
            borderBottomRightRadius: percentage !== 100 && '0px',
        },

    });

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === '-') {
            e.preventDefault();
        }
    };

    let interval;

    const startTimer = (countDownDate) => {

        interval = setInterval(() => {

            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000)) % 30
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop Timer
                clearInterval(interval.current);

            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);

    };

    

    function handleInputChange(event) {
        console.log(event.target.value);
        setInputValue(event.target.value);
        console.log(event.target.value);

    }

    const buy = async () => {


        const web3 = window.web3;
        const webeProvider = new Web3(Web3.givenProvider);
        var accounts = await window.web3.eth.getAccounts();
        const account = accounts[0];

        var abi = [{"inputs":[{"internalType":"address","name":"_usdtTokenAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Sold","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"}];
        var contractaddress = '0x1ef630EaE77d2013cF509956b9fb9FD50b5d35b7';


        var abi_token = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "fromDelegate", "type": "address" }, { "indexed": true, "internalType": "address", "name": "toDelegate", "type": "address" }], "name": "DelegateChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegate", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "previousBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "DelegateVotesChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint32", "name": "pos", "type": "uint32" }], "name": "checkpoints", "outputs": [{ "components": [{ "internalType": "uint32", "name": "fromBlock", "type": "uint32" }, { "internalType": "uint224", "name": "votes", "type": "uint224" }], "internalType": "struct ERC20Votes.Checkpoint", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }], "name": "delegate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "delegateBySig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "delegates", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "getPastTotalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "getPastVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "numCheckpoints", "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }]

        var contractaddress_token = '0x2ACE8B42fb5A39b12e478da061a3CFE78De23E2F';


        const instance = new web3.eth.Contract(abi, contractaddress);
        const instance_token = new web3.eth.Contract(abi_token, contractaddress_token);

        var valueforstake = web3.utils.toWei(inputValue, 'ether');

        await instance_token.methods.approve(contractaddress, valueforstake).send({
            from: account,
        }).then(async () => {
            await instance.methods.buyTokens(inputValue).send({
                from: account

            })




        })



    }




    return (
        <GradientBorderBox>

            <p className='text-white text-center text-[14px] sm:text-[19px] font-bold mt-[20px]'>
                CLAIM UPTO 20% PRESALE BONUS
            </p>

            <div className='flex justify-center items-center gap-[10px] mt-[15px]' >
                <img src={tether} alt="" className='h-[25px] sm:h-[35px] flex-shrink-0' />
                <h2 className='text-white text-[14px] sm:text-[16px] font-bold'>
                    1 GGE = 1 USDT
                </h2>
                <img src={tether} alt="" className='h-[25px] sm:h-[35px] flex-shrink-0' />
            </div>

            <h2 className='text-center text-white text-[19px] sm:text-[23px] mt-[30px] font-bold leading-[35px]'>
                Stage 1: $2.500.000
            </h2>

            <div className='relative'>
                <div >
                    <CustomSlider
                        disabled
                        value={percentage}
                        min={0}
                        max={100}
                        className='mt-[8px] sm:mt-[12px]'
                    />
                </div>
                <div className='absolute inset-0 flex items-center'>
                    <div className='bg-slate-700 h-[22px] w-full rounded-[10px]'>
                        <h2 className='text-center text-white relative z-10 text-[12px] pt-[2px] font-bold'>
                            Next Stage Price: $1.20
                        </h2>
                    </div>
                </div>
            </div>

            <div className='mt-[10px] sm:mt-[30px]'>
                <TextField
                    placeholder={'Enter the USDT Amount'}
                    required={true}
                     value={inputValue}
                    fullWidth
                    type={'number'}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    InputProps={{
                        disableUnderline: true,
                        style: {
                            fontSize: 15,
                        },

                        startAdornment: (
                            <InputAdornment position="start">
                                <PaidOutlined />
                            </InputAdornment>
                        ),

                    }}
                    sx={{
                        overflow: 'auto',
                        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                            display: "none",
                        },
                        "& input[type=number]": {
                            MozAppearance: "textfield",
                        },
                        '& .MuiInputBase-root': {
                            padding: '7px 10px',
                            border: '1px solid rgba(225,225,225,0.6)',
                            borderRadius: '10px',
                            color: 'white',
                            transition: 'all 0.4s ease-in-out',
                            backgroundColor: 'black',
                        },
                        '& .Mui-focused': {
                            backgroundColor: 'black !important',
                            color: 'white',


                        },
                        '& .MuiSvgIcon-root': {
                            color: 'white',
                            height: '30px'
                        },
                        '& ::placeholder': {
                            color: 'white !important',
                            opacity: '0.7',
                        },
                    }}
                    variant="standard"
                />
            </div>

            <div className='mt-[20px] mb-[35px] sm:mb-[50px]'>
                <button
                    onClick={buy}
                    className="rounded text-[16px] hover:scale-105 duration-700 relative overflow-hidden inline-flex group items-center justify-center w-full py-2  cursor-pointer active:shadow-none shadow-lg btn-bg text-white">
                    BUY GGE
                </button>
            </div>

            <Box>
                <Typography color='#ADA9B2' textAlign={'center'} fontSize={'12px'}>
                    WE ACCEPT
                </Typography>
                <Box display={'flex'} alignItems={'center'} gap={'10px'} justifyContent={'center'} marginTop={'13px'}>
                    <Box component={'img'} src={icon1} alt='icon' sx={{ cursor: 'pointer' }} />
                    {/* <Box component={'img'} src={icon3} alt='icon' sx={{ cursor: 'pointer' }} /> */}
                </Box>
            </Box>

        </GradientBorderBox>
    )
}

export default Right
