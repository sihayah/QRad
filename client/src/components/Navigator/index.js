import React from "react";
import { Navbar, NavbarBrand, Nav, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import './navigator.css';
import Auth from '../../utils/auth';
import { NavLink } from 'react-router-dom';

// function Navigator() {
//   const logout = event => {
//     event.preventDefault();
//     Auth.logout();
//   };

//   return (
//     <div>
//       <Navbar className="navBar">
//         <Container className="navContainer">
//           <Nav className="navLinks">
//           <LinkContainer to="/" className="brand">
//             <NavbarBrand>QRad</NavbarBrand>
//             </LinkContainer>
//             <LinkContainer to="/profile" className="navLink">
//               <Nav.Link>my QRad</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to='/profile' className="navLink">
//               <Nav.Link>profile</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/contacts" className="navLink">
//               <Nav.Link>my contacts</Nav.Link>
//             </LinkContainer>
            
//             {Auth.loggedIn() ? (
//             <>
//             <a href="/" onClick={logout}>
//               Log out
//             </a>
//             </>
//           ) : (
//             <>
//             <LinkContainer>
//               <Nav.Link to="/login" className="navLink">log in</Nav.Link>
//             </LinkContainer>
//             <LinkContainer>
//               <Nav.Link to="/signup" className="navLink">sign up</Nav.Link>
//             </LinkContainer>
//             </>
//           )}
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }
// export default Navigator;


function Navigator() {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      <div className="navBar">
        <div className="navContainer">
          <div className="navLinks">
           <NavLink to='/' id="brand" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                QRad
            </NavLink>
            <NavLink to='/profile' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                profile
            </NavLink>
            <NavLink to='/contacts' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                my contacts
            </NavLink>
            
            {Auth.loggedIn() ? (
            <>
            <a href="/" onClick={logout}>
              Log out
            </a>
            </>
          ) : (
            <>
              <NavLink to="/login" className="navLink">log in</NavLink>
              <NavLink to="/signup" className="navLink">sign up</NavLink>           
            </>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navigator;