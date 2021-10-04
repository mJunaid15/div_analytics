import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const Aboutus = () => {
  return (
    <>
      <section className="aboutus">
        <Container>
          <div className="aboutus_content">
            <h1>About</h1>
            <h1 className="us">US</h1>
            <p>
              Dive Analytics uses business intelligence and predictive analytics
              as a growth mechanism, meaning we provide services that help grow
              your business and expand your market through data-driven informed
              decisions. Capabilities from Marketing Strategy and Advertising to
              Web Design and HR. Our services are all about growth. Growth in
              your online properties, and your offline properties. This is why
              we are perfect for startups or new ventures for established
              businesses.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Aboutus;
