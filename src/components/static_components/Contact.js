import React from 'react'
import Footer from './Footer'
import Address from './Address'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className='contact_page_wrapper'>
      <div className="container mt-5 contact-content">
        <h2 className='text-center contact_heading'>CONTACT US</h2>
        <div className="row d-flex justify-content-between align-items-center">
          <div className='col-lg-5'>
            <img src="./contact.jpg" alt="" class="img-fluid mt-sm-3" />
          </div>
          <div className="col-lg-6 col-sm-10 contact-form-sec">
            <form action="">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" name="" id="" placeholder="Name" className="form-control" />
                </div>

                <div className="col-md-6">
                  <input type="email" name="" id="" placeholder="Email" className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <input type="text" name="" id="" placeholder="Subject" className="form-control" />
                </div>

                <div className="col-12 form-message">
                  <textarea name="" id="" className="form-control" placeholder="Your Message" style={{ height: '120px' }}></textarea>
                </div>

                <div className="col-12">
                  <Link to="/coming_soon" className="btn btn-info mt-3">Send Message</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Address/>
      <Footer/>
        
    </div>
  )
}
