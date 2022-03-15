import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigator from '../Navigator';
import Profile from '../Profile';
import Contacts from '../Contacts';
import Home from '../../pages/Home';
import LoginForm from '../Login';
import Signup from '../Signup';
import './header.css';

const Header = () => {
  return (
    <Router>
      <Navigator></Navigator>
      <div>
        <Route path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/contacts" component={Contacts} /> 
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  );
};

export default Header;


