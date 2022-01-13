import NavImg from '../../../src/images/nav.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Navbar,Container,Nav } from 'react-bootstrap';
const NavBarPage = (props) => {
  return (
      <Navbar expand="lg" className = 'navbar-page'>
  <Container>
    <Navbar.Brand href="#home"><img src={NavImg} alt="Swastik_Image" className="nav_logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/" className="nav_links" style={{color:"white"}}>Home</Nav.Link>
        <Nav.Link href="/register" className="nav_links" style={{color:"white"}}>Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavBarPage;
