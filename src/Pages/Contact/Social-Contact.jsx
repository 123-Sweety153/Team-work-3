import Property from '@/components/ui/Property'
import React from 'react'

const SocialContact = () => {
  const social= [
  {
    "Icon": "↗",
    "Label": "/images/property/email.png",
    "Value": "info@estotein.com"
  },
  {
    "Icon": "↗",
    "Label": "/images/property/phone.png",
    "Value": "+1 (123) 456-7890"
  },
  {
    "Icon": "↗",
    "Label": "/images/property/location.png",
    "Value": "Main Headquarters"
  },
  {
    "Icon": "↗",
    "Label": "/images/property/social.png",
    "Value": "Instagram  Linkedin  Facebook"
  }
]
  return (
     <Property>
        <div className='py-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-10 gap-6'>
                {social.map((item,index)=>{
                    return <div key={index} className=' bg-gray-900 '>
                        <div className='flex justify-between items-center py-4 px-6'>
                            <div></div>
                            <div>{item.Icon}</div>
                        </div>

                        <div className='flex flex-col items-center justify-center mt-3 mb-3'>
                            <img src={item.Label} alt="" />
                            <p className='mt-4 font-semibold 2xl:text-[20px] xl:text-[18px] text-lg'>{item.Value}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
     </Property>
  )
}

export default SocialContact