import React, { Component } from 'react'
import { Link , withRouter } from 'react-router-dom'
import logo from '../img/logo.png'
import Footer from './footer'


class Login extends Component {
    state = {
        email: '',
        password: '',
        message: ''
    }
    change1 = (e) => {
        this.setState({
            email: e.target.value
        })
        console.log(e.target.value)
    }
    change2 = (e) => {
        this.setState({
            password: e.target.value
        })
        console.log(e.target.value)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        const {history} = this.props
        const user = {
            email: this.state.email,
            password: this.state.password,
        }

        fetch('https://my-java-backend.herokuapp.com/authe/signin', {
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
                if (data.accessToken && history) {
                    localStorage.setItem('token', JSON.stringify(data))
                    history.push("/dashboard")
                } 
               else if(data.message){
                    this.setState({
                        message: data.message
                    })
                }
            }
        )

    }
    render() {
      //  const {history} = this.props
        return (
            <div className="container">
                <a href="/">
                    <div>
                        <img className="" src={logo} id="logo" alt="Logo" />
                    </div>
                </a>
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field">
                                <i className="material-icons prefix">email</i>
                                <input id="icon_prefix" value={this.state.email} type="email" onChange={this.change1} required/>
                                <label htmlFor="icon_prefix">Email</label>
                            </div>
                            <div className="input-field">
                                <i className="material-icons prefix">lock</i>
                                <input id="icon_prefix" value={this.state.password} type="password" onChange={this.change2} required/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                            <div className="center red-text">{this.state.message}</div>
                        <div>
                            <button type="submit" className="btn button waves-effect waves-light">Login</button><br />
                        </div>
                    </form>
                    <div className="row">
                        <Link to="/register">
                            <button className="btn button waves-effect waves-light col s6">Register</button>
                        </Link>
                        <Link to="/recoverpasswordone">
                            <button className="btn button waves-effect waves-light col s6">Forgot Password?</button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default withRouter(Login);