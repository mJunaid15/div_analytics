import React from "react";

const Viewteam = (props) => {
  return (
    <>
    <div className="parentView">
      <div className="viewContainer"  style={{ backgroundImage: props.bg }}>
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-md-12 col-lg-12  "
             
            >
              <h1 className="viewCOntainerHeading  text-md-start ">{props.head1}</h1>
            </div>
           
          </div>
        </div>
      </div>
      <div className="teamContainer" style={{ backgroundImage: props.bg2 }}>
        <div className="container">
          <div className="row">
          
            <div
              className="col-12 col-md-12 col-lg-12 "
              
            >
              <h1 className="viewCOntainerHeading text-start ">{props.head2} </h1>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </>
  );
};

export default Viewteam;
