import Property from '@/components/ui/Property'
import React, { useEffect, useState } from 'react'

const Faqpro = () => {
  const [data,setdata]= useState([])
  useEffect(()=>{
    fetch("/Data/property.json").then((res)=>res.json()).then((data)=>setdata(data))
  })
  return (
    <Property>
      <div>
        <div className='flex flex-wrap justify-between items-center'>
          <div>
            <h2 className='2xl:text-[48px] xl:text-[40px] lg:text-[30px] md:text-[26px] text-[20px] font-semibold '>Frequently Asked Questions</h2>
            <p className='mt-4 text-[#999999] font-semibold lg:text-[16px] text-[14px] 2xl:text-[18px] lg:max-w-[1000px] 2xl:max-w-[1236px]'>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
          </div>
          <button className='mt-3 lg:mt-0'>View All FAQ’s</button>
        </div>
      </div>

      <div className='lg:py-12 py-4 lg:px-10 lg:mt-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-x-3 space-y-2 lg:space-y-0 max-w-[1596px] mx-auto '>
          {data.map((item,index)=>{
            return <div key={index} className='space-y-2 mt-6 lg:mt-0 py-2 border-t-2 lg:border-none border-pink-600 lg:px-4 px-0 '>
              <h3 className='font-semibold 2xl:text-[24px] xl:text-[20px] lg:text-[18px]'>{item.title}</h3>
              <p className='text-[#999999] text-[14px] py-4 xl:text-[16px] 2xl:text-[18px]'>{item.description}</p>
              <button className='ml-6'>{item.action}</button>
            </div>
          })}
        </div>
        <div className='flex justify-between mt-6'>
          <p>01 of 10</p>
          <div className='flex gap-4 font-bold text-[40px]'>
            <div>←</div>
            <div>→</div>
          </div>
        </div>
      </div>
    </Property>
  )
}

export default Faqpro