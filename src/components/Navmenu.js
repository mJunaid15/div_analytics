import React from "react";


import { Navbar, Container, Nav,  } from "react-bootstrap";



const Navmenu = () => {
  return (
    <>
      <section className="navmenu">
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home"> <img src="./images/Logos.png" className="img-fluid" alt="logo" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <Nav.Link href="#home" className="NavLi">FOR STARTUPS + BUSINESSES</Nav.Link>
                <Nav.Link href="#link" className="NavLi">CAPABILITIES</Nav.Link>
                <Nav.Link href="#home" className="NavLi">WORK</Nav.Link>
                <Nav.Link href="#link" className="NavLi">TEAM</Nav.Link>
                <Nav.Link href="#home" className="NavLi">SPECIALIZED PRODUCTS</Nav.Link>
                <Nav.Link href="#link" className="NavLi">PRICING</Nav.Link>
                <Nav.Link href="#link" className="contactbtn">CONTACT <i className="fas fa-envelope"/></Nav.Link>

               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Navmenu;
