import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";



const Capability = () => {
  useEffect(()=>{
    Aos.init({
      duration:2000
    })

  },[])
  return (
    <>
      <section className="capabiltySec">
        <div className="waterDropdiv">
          <div className="container">
            <h1 className="CAPABILITIES">CAPABILITIES</h1>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <h1 className="capTags">
                  Marketing + <br /> Campaigns
                </h1>
                <h1 className="capTags">
                  Branding + <br /> Content
                </h1>
                <h1 className="capTags">
                  Market + <br /> Research
                </h1>
                <h1 className="capTagsBlue">
                  Public + <br /> Relations
                </h1>
                <h1 className="capTagsBlue">
                  Audits + <br /> Assesments
                </h1>
                <h1 className="capTagsBlue">
                  Human + <br /> Resources
                </h1>
              </div>
              <div className="col-12 col-md-6 col-lg-6 ">
                <div className="iphoneimg  ">
                  <img
                    src="./images/NPhone.png"
                    alt="iphne"
                    className=" iphone " 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="work_content">
            <h1 className="workHeading" data-aos="fade-right">
              WORK {">>"} turning <span>iDeas</span> into reality.
            </h1>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 mt-5">
              <img
              data-aos="fade-in"
                src="./images/DiveAnalytics.png"
                alt=""
                className="img-fluid imgsize"
                style={{width:'450px'}}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 martop">
              <img 
              data-aos="fade-in"
               src="./images/Snag Art.png" alt="" className="img-fluid" style={{width:'450px'}} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 mt-5">
              <img
              data-aos="fade-in"
                src="./images/Katronis Real Estate.png"
                alt=""
                className="img-fluid"
                style={{width:'450px'}}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 martop">
              <img
              data-aos="fade-in"
              
              src="./images/Intern.png" alt="" className="img-fluid"  style={{width:'450px'}} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Capability;
