import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Search from "./pages/Search";
import Profile from "./pages/Profile/EditForm";
// import Qrcode from './components/Qrcode;
// import Contacts from './components/Contacts';
// import Card from './components/Card;
import Login from "./components/Login";
import Signup from "./components/Signup";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLInk = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLInk.concat(httpLink),
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
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          {/* Create a route to display a single thought's comments based on its `thoughtId` provided in the URL */}
          <Route exact path="/thoughts/:thoughtId">
            {/* <SingleThought /> */}
          </Route>
          <Route exact path="/search">
            <Search />
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
