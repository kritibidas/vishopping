import React from 'react'
import Burcum from './components/Burcum'
import { Link } from 'react-router-dom'

const Haircut = () => {
  return (
    <>
        <Burcum title={"Hair Cut"} />

        <section className="About-area padding-top-70 padding-bottom-140">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 margin-top-30">
                    <div className="about-thumb-content">
                        <div className="about-thumb">
                            <img src="../images/wel10.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 margin-top-30">
                    <div className="single-about">
                        <h2 className="about-title"> Hair   <span className="color1"> Cut</span> </h2>
                        <div className="about-contents">
                            <p> At, Vi's Hair & Beauty, we are dedicated to delivering an appreciative touch of glamour to your hairstyle within a relaxed, comfortable and social space in and across Bromeadow, Glenroy & Craigieburn.</p>
							<p>Armed with the latest men and women haircut styling tips and trends from the fashion world, our hairdressers will ensure your hair appears a season above the rest and look perfect for you.</p> 
							<p>Our team are master cutters, colourists and stylists who possess lots of know-how and training. Simply visit our parlour, experience the difference and enjoy stunning hair transformations at the best rates in the region.</p>

                        </div>
						<div className="btn-wrapper">
							<Link to="/contactus" className="cmn-btn btn-bg-1"> Book your appointment today... </Link>
						</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	
	<section className="join-area gradient-bg-2 border1 padding-top-100 padding-bottom-100">
        <div className="container">
            <div className="row flex-column-reverse flex-lg-row align-items-center">
				<div className="col-lg-6 margin-top-30">
                    <div className="single-marketplace style-02 wow fadeInUp"  data-wow-delay=".2s">
                        <div className="section-title text-left">
                            <h3><strong> Hair Cut   <span className="color1">For Men</span></strong></h3> 
                        </div>
						<div className="seller-contents">
							<ul className="seller-list text-left categ">
								<li>Buzz cut </li> 
								<li>Fashion cut </li>
								<li>Fade cut</li>
								<li>Hair cut & colour </li>
							</ul>
						</div>
						<div className="section-title text-left">
                            <h3><strong> Hair Cut <span className="color1">For Women</span></strong></h3> 
                        </div>
						<div className="seller-contents">
							<ul className="seller-list text-left categ">
								<li>Bob Cut</li>
								<li>Layer Cut</li>
								<li>Long Layer Cut</li>
							</ul>
						</div>
                    </div>
                </div>
                
				<div className="col-lg-6 margin-top-30">
                    <div className="single-marketplace style-02 wow fadeInDown"  data-wow-delay=".2s">
                        <div className="section-title text-left">
                            <h3><strong> What Else  <span className="color1">To Expect?</span></strong></h3> 
                        </div>
						<div className="seller-contents">
							<ul className="seller-list text-left categ">
								<li>Ombre colour & foil </li> 
								<li>1/2 foil with stoner: (short hair/ medium hair/ long hair) </li>
								<li>Full foil with stoner: (short hair/medium hair/long hair)</li>
								<li>Cut, wash and blow wave  </li>
								<li>Blow wave with set  </li>
								<li>Shampoo with a blow wave</li>
								<li>Shampoo with blow-dry</li>
								<li>Perm Permanent straightening (depending on hair)</li>
							</ul>
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
                        <img src="../images/wel11.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 margin-top-30">
                    <div className="seller-wrapper  wow zoomIn" data-wow-delay=".4s">
                        <div className="section-title text-left">
                            <h4 className="about-title"> <strong>Schedule An <span className="color1">Appointment Today!</span></strong></h4>
                            <p>All our hair cutting & styling services commence with a full personal consultation and are beautifully finished with a specialist blow wave.</p>
							<p>If you have a specific hairstyle in mind, speak to our professional hairdressers and make an appointment at your convenient date and time.</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    </>
  )
}

export default Haircut