import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer'
import logo from '../img/logo.png'

class Register extends Component {
    state = {

        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        message: ''
    }
    change1 = (e) => {
        this.setState({
            firstName: e.target.value
        })
        console.log(e.target.value)
    }
    change2 = (e) => {
        this.setState({
            lastName: e.target.value
        })
        console.log(e.target.value)
    }
    change3 = (e) => {
        this.setState({
            email: e.target.value
        })
        console.log(e.target.value)
    }
    change4 = (e) => {
        this.setState({
            password: e.target.value
        })
        console.log(e.target.value)
    }
    change5 = (e) => {
        this.setState({
            address: e.target.value
        })
        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address
        }

        fetch('https://my-java-backend.herokuapp.com/authe/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.message) {
                    this.setState({
                        message: data.message
                    })
                }
            }
         )
    }
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
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="firstName" type="text" value={this.state.firstName} className="validate" onChange={this.change1} required />
                                    <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="lastName" type="text" value={this.state.lastName} className="validate" onChange={this.change2} required />
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" value={this.state.email} className="validate" onChange={this.change3} required />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" value={this.state.password} className="validate" onChange={this.change4} required />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="address" type="text" value={this.state.address} className="validate" onChange={this.change5} required />
                                    <label htmlFor="Address">Address</label>
                                </div>
                            </div>
                            <div className="center orange-text">{this.state.message}</div>
                            
                            <div>
                                <button className="btn button waves-effect waves-light">Register</button><br />
                            </div>
                        </form>
                        <div className="row">
                            <Link to="/login">
                                <button className="btn button waves-effect waves-light col s6">Login</button>
                            </Link>
                            <Link to="/recoverpasswordone">
                                <button className="btn button waves-effect waves-light col s6">Forgot Password?</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Register
