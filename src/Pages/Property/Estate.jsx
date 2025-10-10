import Property from '@/components/ui/Property'
import React from 'react'

const Estate = () => {
  return (
   <Property>
    <div>
        <div className='flex flex-wrap justify-between items-center space-y-3 lg:space-y-0'>
          <div>
            <h2 className='2xl:text-[48px] xl:text-[40px] lg:text-[30px] md:text-[26px] text-[20px] font-semibold '>Start Your Real Estate Journey Today</h2>
            <p className='mt-4 text-[#999999] font-semibold lg:text-[16px] text-[14px] 2xl:text-[18px] lg:max-w-[1000px] 2xl:max-w-[1236px]'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
          </div>
          <button className='bg-blue-700 px-8 py-3 rounded-md mt-2 cursor-pointer'>Explore Properties</button>
        </div>
      </div>
   </Property>
  )
}

export default Estate