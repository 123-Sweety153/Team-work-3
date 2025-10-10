import Property from '@/components/ui/Property'
import React from 'react'

const Details = () => {
  return (
    <Property>
        <div>
            <h2 className='2xl:text-[48px] xl:text-[40px] lg:text-[30px] md:text-[26px] text-[20px] font-semibold'>Comprehensive Pricing Details</h2>
            <p className='mt-4 text-[#999999] font-medium md:text-[17px] text-[14px] xl:text-[16px] 2xl:text-[18px]'>At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision</p>

            <div className='py-16 flex items-center gap-6'>
                <div className='2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px]'>Note</div>
                <p className='text-[#999999] font-medium md:text-[17px] text-[14px] xl:text-[16px] 2xl:text-[18px]'>The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
            </div>
        </div>
    </Property>
  )
}

export default Details