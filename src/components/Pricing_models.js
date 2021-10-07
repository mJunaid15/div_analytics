import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Pricing_models = () => {
  return (
    <>
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
        </div>
        <div className="black">
            <div className="container">
                <h1 className="explorePoten">Explore potential</h1>
            </div>
        </div>
      </section>
    </>
  );
};

export default Pricing_models;
