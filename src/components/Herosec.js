import React from "react";
// import wave from "/images/wave.png";

import { Container } from "react-bootstrap";

const Herosec = (props) => {
  return (
    <>
      <section
        className="heroSection d-lg-flex align-items-lg-center d-sm-flex align-items-start"
        style={{ backgroundImage: props.bg, backgroundColor: props.bgcolor }}
      >
        <Container>
          <div className="hero_content">
            <h1 className="heroHeading ">
              {props.Heading}
              <br />
              <span>{props.yellowHeading}</span>
              {props.Heading2}
            </h1>
           
            <p>
              {props.para}
              <br /> <br />
              {props.secondPara}
            </p>

            <button
              className="herobtn"
              style={{ backgroundColor: props.bgbtn1 }}
            >
              {props.btn1}
            </button>
            <span className="or" style={{ display: props.display }}>
              {props.or}
            </span>
            <button
              className="herobtn"
              style={{ backgroundColor: props.bgbtn2 }}
            >
              {props.btn2}
            </button>
            <button
              className="herobtn"
              style={{ backgroundColor: props.bgbtn3 }}
            >
              {props.btn3}
            </button>
            <br className="d-none d-lg-block" />
            <button
              className="herobtn"
              style={{ backgroundColor: props.bgbtn4 }}
            >
              {props.btn4}
            </button>
            <button
              className="herobtn"
              style={{ backgroundColor: props.bgbtn5 }}
            >
              {props.btn5}
            </button>
            <button
              className="herobtn"
              style={{ backgroundColor: props.bgbtn6 }}
            >
              {props.btn6}
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Herosec;
