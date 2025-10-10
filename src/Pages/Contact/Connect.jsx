import LocationIcon from '@/assets/Location'
import Property from '@/components/ui/Property'
import React from 'react'

const Connect = () => {
    return (
        <Property>

            <div>
                <h2 className='2xl:text-[48px] xl:text-[40px] lg:text-[30px] md:text-[26px] text-[20px] font-semibold'>Let's Connect</h2>
                <p className='mt-1 text-[#999999] font-medium lg:text-[14px] text-[12px] xl:text-[16px] 2xl:text-[18px] lg:max-w-[1240px] 2xl:max-w-[1358px]'>We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.</p>
            </div>


            <div className='xl:py-14 lg:py-12 py-6 xl:px-10 lg:px-8 px-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:space-x-16 xl:space-x-14 lg:space-x-10 md:space-x-8 sm:space-x-6 space-y-6'>
                    <div>
                    <label className='block  font-semibold text-[20px] py-4'>First Name</label>
                    <input className='px-4 py-2 border-none outline-none focus:ring-2 focus:ring-blue-600 focus:rounded-md transition-all duration-100 ' type="text" name="" id="" placeholder='Enter First Name' />
                     </div>
                   <div>
                    <label className='block  font-semibold text-[20px] py-4'>Last Name</label>
                    <input className='px-4 py-2 border-none outline-none focus:ring-2 focus:ring-blue-600 focus:rounded-md transition-all duration-100 ' type="text" name="" id="" placeholder='Enter Last Name' />
                  </div>
                   <div>
                    <label className='block  font-semibold text-[20px] py-4 '>Email</label>
                    <input className='px-4 py-2 border-none outline-none focus:ring-2 focus:ring-blue-600 focus:rounded-md transition-all duration-100 ' type="text" name="" id="" placeholder='Enter your Email' />
                  </div>

                   <div>
                    <label className='block  font-semibold text-[20px] py-4 '>Phone</label>
                    <input className='px-4 py-2 border-none outline-none focus:ring-2 focus:ring-blue-600 focus:rounded-md transition-all duration-100 ' type="text" name="" id="" placeholder='Enter Phone Number' />
                  </div>
                     <div>
                    <label className='block  font-semibold text-[20px] py-4 '>Inquiry Type</label>
                    <select name="" id="" className='border-none outline-none flex gap-3 pr-3 py-1 text-[18px]'>
                        <option value="select Inquire Type" className='px-4 border-none outline-none'>select Inquire Type</option>
                    </select>
                  </div>
                   <div className='spy-6'>
                    <label className='block  font-semibold text-[20px] py-4 '>Selected Property</label>
                    <div className='flex justify-between xl:w-[600px] lg:w-[500px] w-full'>
                        <div>Seaside Serenity Villa, Malibu, California</div>
                        <LocationIcon/>
                    </div>
                  </div>
                </div>


                <div className='mt-6'>
                    <div className='spy-6'>
                    <label className='block  font-semibold text-[20px] py-4 '>Message</label>
                    <textarea name=""  className=' w-full h-[170px] p-[20px] rounded-[8px] overflow-hidden' id="" placeholder='Enter your Message here..'></textarea>
                  </div>
                </div>

                <div className='flex flex-wrap items-center justify-between'>
                    <p className='text-[#999999] text-[15px] lg:text-[18px]'>I agree with Terms of Use and Privacy Policy</p>
                    <button className='md:px-8 px-2 md:py-3 py-1 bg-blue-600 rounded-md cursor-pointer mt-4 lg:mt-0'>Send Your Message</button>
                </div>
            </div>
        </Property>
    )
}

export default Connect