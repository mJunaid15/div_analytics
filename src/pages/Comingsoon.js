import React from 'react';
import Navmenu from "../components/Navmenu";
import Footer from "../components/Footer";

const Comingsoon = () => {
    return (
        <>
        <Navmenu/>

        <section className="comingsoon d-flex align-items-center">
        <div className="container ">
          <h1 className="comingsoonH1 text-center pb-lg-4">
          COMING SOON.
          </h1>
          <p className="comingsoonpara">We are developing this as we speak! 
Once it’s ready we can send you an email to see what it can offer you.</p>
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
                Join waitlist -{'>'}
                </button>
              </div>
              <div className="col-12 col-md-8 col-lg-8">
                <p className="formPara">
                Thank you for. Look out for an email when this is ready!
                </p>
              </div>
            </form>
          </div>
        </div>

        </section>
        

      <Footer />
    
            
        </>
    )
}

export default Comingsoon
