import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
import Footer from './footer'
class RecoverPasswordOne extends Component {
    state={
            email: '',
            message: 'Please Enter a Correct Mail'
    }
    handleChange=(e)=>{
        this.setState({
            email : e.target.value
        })
      //  console.log(e.target.value);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const user ={
            email: this.state.email
        }
        fetch('https://my-java-backend.herokuapp.com/authe/setPassword', {
            method:'POST',
            headers:{
                'Acccept': 'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.text())
        .then(data =>data)

        this.setState({
            email: '',
            message:'Your Password Has Been Reset and Mail Sent!'
        })
    }
    render() {
        
        return (
            <div className="rp">
            <div className="container rp1">
                <a href="/"> 
                <div>
                  <img className="" src={logo} id="logo" alt="Logo" /> 
                </div>
                </a>
                <form  className="col s12 rform" onSubmit={this.handleSubmit}>
                    <div className="input-field center formwidth">
                        <input id="first_name2" type="email" className="validate" value={this.state.email} onChange={this.handleChange} required/>
                        <label className="active" htmlFor="recoverPassword">Your Email</label>
                    </div>
                    <div className="center red-text">{this.state.message}</div>
                    <button className="btn button waves-effect waves-light">Recover Password</button><br />
                
                </form>
               
                    <div className="rpdisplay">
                        <Link to="/login">
                            <button className="btn button waves-effect waves-light col s6 rpbutton">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn button waves-effect waves-light col s6 rpbutton">Register</button>
                        </Link>
                    </div>
            </div>
            <Footer />
            </div>
        )
    }
}
export default RecoverPasswordOne