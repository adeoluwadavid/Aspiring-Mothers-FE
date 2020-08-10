import React, { Component } from 'react'
import logo from '../img/logo.png'
import {Link} from 'react-router-dom'
import Footer from './footer'
class RecoverPasswordTwo extends Component {
    render() {
        return (
            <div className="container">
               <a href="/"> 
                <div>
                  <img className="" src={logo} id="logo" alt="Logo" /> 
                </div>
                </a>
                <div className="row">
                    <div className="input-field center">
                        <input id="first_name2" type="email" className="validate" />
                        <label className="active" for="recoverPassword">New Password</label>
                    </div>
                </div>
                <div>
                    <button className="btn button waves-effect waves-light">Set New Password</button><br />
                    <div className="row">
                        <Link to="/login">
                            <button className="btn button waves-effect waves-light col s6">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn button waves-effect waves-light col s6">Register</button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default RecoverPasswordTwo