import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo2 from '../img/logo2.png'
class Header extends Component{
    tokenRemoval=()=>{
          localStorage.removeItem('token')
    } 
    render(){

        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                      <Link to="/dashboard">  <img className="logo" src={logo2} alt="Logo" /> </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to="/consult">Consult A Consultant</Link>
                            </li>
                            <li><a href="#">Buy From Us</a></li>
                            <li><Link to="/profile">Profile</Link> </li>
                            <li onClick={this.tokenRemoval}>
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