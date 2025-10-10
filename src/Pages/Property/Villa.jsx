import LocationIcon from '@/assets/Location'
import Property from '@/components/ui/Property'
import React from 'react'

const Villa = () => {
  return (
    <Property>
      <div className='max-w-[1596px] flex flex-col  md:flex-row md:justify-between mx-auto'>
        <div className='flex flex-col sm:flex-row md:items-center space-x-3'>
          <h1 className='2xl:text-[30px] lg:text-[24px] md:text-[20px] text-[18px] font-semibold'>Seaside Serenity Villa</h1>
          <div className='flex space-x-2'>
            <div><LocationIcon /></div>
            <p className='2xl:text-[18px] lg:text-[16px] text-[14px] font-medium'>Malibu, California</p>
          </div>
        </div>
        <div>
          <p className='text-[#999999] text-[18px]'>Price</p>
          <h2 className='xl:text-[24px] font-semibold lg:text-[20px] md:text-[18px]'>$1,250,000</h2>
        </div>
      </div>
    </Property>
  )
}

export default Villa