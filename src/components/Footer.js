import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <section className="footerSec">
        <div className="viewContainer">
          <div className="viewWork">
           <div className="container">
               <h1 className="viewCOntainerHeading">VIEW WORK</h1>
           </div>
          </div>
          <div className="viewteam">
          <div className="container">
               <h1 className="viewCOntainerHeading">VIEW TEAM</h1>
           </div>
     
          </div>
        </div>


<footer className="">
  
  <div className="container-fluid p-5 ">
   
  
   
  
 
   
    <section className="max">
     
      <div className="row ">
    
        <div className="col-lg-2 col-md-6 mb-4 ">
          <h5 className="text-uppercase footerHeading">SERVICES</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white footerLinks">PUBLIC RELATIONS</a>
            </li>
            <li>
              <a href="#!" className="text-white footerLinks">MARKET RESEARCH</a>
            </li>
            <li>
              <a href="#!" className="text-white footerLinks">HUMAN RESOURCES</a>
            </li>
          
            <li>
              <a href="#!" className="text-white footerLinks">BRANDING AND CONTENT</a>
            </li>
            <li>
              <a href="#!" className="text-white footerLinks">AUDITS AND EVALUATIONS</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
            </div>
          <h5 className="text-uppercase footerHeading">COMPANY</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white footerLinks">TEAM</a>
            </li>
            <li>
              <a href="#!" className="text-white footerLinks">WORK</a>
            </li>
            <li>
              <a href="#!" className="text-white footerLinks">FOR STARTUPS</a>
            </li>
          
            <li>
              <a href="#!" className="text-white footerLinks">PRICING MODELS</a> 
            </li>
            <li>
              <a href="#!" className="text-white footerLinks">COMPANY NEWS</a>
            </li>
           
          </ul>
        </div>
        <div className="col-lg-1 col-md-6 mb-4 mb-md-0 ">
          

          <ul className="list-unstyled check">
            <li>
              <a href="#!" className="text-white footerLinks">PRESS</a>
            </li>
            <li>
              <a href="#!" className="text-white footerLinks">RESEARCH</a>
            </li>
            <li>
              <a href="#!" className="text-white footerLinks">CHARITY WORK</a>
            </li>
          
          </ul>
        </div>
        <div className="text-center col-lg-3 col-md-6 mb-4 mb-md-0 ">
          <img src="./images/Logos.png" className="img-fluid" />

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white footerLinks">© 2021 Dive Analytics</a>
            </li>
            <button className="footerBtn">CONTACT</button>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
       

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white footerLinks">VENTURE VIDEOS</a>
            </li>
            <li>
              <a href="#!" className="text-white footerLinks">HOW TO BUSINESS (BLOG)</a>
            </li>
            <li>
              <a href="#!" className="text-white footerLinks">30 DAY BUSINESS CHALLENGES</a>
            </li>
          
            <li>
              <a href="#!" className="text-white footerLinks"><button className="bookdivebtn">BOOK A DEEP DIVE</button></a>
            </li>
            <li>
              <a href="#!" className="text-white footerLinks"><button className="bookdivebtn">BOOK A SRATEGY CALL</button></a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase footerHeading">SOCIAL</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white footerLinks">YOUTUBE</a>
            </li>
            <li>
              <a href="#!" className="text-white footerLinks">INSTAGRAM</a>
            </li>
            <li>
              <a href="#!" className="text-white footerLinks">FACEBOOK</a>
            </li>
          
            <li>
              <a href="#!" className="text-white footerLinks">LINKEDIN</a>
            </li>
            <li>
              <a href="#!" className="text-white footerLinks">TIKTOK</a>
            </li>
          </ul>
        </div> 
      
      </div>
     
    </section>
 
  </div>


  
</footer>

      </section>
    </>
  );
};

export default Footer;
