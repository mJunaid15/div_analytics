import React from "react";
import { motion } from "framer-motion";

const Pricing_models = () => {
  return (
    <>
      <section className="pricingmodelSec">
        <div className="container">
          <h1 className="priceheading">PRICING MODELS</h1>
        </div>

        <div className="parent">
          <motion.div whileHover={{ y: -100 }} className="box1">
            <div className="inner">
              <h1 className="homeinnerh1">
                Hourly <br /> Rate
              </h1>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -100 }} className="box2">
            <div className="inner">
              <h1 className="homeinnerh1">
                Fixed <br /> Project <br /> Rate
              </h1>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -100 }} className="box3">
            <div className="inner">
              <h1 className="homeinnerh1">
                Upside <br /> Potential
              </h1>
            </div>
          </motion.div>
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
