import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
import Footer from './footer'

class Login extends Component {
    render() {
        return (
            <div className="container">
                <a href="/"> 
                <div>
                  <img className="" src={logo} id="logo" alt="Logo" /> 
                </div>
                </a>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field">
                                <i className="material-icons prefix">email</i>
                                <input id="icon_prefix" type="email" />
                                <label for="icon_prefix">Email</label>
                            </div>
                            <div className="input-field">
                             <i class="material-icons prefix">lock</i>
                                <input id="icon_prefix" type="password"  />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div>
                            <button className="btn button waves-effect waves-light">Login</button><br/>
                            <div className="row">
                                <Link to="/register">
                                   <button className="btn button waves-effect waves-light col s6">Register</button> 
                                </Link>
                                <Link to="/recoverpasswordone">
                                     <button className="btn button waves-effect waves-light col s6">Forgot Password?</button>
                                </Link>
                            </div> 
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Login;