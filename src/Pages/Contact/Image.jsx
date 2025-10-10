import Property from '@/components/ui/Property'
import React from 'react'

const Image = () => {
    return (
        <Property>
            <div className='space-y-2 lg:space-y-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 space-x-4 gap-4 items-center'>
                    <img src="/images/property/image1.png" className='object-cover w-full' alt="" />
                    <img src="/images/property/image2.png" className='w-full' alt="" />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 space-x-4 gap-4 items-center mt-3'>
                    <img src="/images/property/image3.png" className='object-cover w-full' alt="" />
                    <div className='flex'>
                        <img src="/images/property/image4.png" className='w-full' alt="" />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 space-x-4 gap-4 items-center mt-4'>
                     <div className='flex mt-7 mb-7 '>
                            <div>
                                <h1 className='2xl:text-[48px] xl:text-[40px] lg:text-[30px] md:text-[26px] text-[20px] font-semibold'>Get in Touch with Estatein</h1>
                                <p className='mt-1 text-[#999999] font-medium lg:text-[14px] text-[12px] xl:text-[16px] 2xl:text-[18px] lg:max-w-[1000px] 2xl:max-w-[1358px]'>Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.</p>
                            </div>
                    </div>
                    <img src="/images/property/image5.png" className='w-full' alt="" />
                </div>


            </div>

            <div className='xl:py-10 lg:py-8 md:py-7 py-6'>
                
            </div>
        </Property>
    )
}

export default Image