

import React from "react";
import Navmenu from "../components/Navmenu";
import Herosec from "../components/Herosec";
import Whatclient from "../components/Whatclient";
import Contactus from "../components/Contactus";
import Viewteam from "../components/Viewteam";
import Footer from "../components/Footer";





const Publicreaction = () => {
  return (
    <>
      <Navmenu />
      <Herosec
        bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), 
         url(/images/publicreactions.png)"
        Heading="Public Relations"
        para="Hello, as I am sure you are aware, communication is key. Startups and Established Businesses need to master how they communicate."
        secondPara="See below how we can help."
      />

      <section className="specializations d-flex align-items-center">
        <div className="container">
          <h1 className="speciH1">Talking Points</h1>
          <p className="soeciPara">
          Developing a strong company voice helps easily brand and develop personailty with your customers.
          </p>

          <div className="row g-0">
            <div className="col-12 col-md-4 col-lg-4">
              <button className="specibtn selectedstate">
              Communication Development
              </button>
              <button className="specibtn">Relationship Management</button>
              <button className="specibtn">Communication Strategy</button>
              <button className="specibtn">Contingency Planning</button>
              <button className="specibtn">Relationship Building</button>
              <button className="specibtn">Experiential Design</button>

              <div className="d-flex justify-content-center mt-lg-5">
                <button className="normalbtnSpeci">Work  us -{">"}</button>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-8 ">
              <div className=" colorfulbox">
                <div className="colorfullborder">
                  <img
                    src="./images/colorfullborder.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>

                <div className="pinkGradiantbox d-flex align-items-center justify-content-center">
                
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 col-md-6 col-lg-6">
              <button className="seeHumanleft">
                {" "}
                {"<"}- See Market Research
              </button>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <button className="seeHumanRight">
              See Audits + Evaluationss -{">"}
              </button>
            </div>
          </div>
        </div>
      </section>
    
      <Whatclient />
      <section className="howWe d-flex align-items-center">
        <div className="container">
          <h1 className="howeH1">How we’ll collaborate.</h1>
          <div className="row mt-lg-5">
            <div className="col-12 col-lg-6 col-md-6">
              <h1 className="olHeading">1. Humanism first and formost.</h1>
              <p className="howepara">
                We take a human centered approach to every touchpoint and
                interaction. Everything we do is based on people and we make the
                effort to understand your needs.
              </p>
              <h1 className="olHeading mt-lg-5">3. Integrated teammates..</h1>
              <p className="howepara">
                We are not just here to have you sign funds over and wait 6
                months for your shiny new campaign or business. We want to
                genuinely work and build with you on your greatness..
              </p>
            </div>

            <div className="col-12 col-lg-6 col-md-6">
              <h1 className="olHeading">2. Greatness focused.</h1>
              <p className="howepara">
                We focus on great people and great ideas because we believe the
                truth behind success is above the glass ceiling of “good” and
                it’s about breaking through to great.
              </p>
              <h1 className="olHeading mt-lg-5">4. Fuild Pricing.</h1>
              <p className="howepara">
                Easy peazy pricing models that fit any budget, project and
                timeline. Our picing models allow for powerful focus into key
                areas of your business.
              </p>
            </div>
          </div>

          <div className="container d-flex justify-content-end ">
            <div className="boxParent">
              <div className="servicesBox1">
                <div className="inner">
                  <h1 className="serviceinerH1">
                    Hourly <br /> Rate
                  </h1>
                </div>
              </div>
              <div className="servicesBox2">
                <div className="inner">
                  <h1 className="serviceinerH1">
                  Fixed <br /> Project <br /> Rate
                  </h1>
                </div>
              </div>
              <div className="servicesBox3">
                <div className="inner">
                  <h1 className="serviceinerH1">
                  Upside <br /> Potential 
                  </h1>
                </div>
              </div>
             
            
              <button className="btnServiceInner">
             Work with us -{">"}
             </button>
            </div>
          
          </div>
        </div>
      </section>
    
    <Contactus/>
    <Viewteam
        bg="url(/images/blue.png)"
        bg2="url(/images/yellow.png)"
        head1="VIEW WORK"
        head2="VIEW TEAM"
      />

      <Footer />
    
    </>
  );
};

export default Publicreaction;
