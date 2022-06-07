import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className="footer-area section-bg-2">
        <div className="footer-top padding-top-100 padding-bottom-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-12">
                        <div className="footer-widget widget ">
                            <div className="about_us_widget">
                                <Link to="/" className="footer-logo"> <img src="../images/logo.png" alt=""/></Link>
                            </div>
                            <div className="footer-inner">
                                <p className="footer-para">Vi's Hair & Beauty, ever since its inception, has been known for its unparalleled commitment to meet 100% customer satisfaction... <Link to="aboutus" className="color1">Continue</Link> </p>
                            </div>
                        </div>
                    </div>
					<div className="col-lg-3 col-sm-12">
                        <div className="footer-widget widget">
                            <h6 className="widget-title">Our Services</h6>
                            <div className="seller-contents">
                                <ul className="seller-list text-left categ">
                                	<li><Link to="/services/eyelash-extension">Eyelash Extension</Link></li>
									<li><Link to="/services/haircut">Hair Cut</Link></li>
									<li><Link to="/services/pedicure-and-manicure-and-sns">Pedicure/Manicure & SNS</Link></li>
									<li><Link to="/services/waxing-and-facial">Waxing / Facial</Link></li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="footer-widget widget">
                            <h6 className="widget-title">Contact Us</h6>
                            <div className="footer-inner">
                                <ul className="footer-link-address">
                                    
                                    <li className="list"> <span className="address"> <a href="tel:0411871104"> <i className="las la-mobile-alt"></i> 0411-871-104</a> </span></li>
                                    <li className="list"> <span className="address"> <a href="mailto:vishairbeauty2021@yahoo.com"> <i className="las la-envelope"></i> vishairbeauty2021@yahoo.com</a> </span></li>
									<li className="list"> <span className="address"> <i className="las la-clock"></i> Monday - Saturday: 9am - 7pm<br/>Sunday:  11am- 5 pm </span></li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        <div className="copyright-area copyright-border">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="copyright-contents">
                            <span> &copy; Copyright Vi's Hair & Beauty <script>document.write((new Date()).getFullYear())</script>. All Rights Reserved. </span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <ul className="copyright-list">
                            <li className="list">
                                Website by: <a href="http://www.getvisibleweb.com/" className="link-wite" target="_blank" rel="noopener noreferrer">www.getvisibleweb.com</a>
                            </li>
                            
                        </ul>
                    </div>
				</div>
            </div>
        </div>
    </footer>
	
    <div className="back-to-top">
        <span className="back-top"><i className="las la-angle-up"></i></span>
    </div>
    </>
  )
}

export default Footer