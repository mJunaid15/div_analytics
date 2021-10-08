import React, {useEffect} from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navmenu = () => {

  let pathnam = window.location.pathname;
  console.log(pathnam)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pathnam = window.location.pathname;
  }, [window.location.pathname]);
  return (
    <>
      <section className="navmenu">
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
            
              <img
                src="./images/Logos.png"
                className="img-fluid"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <Nav.Link as={Link} to={"/snag"} className={`${pathnam.match('/snag') ? 'link-active' : ''} NavLi`}>
                  FOR STARTUPS + BUSINESSES
                </Nav.Link>
                <Nav.Link as={Link} to={"/vancouver"} className={`${pathnam.match('/vancouver') ? 'link-active' : ''} NavLi`}>
                  CAPABILITIES
                </Nav.Link>
                <Nav.Link as={Link} to={"/katronis"} className={`${pathnam.match('/katronis') ? 'link-active' : ''} NavLi`}>
                  WORK
                </Nav.Link>
                <Nav.Link as={Link} to={"/greyarea"} className={`${pathnam.match('/greyarea') ? 'link-active' : ''} NavLi`}>
                  TEAM
                </Nav.Link>
                <Nav.Link as={Link} to={"/casestudy"} className={`${pathnam.match('/casestudy') ? 'link-active' : ''} NavLi`}>
                  SPECIALIZED PRODUCTS
                </Nav.Link>
                <Nav.Link as={Link} to={"/forx"} className={`${pathnam.match('/forx') ? 'link-active' : ''} NavLi`}>
                  PRICING
                </Nav.Link>
                <Nav.Link as={Link} to={"/contactpage"}  className={`${pathnam.match('/contactpage') ? 'link-active' : ''} contactbtn`}>
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
