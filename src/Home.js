import React from 'react'
//import Slider from './components/Slider'
import HomeServices from './components/HomeServices'
import { Link } from 'react-router-dom'
import Slider2 from './components/Slider2'
import HomeProduct1 from './components/HomeProduct1'

const Home = () => {
    return (
        <>
            {/* <Slider /> */}
            <Slider2 />
            
            <HomeServices />
            <HomeProduct1 />
            

            <section className="category-area section-bg-1 padding-top-100 padding-bottom-100">
                <div className="container container-two">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="banner-right-contents style-02">
                                <div className="banner-right-thumb wow slideInLeft" data-wow-delay=".3s">
                                    <img src="images/wel1.png" alt="" />
                                    <div className="banner-dot-shape">
                                        <img src="images/dot-square.png" alt="" />
                                    </div>
                                </div>
                                <div className="banner-cleaning-service">
                                    <div className="icon">
                                        <i className="las la-envelope"></i>
                                    </div>
                                    <div className="icon-contents">
                                        <span className="thumb-cleaning-title"> <Link to="mailto:vishairbeauty2021@yahoo.com "> Make a Appointment </Link> </span>

                                    </div>
                                </div>
                                <div className="banner-client">
                                    <div className="smile-contents-all">
                                        <div className="thumb-smile">
                                            <i className="flaticon-beauty-saloon"></i>
                                        </div>
                                        <div className="smile-content">
                                            <a href="gallery.html">
                                                <span className="smile-title"> Gallery </span>
                                                <span className="smile-para"> Client Here </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="style-03">
                                <div className="single-about">
                                    <h5>Vi's Hair & Beauty</h5>
                                    <h2 className="about-title"> Hello & <span className="color1">Everyone...!</span> </h2>
                                    <div className="about-contents">
                                        <p className="about-para"> At Vi's Hair & Beauty; we specialise in a wide range of permanent hair straightening and make-up, full-body treatment massage and other beauty treatments in the Bromeadow, Glenroy & Craigieburn region.</p>
                                        <p className="about-para">We always pride ourselves on delivering top-quality services to each of our customers at competitive, industry-standard rates. Our permanent hair make-up and beauty salon is renowned to present a comfortable, friendly and relaxing setting for each of your specific treatment requirements.</p>


                                    </div>
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
                            <div className="seller-wrapper">
                                <div className="section-title text-left">
                                    <h3 className="title"> We Only Use <span className="title-color">The Best Beauty Products</span> In The Industry!    </h3>
                                    <span className="section-para"> Being in this industry for years, we perform all our treatments safely and by using the best products in the industry. </span>
                                    <span className="section-para">Our recommended beauty products will most definitely keep your hair and skin looking and feeling their best. </span>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 margin-top-30">
                            <div className="seller-thumbs wow slideInRight" data-wow-delay=".2s">
                                <img src="images/wel2.jpg" alt="" />
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
                    <div className="join-content-wrapper">
                        <div className="join-contents">
                            <h1 className="title"> Enquire <span className="color1">More</span></h1>
                            <span className="join-para"> Our Services. </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 margin-top-30">
                            <div className="single-marketplace style-03 wow fadeInUp" data-wow-delay=".2s">
                                <div className="seller-contents">
                                    <ul className="seller-list text-left categ">
                                        <li>Men Hair cut ( buzz cut, fashion cut, fade cut )</li>
                                        <li>Women hair cut ( bob cut, layer cut,  long layer cut)</li>
                                        <li>Colour & foil ( ombre, foil)</li>
                                        <li>Blow wave, perm, permanent straightening</li>
                                        <li>Makeup & Hair up</li>
                                        <li>Spa Pedicure ( with nail polish, or shellac)</li>
                                        <li>Manicure( with nail polish or shellac)</li>
                                        <li>SNS ( with tip or no tip ) </li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 margin-top-30">
                            <div className="single-marketplace style-03 wow fadeInDown" data-wow-delay=".2s">
                                <div className="seller-contents">
                                    <ul className="seller-list text-left categ">
                                        <li>Waxing ( full body waxing)</li>
                                        <li>Eyelash Extension( with 2D, 3D,4D 5D,6D, 1 by 1)</li>
                                        <li>Eyelash Tint</li>
                                        <li>Eyebrows Tint</li>
                                        <li>Facial (deluxe facial, Advance facial, Microdermabrasion facial)</li>
                                        <li>Body Treatment </li>
                                        <li>Massage</li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="seller-area padding-bottom-100">
                <div className="container">
                    <div className="row flex-column-reverse flex-lg-row align-items-center">
                        <div className="col-lg-6 margin-top-30">
                            <div className="seller-thumbs wow slideInLeft" data-wow-delay=".2s">
                                <img src="images/wel3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 margin-top-30">
                            <div className="seller-wrapper  wow slideInRight" data-wow-delay=".4s">
                                <div className="section-title text-left">
                                    <h3><strong> We Are Passionate About Making Every Client Feel Beautiful From The Inside-Out!</strong></h3>
                                    <p>Our highly talented and experienced beauticians possess undeniable industry know-how. Plus, we constantly strive to train ourselves with the latest industry techniques to serve our customers best and guarantee you 100% service satisfaction. </p>
                                    <p>Our trained beauticians are highly passionate about making everyone feel beautiful from the inside out whenever receiving treatment from our beauty salon.</p>
                                    <p>Rest assured that whenever you come to our beauty parlour, we will greet you with a cordial and friendly smile and present you with professional services without burning a hole in your pocket.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="passionate padding-top-70 padding-bottom-100">
                <div className="container">
                    <div className="row flex-column-reverse flex-lg-row align-items-center">
                        <div className="col-lg-12">
                            <div className="seller-wrapper text-center  wow zoomIn" data-wow-delay=".4s">
                                <h2><strong> Ready To Book Your 1st Appointment...? CONTACT US NOW!</strong></h2>
                                <p>We are operational Monday - Saturday: 9am - 7pm & Sunday:  11am- 5 pm. So, call us & schedule an appointment whenever you see fit. </p>
                                <div className="btn-wrapper mt-4">
                                    <Link to="tel:0411871104" className="cmn-btn btn-outline-4" tabIndex="-1"><i className="las la-phone"></i> All Services Require A Prior Appointment </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </>
    )
}

export default Home