import About from '@/components/home/About'
import Expertise from '@/components/home/Expertise'
import Faqs from '@/components/home/Faqs'
import HeroSection from '@/components/home/HeroSection'
import Plans from '@/components/home/Plans'
import Testimonials from '@/components/home/Testimonials'
import WeddingCost from '@/components/home/WeddingCost'
import WhyChoose from '@/components/home/WhyChoose'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
        <About/>
        <WeddingCost/>
        <Plans/>
        <Expertise/>
        <WhyChoose/>
        <Testimonials/>
        <Faqs/>
    </div>
  )
}

export default HomePage