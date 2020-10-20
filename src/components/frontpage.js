import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import Footer from './footer'
import preg1 from '../img/preg1.jpg'
import preg2 from '../img/preg2.jpg'
import preg4 from '../img/preg4.jpg'
class FrontPage extends Component {
    render() {
        return (
            <div className='relative'>
            <div className="container fborder">
                <a href="/"> 
                <div>
                  <img className="" src={logo} id="logo" alt="Logo" /> 
                </div>
                </a>
                <div className="carousel carousel-slider">
                    <a className="carousel-item" id="img" href="#one"><img src={preg1} alt="preg1" /></a>
                    <a className="carousel-item" id="img" href="#two"><img src={preg2} alt="preg2" /></a>
                    <a className="carousel-item" id="img" href="#three"><img src={preg4} alt="preg3" /></a>
                </div>

                <div className="row">
                    <article className="col l6">
                        <h4>Prenatal Health Care</h4>
                        <div>
                            Key to protecting the health of your child is to get regular prenatal care. If you think you're pregnant, call your health care provider to schedule your first prenatal appointment. Many health care providers, though, won't schedule the first visit before 8 weeks of pregnancy, unless there is a problem.
                            If you're healthy and there are no complicating risk factors, most health care providers will want to see you:
                            <ol>
                                <li>every 4 weeks until the 28th week of pregnancy</li>
                                <li>then every 2 weeks until 36 weeks</li>
                                <li>then once a week until delivery</li>
                            </ol>
                            Throughout your pregnancy, your health care provider will check your weight and blood pressure while also checking the growth and development of your baby (by doing things like feeling your abdomen, listening for the fetal heartbeat starting during the second trimester, and measuring your belly). During the span of your pregnancy, you'll also have prenatal tests, including blood, urine, and cervical tests, and probably at least one ultrasound.
                        </div>
                    </article>
                    <article className="col l6">
                        <h4>Nutrition and Supplements</h4>
                        <div>
                            Now that you're eating for two (or more!), this is not the time to cut calories or go on a diet. In fact, it's just the opposite — you need about 300 extra calories a day, especially later in your pregnancy when your baby grows quickly. If you're very thin, very active, or carrying multiples, you'll need even more. But if you're overweight, your health care provider may advise you to consume fewer extra calories.
                            Healthy eating is always important, but especially when you're pregnant. So, make sure your calories come from nutritious foods that will contribute to your baby's growth and development.
                            Try to maintain a well-balanced diet that incorporates the dietary guidelines including:

                            <ol>
                                <li>lean meats</li>
                                <li>fruits</li>
                                <li>vegetables</li>
                                <li>whole-grain breads</li>
                                <li>low-fat dairy products</li>
                            </ol>
                        </div>
                    </article>
                </div>
                <div id="button-margin">
                    <Link to="/login">
                        <button className="btn button waves-effect waves-light" type="submit" name="action">
                            Find Out More
                    <i className="material-icons right">send</i>
                        </button>
                    </Link>
                </div> 
                
            </div>
            <div>
            <Footer />
            </div>
        </div>
        )
    }
}
export default FrontPage