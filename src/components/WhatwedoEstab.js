import React from "react";

const WhatwedoEstab = () => {
  return (
    <>
      <section className="whatwedoEstabSec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <img src="./images/Group7.png" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="whatwedoHeadEstab">
                What we do for established businesses
              </h1>
              <p className="whatwedoParaEstab">
                As an established business, you have a unique problem in the
                market. You have to adapt continually, or you risk going out of
                business. You have to change tried and tested marketing
                strategies to adapt them, which is painful when they were
                working so well before. For you, we specialize in taking what
                you’re doing correctly and adapting it to new methods of
                customer awareness and engagement.
              </p>
              <button className="estabBtn">Learn more {"->"}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatwedoEstab;
