import React from 'react'
import Villa from './Villa'
import Carousel from './Carousel'
import Description from './Description'
import Inquire from './Inquire'
import Details from './Details'
import LIsting from './LIsting'
import Faqpro from './Faq-pro'
import Estate from './Estate'


const Property = () => {
  return (
    <div className='max-w-[1920px] bg-[#141414] py-10 mx-auto text-white px-3 md:px-4 overflow-hidden'>
      <Villa/>
      <Carousel/>
      <Description/>
      <Inquire/>
      <Details/>
      <LIsting/>
      <Faqpro/>
      <Estate/>

    </div>
  )
}

export default Property
