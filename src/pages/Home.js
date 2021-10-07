/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navmenu from "../components/Navmenu";
import Herosec from "../components/Herosec";
import Aboutus from "../components/Aboutus";
import Capability from "../components/Capability";
import Pricing_models from "../components/Pricing_models";
import Whatclient from "../components/Whatclient";
import Whatwedo from "../components/Whatwedo";
import WhatwedoEstab from "../components/WhatwedoEstab";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";
import Viewteam from "../components/Viewteam";


const Home = () => {
//   const backgroundStyle = {
//     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
// url(/images/wave.png)`,
//   };

  return (
    <>
      <Navmenu />
      <Herosec
        bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
      url(/images/wave.png)"
        Heading="Our sole mission is to help develop the next great "
        yellowHeading="idea"
        para=" We help startups initialize their branding and marketing. For
      established companies, we help them navigate new waters."
        secondPara="Let’s dive into your market."
        btn1=" Are you a startup?"
        or="OR"
        btn2="Are you established?"
        bgbtn1="#fef76b"
        bgbtn2="#fef76b"

        
        




      />
      <Aboutus />
      <Capability />
      <Pricing_models />
      <Whatclient />
      <Whatwedo />
      <WhatwedoEstab />
      <Contactus />
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

export default Home;
