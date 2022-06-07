import React from 'react'
import Burcum from './components/Burcum'
import { Link } from 'react-router-dom'

const EyelashExtention = () => {
  return (
    <>
      <Burcum title={"Eyelash Extension"} />

      <section className="About-area padding-top-70 padding-bottom-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 margin-top-30">
              <div className="about-thumb-content">
                <div className="about-thumb">
                  <img src="../images/wel7.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 margin-top-30">
              <div className="single-about">
                <h2 className="about-title"> Eyelash <span className="color1"> Extension</span> </h2>
                <div className="about-contents">
                  <p> Caught yourself coveting those gorgeous looking lush lashes of your favourite celeb or socialite on Instagram or Facebook...?</p>
                  <p>Wish to have the same stunning eyelash extension makeover to put yourself in the same league as them...?</p>
                  <p>We @ Vi's Hair & Beauty can help you get the look you want!</p>
                  <p>We operate in and around Bromeadow, Glenroy & Craigieburn.</p>

                </div>
                <div className="btn-wrapper">
                  <Link to="/contactus" className="cmn-btn btn-bg-1"> So, Book Now! </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="join-area section-bg-1 padding-top-100 padding-bottom-100">
        <div className="join-shapes">
          <img src="../images/circle1.png" alt="" />
          <img src="../images/circle2.png" alt="" />
        </div>
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row align-items-center">
            <div className="col-lg-6 margin-top-30">
              <div className="seller-wrapper  wow  slideInLeft" data-wow-delay=".4s">
                <div className="section-title text-left">
                  <h3><strong> We Are Passionate & <span className="color1">Will Help You Achieve The Style You Want!</span></strong></h3>
                  <p>Our courteous, experienced and certified beauticians are passionate about achieving the desired shape and style of eyelashes you want.</p>
                  <p>We never compromise on our service quality and always look to use premium and lightweight lashes made from both authentic human hair as well as faux mink lashes. They are durable and lightweight to the point that you won't even feel them on your eyes.</p>
                  <p>While performing the eyelash extension treatment, our beauticians will work carefully and precisely to achieve the stunning results you want.</p>
                  <p>Rest assured that we are always focused on tailoring eyelash extension treatment (as well as other hair and beauty treatments) to create memorable experiences- every time!</p>
                </div>

              </div>
            </div>
            <div className="col-lg-6 margin-top-30">
              <div className="seller-thumbs wow slideInRight" data-wow-delay=".2s">
                <img src="../images/wel8.jpg" alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="join-area gradient-bg-2 border1 padding-top-100 padding-bottom-100">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row align-items-center">
            <div className="col-lg-6 margin-top-30">
              <div className="single-marketplace style-02 wow fadeInUp" data-wow-delay=".2s">
                <div className="section-title text-left">
                  <h3><strong> Our Eyelash  <span className="color1">Services Include</span></strong></h3>
                </div>
                <div className="seller-contents">
                  <ul className="seller-list text-left categ">
                    <li>Eyelash extensions with volume 3d,4d,5d,6d </li>
                    <li>Eyelash extensions natural 1 lay </li>
                    <li>Eyelash extensions natural full lays remove eyelash </li>
                  </ul>
                </div>
                <div className="btn-wrapper text-left">
                  <a href="contact-us.html" className="cmn-btn btn-bg-1"> Enquire More | Book Now </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 margin-top-30">
              <div className="single-marketplace style-02 wow fadeInDown" data-wow-delay=".2s">
                <div className="section-title text-left">
                  <h3><strong> Our Lash Tinting   <span className="color1">Services Include</span></strong></h3>
                </div>
                <div className="seller-contents">
                  <ul className="seller-list text-left categ">
                    <li>Eyebrows  tint eyelash  tint </li>
                    <li>Eyebrows & eyelash tint</li>
                    <li>Eyebrows tint & eyebrows wax  </li>
                  </ul>
                </div>
                <div className="btn-wrapper text-left">
                  <a href="contact-us.html" className="cmn-btn btn-bg-1"> Enquire More | Book Now </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


      <section className="seller-area padding-top-70 padding-bottom-100">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row align-items-center">
            <div className="col-lg-6 margin-top-30">
              <div className="seller-thumbs wow zoomIn" data-wow-delay=".2s">
                <img src="../images/wel9.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 margin-top-30">
              <div className="seller-wrapper  wow zoomIn" data-wow-delay=".4s">
                <div className="section-title text-left">
                  <h4> <strong>We Use Innovative Technology & Correct Applications. So You Have Nothing To Worry About!</strong></h4>
                  <span className="section-para"> Our performed hair extension treatment will allow you to look more youthful. Plus, our eyelash extension treatment will not damage your natural lashes and will rather add more volume to your lashes.</span>
                  <h4 className="pt-4"><strong>Ready To Meet Our Team...?</strong></h4>
                  <span className="section-para"> Speak to us and schedule a prior appointment at your suitable date and time. </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default EyelashExtention