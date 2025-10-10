import React from 'react'

const Cost = ({monthly}) => {
    return (
        <div className='2xl:py-16 xl:py-14 lg:py-10 py-6'>
            <div className='flex flex-wrap items-center md:justify-between'>
                <h2 className='xl:text-[24px] lg:text-[20px] md:text-[18px] font-semibold '>Monthly Costs</h2>
                <button className='text-white px-6 py-3 font-semibold cursor-pointer'>Learn more</button>

            </div>
            <div className='2xl:space-y-20 space-y-16  grid grid-cols-1 mt-8'>
                {monthly.map((item, index) => {
                    return <div key={index} className='space-y-2.5'>
                        <p className='text-[#999999] text-[14px] md:text-[16px] lg:text-[18px]'>{item.fee_name}</p>
                        <div className='flex flex-wrap gap-8'>
                            <h3 className='font-semibold 2xl:text-[24px] xl:text-[22px] lg:text-[20px] text-[16px] '>{item.cost}</h3>
                            <p className='text-[#999999] text-[14px] md:text-[16px] lg:text-[18px]'>{item.description}</p>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Cost


