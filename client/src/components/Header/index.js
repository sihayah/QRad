import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigator from "../Navigator";
import Home from "../../components/Home";
import LoginForm from "../Login";
import Signup from "../Signup";
import Search from "../../pages/Search";
import Profile from "../../pages/Profile";
import MyCard from "../../pages/MyCard";
import EditForm from "../../components/EditForm";
import "./header.css";

const Header = () => {
  return (
    <Router>
      <Navigator></Navigator>
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
  );
};

export default Header;
