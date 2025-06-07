import AboutSection from '@/components/about/AboutSection'
import ExperienceSection from '@/components/about/ExperienceSection'
import WhatWeDoSection from '@/components/about/WhatWeDoSection'
import WhoWeAreSection from '@/components/about/WhoWeAreSection'
import React from 'react'

const AboutUsPage = () => {
  return (
    <div>
        <AboutSection/>
        <WhoWeAreSection/>
        <WhatWeDoSection/>
        <ExperienceSection/>
    </div>
  )
}

export default AboutUsPage