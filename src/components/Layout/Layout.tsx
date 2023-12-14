import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <main>
      <Banner />
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default Layout
