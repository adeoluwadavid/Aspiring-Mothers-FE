import React, { Component } from 'react'
import Header from './dashboardheader'
import Footer from './footer'
class Consultation extends Component {

    state = {
        complain: '',
        date: '',
        myToken : JSON.parse(localStorage.getItem('token')),
        message: ''
    }
    change1 = (e) => {
        this.setState({
            complain: e.target.value
        })
        
    }
    change2 = (e) => {
        this.setState({
            date: e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const user ={
            complain : this.state.complain,
            date: this.state.date,
            user_id: parseInt(this.state.myToken.id)
        }
        console.log(user)
        fetch('https://my-java-backend.herokuapp.com/authe/complain/' + parseInt(this.state.myToken.id),{
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>console.log(data))
        .catch(err => console.log(err))

        this.setState({
            message: 'Your complain has been Received',
            complain:'',
            date:''
        })


    }
    render() {
        return (
            <div className="container">
                <Header />
                <div>
                    <div className="row">
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea" value={this.state.complain} onChange={this.change1} required></textarea>
                                    <label htmlFor="textarea1">Complaint</label>
                                </div>
                            </div>
                            <div>
                                <input type="date" placeholder="Date" value={this.state.date} onChange={this.change2} required />
                            </div>
                            <div id="consult">
                            <div className="center orange-text">{this.state.message}</div>
                                <button className="btn button waves-effect waves-light" type="submit" name="action">Consult
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>


                </div>
                <Footer />
            </div>
        )
    }
}
export default Consultation