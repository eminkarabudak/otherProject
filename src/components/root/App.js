import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navi from "../navi/Navi";
import Home from "../pages/Home";
import FooterNavi from '../navi/Breadcrumbs'
import Organisation from '../pages/Organisation'
import PageNotFound from '../pages/PageNotFound'
import { Container } from "reactstrap";
const App = ()=> {
  return (
   <Router>
      <Container>
        <Navi />
        <Switch>
          <Route exact from="/" render={props => <Home {...props} />}  />
          <Route exact path='/Organizasyonlarım' render={props => <Organisation {...props} />}/>
          <Route component={PageNotFound} />
          <Route
            exact
            path="/Organizasyonlarım"
            render={props => <Organisation {...props} />}
          />
        </Switch>
        <FooterNavi />
      </Container>
   </Router>
  );
}

export default App;
