import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = (props) => {
  return (
    <>
      <span aria-hidden="true" className="carousel-control-prev-icon" />
      <Carousel>
        <Carousel.Item>
          <div className="container">
            <div className="row mt-lg-3">
              <div className="col-12 col-md-3 col-lg-3 ">
              <h1 className="colorfullYellowH1">
                {props.topheading}
                </h1>

                <img src={props.img} alt="img" className="img-fluid" />

                <h1 className="tringlecolorboxh1"> {props.alphaPara} </h1>
              </div>
              <div className="col-9 col-md-9 col-lg-9 mt-lg-5">
                <p className="tringlecolorboxPara mt-lg-5"> {props.heading}</p>
                <p className="tringlecolorboxPara2">
                  {props.para}
                  <br />
                  <br />
                  <span>{props.count3}</span>
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row mt-lg-3">
              <div className="col-3 col-md-3 col-lg-3 ">
                <h1 className="colorfullYellowH1">
                {props.topheading}
                </h1>
               
                <img src={props.img} alt="img" className="img-fluid" />

                <h1 className="tringlecolorboxh1"> {props.alphaPara} </h1>
              </div>
              <div className="col-9 col-md-9 col-lg-9 mt-lg-5">
                <p className="tringlecolorboxPara mt-lg-5"> {props.heading}</p>
                <p className="tringlecolorboxPara2">
                  {props.para}
                  <br />
                  <br />
                  <span>{props.count3}</span>
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row mt-lg-3">
              <div className="col-3 col-md-3 col-lg-3 ">
              <h1 className="colorfullYellowH1">
                {props.topheading}
                </h1>
                <img src={props.img} alt="img" className="img-fluid" />

                <h1 className="tringlecolorboxh1"> {props.alphaPara} </h1>
              </div>
              <div className="col-9 col-md-9 col-lg-9 mt-lg-5">
                <p className="tringlecolorboxPara mt-lg-5"> {props.heading}</p>
                <p className="tringlecolorboxPara2">
                  {props.para}
                  <br />
                  <br />
                  <span>{props.count3}</span>
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
