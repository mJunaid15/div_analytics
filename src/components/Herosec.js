import React from "react";
import { motion } from "framer-motion";

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

            <motion.button
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.83)",
                color: "#fff",
              }}
              className="herobtn"
              style={{ backgroundColor: props.bgbtn1 }}
            >
              {props.btn1}
            </motion.button>
            <span className="or" style={{ display: props.display }}>
              {props.or}
            </span>
            <motion.button
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.83)",
                color: "#fff",
              }}
              className="herobtn"
              style={{ backgroundColor: props.bgbtn2 }}
            >
              {props.btn2}
            </motion.button>
            <motion.button
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.83)",
                color: "#fff",
              }}
              className="herobtn"
              style={{ backgroundColor: props.bgbtn3 }}
            >
              {props.btn3}
            </motion.button>
            <br className="d-none d-lg-block" />
            <motion.button
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.83)",
                color: "#fff",
              }}
              className="herobtn"
              style={{ backgroundColor: props.bgbtn4 }}
            >
              {props.btn4}
            </motion.button>
            <motion.button
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.83)",
                color: "#fff",
              }}
              className="herobtn"
              style={{ backgroundColor: props.bgbtn5 }}
            >
              {props.btn5}
            </motion.button>
            <motion.button
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.83)",
                color: "#fff",
              }}
              className="herobtn"
              style={{ backgroundColor: props.bgbtn6 }}
            >
              {props.btn6}
            </motion.button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Herosec;
