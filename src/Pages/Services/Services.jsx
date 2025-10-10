import React from 'react'
import ServicesPageHeroSection from './ServicesPageHeroSection'
import ServicePageValueSection from './ServicePageValueSection'
import ServicePageManagementSection from './ServicePageManagementSection'
import ServicePageInvestmentSection from './ServicePageInvestmentSection'
import ServicePageLastSection from './ServicePageLastSection'
const Services = () => {
  return (
    <div>
      <ServicesPageHeroSection/>
      <ServicePageValueSection/>
      <ServicePageManagementSection/>
      <ServicePageInvestmentSection/>
      <ServicePageLastSection/>
    </div>
  )
}

export default Services
