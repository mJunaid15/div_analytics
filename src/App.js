import React from 'react';
// import Katronis  from './pages/Katronis';
// import Greyarea  from './pages/Greyarea';
// import Snag  from './pages/Snag';
// import Vancouver  from './pages/Vancouver';
import Home from './pages/Home';
import Casestudy from './pages/Casestudy';
import Snag from './pages/Snag';
import SnagExport from './pages/SnagExport';
import Vancouver from './pages/Vancouver';
import Katronis from './pages/Katronis';
import Greyarea from './pages/Greyarea';
import Forx from './pages/Forx';
import Services from './pages/Services';
import Pricingmodel from './pages/Pricingmodel';
import Specialized from './pages/Specialized';
import Team from './pages/Team';
import Contactpage from './pages/Contactpage';
import Marketingcontent from './pages/Marketingcontent';
import Brandingcontent from './pages/Brandingcontent';
import Marketresearch from './pages/Marketresearch';
import Publicreaction from './pages/Publicreaction';
import Audits from './pages/Audits';
import Humanresourse from './pages/Humanresourse';
import Comingsoon from './pages/Comingsoon';












import Error from './pages/Error';
import { Route, Switch } from "react-router";






const App = () => {
  return (
    <>
   
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/casestudy" component={Casestudy}></Route>
        <Route path="/snag" component={Snag}></Route>
        <Route path="/snagexport" component={SnagExport}></Route>
        <Route path="/vancouver" component={Vancouver}></Route>
        <Route path="/katronis" component={Katronis}></Route>
        <Route path="/greyarea" component={Greyarea}></Route>
        <Route path="/forx" component={Forx}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/pricingmodel" component={Pricingmodel}></Route>
        <Route path="/specialized" component={Specialized}></Route>
        <Route path="/team" component={Team}></Route>
        <Route path="/contactpage" component={Contactpage}></Route>
        <Route path="/marketingcontent" component={Marketingcontent}></Route>
        <Route path="/brandingcontent" component={Brandingcontent}></Route>
        <Route path="/marketresearch" component={Marketresearch}></Route>
        <Route path="/publicreaction" component={Publicreaction}></Route>
        <Route path="/audits" component={Audits}></Route>
        <Route path="/humanresourse" component={Humanresourse}></Route>
        <Route path="/comingsoon" component={Comingsoon}></Route>











        <Route  component={Error}></Route>


      </Switch>
 
      
    </>
  )
}

export default App
