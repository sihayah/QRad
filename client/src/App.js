import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home';
import Header from './components/Header';
// import Qrcode from './components/Qrcode;
// import Profile from './components/Profile';
// import Contacts from './components/Contacts';
// import Card from './components/Card;
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import Navigator from "./components/Navigator";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>

        {/* <div className="flex-column justify-flex-start min-100-vh"> */}
          <Header />
          <div className="container">

            <Route exact path="/">
              <Home />
            </Route>

            {/* <Route exact path="//:thoughtId">
              <Contacts /> */}
            {/* </Route> */}
          </div>
          {/* <Footer /> */}
        {/* </div> */}

      </Router>
    </ApolloProvider>
  );
}

export default App;
