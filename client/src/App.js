import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "./index.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/Home";
import LoginForm from "../src/components/Login";
import Signup from "../src/components/Signup";
import Search from "../src/pages/Search";
import Profile from "../src/pages/Profile";
import MyCard from "../src/pages/MyCard";
import EditForm from "../src/components/EditForm";
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
    <div className="site_container">
      <ApolloProvider client={client}>

        <Router>
          <Header />        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/card/:id" component={MyCard} />
            <Route exact path="/contacts" component={Search} /> 
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/editform" component={EditForm} />
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
