import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

function Header() {
  return (
    <Navbar sticky="top" bg="light" expand="lg" className="border-bottom">
      <Container fluid>
        <NavLink to="/" className="navbar-brand d-flex align-center">
          <img src={planet} alt="space travelers' hub logo" width="40" height="40" />
          <span className="ms-3 fw-bold fs-3">Space Travelers&apos; Hub</span>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <NavLink className="nav-link active-link text-primary" to="/rockets">
                Rockets
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link active-link text-primary" to="/missions">
                Missions
              </Nav.Link>
            </Nav.Item>
            <div className="vr" />
            <Nav.Item>
              <Nav.Link className="nav-link active-link text-primary" to="/profile">
                My Profile
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
