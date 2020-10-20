import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../img/logo2.png'

class Header extends Component {
    tokenRemoval = () => {
        localStorage.removeItem('token')
    }

    render() {

        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="/dashboard">  <img className="brand-logo logo" src={logo2} alt="Logo" /> </a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li> <Link to="/consult">Consult A Consultant</Link></li>
                            <li><a href="#">Buy From Us</a></li>
                            <li><Link to="/profile">Profile</Link> </li>
                            
                            <li onClick={this.tokenRemoval}> <Link to="/login">Log Out</Link> </li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li> <a href="/consult">Consult A Consultant</a></li>
                    <li><a href="#">Buy From Us</a></li>
                    <li><a href="/profile">Profile</a> </li>
                    <li onClick={this.tokenRemoval}> <a href="/login">Log Out</a> </li>
                </ul>
            </div>
        )
    }
}
export default Header