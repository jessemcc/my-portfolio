import "./NavBar.scss";
import logo from "../../assets/logo/jm-logo.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar expand="sm" fixed="top" className="nav">
      <Container fluid className="nav__container">
        <Navbar.Brand>
          <Link to="/" className="nav__link-logo">
            <img src={logo} alt="Jesse McConnell Logo" className="nav__logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link className="link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/about">
                About Me
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/projects">
                My Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/contact">
                Contact Me
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
