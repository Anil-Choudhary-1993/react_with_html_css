import React from 'react';
import Main from './main';
import Customer from './customer';
import Package from './package';
import Header from './header';
import Footer from './footer';
import Nav from './nav';
import StartHosting from './startHosting';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Header />

        <Switch>
          <Route path="/packages">
            <Package />
          </Route>
          <Route path="/customers">
            <Customer />
          </Route>
          <Route path="/start_hosting">
            <StartHosting />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
