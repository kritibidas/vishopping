import React from 'react'
import { Link } from 'react-router-dom'

const Burcum = ({title}) => {
    return (
        <>
            <div className="banner-inner-area section-bg-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-inner-contents">
                                <ul className="inner-menu">
                                    <li className="list"><Link to="/"> Home </Link></li>
                                    <li className="list"> {title} </li>
                                </ul>
                                <h2 className="banner-inner-title"> {title} </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Burcum