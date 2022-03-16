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
        <div>
          <Route path="/profile" component={Profile} />
          <Route path="/contacts" component={Search} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={Signup} />
        </div>
      </Switch>
    </Router>
  );
};

export default Header;
