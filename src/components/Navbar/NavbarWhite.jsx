import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { HiOutlineHomeModern } from "react-icons/hi2";

import './header.css';

function NavScrollExample() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsNavbarFixed(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`bg-body-tertiary ${isNavbarFixed ? 'fixed-navbar' : ''}`} style={{ fontFamily:'Raleway', boxShadow:'1px 1px 4px gray' }}>
      <Container fluid>
        <Navbar.Brand href="/" style={{
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 2.8)",
                  color: "#F63DB0",
                  fontSize: "2rem"
                }}>2<span style={{color: '#00FFFF', fontSize:'1.6rem'}}>FACE</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="/" className='align-items-center'><HiOutlineHomeModern style={{boxShadow: '1px 1px 4px #00FFFF'}}/></Nav.Link>
            <Nav.Link href="/about" 
                ><span style={{
                  textShadow: "1px 1px 2px #F63DB0",
                }}>About Us</span>
                </Nav.Link>
                <Nav.Link href="/test" >Test</Nav.Link>
            <Nav.Link href="/posts" >Posts</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/" >Graphics</Nav.Link>
            <Nav.Link href="/web-development" >Web Development</Nav.Link>
            <Nav.Link href="/digital-marketing" >Digital Marketing</Nav.Link>
            
            <NavDropdown title="Services" id="navbarScrollingDropdown" style={{
                  textShadow: "1px 1px 2px #F63DB0",
                }}>
              <NavDropdown.Item href="#action3" style={{fontFamily:'serif'}}>tbd</NavDropdown.Item>
              <NavDropdown.Item href="#action4" style={{fontFamily:'serif'}}>Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" style={{fontFamily:'serif'}}>Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="d-flex">
            <div>
              <ul className="navbar-nav ms-auto mb-2 mb-md-0 justify-content-center align-items-center">
                <li>
                  <Nav.Link href="blog"><span style={{
                  textShadow: "1px 1px 2px #F63DB0",
                }}>Blog</span></Nav.Link>
                </li>
                <li className="nav-item justify-content-center">
                  <Link className="nav-link" to="/contact">Contact</Link>
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
