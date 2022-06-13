import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <>
        <section id="header-top">
        <div className="container container-two"> 
            <div className="row">
                <div className="col-lg-3 col-md-4 text-center text-md-left d-none d-lg-block">
                    
                    <ul className="header-social d-inline-block">
                        <li><Link to='#'><i className="la la-facebook"></i></Link></li>
                        <li><Link  to='#'><i className="la la-twitter"></i></Link></li>
                        <li><Link  to='#'><i className="la la-google-plus"></i></Link></li>
                    </ul>
                    
                </div>
                <div className="col-lg-9 col-md-8 text-center text-md-right  header-top-right">
                    <ul>
                        <li className='email-link'><a href='mailto:vishairbeauty2021@yahoo.com'><i className="las la-envelope"></i><span className="__cf_email__">vishairbeauty2021@yahoo.com </span></a></li>
                        <li><a href='tel:0411871104'><i className="las la-phone"></i>0411-871-104</a></li>
                        <li><i className="las la-user"></i><Link to='/login'>Login</Link> / <Link to='/register'>Sign Up</Link></li>  
                    </ul>
                         
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Topbar