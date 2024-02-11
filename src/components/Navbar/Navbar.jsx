import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { HiOutlineHomeModern } from "react-icons/hi2";


//import './header.css';  

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"
    style={{fontFamily:'Poppins, sans-serif'}}>
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1"><HiOutlineHomeModern/></Nav.Link>
            <Nav.Link href="/" >Graphics</Nav.Link>
            <Nav.Link href="/web-development" >Web Development</Nav.Link>
            <Nav.Link href="/digital-marketing" >Digital Marketing</Nav.Link>
            
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" style={{fontFamily:'serif', }}>tbd</NavDropdown.Item>
              <NavDropdown.Item href="#action4" style={{fontFamily:'serif', }}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" style={{fontFamily:'serif'}}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          {/** <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
             */} 
          </Nav>
          <Nav className="d-flex">
          <div>
         
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 justify-content-center align-items-center">
  <li>
  <Nav.Link href="blog" >Blog</Nav.Link>
  </li>
  <li className="nav-item justify-content-center">
    <Link className="nav-link" to="/contact">Contact
    </Link>
  </li>
  <li className="nav-item justify-content-center">
    <Link className="nav-link" to="/login">
      <i className="bi bi-person"></i> Login
    </Link>
  </li>
</ul>
        </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;