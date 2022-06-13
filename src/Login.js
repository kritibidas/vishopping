import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className="signup-area padding-top-100 padding-bottom-100">
            <div className="container">
                <div className="signup-wrapper">
                    <div className="signup-contents">
                        <h3 className="signup-title"> User Login </h3>
                        <form className="signup-forms">
                            <div className="single-signup margin-top-30">
                                <label className="signup-label" id='name'> User Name* </label>
                                <input className="form--control" type="text" name="name" placeholder="Type Name" htmlFor="name"/>
                            </div>
                            <div className="single-signup margin-top-30">
                                <label className="signup-label" id='password'> Password* </label>
                                <input className="form--control" type="password" name="Password" htmlFor="password" placeholder="Type Password"/>
                            </div>
                            <div className="signup-checkbox">
                                <div className="checkbox-inlines">
                                    <input className="check-input" type="checkbox" id="check8"/>
                                    <label className="checkbox-label" htmlFor="check8"> Remember me </label>
                                </div>
                                <div className="forgot-btn">
                                    <Link to="/" className="forgot-pass"> Forgot Password </Link>
                                </div>
                            </div>
                            <button type="submit"> Login Now </button>
                            <span className="bottom-register"> Don't have Account? <Link className="resgister-link" to="/register"> Register Now</Link> </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login