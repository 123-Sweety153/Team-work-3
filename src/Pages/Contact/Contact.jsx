
import React from 'react'
import Hero from './Hero'
import SocialContact from './Social-Contact'
import Connect from './Connect'
import Discover from './Discover'
import Image from './Image'
import Estate from '../Property/Estate'


const Contact = () => {
  return (
   <div className='max-w-[1920px] bg-[#141414] py-10 mx-auto text-white px-3 md:px-4 overflow-hidden'>
    <Hero/>
    <SocialContact/>
    <Connect/>
    <Discover/>
    <Image/>
    <Estate/>
   </div>
  )
}

export default Contact
