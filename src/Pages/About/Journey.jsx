import React from 'react'

const Journey = () => {
  return (
    <div className='bg-[#262626] py-8 px-8'>
      <div className='flex' >
        <div className=''>
          <img className=' py-4' src="/Images/About/Logo.png" alt="" />
          <h2 className='font-semibold lg:text-[30px] md:text-[24px] text-[20px] text-white px-4 py-3'>Our Journey</h2>
          <p className='lg:text-[18px] md:text-base text-sm text-gray-400 px-4'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
        </div>

        <div className='px-6 py-10 '>
          <img src="/Images/About/Journey.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Journey
