import React, { useState } from 'react'
import ExploreCard from '../../components/ExploreCard'

const data = [
    {
        PhaseNo: 'Phase I',
        title: 'Market Research',
        desc: "Global Energies begun conducting market research on the potential of Actively Managed Certificates (AMC) and incorporating a crypto element. AMC’s are designed to allow investors to invest in any digital asset without having to buy into the actual cryptocurrency itself. With the AMC Global Energies seeks to offer investors diversification and investment flexibility with its state-of-the-art technology.<br/><br/>By leveraging the AMC, Global Energies will be enabling customers to access global markets more effectively from one account, giving them more control over their investments and allowing them more freedom when it comes to deciding which cryptocurrencies they want to include in their portfolio. The AMC offers a unique melding of access, control and convenience that can be tailored for each investor's needs; it is this aspect that Global Energies is hoping to enhance by integrating its cutting-edge technology and extensive market experience into the AMC framework."
    },
    {
        PhaseNo: 'Phase II',
        title: 'Market Research',
        desc: "Global Energies begun conducting market research on the potential of Actively Managed Certificates (AMC) and incorporating a crypto element. AMC’s are designed to allow investors to invest in any digital asset without having to buy into the actual cryptocurrency itself. With the AMC Global Energies seeks to offer investors diversification and investment flexibility with its state-of-the-art technology.<br/><br/>By leveraging the AMC, Global Energies will be enabling customers to access global markets more effectively from one account, giving them more control over their investments and allowing them more freedom when it comes to deciding which cryptocurrencies they want to include in their portfolio. The AMC offers a unique melding of access, control and convenience that can be tailored for each investor's needs; it is this aspect that Global Energies is hoping to enhance by integrating its cutting-edge technology and extensive market experience into the AMC framework."
    },
    {
        PhaseNo: 'Phase III',
        title: 'Market Research',
        desc: "Global Energies begun conducting market research on the potential of Actively Managed Certificates (AMC) and incorporating a crypto element. AMC’s are designed to allow investors to invest in any digital asset without having to buy into the actual cryptocurrency itself. With the AMC Global Energies seeks to offer investors diversification and investment flexibility with its state-of-the-art technology.<br/><br/>By leveraging the AMC, Global Energies will be enabling customers to access global markets more effectively from one account, giving them more control over their investments and allowing them more freedom when it comes to deciding which cryptocurrencies they want to include in their portfolio. The AMC offers a unique melding of access, control and convenience that can be tailored for each investor's needs; it is this aspect that Global Energies is hoping to enhance by integrating its cutting-edge technology and extensive market experience into the AMC framework."
    },
    {
        PhaseNo : 'Phase IV',
        title: 'Market Research',
        desc: "Global Energies begun conducting market research on the potential of Actively Managed Certificates (AMC) and incorporating a crypto element. AMC’s are designed to allow investors to invest in any digital asset without having to buy into the actual cryptocurrency itself. With the AMC Global Energies seeks to offer investors diversification and investment flexibility with its state-of-the-art technology.<br/><br/>By leveraging the AMC, Global Energies will be enabling customers to access global markets more effectively from one account, giving them more control over their investments and allowing them more freedom when it comes to deciding which cryptocurrencies they want to include in their portfolio. The AMC offers a unique melding of access, control and convenience that can be tailored for each investor's needs; it is this aspect that Global Energies is hoping to enhance by integrating its cutting-edge technology and extensive market experience into the AMC framework."
    },
    {
        PhaseNo: 'Phase V',
        title: 'Market Research',
        desc: "Global Energies begun conducting market research on the potential of Actively Managed Certificates (AMC) and incorporating a crypto element. AMC’s are designed to allow investors to invest in any digital asset without having to buy into the actual cryptocurrency itself. With the AMC Global Energies seeks to offer investors diversification and investment flexibility with its state-of-the-art technology.<br/><br/>By leveraging the AMC, Global Energies will be enabling customers to access global markets more effectively from one account, giving them more control over their investments and allowing them more freedom when it comes to deciding which cryptocurrencies they want to include in their portfolio. The AMC offers a unique melding of access, control and convenience that can be tailored for each investor's needs; it is this aspect that Global Energies is hoping to enhance by integrating its cutting-edge technology and extensive market experience into the AMC framework."
    },
    {
        PhaseNo: 'Phase VI',
        title: 'Market Research',
        desc: "Global Energies begun conducting market research on the potential of Actively Managed Certificates (AMC) and incorporating a crypto element. AMC’s are designed to allow investors to invest in any digital asset without having to buy into the actual cryptocurrency itself. With the AMC Global Energies seeks to offer investors diversification and investment flexibility with its state-of-the-art technology.<br/><br/>By leveraging the AMC, Global Energies will be enabling customers to access global markets more effectively from one account, giving them more control over their investments and allowing them more freedom when it comes to deciding which cryptocurrencies they want to include in their portfolio. The AMC offers a unique melding of access, control and convenience that can be tailored for each investor's needs; it is this aspect that Global Energies is hoping to enhance by integrating its cutting-edge technology and extensive market experience into the AMC framework."
    },
    {
        PhaseNo: 'Phase VII',
        title: 'Market Research',
        desc: "Global Energies begun conducting market research on the potential of Actively Managed Certificates (AMC) and incorporating a crypto element. AMC’s are designed to allow investors to invest in any digital asset without having to buy into the actual cryptocurrency itself. With the AMC Global Energies seeks to offer investors diversification and investment flexibility with its state-of-the-art technology.<br/><br/>By leveraging the AMC, Global Energies will be enabling customers to access global markets more effectively from one account, giving them more control over their investments and allowing them more freedom when it comes to deciding which cryptocurrencies they want to include in their portfolio. The AMC offers a unique melding of access, control and convenience that can be tailored for each investor's needs; it is this aspect that Global Energies is hoping to enhance by integrating its cutting-edge technology and extensive market experience into the AMC framework."
    },
    {
        PhaseNo: 'Phase VIII',
        title: 'Market Research',
        desc: "Global Energies begun conducting market research on the potential of Actively Managed Certificates (AMC) and incorporating a crypto element. AMC’s are designed to allow investors to invest in any digital asset without having to buy into the actual cryptocurrency itself. With the AMC Global Energies seeks to offer investors diversification and investment flexibility with its state-of-the-art technology.<br/><br/>By leveraging the AMC, Global Energies will be enabling customers to access global markets more effectively from one account, giving them more control over their investments and allowing them more freedom when it comes to deciding which cryptocurrencies they want to include in their portfolio. The AMC offers a unique melding of access, control and convenience that can be tailored for each investor's needs; it is this aspect that Global Energies is hoping to enhance by integrating its cutting-edge technology and extensive market experience into the AMC framework."
    },
]
const Roadmap = () => {

    const [active, setActive] = useState('Phase II');

    return (
        <div className='btn-bg relative pt-[30px] md:pt-0' id='roadmap'>
            <div className='max-w-screen-xl mx-auto px-4  py-10 md:py-16'>
                <h2 className='text-[#ECE8F0] text-center text-[30px] sm:text-[35px] md:text-[44px] font-bold'>
                    Roadmap
                </h2>

                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] max-h-[auto] gap-1 w-full md:w-[80%] mx-auto">
                    {data.map((data, index) => (
                        <ExploreCard
                            key={index}
                            {...data}
                            index={index}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Roadmap