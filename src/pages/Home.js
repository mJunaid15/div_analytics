import React from "react";
import Navmenu from '../components/Navmenu';
import Herosec from '../components/Herosec';
import Aboutus from '../components/Aboutus';
import Capability from '../components/Capability';
import Pricing_models from "../components/Pricing_models";
import Whatclient from "../components/Whatclient";
import Whatwedo from '../components/Whatwedo';
import WhatwedoEstab from '../components/WhatwedoEstab';
import Contactus from '../components/Contactus';
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <Navmenu />
      <Herosec />
      <Aboutus />
      <Capability />
      <Pricing_models />
      <Whatclient />
      <Whatwedo />
      <WhatwedoEstab />
      <Contactus />
      <Footer />
    </>
  );
};

export default Home;
