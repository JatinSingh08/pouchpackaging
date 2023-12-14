import React from 'react'
import AboutBanner from '../components/About/AboutBanner'
import OurCompany from '../components/About/OurCompany'
import CompanyStats from '../components/About/CompanyStats'
import MissionVision from '../components/About/MissionVision'
import Leadership from '../components/About/Leadership'
import Tagline from '../components/About/Tagline'

const About = () => {
  return (
    <div>
      <AboutBanner />
      <OurCompany />
      <CompanyStats />
      <MissionVision />
      <Leadership />
      <Tagline />
    </div>
  )
}

export default About
