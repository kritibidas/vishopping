import React from 'react'
import Burcum from './components/Burcum'


const Contactus = () => {
  return (
    <>
      <Burcum title={"Contact Us"} />

      <section className="contact-promo-area padding-top-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-12 margin-top-30">
                    <div className="single-contacts wow fadeInUp" data-wow-delay=".2s">
                        <div className="contact-icon">
                            <i className="las la-phone-volume"></i>
                        </div>
                        <div className="contacts-contents">
                            <h4 className="title"> Call Us </h4>
                            <div className="item-contents">
                                <span className="item"> <a href="tel:0411871104"> 0411-871-104 </a> </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 margin-top-30">
                    <div className="single-contacts wow fadeInDown" data-wow-delay=".2s">
                        <div className="contact-icon">
                            <i className="las la-envelope"></i>
                        </div>
                        <div className="contacts-contents">
                            <h4 className="title"> Mail Address </h4>
                            <div className="item-contents">
                                <span className="item"> <a href="mailto:vishairbeauty2021@yahoo.com"> vishairbeauty2021@yahoo.com  </a> </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 margin-top-30">
                    <div className="single-contacts wow fadeInUp" data-wow-delay=".2s">
                        <div className="contact-icon">
                            <i className="las la-clock"></i>
                        </div>
                        <div className="contacts-contents">
                            <h4 className="title"> Hours of operation </h4>
                            <div className="item-contents">
                                <span className="item"> Mon - Sat: 9am - 7pm</span>
                                <span className="item"> Sun:  11am- 5 pm </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-lg-12">
                    <div className="section-title-two">
                        <h3 className="title"> Get In Touch </h3>
                    </div>
                </div>
            </div>

            <div className="row my-4">
              <div className='col-md-12 padding-top-20 padding-bottom-20'>
                <form>
                <div className="details-comment-content">
                  <div className="comments-flex-item">
                    <div className="single-commetns">
                      <label className="comment-label" htmlFor="text1"> Name* </label>
                      <input type="text" className="form--control" name="text1" id="text1" placeholder="Name"/>
                    </div>
                    <div className="single-commetns">
                      <label className="comment-label" htmlFor="text3"> Phone* </label>
                      <input type="tel" className="form--control"  name="text3" id="text3" placeholder="Number"/>
                    </div>
                  </div>
                  <div className="comments-flex-item">
                    <div className="single-commetns">
                      <label className="comment-label" htmlFor="text2"> Email* </label>
                      <input type="text" className="form--control"  name="text2" id="text2" placeholder="Email"/>
                    </div>
                  </div>
                  <div className="single-commetns">
                    <label className="comment-label" htmlFor="text4"> Message </label>
                    <textarea  name="text4" id="text4" className="form--control form--message" placeholder="Message"></textarea>
                  </div>
                  <div className="btn-wrapper">
                    <button type="submit" className="cmn-btn btn-appoinment btn-outline-1 passionate color2">Submit</button>
                  </div>
                </div>
                </form>
              </div>
            </div>
        </div>
    </section>
	
    </>
  )
}

export default Contactus