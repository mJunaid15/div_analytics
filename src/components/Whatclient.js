import React from 'react';
import Slider from '../components/Slider';


const Whatclient = () => {
    return (
        <>
        <section className="whatclientSec">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4">
                        <h1 className="whatClienthead">What clients have to say about the team</h1>
                    </div>
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className=" colorfulbox">
                         
                            <div className="colorfullborder">
                               
                                <img src="./images/colorfullborder.png" alt="img" className="img-fluid" />

                            </div>

                            <div className="pinkGradiantbox">
                                <Slider
                                img="./images/trianglecolorbox.png"
                                alphaPara="Alpha Technologies"
                                heading=" “We partnered with Dive Analytics to transform our branding from
                                what it was during our first few months as a company, to what it
                                is today (Seed to Series A). They were able to articulate our
                                brand requirements into a perfect vision.”"
                                para="Jared Schwitzke, Product Manager  |  Read Case Study"
                                count="01  /  06"
                                count2="02  /  06"
                                count3="03  /  06"
                                />


                            </div>
                       


                        </div>
                    </div>
                </div>


            </div>

        </section>
            
        </>
    )
}

export default Whatclient
