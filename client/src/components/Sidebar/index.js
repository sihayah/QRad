import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Navigator from '../Navigator';
import '../Sidebar/style.css';

const Sidebar = () => {

    return (
        <Menu right width={ '50%'}>
            <Navigator />
        </Menu>
    )

}

export default Sidebar;