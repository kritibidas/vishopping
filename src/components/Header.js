import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'


const Header = () => {
    const location = useLocation();

    const isActive = (link) => {
        if (link === location.pathname) {
            return "current-menu-item"
        } else {
            return ""
        }
    }
    return (
        <>
            <header className="header-style-01">
                <nav className="navbar navbar-area navbar-two navbar-expand-lg navbar-bg-1">
                    <div className="container container-two nav-container">
                        
                            <div className="responsive-mobile-menu d-flex">
                                <div className="logo-wrapper">
                                    <Link className="logo" to="/">
                                        <img src="../images/logo.png" alt="Vi's Hair & Beauty" title="Vi's Hair & Beauty" />
                                    </Link>
                                </div>
                                {/* <Link to="#!" className="click_show_icon">
                                    <i className="las la-ellipsis-v"></i>
                                </Link> */}


                                <button className="navbar-toggler black-color" type="button" data-toggle="collapse" data-target="#bizcoxx_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className='d-flex justify-content-center align-items-center cart-sec'>
                                    <div className='cart-icon'>
                                        <i className="las la-shopping-basket"></i>
                                        <span className="cart-number"> 5 </span>
                                        <div className="cart-dropdown-wrap">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                    <Link to="/"><img alt="Nest" src="../images/p2.jpg"/></Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4 className='ellip'><Link to="/">Daisy Casual BagDaisy Casual Bag</Link></h4>
                                                        <h4><span>1 × ₹800.00</span></h4>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link to="/"><i className="las la-trash"></i></Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link to="/"><img alt="Nest" src="../images/p1.jpg"/></Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                    <h4 className='ellip'><Link to="/">Daisy Casual BagDaisy Casual Bag</Link></h4>
                                                        <h4><span>1 × ₹800.00</span></h4>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link to="/"><i className="las la-trash"></i></Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className='shopping-cart-total d-flex justify-content-between'>
                                                <h4>Total</h4>
                                                <span>₹300</span>
                                            </div>
                                            <div className='shopping-cart-button'>
                                                {/* <button>View cart</button>
                                                <button>Checkout</button> */}
                                                <Link to='/cart' className="checkout-all"> View cart </Link>
                                                <button className="clearall"> Checkout </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className='userbar'>
                                        <div className='user-avater'>
                                            <img src="../images/p1.jpg" alt="" />
                                        </div>
                                        <div className='user-avater-name'>
                                            Name
                                        </div>
                                    </div>
                                    
                                    
                                </div>

                            </div>

                            <div className="collapse navbar-collapse" id="bizcoxx_main_menu">
                                <ul className="navbar-nav">
                                    <li className={`${isActive("/")}`}><NavLink to="/">  Home</NavLink> </li>

                                    <li className={`${isActive("/aboutus")}`}><NavLink to="/aboutus">About Us</NavLink></li>
                                    <li className="menu-item-has-children">
                                        <NavLink to="#">Services</NavLink>
                                        <ul className="sub-menu">
                                            <li><Link to="/services/eyelash-extension">Eyelash Extension</Link></li>
                                            <li><Link to="/services/haircut">Hair Cut</Link></li>
                                            <li><Link to="/services/pedicure-and-manicure-and-sns">Pedicure/Manicure & SNS</Link></li>
                                            <li><Link to="/services/waxing-and-facial">Waxing / Facial</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`${isActive("/pricing")}`}><NavLink to="/pricing">Pricing</NavLink></li>
                                    <li className={`${isActive("/gallery")}`}><NavLink to="/gallery">Gallery</NavLink></li>
                                    <li className={`${isActive("/contactus")}`}><NavLink to="/contactus">Contact Us</NavLink></li>
                                </ul>
                            </div>
                            
                        
   

                        
                        {/* <div className="nav-right-content">
                            <div className="info-bar-item">
                                <div className="notification-icon icon">
                                    <a className="single-icon" href="#"> <i className="las la-shopping-basket"></i> </a>
                                    <span className="notification-number"> 5 </span>
                                    <div className="notification-list-wrapper">
                                        <ul className="notification-list">
                                            <li className="list">
                                                <div className="notification-list-flex">
                                                    <div className="pro-item">
                                                        <img src="../images/p1.jpg" alt="" />
                                                    </div>
                                                    <div className="notification-contents">
                                                        <a className="list-title" href=""> Notification One Noti fication </a>
                                                        <span className="list-sub"> 1 X 10 = $10 </span>
                                                    </div>
                                                    <div className="delete">
                                                        <i className="las la-trash"></i>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                        <div className="btn-wrapper mt-4 d-flex justify-content-between">
                                            <button className="checkout-all block"> Checkout </button>
                                            <button className="clearall block"> Clear all </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="info-bar-item-two">
                                <div className="author-thumb">
                                    <img src="../images/author-nav.jpg" alt="" />
                                </div>
                                <div className="author-nav-content">
                                    <span className="title"> Username </span>
                                </div>
                            </div>
                        </div> */}




                    </div>

                </nav>
            </header>
            <div className="overlays"></div>

        </>
    )
}

export default Header