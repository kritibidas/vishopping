import React,{useState} from 'react'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import ProductData from './ProductData'
import {useParams, Link } from 'react-router-dom'

const Productdetails = () => {
    const [tab, setTab] = useState(0)

    const {proId} = useParams()
    const getProduct = ProductData.find((item)=>{
        return item.id === proId
    })
    
    const isActive = (ele)=>{
        if(tab === ele){
            return 'active'
        }else{
            return ''
        }
    }


  return (
    <>
        <section className="service-details-area padding-top-40 padding-bottom-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 margin-top-30">
                        <div className="service-details-wrapper">
                            <div className="service-details-inner d-flex justify-content-start">
                                <div className="my-auto mx-0 px-2">
                                    {
                                        getProduct.images.map((item,index)=>{
                                            return (
                                                <div className={`thumb_img ${isActive(index)}`} key={index}>
                                                    <img src={item} alt="" onClick={() => { setTab(index) }} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                                        
                                <div className="details-thumb">
                                    <InnerImageZoom
                                        src={getProduct.images[tab]}
                                        zoomSrc={getProduct.images[tab]}
                                        zoomType="hover"
                                        zoomPreload={true}
                                    />
                                </div> 
                            </div>
                        </div>
 
                    </div>

                    <div className="col-lg-6 margin-top-30">
                        <div className="service-details-package">
                            <div className="single-packages">
                                <ul className="package-price">
                                    <li> {getProduct.title} </li>
                                </ul>
                                <div className='ratingSection'>
                                    <div className="ratingIcon">
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <span>(23 reviews)</span>
                                    </div>
                                    <div className='inStock'>InStock</div>
                                    <div className='outOffStock'>OutStock</div>
                                </div>
                                
                                <div className='proDetailsPrice'>
                                    <span className='price'>₹{getProduct.price}</span>
                                    <span className='old-price color-4'>₹{getProduct.price}</span>
                                    <span className='priceOff color-2'>10% off</span>
                                </div>
                                <div className='proColorSection'>
                                    <h4>Color : <span>Red</span></h4>
                                    <ul>
                                        <li style={{background: 'red'}} className="active"></li>
                                        <li style={{background: 'green'}}></li>
                                        <li style={{background: 'blue'}}></li>
                                        <li style={{background: 'purple'}}></li>
                                        <li style={{background: 'orange'}}></li>
                                    </ul>
                                </div>
                                <div className='proSizeSection'>
                                    <h4>Size : <span>SM</span></h4>
                                    <ul>
                                        <li className="active">XS</li>
                                        <li>S</li>
                                        <li>M</li>
                                        <li>XL</li>
                                        <li>XXL</li>  
                                    </ul>
                                </div>

                                <div className="details-available-price margin-top-20">
                                    <p className="tilte-available"> Product Details avaliable </p>
                                    <ul className="available-list">
                                        <li> 3 Bed Room </li>
                                        <li> 2 Bath Room </li>
                                    </ul>
                                </div>
                                <div className='buttonSection'>
                                    <Link to="/cart" type="submit" className='button flex-grow-1'><i className="las la-shopping-bag"></i> Add To Cart </Link>
                                    <Link to="/" type="submit"  className='wistListbutton'><i className="las la-heart"></i> </Link>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Productdetails