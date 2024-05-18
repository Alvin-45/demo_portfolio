import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navpart() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-light w-100" style={{position:'fixed'}}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#work" className=' text-dark'><b>Work</b></Nav.Link>
            <Nav.Link href="#promo"  className=' text-dark'><b>Experiments</b></Nav.Link>
            <Nav.Link href="#about"  className=' text-dark'><b>About</b></Nav.Link>
          </Nav>
          <Nav className="me-2 d-flex justify-content-evenly" style={{width:'110px'}}>
            <Nav.Link href="#home" className='bg-dark rounded'><i className="fa-brands fa-linkedin text-light"></i></Nav.Link>
            <Nav.Link href="#home" className='bg-dark rounded'><i className="fa-brands fa-instagram text-light"></i></Nav.Link>
            <Nav.Link href="#home" className='bg-dark rounded'><i className="fa-brands fa-x-twitter text-light"></i></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navpart