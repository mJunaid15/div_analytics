import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navmenu = () => {
  return (
    <>
      <section className="navmenu">
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand as={NavLink} to={"/"}>
            
              <img
                src="./images/Logos.png"
                className="img-fluid"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <Nav.Link as={NavLink} to={"/snag"} className="NavLi">
                  FOR STARTUPS + BUSINESSES
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/vancouver"} className="NavLi">
                  CAPABILITIES
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/katronis"} className="NavLi">
                  WORK
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/greyarea"} className="NavLi">
                  TEAM
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/casestudy"} className="NavLi">
                  SPECIALIZED PRODUCTS
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/greyarea"} className="NavLi">
                  PRICING
                </Nav.Link>
                <Nav.Link href="#link" className="contactbtn">
                  CONTACT <i className="fas fa-envelope" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Navmenu;
