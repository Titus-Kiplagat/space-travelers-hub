import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

function Header() {
  return (
    <Navbar sticky="top" bg="light" expand="lg" className="border-bottom container">
      <Container fluid>
        <NavLink to="/" className="navbar-brand d-flex align-center">
          <img src={planet} alt="space travelers' hub logo" width="40" height="40" />
          <span className="ms-3 fw-bold fs-3">Space Travelers&apos; Hub</span>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <NavLink className="nav-link active-link text-primary bold" to="/rockets">
                Rockets
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link active-link text-primary bold" to="/missions">
                Missions
              </NavLink>
            </Nav.Item>
            <div className="vr bold" />
            <Nav.Item>
              <NavLink className="nav-link active-link text-primary bold" to="/profile">
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
