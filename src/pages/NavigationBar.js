import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLink } from 'react-router-hash-link';

export default function NavigationBar() {
  return (
    <Navbar position='fixed' className='navbar-dark' >
      <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <Container>
        <Navbar.Brand href="/">
          <img style={{height:'50px'}} src={require("../images/logo.png")} alt=''/>
        </Navbar.Brand>
        <Nav className="mr-auto" >
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={HashLink} to="/#about_me">About Me</Nav.Link>
          <Nav.Link as={Link} to="/Hobbies">Hobbies</Nav.Link>
          <Nav.Link as={Link} to="/record">Record</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}