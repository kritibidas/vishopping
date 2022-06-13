import React, { useState } from 'react'
import ServicesData from './ServicesData'
import { Link } from 'react-router-dom'


const HomeServices = () => {
    const [data] = useState(ServicesData)

    return (
        <>
            <section className="margketplace-area padding-top-60 padding-bottom-100">
                <div className="container container-two">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-10">
                            <div className="section-title">
                                <h2 className="title"> Our <span className="title-color"> Services </span> </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="col-lg-3 col-md-6 margin-top-30 marketplace-child" >
                            <div className="single-marketplace wow fadeInDown" data-wow-delay=".1s">
                                <div className="icon">
                                    <img src={data[0].images} alt={data[0].title} />
                                </div>
                                <div className="marketplace-contents">
                                    <h4 className="common-title-two font-20"> <Link to="/services/eyelash-extension"> {data[0].title} </Link> </h4>
                                    <p className="common-para">{data[0].para}...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 margin-top-30 marketplace-child" >
                            <div className="single-marketplace wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <img src={data[1].images} alt={data[1].title} />
                                </div>
                                <div className="marketplace-contents">
                                    <h4 className="common-title-two font-20"> <Link to="/services/haircut"> {data[1].title} </Link> </h4>
                                    <p className="common-para">{data[1].para}...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 margin-top-30 marketplace-child" >
                            <div className="single-marketplace wow fadeInDown" data-wow-delay=".3s">
                                <div className="icon">
                                    <img src={data[2].images} alt={data[2].title} />
                                </div>
                                <div className="marketplace-contents">
                                    <h4 className="common-title-two font-20"> <Link to="/services/pedicure-and-manicure-and-sns"> {data[2].title} </Link> </h4>
                                    <p className="common-para">{data[2].para}...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 margin-top-30 marketplace-child" >
                            <div className="single-marketplace wow fadeInUp" data-wow-delay=".4s">
                                <div className="icon">
                                    <img src={data[3].images} alt={data[3].title} />
                                </div>
                                <div className="marketplace-contents">
                                    <h4 className="common-title-two font-20"> <Link to="/services/waxing-and-facial"> {data[3].title} </Link> </h4>
                                    <p className="common-para">{data[3].para}...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

        </>
    )
}

export default HomeServices