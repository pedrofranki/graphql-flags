import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CountriesList from './pages/CoutriesList'
import Country from './pages/Country'
import CoutryForm from './pages/CoutryForm'

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/country">
            <Country />
          </Route>
          <Route exact path="/country-form">
            <CoutryForm />
          </Route>
          <Route path="/">
            <CountriesList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
