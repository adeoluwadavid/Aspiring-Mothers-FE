import React, { Component } from 'react';
import Footer from './footer'
import Header from './dashboardheader'

class Profile extends Component {
    state = {
        myToken: JSON.parse(localStorage.getItem('token')),
        selectedFile: null,
        image: [],
        message: '',
      //  currentPassword:'',
        newPassword:'',
        passwordMessage:''
    }
    fileHandler = (e) => {
       // console.log(e.target.files[0])
        this.setState({
            selectedFile: e.target.files[0]
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var data = new FormData();
        data.append('file', this.state.selectedFile);

        fetch("https://my-java-backend.herokuapp.com/authe/upload/" + parseInt(this.state.myToken.id), {
            method: 'PUT',
            body: data
        })
            .then((res) => res.json())
            .then(data => data)
        this.setState({
            message: 'Image Uploaded, Please Refresh in 30s'
        })
    }

    //Password Reset
    // change1=(e)=>{
    //     this.setState({
    //         currentPassword: e.target.value
    //     })
    //     console.log(e.target.value)
    // }
    change2=(e)=>{
        this.setState({
            newPassword: e.target.value
        })
      //  console.log(e.target.value)
    }

    updatePassword=(e)=>{
        e.preventDefault();
        const user ={
           // currentPassword: this.state.currentPassword,
            newPassword: this.state.newPassword
        }

        fetch('https://my-java-backend.herokuapp.com/authe/updatePassword/' + parseInt(this.state.myToken.id),{
            method:'PUT',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user) 
        })
        .then(res => res.text())
        .then(data => data)

        this.setState({
        //    currentPassword: '',
            newPassword: '',
            passwordMessage: 'Your Password Has Been Reset Successfully'
        })
    }
    componentDidMount() {
        fetch('https://my-java-backend.herokuapp.com/authe/download/' + parseInt(this.state.myToken.id))
            .then(res => res.json())
            .then(data => {
                if (data) {
                    this.setState({
                        image: data
                    })
                }
            })
    }

    render() {
        const myImage = this.state.image;
       // console.log(myImage)
        return (
            
            <div className="container p1">
                <Header />
                <div className="row p2">
                    <div className="col l6">
                        <br />
                        <div className="center">
                            <img className="logo circle" src={myImage.imageUrl} alt="Logo" />
                        </div>
                        <div className="col s12 center" >
                            <div className="row">
                                <div className="input-field">
                                    <input type="file" name="file" onChange={this.fileHandler} />
                                </div>
                                <div>
                                    <button onClick={this.handleSubmit} className="btn">Upload</button>
                                </div>
                                <div className="center orange-text">{this.state.message}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col l6">
                        <form className="col s12 center" onSubmit={this.updatePassword}>
                            {/* <div className="input-field">
                                <label>Current Password:</label>
                                <input type="text" value={this.state.currentPassword} onChange={this.change1} required/>
                            </div> */}
                            <h5>Feeling like updating your Password?</h5>
                            <div className="input-field">
                                <label>New Password:</label>
                                <input type="text" value={this.state.newPassword} onChange={this.change2}  required/>
                            </div>
                            <div>{this.state.passwordMessage}</div>
                            <div>
                                <button className="btn">Change Password</button>
                            </div>
                        </form>
                    </div>
                </div>
                 <Footer />
            </div>
           
            
        )
    }
}
export default Profile;