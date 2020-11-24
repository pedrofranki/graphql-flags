import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountriesList from "./pages/CoutriesList";
import Country from "./pages/Country";
import CoutryForm from "./pages/CoutryForm";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries-274616.ew.r.appspot.com/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/country" component={Country} />
              <Route exact path="/country-form">
                <CoutryForm />
              </Route>
              <Route path="/" component={CountriesList} />
            </Switch>
          </Router>
        </div>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
