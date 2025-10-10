import LocationIcon from '@/assets/Location'
import Property from '@/components/ui/Property'
import React from 'react'

const Inquire = () => {
  return (
   <Property>
        <div className='py-8 flex flex-col lg:flex-row lg:gap-24 gap-20 xl:gap-35'>
            <div className='lg:w-[21%] w-full mx-auto pr-4'>
                <h2 className='2xl:text-[48px] xl:text-[40px] lg:text-[30px] md:text-[26px] text-[20px] font-semibold lg:w-[519px]'>Inquire About Seaside Serenity Villa</h2>
                <p className='mt-4 text-[#999999] font-semibold md:text-[17px] text-[15px] lg:text-[18px]'>Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.</p>
            </div>
            <div className='lg:w-[78%] pl-0 lg:pl-10 w-full mx-auto ml-0 lg:ml-[170px] xl:ml-[180px]'>
                <div className='grid grid-cols-3 lg:grid-cols-2 2xl:space-x-16 xl:space-x-14 lg:space-x-10 md:space-x-8 sm:space-x-6 space-y-6'>
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
                </div>

                <div>
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
                    <textarea name=""  className='2xl:w-[884px] xl:w-[600px] lg:w-[500px] w-full h-[170px] p-[20px] rounded-[8px] overflow-hidden' id="" placeholder='Enter your Message here..'></textarea>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                    <p className='text-[#999999] text-[15px] lg:text-[18px]'>I agree with Terms of Use and Privacy Policy</p>
                    <button className='md:px-8 px-2 md:py-3 py-1 bg-blue-600 rounded-md cursor-pointer'>Send Your Message</button>
                </div>
            </div>
        </div>
 
   </Property>
  )
}

export default Inquire