import React from "react";
import Navmenu from "../components/Navmenu";
import Herosec from "../components/Herosec";
import Footer from "../components/Footer";
import Whatclient from "../components/Whatclient";
import Contactus from "../components/Contactus";
import Viewteam from "../components/Viewteam";

const Services = () => {
  return (
    <>
      <Navmenu />
      <Herosec
        bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
         url(/images/gradiantforx.png)"
        Heading="Our solutions for your big "
        yellowHeading="idea."
        para="To us there is a clear difference between Startups and Established Buinesses that a lot of agencies just don’t understand."
        secondPara="Below we show you the difference."
      />

      <section className="marketingsection d-flex align-items-center">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="marketingh1">Marketing + Campaigns</h1>
              <p className="marketingpara">
                Being at the forefront of technology and the human zeitgeist, we
                leverage the power of platforms to create genuine human
                connections with highly transmittable content worth sharing
                cross-channel and at multiple brand touchpoints.
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>Growth Strategy</li>
                      <li>PPC Campaigns</li>
                      <li>Email Marketing</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>Social Media Campaigns</li>
                      <li>Launch Strategies</li>
                      <li>SEO Development</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button className="marketingbtn">Learn more -{">"}</button>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="container">
                <img
                  src="./images/greyIMG.png"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marketingsection d-flex align-items-center">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="container">
                <img
                  src="./images/greyIMG.png"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="marketingh1">Branding + Content</h1>
              <p className="marketingpara">
                We empower the growth of brands by creating brand strategy and
                executing brand experience through design, content, and
                analytics. From ideation to complete concept development, we
                enable your customers to get the full experience.
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>Brand Strategy + Experience</li>
                      <li>Trends + Insights</li>
                      <li>Go-To-Market Strategy</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>Guidelines & Systems</li>
                      <li>Content Strategy</li>
                      <li>Identity Design</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button className="marketingbtn">Learn more -{">"}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="marketingsection d-flex align-items-center">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="marketingh1">Market Research</h1>
              <p className="marketingpara">
                Information is the life-blood of business. Arming your business
                with al the right consumer data allows you and us to develop the
                perfect business strategy for your demographic.
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>Trend Analysis</li>
                      <li>Trend Forecasting</li>
                      <li>Technical Analysis</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>Sentiment Analysis</li>
                      <li>Product-Market-Fit</li>
                      <li>Competitor + Viability Analysis</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button className="marketingbtn">Learn more -{">"}</button>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="container">
                <img
                  src="./images/greyIMG.png"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marketingsection d-flex align-items-center">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="container">
                <img
                  src="./images/greyIMG.png"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="marketingh1">Public Relations</h1>
              <p className="marketingpara">
                Communication is key. We allow the brands identity exude through
                crafting a brand voice that resonates with your audience,
                allowing for more personal connection.
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>Contingency Planning</li>
                      <li>Communications Strategy</li>
                      <li>Communications Development</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>Event Planning</li>
                      <li>Relationship Building</li>
                      <li>Relationship Management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button className="marketingbtn">Learn more -{">"}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="marketingsection d-flex align-items-center">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="marketingh1">Audits + Evaluations</h1>
              <p className="marketingpara">
                It’s easy for your operations to go a off-course from their
                intial goal. Which is why having a routine system in place for
                audits and evaluations is essential for getting back ontrack and
                analyzing the company for long-term adaptibility.
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>Marketing Audits</li>
                      <li>Employee Evaluation</li>
                      <li>Operational Audits</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>Branding Audit</li>
                      <li>SEO Audit</li>
                      <li>Digital Platform Audits</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button className="marketingbtn">Learn more -{">"}</button>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="container">
                <img
                  src="./images/greyIMG.png"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marketingsection d-flex align-items-center">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="container">
                <img
                  src="./images/greyIMG.png"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="marketingh1">Human Resources</h1>
              <p className="marketingpara">
                Information is the life-blood, communication is key, but none of
                that matters without people. People make things matter. Business
                and services do not move or work without understanding people
                which is a core value in our line of work.
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>Team Management</li>
                      <li>Process Development</li>
                      <li>Setting Company Culture</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>Project Management</li>
                      <li>Recruiting + Screening</li>
                      <li>Performance Monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button className="marketingbtn">Learn more -{">"}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="marketingsection d-flex align-items-center">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-7 col-lg-7">
              <h1 className="marketingh1">Specialized Products</h1>
              <p className="marketingpara">
                As a marketing firm we understand the pressures your business
                may be facing and sometimes, you need a quick and easy solution
                that is clear cut. This is why we created specialized products
                as a service.
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>7 Day Rush</li>
                      <li>30 Day Overhaul</li>
                      <li>90 Day Rebrand</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="marketingUL">
                      <li>Strategy Call</li>
                      <li>Deep Dive Workshop</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button className="marketingbtn">Learn more -{">"}</button>
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
             
            
              <button className="btnServiceInner">
             Work with us -{">"}
             </button>
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

export default Services;
