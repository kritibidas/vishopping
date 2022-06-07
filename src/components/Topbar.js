import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <>
        <section id="header-top">
        <div className="container container-two"> 
            <div className="row">
                <div className="col-lg-6 col-md-6 text-center text-md-left d-none d-lg-block">
                    <p><i className="las la-clock"></i>Monday - Saturday: 9am - 7pm, Sunday:  11am- 5 pm</p>
                    <ul className="header-social d-inline-block">
                        <li><Link to='#'><i className="la la-facebook"></i></Link></li>
                        <li><Link  to='#'><i className="la la-twitter"></i></Link></li>
                        <li><Link  to='#'><i className="la la-google-plus"></i></Link></li>
                    </ul>
                    
                </div>
                <div className="col-lg-6 text-right   header-top-right">
                    <ul>
                        <li><Link to='mailto:vishairbeauty2021@yahoo.com'><i className="las la-envelope"></i><span className="__cf_email__">vishairbeauty2021@yahoo.com </span></Link></li>
                        <li><Link to='tel:0411871104'><i className="las la-phone"></i>0411-871-104</Link></li>
                        <li><i className="las la-user"></i><Link to='/'>Login</Link> / <Link to='/'>Register</Link></li>  
                    </ul>
                         
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Topbar