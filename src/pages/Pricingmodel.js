import React from "react";
import Navmenu from "../components/Navmenu";
import Herosec from "../components/Herosec";
import Footer from "../components/Footer";
import Viewteam from "../components/Viewteam";
import Whatclient from "../components/Whatclient";



const Pricingmodel = () => {
  return (
    <>
      <Navmenu />
      <Herosec
        bgcolor="#000"
        bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
         url(/images/wavecolorful.png)"
        Heading="Fuild pricing that allows for fully developed "
        yellowHeading="ideas."
        para="We offer pricing that meets your budgetting protocol. We offer hourly rates, project rates, retainers, and stakes or revenue share."
        secondPara="See the potential"
      />
      <section className="pricingmodelSec">
        <div className="container">
          <h1 className="priceheading">PRICING MODELS</h1>
        </div>

        <div className="parent">
          <div className="box1">
            <div className="inner">
              <h1 className="homeinnerh1">
                Hourly <br /> Rate
              </h1>
            </div>
          </div>

          <div className="box2">
            <div className="inner">
              <h1 className="homeinnerh1">
                Fixed <br /> Project <br /> Rate
              </h1>
            </div>
          </div>
          <div className="box3">
            <div className="inner">
              <h1 className="homeinnerh1">
                Upside <br /> Potential
              </h1>
            </div>
          </div>
          <img
            src="./images/Backofcard .png"
            alt="img"
            className="img-fluid card1"
          />
          <img
            src="./images/Back of card Fixed.png"
            alt="img"
            className="img-fluid card2"
          />
          <img
            src="./images/Back of card Upside Potential.png"
            alt="img"
            className="img-fluid card3"
          />
        </div>
      </section>
      <section className="howWe d-flex align-items-center ">
        <div className="container text-center">
          <h1 className="howeH1">How we’ll collaborate.</h1>
          <div className="row mt-lg-5">
            <div className="col-12 col-lg-12 col-md-12">
            

              <h1 className="olHeading">1. Humanism first and formost.</h1>
              <p className="howepara pricingModelhowePading">
                We take a human centered approach to every touchpoint and
                interaction. Everything we do is based on people and we make the
                effort to understand your needs.
              </p>
              <h1 className="olHeading mt-lg-5">3. Integrated teammates..</h1>
              <p className="howepara pricingModelhowePading">
                We are not just here to have you sign funds over and wait 6
                months for your shiny new campaign or business. We want to
                genuinely work and build with you on your greatness..
              </p>
            </div>

            <div className="col-12 col-lg-12 col-md-12">
              <h1 className="olHeading">2. Greatness focused.</h1>
              <p className="howepara pricingModelhowePading">
                We focus on great people and great ideas because we believe the
                truth behind success is above the glass ceiling of “good” and
                it’s about breaking through to great.
              </p>
              <h1 className="olHeading mt-lg-5">4. Fuild Pricing.</h1>
              <p className="howepara pricingModelhowePading">
                Easy peazy pricing models that fit any budget, project and
                timeline. Our picing models allow for powerful focus into key
                areas of your business.
              </p>
            </div>
          </div>
          <button className="btnpricingmodel mt-lg-5 ">Work with us -{">"}</button>

       
           
              
         
        </div>
      </section>
    
    <Whatclient/>
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

export default Pricingmodel;
