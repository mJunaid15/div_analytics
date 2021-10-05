import React from "react";
import Navmenu from "../components/Navmenu";
import Footer from "../components/Footer";
import ProjectBreif from "../components/ProjectBreif";
import Headercontent from "../components/Header_content";

const Greyarea = () => {
  return (
    <>
      <Navmenu />
      <Headercontent
        bg_color="#000"
        des1="Grey Area Studio"
        spanDes="  Design that puts product development in the driver’s seat."
        para="Branding & Content + Digital Platforms"
        img="./images/Client Logo.png"
        bg_linearG="linear-gradient(#000 0%, #CCD5DB 11.5%)"
      />
      <ProjectBreif
        bg="#1B1B1B"
        description="During what we liked to call the 30-day Challenge, we were tasked with creating a new piece of clothing or accessory, taking photos, make one video edit a day, write a blog post, and interact with their audience as a growth and marketing strategy. Through these efforts, we were able to amass a large following and notoriety throughout the internet and industry. This project was initiated under the name of INTERN Techwear Corporation and eventually grew into the creation of Grey Area Studio and Black Square Dynamics and the dissolution of INTERN."
        deliverables1=" Brand Research"
        deliverables2="Assets Generation"
        deliverables3=" Photography "
        deliverables4=" Videography"
        deliverables5="Content Creation"
      />

      <section className="theteam d-flex flex-lg-column justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <p className="teamPara">
                “we love to make stuff. we wake up in the middle of the night to
                do it. we live to create constantly, and we've built a process
                that allows us the freedom of exploration.” - Grey Area Studio
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="theTeam">The Team</h1>

              <img
                src="./images/Group 12.png"
                alt="img"
                className="img-fluid "
                style={{ marginTop: "-30px" }}
              />
              <h1 className="imgbottomTitle text-center">
              Tyler Froese &nbsp; &nbsp; &nbsp; Zach Dabrowski
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <p className="teamPara">
                “We live to tell your story, We love to spread your message.”
                -Dive Analytics
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="theContent d-flex flex-lg-column justify-content-center align-items-center">
        <div className="container">
            <h1 className="TheContentH1">The Content:</h1>
          <div className="row d-flex mt-5 align-items-center">
            <div className="col-12 col-md-6 col-lg-6 ">
              <p className="contentPara">
              We made sure to tell the story of every product,  from design to execution.
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
          

              <img
                src="./images/Photo 1.png"
                alt="img"
                className="img-fluid "
                
              />
             
            </div>
          </div>
          

          <div className="row d-flex mt-5 align-items-center">
            <div className="col-12 col-md-6 col-lg-6 ">
            <img
                src="./images/Photo 2.png"
                alt="img"
                className="img-fluid "
                
              />
              
            </div>

            <div className="col-12 col-md-6 col-lg-6">
            <p className="contentPara">
            We took an idea, big or small from conception to a nearly finished product ready for manufacturing. Throughout the process we produced an educational campaign around every new garment or accesory.
              </p>

             
             
            </div>
          </div>
          <div className="row d-flex mt-5 align-items-center">
            <div className="col-12 col-md-6 col-lg-6 ">
              <p className="contentPara">
              We then presented these campaigns to the online community and found lots of traction within the DIY community.
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
          

              <img
                src="./images/Photo 3.png"
                alt="img"
                className="img-fluid "
                
              />
             
            </div>
          </div>
            <h1 className="contentPara mt-5 px-lg-5">We found ourselves being a resource for many new and independent makers across the world and took the opportunity to connect many talented individuals.</h1>
        </div>
      </section>
    
    <section className="EveryPiece">
   
        <div className="container">
        <h1 className="everyHeading ">Every piece of educational content, photo, video work and blog post was completed within 24 hours.</h1>
        </div>
        <div className="max">

        <img src="./images/image 75.png" alt="img"  className="img-fluid  "  />
        </div>

    </section>


    <section className="Feadtured">
        <div className="max">
            <img src="./images/Press.png" alt="img" className="img-fluid"/>
        </div>
    </section>

    <section className="Insta">
        <div className="max">
            <img src="./images/Instagram Posts.png" alt="img" className="img-fluid"/>
        </div>
    </section>
      <Footer />
    </>
  );
};

export default Greyarea;
