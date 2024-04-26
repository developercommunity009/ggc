import React from 'react'

const RegulatedFunds = () => {
    return (
        <div className='btn-bg -mt-7 relative z-10'>
            <div className='max-w-[1100px] mx-auto px-4 pt-16 pb-8'>

                <h2 className='text-white uppercase text-[30px] sm:text-[40px] font-bold text-center'>
                    tokens sale progress
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-[40px]'>
                    <div className='relative bg-black rounded-[20px] w-full p-[16px]'>
                        <div className='absolute top-0 right-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                <path d="M64 64L0 0H44C55.0457 0 64 8.9543 64 20V64Z" fill="#04C983" />
                                <path d="M32.3202 10.0643L32.3207 10.064L42.6247 4.75153C42.6249 4.75143 42.6251 4.75133 42.6253 4.75123C43.5043 4.30222 44.588 4.30218 45.467 4.75109C45.4673 4.75123 45.4676 4.75138 45.4679 4.75152L55.7684 10.0622C56.6204 10.5228 57.113 11.3345 57.106 12.1817L57.106 12.1851L57.106 22.8114L57.106 22.8115C57.1063 23.6654 56.5993 24.4798 55.7322 24.933C55.7319 24.9331 55.7316 24.9333 55.7313 24.9334L45.4279 30.2456L45.4276 30.2458C44.5506 30.6988 43.4647 30.6988 42.5877 30.2458L42.5874 30.2456L32.2843 24.9336C31.4257 24.4773 30.9281 23.6641 30.935 22.8148L30.935 22.8148L30.935 22.8114L30.935 12.1851L30.935 12.185C30.9348 11.329 31.4467 10.5131 32.3202 10.0643Z" fill="black" stroke="url(#paint0_linear_1_4002)" stroke-width="0.828882" />
                                <path d="M42.9382 21.0236H37.7949L44.9955 4.57812V13.9755H50.1388L42.9382 30.421V21.0236Z" fill="url(#paint1_angular_1_4002)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_4002" x1="44.0205" y1="4" x2="44.0205" y2="31" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.08" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <radialGradient id="paint1_angular_1_4002" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.8647 21.0674) rotate(-72.8338) scale(7.46841 4.65753)">
                                        <stop offset="0.00079268" stop-color="#FEC111" />
                                        <stop offset="0.485769" stop-color="#FEC111" />
                                        <stop offset="0.494792" stop-color="#04C983" />
                                        <stop offset="1" stop-color="#04C983" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                        <h2 className='text-[26px] font-bold text-[#04C983]'>
                            Stage 1 <br /> <span className='text-[#FEC111]'>Live</span>
                        </h2>
                        <div className='mt-[15px] space-y-[10px]'>
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                    Start Date
                                </h2>
                                <h2 className='text-[#04C983] text-[18px] font-semibold'>
                                    01-12-2023
                                </h2>
                            </div>
                          
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                    Token Pricing
                                </h2>
                                <h2 className='text-[#04C983] text-[18px] font-semibold'>
                                    $1
                                </h2>
                            </div>
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                    Minimum
                                </h2>
                                <h2 className='text-[#04C983] text-[18px] font-semibold'>
                                    $2.500
                                </h2>
                            </div>
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                    Maximum
                                </h2>
                                <h2 className='text-[#04C983] text-[18px] font-semibold'>
                                    No Limit
                                </h2>
                            </div>

                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                Raising
                                </h2>
                                <h2 className='text-[#04C983] text-[18px] font-semibold'>
                                $2.500.000
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-black rounded-[20px] w-full p-[16px]'>
                        <div className='absolute top-0 right-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                <path d="M64 64L0 0H44C55.0457 0 64 8.9543 64 20V64Z" fill="#F0F0F0" />
                                <path d="M32.3202 10.0643L32.3207 10.064L42.6247 4.75153C42.6249 4.75143 42.6251 4.75133 42.6253 4.75123C43.5043 4.30222 44.588 4.30218 45.467 4.75109C45.4673 4.75123 45.4676 4.75138 45.4679 4.75152L55.7684 10.0622C56.6204 10.5228 57.113 11.3345 57.106 12.1817L57.106 12.1851L57.106 22.8114L57.106 22.8115C57.1063 23.6654 56.5993 24.4798 55.7322 24.933C55.7319 24.9331 55.7316 24.9333 55.7313 24.9334L45.4279 30.2456L45.4276 30.2458C44.5506 30.6988 43.4647 30.6988 42.5877 30.2458L42.5874 30.2456L32.2843 24.9336C31.4257 24.4773 30.9281 23.6641 30.935 22.8148L30.935 22.8148L30.935 22.8114L30.935 12.1851L30.935 12.185C30.9348 11.329 31.4467 10.5131 32.3202 10.0643Z" fill="black" stroke="url(#paint0_linear_1_4037)" stroke-width="0.828882" />
                                <path d="M42.9382 21.0236H37.7949L44.9955 4.57812V13.9755H50.1388L42.9382 30.421V21.0236Z" fill="url(#paint1_angular_1_4037)" />
                                <path d="M42.9382 21.0236H37.7949L44.9955 4.57812V13.9755H50.1388L42.9382 30.421V21.0236Z" fill="#F0F0F0" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_4037" x1="44.0205" y1="4" x2="44.0205" y2="31" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.08" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <radialGradient id="paint1_angular_1_4037" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.8647 21.0674) rotate(-72.8338) scale(7.46841 4.65753)">
                                        <stop offset="0.00079268" stop-color="#FEC111" />
                                        <stop offset="0.485769" stop-color="#FEC111" />
                                        <stop offset="0.494792" stop-color="#04C983" />
                                        <stop offset="1" stop-color="#04C983" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                        <h2 className='text-[26px] font-bold text-[#F0F0F0]'>
                            Stage 2
                            <br />  (Upcoming)
                        </h2>
                        <div className='mt-[15px] space-y-[10px]'>
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                    Start Date
                                </h2>
                                <h2 className='text-[#F0F0F0] text-[18px] font-semibold'>
                                    TBC
                                </h2>
                            </div>
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                    Token Pricing
                                </h2>
                                <h2 className='text-[#F0F0F0] text-[18px] font-semibold'>
                                    $1.20
                                </h2>
                            </div>
                          
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                    Minimum
                                </h2>
                                <h2 className='text-[#F0F0F0] text-[18px] font-semibold'>
                                    $2.500
                                </h2>
                            </div>
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                    Maximum
                                </h2>
                                <h2 className='text-[#F0F0F0] text-[18px] font-semibold'>
                                    No Limit
                                </h2>
                            </div>
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                Raising 
                                </h2>
                                <h2 className='text-[#F0F0F0] text-[18px] font-semibold'>
                                    $2.500.000
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='relative bg-black rounded-[20px] w-full p-[16px]'>
                        <div className='absolute top-0 right-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                <path d="M64 64L0 0H44C55.0457 0 64 8.9543 64 20V64Z" fill="#F0F0F0" />
                                <path d="M32.3202 10.0643L32.3207 10.064L42.6247 4.75153C42.6249 4.75143 42.6251 4.75133 42.6253 4.75123C43.5043 4.30222 44.588 4.30218 45.467 4.75109C45.4673 4.75123 45.4676 4.75138 45.4679 4.75152L55.7684 10.0622C56.6204 10.5228 57.113 11.3345 57.106 12.1817L57.106 12.1851L57.106 22.8114L57.106 22.8115C57.1063 23.6654 56.5993 24.4798 55.7322 24.933C55.7319 24.9331 55.7316 24.9333 55.7313 24.9334L45.4279 30.2456L45.4276 30.2458C44.5506 30.6988 43.4647 30.6988 42.5877 30.2458L42.5874 30.2456L32.2843 24.9336C31.4257 24.4773 30.9281 23.6641 30.935 22.8148L30.935 22.8148L30.935 22.8114L30.935 12.1851L30.935 12.185C30.9348 11.329 31.4467 10.5131 32.3202 10.0643Z" fill="black" stroke="url(#paint0_linear_1_4037)" stroke-width="0.828882" />
                                <path d="M42.9382 21.0236H37.7949L44.9955 4.57812V13.9755H50.1388L42.9382 30.421V21.0236Z" fill="url(#paint1_angular_1_4037)" />
                                <path d="M42.9382 21.0236H37.7949L44.9955 4.57812V13.9755H50.1388L42.9382 30.421V21.0236Z" fill="#F0F0F0" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_4037" x1="44.0205" y1="4" x2="44.0205" y2="31" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.08" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <radialGradient id="paint1_angular_1_4037" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.8647 21.0674) rotate(-72.8338) scale(7.46841 4.65753)">
                                        <stop offset="0.00079268" stop-color="#FEC111" />
                                        <stop offset="0.485769" stop-color="#FEC111" />
                                        <stop offset="0.494792" stop-color="#04C983" />
                                        <stop offset="1" stop-color="#04C983" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                        <h2 className='text-[26px] font-bold text-[#F0F0F0]'>
                            Stage 3
                            <br />  (Upcoming)
                        </h2>
                        <div className='mt-[15px] space-y-[10px]'>
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                    Start Date
                                </h2>
                                <h2 className='text-[#F0F0F0] text-[18px] font-semibold'>
                                    TBC
                                </h2>
                            </div>
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                    Token Pricing
                                </h2>
                                <h2 className='text-[#F0F0F0] text-[18px] font-semibold'>
                                    $1.40
                                </h2>
                            </div>
                          
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                    Minimum
                                </h2>
                                <h2 className='text-[#F0F0F0] text-[18px] font-semibold'>
                                    $2.500
                                </h2>
                            </div>
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                    Maximum
                                </h2>
                                <h2 className='text-[#F0F0F0] text-[18px] font-semibold'>
                                    No Limit
                                </h2>
                            </div>
                            <div className='flex justify-between items-center border-b border-gray-600 pb-[7px]'>
                                <h2 className='text-[#F0F0F0] text-[20px] font-bold'>
                                Raising 
                                </h2>
                                <h2 className='text-[#F0F0F0] text-[18px] font-semibold'>
                                    $2.500.000
                                </h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RegulatedFunds