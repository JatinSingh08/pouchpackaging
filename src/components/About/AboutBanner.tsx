import React from 'react'
import AboutImage from "../../assets/aboutBanner.png";

const AboutBanner = () => {
  return (
    <div className='w-full'>
      <img
        src={AboutImage}
        alt='AboutBanner'
        className='w-full object-contain'
      />
    </div>
  )
}

export default AboutBanner
