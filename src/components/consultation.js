import React, { Component } from 'react'
import Header from './dashboarheader'
import Footer from './footer'
class Consultation extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                                    <label for="textarea1">Complaint</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <input type="text" placeholder="Date" class="datepicker"></input>
                    </div>
                    <div id="consult">
                        <button className="btn button waves-effect waves-light" type="submit" name="action">Consult
                        <i className="material-icons right">send</i>
                        </button>
                    </div>
                    
                </div>
                <Footer />
            </div>
        )
    }
}
export default Consultation