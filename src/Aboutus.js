import React from 'react'
import Burcum from './components/Burcum'


const Aboutus = () => {
  return (
    <>
      <Burcum title={"About Us"} />
      <section className="About-area padding-top-70 padding-bottom-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 margin-top-30">
              <div className="about-thumb-content">
                <div className="about-shape">
                  <img src="images/circle2.png" alt="" />
                </div>
                <div className="about-thumb">
                  <img src="images/wel5.jpg" alt="" />
                  <div className="about-experience">
                    <h2 className="years-tiitle"> 10 Year </h2>
                    <h4 className="experience-tiitle"> Experience </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 margin-top-30">
              <div className="single-about">
                <h2 className="about-title"> Know <span className="color1">About Us</span> </h2>
                <div className="about-contents">
                  <p> Vi's Hair & Beauty, ever since its inception, has been known for its unparalleled commitment to meet 100% customer satisfaction. </p>
                  <p>We always look to maintain a standard of excellence which has provided the impetus for us to grow and expand into the reputed business we are here today.
                    It is our unique mission to make you look and feel beautiful from both inside and out.</p>
                  <p>Our beauticians confidently deliver you a wide variety of beauty treatments such as - hair cut (men & women), hair colour & foil, pedicure, manicure, waxing, eyelash extension, eyebrows tint, eyelash tint, makeup, hair up, facial (deluxe facial, Advance Facial, Microdermabrasion), body treatment, massage (women only).</p>
                  <p>We offer our services in Bromeadow, Glenroy & Craigieburn region.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="join-area gradient-bg-2 padding-top-100 padding-bottom-100">
        <div className="join-shapes">
          <img src="images/circle1.png" alt="" />
          <img src="images/circle2.png" alt="" />
          <img src="images/dot-square.png" alt="" />
          <img src="images/line-cross.png" alt="" />
        </div>
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row align-items-center">
            <div className="col-lg-6 margin-top-30">
              <div className="seller-wrapper  wow  slideInLeft" data-wow-delay=".4s">
                <div className="section-title text-left">
                  <h3 className="title"><strong> Why <span className="color1">Choose Us?</span></strong></h3>
                  <div className="seller-contents">
                    <ul className="seller-list text-left categ">
                      <li>All treatments are performed via trained and experienced beauticians.</li>
                      <li>Our hair and beauty treatments are of competitive rates adhering to the industry-standard rates.</li>
                      <li>We can completely personalise the treatment to fit all the specific needs and preferences.</li>
                      <li>We always deliver an impressive level of professionalism whenever working with us.</li>
                      <li>We always use industry-recommended beauty products which are deemed the best & safe in the industry.</li>
                    </ul>

                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-6 margin-top-30">
              <div className="seller-thumbs wow slideInRight" data-wow-delay=".2s">
                <img src="images/wel6.jpg" alt="" />
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
                <img src="images/wel4.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 margin-top-30">
              <div className="seller-wrapper  wow zoomIn" data-wow-delay=".4s">
                <div className="section-title text-left">
                  <h2 className="title"> Let Us Know  <span className="title-color">How We Can Assist You Today!</span> </h2>
                  <span className="section-para"> Whether you’re looking to try out a completely new look or in need of some slight touch-ups, our beauticians at Vi's Hair & Beauty is ready to meet all your styling needs!</span>

                </div>
                <div className="btn-wrapper mt-4">
                  <a href="tel:0411871104" className="cmn-btn btn-appoinment btn-outline-1" tabIndex="0"> Have Questions....? Talk To Us Today! </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



    </>
  )
}

export default Aboutus