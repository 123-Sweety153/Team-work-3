import LocationIcon from '@/assets/Location'
import Property from '@/components/ui/Property'
import React from 'react'

const Discover = () => {
    const discover = [
        {
            "type": "Main Headquarters",
            "address": "123 Estatein Plaza, City Center, Metropolis",
            "description": "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
            "contact": {
                "email": "info@estatein.com",
                "phone": "+1 (123) 456-7890",
                "location": "Metropolis"
            },
            "action": "Get Direction"
        },
        {
            "type": "Regional Offices",
            "address": "456 Urban Avenue, Downtown District, Metropolis",
            "description": "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
            "contact": {
                "email": "info@estatein.com",
                "phone": "+1 (123) 456-7890",
                "location": "Metropolis"
            },
            "action": "Get Direction"
        }
    ]
    return (
        <Property>
            <div>
                <h1 className='2xl:text-[48px] xl:text-[40px] lg:text-[30px] md:text-[26px] text-[20px] font-semibold'>Discover Our Office Locations</h1>
                <p className='mt-1 text-[#999999] font-medium lg:text-[14px] text-[12px] xl:text-[16px] 2xl:text-[18px] lg:max-w-[1240px] 2xl:max-w-[1358px]'>Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you</p>
            </div>

            <div className='py-6 flex flex-wrap space-y-2 lg:space-y-0 px-10 gap-7 xl:mt-14 lg:mt-10 md:mt-8 mt-6'>
                <div className='font-bold text-[20px]'>All</div>
                <div className='font-bold text-[20px]'>Regional</div>
                <div className='font-bold text-[20px]'>International</div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 space-x-4 space-y-5 lg:space-y-0 xl:mt-14 lg:mt-12 md:mt-10 mt-6 py-4'>
                {discover.map((item,index)=>{
                    return <div key={index} className='pr-4'>
                        <div className='space-y-3.5'>
                            <p className='xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]'>{item.type}</p>
                            <h2 className='xl:text-[30px] lg:text-[26px] md:text-[22px] text-[20px]'>{item.address}</h2>
                            <p className='mt-1 text-[#999999] font-medium lg:text-[14px] text-[12px] xl:text-[16px] 2xl:text-[18px]'>{item.description}</p>
                            <div className='flex flex-wrap gap-6 mt-3'>
                                <div className='flex items-center gap-2'>
                                    <div className='text-[20px]'>📧</div>
                                    <p className='text-[18px]'>{item.contact.email}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='text-[20px]'>📞</div>
                                    <p className='text-[18px]'>{item.contact.phone}</p>
                                </div>
                                 <div className='flex gap-2'>
                                    <div className='text-[20px]'><LocationIcon/></div>
                                    <p className='text-[18px]'>{item.contact.location}</p>
                                </div>
                                

                            </div>

                            <button className='bg-blue-700 text-white w-full py-4 rounded-md font-medium'>{item.action}</button>
                        </div>
                    </div>
                })}
            </div>
        </Property>
    )
}

export default Discover