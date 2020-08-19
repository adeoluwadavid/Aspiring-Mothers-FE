import React, { Component } from 'react'
import Footer from './footer'
import Header from './dashboardheader'

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <div className="row">
                        <article className="col l6">
                            <h5> Feed your pregnant body wisely</h5>
                            <p>
                                Pregnancy is not supposed to be a nine-and-a-half-month ticket to the buffet — nor is it supposed to be a nine-and-a-half-month exercise in self-denial (although those long lists of foods and drinks to avoid might leave you with the opposite impression).
                                During pregnancy, certain food rules apply because of the health and safety of the developing baby.
                                “These (foods) aren’t restricted because they are universally `bad’ foods — it’s because, during pregnancy, you’ve got more at stake. When you’re not pregnant and your health is good,
                                you might decide that runny yolks and swordfish (which could be contaminated with mercury) are worth the risk. It’s a lot easier to deal with food restrictions in a healthy way when you know they are only temporary and don’t say anything about the moral value of those foods.”
                            </p>
                        </article>
                        <article className="col l6">
                            <h5>First Trimester Stage</h5>
                            <div>
                                Hormonal changes will affect almost every organ in the body. Some signs of early pregnancy in many women include symptoms like:
                                <ol>
                                    <li>Extreme fatigue</li>
                                    <li>Tender, swollen breasts. Nipples may protrude.</li>
                                    <li> Nausea with or without throwing up (morning sickness)</li>
                                    <li>Cravings or aversion to certain foods</li>
                                    <li>Mood swings</li>
                                    <li>Constipation</li>
                                    <li>Frequent urination</li>
                                    <li>Headache</li>
                                    <li>Heartburn</li>
                                    <li>Weight gain or loss</li>
                                </ol>
                            </div>
                        </article>
                    </div>
                    <div className="row">
                        <article className="col l6">
                            <h5>
                                Second Trimester: Physical and Emotional Changes in a Woman
                        </h5>
                            <div>
                                Some changes you may notice in your body in the second trimester include:
                        <ol>
                                    <li>Back, abdomen, groin, or thigh aches and pains</li>
                                    <li>Stretch marks on your abdomen, breasts, thighs, or buttocks</li>
                                    <li>Darkening of the skin around your nipples</li>
                                    <li>A line on the skin running from belly button to pubic hairline (linea nigra)</li>
                                    <li>
                                        Patches of darker skin, usually over the cheeks, forehead, nose, or upper lip.
                                        This is sometimes called the mask of pregnancy (melasma, or Chloasma facies).
                            </li>
                                    <li>Numb or tingling hands (carpal tunnel syndrome)</li>
                                    <li>
                                        Itching on the abdomen, palms, and soles of the feet.
                                        (Call your doctor if you have nausea, loss of appetite, vomiting, yellowing of skin, or fatigue combined with itching.
                                        These can be signs of a liver problem.)
                            </li>
                                   
                                </ol>
                            </div>
                        </article>
                        <article className="col l6">
                            <h5>Third Trimester: Emotional and Physical Changes a Woman May Experience</h5>
                            <div>
                                In the third and final trimester you will notice more physical changes, including:
                        <ul>
                                    <li>Swelling of the ankles, fingers, and face.
                                    (If you notice any sudden or extreme swelling or if you gain a lot of weight really quickly, call your doctor right away.
                                    This could be a sign of a serious condition called preeclampsia.)
                            </li>
                                    <li>Hemorrhoids</li>
                                    <li>Tender breasts, which may leak a watery pre-milk called colostrum</li>
                                    <li>Your belly button may protrude</li>
                                    <li>The baby "dropping," or moving lower in your abdomen</li>
                                    <li>Contractions, which can be a sign of real or false labor</li>
                                    <li>Other symptoms you may notice in the third trimester include shortness of breath, heartburn, and difficulty sleeping</li>
                                </ul>
                            </div>
                        </article>
                    </div>


                </div>
                <Footer />
            </div>
        )
    }
}
export default Dashboard