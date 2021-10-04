import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const Herosec = () => {
  return (
    <>
      <section className="heroSection">
        <Container>
          <div className="hero_content">
            <h1 className="heroHeading">
              Our sole mission is to help develop the next great <br />{" "}
              <span>idea</span>
            </h1>
            <p>
              We help startups initialize their branding and marketing. For
              established companies, we help them navigate new waters.
              <br />  <br />
              Let’s dive into your market.
            </p>

            <button className="herobtn">Are you a startup?</button>
            <span className="or">OR</span>
            <button className="herobtn">Are you established?</button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Herosec;
