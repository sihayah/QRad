import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigator from "../Navigator";

import Contacts from "../Contacts";

import LoginForm from "../Login";
import Signup from "../Signup";
import Search from "../../pages/Search";
import Profile from "../../pages/Profile";
import "./header.css";

const Header = () => {
  return (
    <Router>
      <Navigator></Navigator>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/contacts" component={Contacts} /> 
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
    </Router>
  );
};

export default Header;
