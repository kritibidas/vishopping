import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
        <section className="cart-details-area padding-top-40 padding-bottom-40">
            <div className="container">
            
                <div className="row">
                    <div className="col-lg-8">
                        <table className="shop-table table-responsive">
                            <thead>
                                <tr>
                                    <th><span>Product</span></th>
                                    <th></th>
                                    <th><span>Price</span></th>
                                    <th><span>quantity</span></th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="product-thumbnail">
                                        <figure>
                                            <Link to="/">
                                                <img src="../images/p2.jpg" alt="product"/>
                                            </Link>
                                        </figure>
                                    </td>
                                    <td className="product-name">
                                        <div className="product-name-section">
                                            <Link to="/">Converse Training Shoes Converse Training Shoes</Link>
                                        </div>
                                    </td>
                                    <td className="product-subtotal">
                                        <span className="amount">$129.99</span>
                                    </td>
                                    <td className="product-quantity">
                                        <div className="input-group">
                                            <button> <i className="la la-plus"></i> </button>
                                            <div className='quantity'>1</div>
                                            <button><i className="la la-minus"></i></button>
                                        </div>
                                    </td>
                                    <td className="product-price">
                                        <span className="amount">$129.99</span>
                                    </td>
                                    <td className="product-close">
                                        <button className="product-remove" title="Remove this product">
                                            <i className="la la-close"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="product-thumbnail">
                                        <figure>
                                            <Link to="/">
                                                <img src="../images/p1.jpg" alt="product"/>
                                            </Link>
                                        </figure>
                                    </td>
                                    <td className="product-name">
                                        <div className="product-name-section">
                                            <Link to="/">Converse Training Shoes Converse Training Shoes</Link>
                                        </div>
                                    </td>
                                    <td className="product-subtotal">
                                        <span className="amount">$129.99</span>
                                    </td>
                                    <td className="product-quantity">
                                        <div className="input-group">
                                            <button> <i className="la la-plus"></i> </button>
                                            <div className='quantity'>1</div>
                                            <button><i className="la la-minus"></i></button>
                                        </div>
                                    </td>
                                    <td className="product-price">
                                        <span className="amount">$129.99</span>
                                    </td>
                                    <td className="product-close">
                                        <button className="product-remove" title="Remove this product">
                                            <i className="la la-close"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="cart-actions d-flex justify-content-between align-items-center">
                            <div className="btn-wrapper">
                                <Link  to="/" className="cmn-btn btn-bg-4 btn-icon-left" style={{lineHeight:'25px'}}><i className="la la-long-arrow-left"></i> Continue Shopping </Link>
                            </div>
                            
                            <div className="btn-wrapper">
                                <button className="cmn-btn btn-bg-1" style={{lineHeight:'25px'}}> Update Cart </button>
                            </div>
                        </div>

                        <div className="cart-coupon-box">
                            <h4 className="coupon-title">Coupon Discount</h4>
                            <input type="text" className="input-text form-control"   placeholder="Enter coupon code here..."/>
                            
                            <div className="btn-wrapper">
                                <button className="cmn-btn btn-bg-4-alt mt-4" style={{lineHeight:'25px'}}> Apply Coupon</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="cart-section">
                            <div className="single-packages">
                                <ul className="package-price">
                                    <li> CART TOTALS</li>
                                </ul>
                                <div className='subtotal'>
                                    <h4>Subtotal</h4>
                                    <h4><span>₹80</span></h4>
                                </div>
                                <div className="shipping-address">
                                    <h4>Shipping to CA.</h4>
                                    <select className="form-control my-2">
                                        <option selected>Select Country</option>
                                        <option value="ind">India</option>
                                        <option value="aus">Australia</option>
                                        <option value="jap">Japan</option>
                                    </select>
                                    <select className="form-control my-2">
                                        <option selected>Select State</option>
                                        <option value="asam">Asam</option>
                                        <option value="bengal">Bengal</option>
                                        <option value="up">UP</option>
                                    </select>
                                    <input type="text" className="form-control my-2"  placeholder="Town / City"></input>
                                    <input type="text" className="form-control my-2"  placeholder="Zip Code"></input>
                                </div>
                                <div className="btn-wrapper mt-4">
                                    <Link  to="/" className="cmn-btn btn-bg-4 btn-icon-left btn-block" style={{lineHeight:'25px'}}> Process to Checkout </Link>
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

export default Cart