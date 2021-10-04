import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Whatwedo = () => {
  return (
    <>
      <section className="whatwedoSec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="whatwedoHead">What we do for startups</h1>
              <p className="whatwedoPara">
                As an established business, you have a unique problem in the
                market. You have to adapt continually, or you risk going out of
                business. You have to change tried and tested marketing
                strategies to adapt them, which is painful when they were
                working so well before. For you, we specialize in taking what
                you’re doing correctly and adapting it to new methods of
                customer awareness and engagement.
              </p>
              <button className="herobtnWhatwedo">Learn more {"->"}</button>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
                <img src="./images/Group7.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whatwedo;
