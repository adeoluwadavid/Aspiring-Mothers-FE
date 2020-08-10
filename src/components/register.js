import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer'
import logo from '../img/logo.png'

class Register extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <a href="/">
                        <div>
                            <img className="" src={logo} id="logo" alt="Logo" />
                        </div>
                    </a>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="first_name" type="text" className="validate" />
                                    <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate" />
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate" />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="address" type="text" className="validate" />
                                    <label htmlFor="Address">Address</label>
                                </div>
                            </div>
                            <div>
                                <button className="btn button waves-effect waves-light">Register</button><br />
                                <div className="row">
                                    <Link to="/login">
                                        <button className="btn button waves-effect waves-light col s6">Login</button>
                                    </Link>
                                    <Link to="/recoverpasswordone">
                                        <button className="btn button waves-effect waves-light col s6">Forgot Password?</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Register