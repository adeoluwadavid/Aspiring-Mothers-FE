import React, { Component } from 'react';
import Footer from './footer'
import Header from './dashboardheader'

class Profile extends Component {
    state = {
        myToken: JSON.parse(localStorage.getItem('token')),
        selectedFile : null,
        image: [],
        message:''
    }
    fileHandler =(e)=>{
        console.log(e.target.files[0])
        this.setState({
            selectedFile: e.target.files[0]
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var data = new FormData();
        data.append('file', this.state.selectedFile);

        fetch("http://localhost:8088/authe/upload/" + parseInt(this.state.myToken.id), {  
             method: 'PUT',
            body: data
        })
            .then((res) => res.json())
            .then(data => console.log(data))
        this.setState({
            message: 'Image Uploaded, Please Refresh'
        })
    }

    componentDidMount(){
        fetch('http://localhost:8088/authe/download/'+ parseInt(this.state.myToken.id))
        .then(res => res.json())
        .then(data =>{ 
            if(data){
            this.setState({
                image: data
            })
        }
        })
    }

    render() {
        const myImage = this.state.image;
        console.log(myImage)
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <br />
                    <div  className="center">
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
                <Footer />
            </div>
        )
    }
}
export default Profile;