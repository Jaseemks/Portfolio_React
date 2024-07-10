import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

  const customNavbarStyle = {
      background: 'linear-gradient(to right, #fafc94, #e54c22)',
      border: '1px solid rgb(57, 113, 81)', // Adjust border color as needed
      borderRadius: '0px', // Adjust border radius as needed
}

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={customNavbarStyle} >
      <Container>
        <Navbar.Brand as={Link} to="/">Digital Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            
          </Nav>
          <Nav className="ms-auto">
          <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to ="/admin/product/add">Home</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              About
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Contact
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;