import React from "react";
import Navmenu from "../components/Navmenu";
import Footer from "../components/Footer";
import ProjectBreif from "../components/ProjectBreif";

const Vancouver = () => {
  return (
    <>
      <Navmenu />

      <section className="header_vancouver">
        <div className="container ">
          <h1 className="headerH1">
            Vancouver Art Community{">>"}{" "}
            <span>Empowering Artists to create.</span>{" "}
          </h1>
          <p className="headerPara">
            Branding {"&"} Content + Digital Platforms
          </p>
        </div>
      </section>

      <section className="headerImg_vancouver d-flex  justify-content-center align-items-center ">
        <div>
          <img
            src="./images/annie-spratt-ncpmQtyTzjg-unsplash 1 (3).png"
            className="img-fluid"
            alt="img"
          />
        </div>
      </section>

      <ProjectBreif
        bg="#00031F"
        description=" The Vancouver Art Community is a not-for-profit society that empowers local artists to create. Vancouver Art Community supports hundreds of artists and makers by giving them creative resources, valuable skill-building opportunities, and access to a supportive community of peers within the arts sector. In addition, they value the vibrant and essential Art Community as a  vital part of Vancouver’s local economy. "
        description2="We were happy to help them with all their business and marketing needs when they approached us. We have helped V.A.C. with their operational needs, from team management and workflow development to asset development and marketing in a collaborative effort."
        deliverables1=" Art Curation"
        deliverables2=" Digital Platforms"
        deliverables3=" Public Relations"
        deliverables4=" Talent Scouting"
        deliverables5="Project Management"
        deliverables6=" Business Development"
        deliverables7=" Communications Development"
        deliverables8=" Memberships + Community Development"
      />
      <Footer />
    </>
  );
};

export default Vancouver;
