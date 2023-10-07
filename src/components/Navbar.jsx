/** @format */

import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import planet from '../assets/planet.png';

function Header() {
  const location = useLocation();

  return (
    <Navbar sticky="top" bg="light" expand="lg" className="border-bottom px-5">
      <Container fluid>
        <NavLink to="/" className="navbar-brand d-flex align-center">
          <img
            src={planet}
            alt="space travelers' hub logo"
            width="40"
            height="40"
          />
          <span className="ms-3 fw-bold fs-3">Space Travelers&apos; Hub</span>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <NavLink
                className={`nav-link text-primary bold ${
                  location.pathname === '/rockets' ? 'active-link' : ''
                }`}
                to="/rockets"
              >
                Rockets
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className={`nav-link text-primary bold ${
                  location.pathname === '/missions' ? 'active-link' : ''
                }`}
                to="/missions"
              >
                Missions
              </NavLink>
            </Nav.Item>
            <div className="vr bold" />
            <Nav.Item>
              <NavLink
                className={`nav-link text-primary bold ${
                  location.pathname === '/profile' ? 'active-link' : ''
                }`}
                to="/profile"
              >
                My Profile
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
