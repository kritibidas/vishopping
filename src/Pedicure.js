import React from 'react'
import Burcum from './components/Burcum'
import { Link } from 'react-router-dom'

const Pedicure = () => {
  return (
    <>
        <Burcum title={"Pedicure/Manicure & SNS"}/>
        
        <section className="About-area padding-top-70 padding-bottom-140">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 margin-top-30">
                    <div className="about-thumb-content">
                        <div className="about-thumb">
                            <img src="../images/wel12.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 margin-top-30">
                    <div className="single-about">
                        <h2 className="about-title"> Pedicure / <span className="color1"> Manicure</span> & SNS </h2>
                        <div className="about-contents">
                            <p>Keep your hands and feet looking fresh again with our professional spa pedicure, manicure & SNS (Signature Nail System) services offered all across Bromeadow, Glenroy & Craigieburn.</p>
							<p>Our professional treatment will allow you to regain your complete confidence and feel attractive once again. We believe that everyone deserves to look their best. </p>
							<p>Our Mani & Pedi treatments does exactly that.</p>

                        </div>
						<div className="btn-wrapper">
							<Link to="/contactus" className="cmn-btn btn-bg-1"> Book Your 1st Consultation Today...! </Link>
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
                            <h3><strong> Our Pedicure &    <span className="color1">Manicure Treatments Go Far Beyond Just Aesthetics!</span></strong></h3> 
							<p><strong>The common benefits include -</strong></p>
                        </div>
						<div className="seller-contents">
							<ul className="seller-list text-left categ">
								<li>Prevents infections in your toenails.</li>
								<li>Removes any dead cells and encourages new cell growth.</li>
								<li>Promotes healthy blood circulation, reduces muscle tension and improves joint mobility.</li>
								<li>Makes your hands and feet look younger.</li>
								<li>Alleviates tension and boosts mental health.</li>
							</ul>
						</div>
						
						
                    </div>
                </div>
                
				<div className="col-lg-6 margin-top-30">
                    <div className="single-marketplace style-02 wow fadeInDown"  data-wow-delay=".2s">
                        <div className="section-title text-left">
                            <h3><strong> Our Nail Technicians Will Leave You  <span className="color1">Looking Properly Pampered!</span></strong></h3> 
                        </div>
						<div className="seller-contents">
							<ul className="seller-list text-left categ">
								<li>Manicure with nail polish or with shellac </li> 
								<li>Pedicure with nail polish or with shellac</li> 
								<li>SNS with tips or no tips </li>
								<li>Remove shellac or remove SNS </li>
								<li>Nail art </li>
							</ul>
						</div>
						<div className="btn-wrapper">
							<Link to="/pricing" className="cmn-btn btn-bg-1"> For Pricing Details Visit Our Product Pricing Page </Link>
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
                        <img src="../images/wel13.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 margin-top-30">
                    <div className="seller-wrapper  wow zoomIn" data-wow-delay=".4s">
                        <div className="section-title text-left">
                            <h4 className="about-title"> <strong>All Set For   <span className="color1">Your 1st Mani/Pedi (SNS)?</span></strong></h4>
                            <p>Our nail beauticians will prep and prime your nails exactly as you want using SNS (Signature Nail System) which is mainly a Powder Dripping System.</p> 
							<p>If you wish to add extra length, the tips will be glued on the stage as exactly as you want them.</p>
							<p>Each of our nail technicians is technically and artistically proficient in a wide range of pedicure and manicure treatments.</p> 
							<p>Whether you fancy a glamorous gel manicure or a pampering pedicure, rest assured that you will leave us feeling fully nourished, happy and thoroughly satisfied.</p>
							<p>To know more about our Pedi/mani & SNS services, CALL US or book an appointment as you see fit.</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    </>
  )
}

export default Pedicure