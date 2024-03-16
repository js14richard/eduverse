import React from 'react'
import StaticNavbar from './StaticNavbar'
import Footer from './Footer'
import Address from './Address'


export default function Home() {
  return (
    <div>
      <StaticNavbar />
      
      <div className='home_content_wrapper'>
        <Address />
        <Footer/>
      </div>
    </div>
  )
}
