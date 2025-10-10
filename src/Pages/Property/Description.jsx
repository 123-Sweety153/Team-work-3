import Property from '@/components/ui/Property'
import React from 'react'
import Feauture from './Feauture'

const Description = () => {
    const desc = [
        {
            "title": "Description",
            "text": "Discover your own piece of paradise with the Seaside Serenity Villa. With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living."
        },
        {
            details: [
                {
                    "icon": "🛏️",
                    "label": "Bedrooms",
                    "value": "04"
                },
                {
                    "icon": "🛁",
                    "label": "Bathrooms",
                    "value": "03"
                },
                {
                    "icon": "📐",
                    "label": "Area",
                    "value": "2,500 Square Feet"
                }
            ]
        }
    ]

  return (
   <Property>
    
    <div className='py-8 flex flex-col lg:flex-row lg:gap-24 gap-20 xl:gap-35'>
        <div className='lg:w-[50%] w-full mx-auto'>
             <div>
                <div>
                    <h2 className='text-white font-semibold text-[18px] md:text-[20px] xl:text-[24px] mb-3'>{desc[0].title}</h2>
                    <p className='text-[#999999] xl:text-[18px] lg:text-[16px] text-[14px] font-medium'>{desc[0].text}</p>
                </div>
                <div className='w-full px-4 flex flex-wrap space-y-3 lg:space-y-0 mt-6 lg:mt-0 gap-5 justify-between 2xl:py-[50px] xl:py-[40px] lg:py-[30px] md:py-6  py-5'>
                    {desc[1].details.map((item,index)=>{
                        return <div>
                            <div className='space-y-3'>
                               <div className='flex gap-3'>
                                <div className='w-[24px] h-[24px] text-gray-600'>{item.icon}</div>
                                <p className='text-[#999999] xl:text-[18px] lg:text-[16px] text-[14px] font-medium'>{item.label}</p>
                               </div>
                               <h2 className='xl:text-[24px] lg:text-[22px] md:text-[18px] font-semibold'>{item.value}</h2>
                            </div>
                        </div>
                    })}
                </div>
             </div>
        </div>
        {/* ritht */}
        <div className='lg:w-[50%] w-full mx-auto'>
            <Feauture/>
        </div>
    </div>
   </Property>
  )
}

export default Description