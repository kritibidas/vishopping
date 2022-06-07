import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className="error-area padding-top-20 padding-bottom-20">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="error-wrapper">
                        <div className="thumb">
                            <img src="../images/404.png" alt=""/>
                        </div>
                        <div className="contents margin-top-60">
                            <h2 className="title"> Page Not Found </h2>
                            <div className="btn-wrapper margin-top-50">
                                <Link to="/" className="cmn-btn btn-bg-1"> Back To Home </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Error