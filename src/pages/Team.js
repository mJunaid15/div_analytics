import React from "react";
import Navmenu from "../components/Navmenu";
import Herosec from "../components/Herosec";
import Footer from "../components/Footer";
import Whatclient from "../components/Whatclient";
import Contactus from "../components/Contactus";
import Viewteam from "../components/Viewteam";

const Team = () => {
  return (
    <>
      <Navmenu />

      <section className="heroSectionTeam d-flex align-items-center">
        <div className="container">
          <div className="hero_content paddtop">
            <h1 className="heroHeading  ">
              Dive Analytics is dedicated to
              <br />
              <span>greatness.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="weAreFluid  d-flex align-items-center">
        <div className="container">
          <h1 className="weAreFluidH1">
            We are fueled by truly exceptional <span>ideas</span> and{" "}
            <span> people. </span> We believe we can truly help{" "}
            <span>develop</span> the next <span>great idea</span> that can go on
            to be the next
            <span>great business</span> of it’s <span>industry. </span>
          </h1>
        </div>
      </section>

      <section className="thestartofUs  d-flex align-items-center">
        <div className="container">
          <h1 className="weareH1">The Start Of Us</h1>

          <p className="wearepara">
            It all started when Andreas Papaioannou, Alejandro Chavarria, and
            Taniya Verma all met each other. Through a series of real-life
            situations, they realized they could work together on a shared
            vision and started Dive Analytics as a way to live their purpose and
            realize their goals.
            <br />
            
            THERE...THE END.
            <br />
            <small>
            If you want to know the big story, ask us in person.
            </small>
           
          </p>
        </div>
      </section>

      <section className="excutiveTeam  d-flex align-items-center">
        <div className="container">
          <h1 className="exuH1">Executive Team</h1>
          <div className="row">
              <div className="col-12 col-md-5 col-lg-4">
                  <div className="row">
                      <div className="col-12 col-md-8 col-lg-8 ">
                          <img src="./images/profile.png" alt="img" className="img-fluid" />
                        <div>
                            <h1 className="profilehead">
                            Andreas Papaioannou
                            </h1>
                            <h1 className="profileheadCoFounder">
                            Co-Founder
                            </h1>
                            <p className="profilepara">
                            Business Architect and Marketing Strategiest
                            </p>
                            <p className="underline">Understand my why</p>
                        </div>

                      </div>
                       <div className="col-12 col-md-4 col-lg-4  d-flex align-items-center">
                          <img src="./images/arrow.png" alt="img" className="img-fluid" />


                       </div>
                  </div>
              </div>
          
              <div className="col-12 col-md-5 col-lg-4">
                  <div className="row">
                      <div className="col-12 col-md-8 col-lg-8 ">
                          <img src="./images/profile.png" alt="img" className="img-fluid" />
                        <div>
                            <h1 className="profilehead">
                            Andreas Papaioannou
                            </h1>
                            <h1 className="profileheadCoFounder">
                            Co-Founder
                            </h1>
                            <p className="profilepara">
                            Business Architect and Marketing Strategiest
                            </p>
                            <p className="underline">Understand my why</p>
                        </div>

                      </div>
                       <div className="col-12 col-md-4 col-lg-4  d-flex align-items-center">
                          <img src="./images/arrow.png" alt="img" className="img-fluid" />


                       </div>
                  </div>
              </div>
           

              <div className="col-12 col-md-2 col-lg-4">
                  
                   
                          <img src="./images/profile.png" alt="img" className="img-fluid" />
                        <div>
                            <h1 className="profilehead">
                            Andreas Papaioannou
                            </h1>
                            <h1 className="profileheadCoFounder">
                            Co-Founder
                            </h1>
                            <p className="profilepara">
                            Business Architect and Marketing Strategiest
                            </p>
                            <p className="underline">Understand my why</p>
                        </div>

                      
                 
              </div>
          </div>

          
        </div>
      </section>

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

              <button className="btnServiceInner">Work with us -{">"}</button>
            </div>
          </div>
        </div>
      </section>
      <Whatclient />
      <Contactus />
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

export default Team;
