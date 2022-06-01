import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Nav from '../Nav';
import '../Sidebar/style.css';

const Sidebar = () => {

    return (
        <Menu right width={ '50%'}>
            <Nav />
        </Menu>
    )

}

export default Sidebar;