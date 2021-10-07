import React from "react";
import Navmenu from "../components/Navmenu";
import Viewteam from "../components/Viewteam";
import Contactus from "../components/Contactus";

import Footer from "../components/Footer";

const Contactpage = () => {
  return (
    <>
      <Navmenu />
      <Contactus/>

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

export default Contactpage;
