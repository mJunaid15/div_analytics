/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navmenu from "../components/Navmenu";
import Footer from "../components/Footer";
import ProjectBreif from "../components/ProjectBreif";
import Header_content from "../components/Header_content";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Katronis = () => {
  return (
    <>
      <Navmenu />
      <Header_content
        bg_color="#000"
        des1="SNAG"
        spanDes=" Technically sound and illustrious talent."
        para="Branding & Content + Digital Platforms"
        img="./images/katronis.png"
        bg_linearG="linear-gradient(#000 0%, #FEE83D 11.5%)"
      />

      <ProjectBreif
        bg="#030100"
        description=" Katronis Real Estate team is one of the top real estate teams in BC.  They were preparing to scale up their business and needed a team to help them accomplish that goal. When Katronis and we decided to team up together, they were looking for more than just Marketing and Branding. They needed marketing and team management to help define and execute operations with their current staff and the ones being onboarded."
        deliverables1=" Marketing Management"
        deliverables2=" lead generation"
        deliverables3=" branding"
        deliverables4=" asset generation"
        deliverables5="human resources"
        deliverables6=" market research"
        deliverables7=" market research"
        deliverables8=" Content Creation"
        deliverables9=" Social Media"
        deliverables10=" Event Planning"
      />

      <section className="bussinesManagement  d-flex justify-content-center align-items-center">
        <div className="container py-lg-5  border-bottom">
          <h1 className="businessmanH1 pt-lg-5">Business Management</h1>
          <p className="businessmanPara ps-lg-3">
            It’s about people and how we work together.
          </p>
          <p className="businessmanPara ps-lg-5">
            We developed strategies and workflows to help optimize the business
            for success. Even in the smallest of details.
          </p>

          <div className="container d-flex justify-content-end">
            <div className="container">
              <img src="./images/katronis_team 1.png" alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="betterSec d-flex flex-column justify-content-center align-items-center">
        <div className="container mt-lg-5">
          <img src="./images/Group 9.png" alt="img" className="img-fluid" />
          <p className="parabetter">
            An Olympic cycling coach was once hired to train a consistantly
            losing team. He noticed the team had many lifestyle and operational
            issues so he instituted the 1% betterment strategy. Imagine how much
            more effecient and effective your business would be if every area of
            it was just 1% better. For the coach it was better seats, better
            pillows, better food, etc. An overall winning improvement for the
            team. For Katronis, it was everything from file naming, and sorting,
            to communication and marketing strategies.
          </p>
          <h5 className="h5better text-center">A simple example</h5>

          <div className="imgdiv">
            <img
              src="./images/Open House Insert Example.png"
              alt="img"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="container my-lg-5">
          <p className="parabetter py-lg-5">
            1% betterment is used to tighten up your business in all areas. 1%
            improvments stack up to 30, 40, even 50% improvement to the
            organization. In some areas, it’s more cost efficient. In others,
            it’s more effective impact. In a few areas, it does both. This saves
            time, money and gives you a competing edge that you may have not
            realized before.
          </p>
        </div>
      </section>

      <section className="marketingClender d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <h1 className="text-center marketingHeading">Marketing Calender</h1>
          <p className="marketingPara">
            Setting processes for return on successes
          </p>
          <div className="container mt-lg-5">
            "
            <img src="./images/Calendar.png" alt="img" className="img-fluid" />
          </div>
          <div className="container mt-lg-5">
            <div className="row ">
              <div className="col-12 col-md-6 col-lg-6  d-flex justify-content-end ">
                <div className="">
                  <ul className=" ulLi">
                    <li>Social Media Posts</li>
                    <li>Customer Retention Initiatives</li>
                    <li>Marketing Strategy Development</li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-6">
                <ul className=" ulLi">
                  <li>Open Houses</li>
                  <li>Team Meetings</li>
                  <li>SEO & Advertising Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doorKnocking d-flex justify-content-center align-items-center">
        <div className="container">
          <img
            src="./images/Door Knocking Campaigns.png"
            alt="img"
            className="img-fluid"
          />
        </div>
      </section>

      <section className="OpenHouseing d-flex justify-content-center align-items-center">
        <div className="container">
          <img src="./images/Open House.png" alt="img" className="img-fluid" />
        </div>
      </section>

      <section className="marketWatch d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6">
              <h5 className="marketwatchHeading">
                Market Watch is a marketing initiative we helped develop to make
                Katronis the authority on real estate in their market.
              </h5>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <h5 className="marketwatchHeading">
                Market Watch is a marketing initiative we helped develop to make
                Katronis the authority on real estate in their market.
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className="localSales">
        <div className="navSales">
          <Navbar bg="#000" expand="lg" className="localSalesNav">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src="./images/katronis.png"
                  alt="logo"
                  style={{ widows: "50px" ,
                          height:"50px"}}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavDropdown title="LISTINGS" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="SELLERS" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="BUYERS" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="OUR TEAM" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div className="container">
          <img src="./images/salesImg.png" alt="img1" className="img-fluid"/>
        </div>
      </section>

      <section className="Arealstate">
      <div className="container">
        <img src="./images/Partnerships.png" alt="img" className="img-fluid" />
      </div>
     
      </section>
      <section className="Seo">
      <div className="container">
        <img src="./images/Blogging + SEO.png" alt="img" className="img-fluid" />
      </div>
     
      </section>

      <section className="Community  d-flex justify-content-center align-items-center">
      <div className="container">
        <img src="./images/Community Event.png" alt="img" className="img-fluid" />
      </div>
     
      </section>
      <section className="top3  d-flex justify-content-center align-items-center">
      <div className="container">
        <img src="./images/Google Reviews.png" alt="img" className="img-fluid" />
      </div>
     
      </section>
      <section className="highlyTragered  d-flex justify-content-center align-items-center">
      <div className="container">
        <img src="./images/Ads.png" alt="img" className="img-fluid" />
      </div>
     
      </section>

      <section className="yellowBox  d-flex justify-content-center align-items-center">
          
      </section>
    </>
  );
};

export default Katronis;
