import React from 'react'

const Feauture = () => {
 const feauture = [
  {
    "feature": "Expansive oceanfront terrace for outdoor entertaining"
  },
  {
    "feature": "Gourmet kitchen with top-of-the-line appliances"
  },
  {
    "feature": "Private beach access for morning strolls and sunset views"
  },
  {
    "feature": "Master suite with a spa-inspired bathroom and ocean-facing balcony"
  },
  {
    "feature": "Private garage and ample storage space"
  }
]
  return (
    <div>
        <h2 className='xl:text-[24px] lg:text-[21px] md:text-[19px] text-[17px] font-semibold'>Key Features and Amenities</h2>
        <div className='mt-8 space-y-2.5'>
            {feauture.map((item,index)=>{
                return <div key={index} className='border-l-2 border-[#703BF7] bg-linear-to-r from-gray-6800 to-black'>
                    <div className='flex items-center '>
                        <div className='font-bold text-white w-[25px] h-[25px] px-4'>⚡︎</div>
                        <p className='text-[#999999] font-medium lg:text-[18px] text-[15px]'>{item.feature}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Feauture