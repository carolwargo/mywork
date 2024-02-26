import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import { Link } from "react-router-dom";
import { HiOutlineHomeModern } from "react-icons/hi2";

import './headerBlack.css';

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
    <Navbar expand="lg" className={`bg-black ${isNavbarFixed ? 'fixed-navbar' : ''}`} style={{ fontFamily:'Raleway', boxShadow:'1px 1px 4px gray' }}>
    <Container fluid className='mx-2'>
      <Navbar.Brand href="/" style={{
        textShadow: "1px 1px 2px rgba(0, 0, 0, 2.8)",
        color:  "#FDC5E8",
        fontSize: "1.5rem"
      }}>2<span style={{color: '#00FFFF', fontSize:'1.2rem'}}>FACE</span></Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll" id='navbarToggle' style={{ borderColor: 'white', backgroundColor:'white' }} />
 <Navbar.Collapse id="navbarScroll" className='text-white'>
          <Nav
            className="me-auto my-2 my-lg-0 align-items-center "
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="/" className='align-items-center'><HiOutlineHomeModern style={{boxShadow: '1px 1px 4px #00FFFF'}}/></Nav.Link>
            <Nav.Link href="/about" 
                ><span style={{
                  textShadow: "1px 1px 2px ",
                    color:' '
                }}>About Us</span>
                </Nav.Link>
                <Nav.Link href="/test" >Test</Nav.Link>
            <Nav.Link href="/posts" >Posts</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/graphic-design" >Graphics</Nav.Link>
            <Nav.Link href="/web-development" >Web Development</Nav.Link>
            <Nav.Link href="/digital-marketing" >Digital Marketing</Nav.Link>
            
            <NavDropdown title="Services" id="navbarScrollingDropdown" style={{
                  textShadow: "1px 1px 2px "
                }}>
              <NavDropdown.Item href="#action3" style={{fontFamily:'serif'}}>tbd</NavDropdown.Item>
              <NavDropdown.Item href="#action4" style={{fontFamily:'serif'}}>Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" style={{fontFamily:'serif'}}>Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <hr  className='text-white'/>
          <Nav className="d-flex justify-content-center align-items-center">
            <div>
              <ul className="navbar-nav ms-auto mb-2 mb-md-0 justify-content-center align-items-center">
                <li>
                  <Nav.Link href="blog"><span style={{
                  textShadow: "1px 1px 2px ",
                  color:' '
                }}>Blog</span></Nav.Link>
                </li>
                <li className="nav-item justify-content-center" >
                  <Nav.Link className="nav-link" to="/contact">Contact</Nav.Link>
                </li>
                <li className="nav-item justify-content-center">
                  <Nav.Link className="nav-link" to="/login">
                    <i className="bi bi-person"></i> Login
                  </Nav.Link>
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
