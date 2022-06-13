import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import ProductData from './ProductData';

const HomeProduct1 = () => {
    const slider = useRef(null);
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 868,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="services-area padding-bottom-40">
                <div className="container container-two">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-two">
                                <h3 className="title"> Featured Product </h3>
                                <div className='pl-4'>
                                    <Link to="/" className="section-btn pr-4"> Explore All </Link>
                                    <button className='cmn-btn btn-bg-1' onClick={() => slider.current.slickPrev()}><i className="las la-angle-left"></i></button>
                                    <button className='cmn-btn btn-bg-1' onClick={() => slider.current.slickNext()}><i className="las la-angle-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <Slider ref={slider}  {...settings}>

                            {
                                ProductData.map((item, index) => {
                                    return (
                                        <div className="item" key={index}>
                                            <div className="margin-top-30  mx-2">
                                                <div className="single-service service-two style-03 service-padding section-bg-2">
                                                    <Link to={`product/${item.id}`} className="service-thumb">
                                                        <img src={item.images[0]} alt={item.title}/>
                                                        <div className="award-icons style-02">
                                                            <i className="las la-award"></i>
                                                        </div>
                                                    </Link>
                                                    <div className="services-contents content-padding-reverse">
                                                        <h4 className="productTitle pt-2">
                                                            <Link to={`product/${item.id}`} > {item.title} </Link>
                                                        </h4>
                                                        <ul className="author-tag">
                                                            <li className="tag-list">
                                                                <div className="service-price style-02">
                                                                    <span className="prices style-02 color-1"> ₹{item.price}.00 </span>
                                                                    <span className="oldPrices style-02 color-4">₹80.00 </span>
                                                                    <span className="priceoff style-02 color-2">20% off </span>
                                                                </div>
                                                            </li>
                                                            <li className="tag-list">
                                                                <span className="icon">
                                                                    <i className="las la-star"></i>
                                                                    <i className="las la-star"></i>
                                                                    <i className="las la-star"></i>
                                                                    <i className="las la-star"></i>
                                                                    <i className="las la-star"></i>
                                                                </span>
                                                            </li>
                                                        </ul>

                                                        <div className="service-price-wrapper mt-4">
                                                            <div className="btn-wrapper">
                                                                <Link to="/" className="cmn-btn btn-outline-light btn-small py-0">
                                                                    <i className="las la-shopping-bag"></i>  Add to Cart
                                                                </Link>
                                                            </div>
                                                            <div className="service-price style-02">
                                                                <span className="prices color-4"> <i className="las la-heart"></i> </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeProduct1