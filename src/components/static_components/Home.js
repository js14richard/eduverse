import React from 'react'
import StaticNavbar from './StaticNavbar'
import Footer from './Footer'
import Address from './Address'


export default function Home() {
  return (
    <div>
           
      <div className='page_content_wrapper'>
        
        {/* Carousel Section */}
        <div className='row home_carousel_section'>
          <div className='col-lg-12 col-md-12 '>
            <div id="carouselExampleInterval" class="carousel slide"  data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active"   data-bs-interval="3000">
                  <img src='/home_carousel_1.png' class="d-block w-100 img-fluid home_carousel_img" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src='/home_carousel_3.jpg' class="d-block w-100 img-fluid home_carousel_img" alt="..." />
                </div>              
              </div>
              <button class="carousel-control-prev" type="button"   data-bs-target="#carouselExampleInterval"   data-bs-slide="prev">
                <span class="carousel-control-prev-icon"  aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button"   data-bs-target="#carouselExampleInterval"   data-bs-slide="next">
                <span class="carousel-control-next-icon"  aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        {/* Customers Section */}
        <div class="container customer-logo">
          <h3 class="text-center">Trusted By Companies</h3> <hr />
          <div class="table-responsive">
              <table class="table">
                  <tr>
                      <td><img src="/HCL-Logo.png" alt="" class="img-fluid" /></td>
                      <td><img src="/Paytm-logo.png" alt="" class="img-fluid" /></td>
                      <td><img src="/Zomato-Logo.png" alt="" class="img-fluid" /></td>
                      <td><img src="/Swiggy-logo.png" alt="" class="img-fluid" /></td>
                      <td><img src="/cred-logo.png" alt="" class="img-fluid" /></td>
                      
                  </tr>
              </table>
          </div>
        </div>

        {/* Home Cards Section */}

        <div className='container card_section mt-lg-3 mt-md-3'>
            <div className='row d-flex justify-content-around'>
                <div className="col-md-3 mt-3">
                  <div className="card card_scale">
                    <img src='/home_card_1.jpg' className="card-img-top" alt="Card Image" />
                    <div className="card-body">
                      <h5 className="card-title">Programming Languages</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quae!</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mt-3">
                  <div className="card">
                    <img src='/home_card_2.jpg' className="card-img-top" alt="Card Image" />
                    <div className="card-body">
                      <h5 className="card-title">Artificial Intelligence</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quae!</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mt-3 ">
                  <div className="card">
                    <img src='/home_card_3.jpg' height="220px" className="card-img-top" alt="Card Image" />
                    <div className="card-body">
                      <h5 className="card-title">API Development</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quae!</p>
                    </div>
                  </div>
                </div>
                
            </div>
        </div>

        <div className='mt-5'>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
