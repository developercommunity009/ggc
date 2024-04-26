import React from 'react'
import { motion } from 'framer-motion'
import licenseKey from '../../syncfusion-license';
import { registerLicense } from '@syncfusion/ej2-base';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective } from '@syncfusion/ej2-react-charts';

const Tokenomics = () => {

    registerLicense(licenseKey);

    const accData = [
        { x: "PUBLIC SALE", y: 10, color: '#8A75E2' },
        { x: "PRIVATE SALE", y: 5, color: '#E275CA' },
        { x: "MANAGEMMENT FEE", y: 10, color: '#75C1E2' },
        { x: "TEAM", y: 10, color: '#E7C369' },
        { x: "Global Energies AMC", y: 5, color: '#E28975' },
        { x: "LIQUIDITY", y: 10, color: '#E06262' },
        { x: "MARKETING", y: 20, color: '#DEE062' },
        { x: "DEVELOPMENT", y: 20, color: '#8BE275' },
    ];


    return (
        <div className='bg-[#080513]'>

            <div className='max-w-screen-xl mx-auto px-5 pt-2 pb-4 md:py-12'>
                <h2 className='text-[#ECE8F0] text-center text-[30px] sm:text-[35px] md:text-[44px] font-bold leading-8 md:leading-9'>
                    Tokenomics
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 md:my-5 items-center'>
                    <div>
                        <AccumulationChartComponent id='charts' >
                            <AccumulationSeriesCollectionDirective>
                                <AccumulationSeriesDirective
                                    dataSource={accData}
                                    xName='x'
                                    yName='y'
                                    innerRadius='70%'
                                    pointColorMapping="color"

                                >
                                </AccumulationSeriesDirective>
                            </AccumulationSeriesCollectionDirective>
                        </AccumulationChartComponent>
                    </div>
                    <div className='md:w-[90%] '>

                        <div className='px-4 space-y-3'>
                            {accData.map((item, i) => (
                                <motion.div
                                    // variants={fadeIn('left', 'tween', 0.6 + (i - 0.8), 0.7)}
                                    key={i}
                                    whileInView={{ x: [200, 0], opacity: [0, 1] }}
                                    transition={{ duration: 1.3, ease: 'easeOut', delay: 0.6 + (i - 0.8) }}
                                    viewport={{ once: true }}
                                    style={{ opacity: '0' }}

                                >
                                    <div className='flex items-center justify-between'>
                                        <div className='flex gap-3 items-center'>
                                            <div className={`h-[20px] md:h-[25px] w-[20px] md:w-[25px] rounded-full`}
                                                style={{
                                                    backgroundColor: item.color
                                                }}
                                            />
                                            <h4 className='text-white text-[16px] md:text-[18px]'>
                                                {item.x}
                                            </h4>
                                        </div>
                                        <h2 className='text-white font-bold text-[16px] md:text-[18px]'>
                                            {item.y}%
                                        </h2>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics