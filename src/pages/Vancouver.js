/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navmenu from "../components/Navmenu";
import Footer from "../components/Footer";
import ProjectBreif from "../components/ProjectBreif";
import Header_content from "../components/Header_content";
import Viewteam from "../components/Viewteam";



const Vancouver = () => {
  return (
    <>
      <Navmenu />

      <Header_content
        bg_color="#000"
        des1="Vancouver Art Community"
        spanDes=" Empowering Artists to create."
        para="Branding & Content + Digital Platforms"
        img="./images/annie-spratt-ncpmQtyTzjg-unsplash 1 (3).png"
        bg_linearG="linear-gradient(#000 0%, #fff 11.5%)"
      />

    

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

      <section className="artCuration">
        <div className="container">
          <div className="row pt-lg-5">
            <div className="col-12 col-md-6 col-lg-6">
              <p className="artPara">
                Art curation and showcase through Facebook and IG <br />
                Submitting artists for the Vancouver Mural Festival <br />
                Christmas Market <br />
                Photography showcase <br />
                Music Showcase
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <p className="artPara">
                Artistic talent scouting <br />
                Volunteer scouting and training <br />
                workflow development
                <br />
                team management
              </p>
            </div>
          </div>
          <div className="row pt-lg-5">
            <div className="col-12 col-md-6 col-lg-6">
              <p className="artPara">
                Connecting people to other people and opportunities <br />
                -Relationship Management <br />
                -Relationship Building
                <br />
                VAC blog that’s published local artists
                <br />
                events calendar
                <br />
                Discord group
                <br />
                Membership platform
                <br />
                Mentorship opportunties
                <br />
                Communications Circulation thorugh newsletters
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <p className="artPara">
                Creatico a collaboration between VAC and other artists and arts
                focused organizations powered by VanCity to share infrastructure
                and move vancouvers creative community forewards
              </p>
            </div>
          </div>

          <p className="artPara text-center"> Website development</p>
        </div>
      </section>


      <section className="black_section"></section>

      <Viewteam
        bg="url(/images/blue.png)"
        bg2="url(/images/yellow.png)"
        head1="VIEW WORK"
        head2="VIEW TEAM"
      />
      <Footer />
    </>
  );
};

export default Vancouver;
