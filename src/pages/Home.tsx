import React from 'react'
import Banner from '../components/Layout/Banner'
import Header from '../components/Layout/Header'
import Body from '../components/Home/Body'
import Purpose from '../components/Home/Purpose'
import BrandPartners from '../components/Home/BrandPartners'
import Brochure from '../components/Home/Brochure'
import Applications from '../components/Home/Applications'
import Footer from '../components/Layout/Footer'

const Home = () => {
  return (
    <main>
      <Banner />
      <Header />
      <div className='min-h-screen'>
        <Body />
        <Purpose />
        <BrandPartners />
        <Brochure />
        <Applications />
      </div>
      <Footer />
    </main>
  )
}

export default Home
