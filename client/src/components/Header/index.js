import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigator from '../Navigator';
import Profile from '../Profile';
import Contacts from '../Contacts';
import Home from '../../pages/Home';

const Header = () => {
  return (
    <Router>
      <Navigator></Navigator>
      <div>
        <Route path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/contacts" component={Contacts} /> 
      </div>
    </Router>
  );
};

export default Header;


