import "./NavBar.scss";
import logo from "../../assets/logo/jm-logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleContactClick = (e, sectionId) => {
    e.preventDefault();
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Navbar expand="sm" fixed="top" className="nav">
      <Container fluid className="nav__container">
        <Navbar.Brand>
          <Link to="/" className="nav__link-logo">
            <img src={logo} alt="Jesse McConnell Logo" className="nav__logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="nav__collapse-container"
          id="basic-navbar-nav collapse-container"
        >
          <Nav className="nav__link-container ms-auto">
            <Nav.Link>
              <Link className="nav__link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav__link" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav__link" to="/projects">
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="nav__link"
                to="/"
                onClick={(e) => handleContactClick(e, "contact")}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
