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
        <Route  component={Error}></Route>


      </Switch>
 
      
    </>
  )
}

export default App
