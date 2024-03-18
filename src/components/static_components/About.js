import React from 'react'
import Address from './Address'
import Footer from './Footer'
import Contact from './Contact'

export default function About() {
  return (
    <div className='page_content_wrapper'>
      <div class="container about-intro ">
        <div class="row d-flex justify-content-between align-items-center p-3">
          <div class="col-lg-6 text-justify">
              <h4>About EduVerse</h4>
              <p>
                Our online course platform is a leading destination for   learners seeking to expand their knowledge and skills.  Established in [Year], our platform has quickly become a go-to   resource for individuals eager to enhance their expertise in  various fields. Whether you're a novice or an expert, our  platform offers a wealth of opportunities for personal and   professional growth.
              </p>
              <p>    
                Our platform hosts a diverse range of courses tailored to meet  the needs of learners at all levels. With a vast selection of  courses spanning from technology and business to arts and  personal development, there's something for everyone. From   introductory courses to advanced masterclasses, we strive to  cater to diverse learning preferences and goals.
              </p>

              <a href=""><button class="btn btn-info">Learn More</button></a>
          </div>
          <div class="col-lg-5 ">
              <img src="./about_us.jpg" alt="" class="img-fluid about_intro_img mt-sm-3" />
          </div>
        </div>
      </div>  

      <div className='container how-it-works'>
        <h2>How It Works?</h2>

        <div class="row d-flex justify-content-center">
            <div class="col-8">
                <p class="text-center mt-lg-3 mt-sm-1">Our platform streamlines the process of connecting learners with quality courses through a user-friendly interface. With our intuitive platform, learners can easily discover, enroll in, and engage with courses that match their interests and goals. Here's how it works:
                </p>
            </div>
        </div>

        <div class="row d-flex text-center">
            <div class="col-lg-4">
                <div class="steps">
                    <p><i class="fa-solid fa-user"></i></p>

                    <h4> Create an Account</h4>

                    <p className='text-justify'>
                    Ready to embark on your learning journey? Creating an account is simple and quick. Whether you're an enthusiastic learner or an expert looking to share knowledge, our platform welcomes you.
                    </p>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="steps">
                    <p><i class="fa-solid fa-magnifying-glass"></i></p>

                    <h4>Explore Courses</h4>

                    <p className='text-justify'>
                      Courses on our platform cover a wide range of subjects,   from technology and business to arts and personal   development. With diverse offerings, there's something  for everyone to explore and learn. 
                    </p>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="steps">
                    <p><i class="fa-solid fa-trophy"></i></p>

                    <h4> Learn at Your Own Pace </h4>

                    <p className='text-justify'>
                      Enjoy the freedom to learn at your own pace and   convenience. Our courses are designed to accommodate  varying schedules, enabling you to access course   materials whenever it suits you best.
                    </p>
                </div>
            </div>
        </div>

      </div>
    
    <Contact/>

    <Address/>
    <Footer/>
    </div>
  )
}
