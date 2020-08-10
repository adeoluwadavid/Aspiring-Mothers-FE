import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo2 from '../img/logo2.png'
class Header extends Component{
    render(){
        return(
            <div>
                <nav>
                    <div class="nav-wrapper">
                        <img className="logo" src={logo2} alt="Logo" />
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li>
                                <Link to="/consult">Consult A Consultant</Link>
                            </li>
                            <li><a href="#">Buy From Us</a></li>
                            <li><a href="#">Profile</a></li>
                            <li>
                            <Link to="/login">Log Out</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header