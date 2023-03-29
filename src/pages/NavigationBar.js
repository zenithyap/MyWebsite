import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLink } from 'react-router-hash-link';
import "bootstrap/js/src/collapse.js";


export default function NavigationBar() {
  return (
    <nav className='navbar navbar-dark navbar-expand-md' >
      <Container>
      <Navbar.Brand href="/">
        <img style={{height:'50px'}} src={require("../images/logo.png")} alt=''/>
      </Navbar.Brand>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-label="Toggle navigation"
        aria-expanded="false" 
        aria-controls="navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className='collapse navbar-collapse justify-content-end' id='navbarCollapse'>
        <Nav className='justify-content-end'>
          <Nav.Link className='link-secondary' as={Link} to="/">Home</Nav.Link>
          <Nav.Link className='link-secondary' as={HashLink} to="/#about_me">About Me</Nav.Link>
          <Nav.Link className='link-secondary' as={Link} to="/Hobbies">Hobbies</Nav.Link>
          <Nav.Link className='link-secondary' as={Link} to="/record">Record</Nav.Link>
        </Nav>
      </div>
      </Container>
    </nav>
  )
}