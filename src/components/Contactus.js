import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contactus = () => {
  return (
    <>
      <section className="contactUsSec">
        <div className="container ">
          <h1 className="contactusHead text-center pb-4">
            INTRODUCE YOURSELF, SIMPLY.
          </h1>
          <div className="formDiv">
            <form className="row g-3">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Email"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="First name"
                />
              </div>
              <div class="form-check ">
                <input
                  className="form-check-input "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  I am a Startup
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  I am an Established Business
                </label>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <button type="submit" className=" formBTn">
                Send it
                </button>
              </div>
              <div className="col-12 col-md-8 col-lg-8">
                <p className="formPara">
                  Thank you for introducing yourself. We will connect within 24
                  hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
