import React from 'react'

const Property = ({children}) => {
  return (
    <div>
     <div className='max-w-[1596px] mx-auto py-6 md:py-8 lg:py-10 2xl:py-12 px-6 md:px-[25px] lg:px-[34px] xl:px-[40px] 2xl:px-[50px]'> 
        {children}   
    </div>
    </div>
  )
}

export default Property