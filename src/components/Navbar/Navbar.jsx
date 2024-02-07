import React from "react";
import './header.css'

const Navbar = () => {
    
    return (
        <div>
      <nav className="navbar align-items-center">
        <div className="brand">Logo</div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Graphics</a></li>
            <li><a href="/web-development">Web Development</a></li>
            <li><a href="digital-marketing">Digital Marketing</a></li>
            <li><a href="/">About</a></li>
           <li><a href="/">Services</a></li>
           <li><a href="/">Blog</a></li>
           <li><a href="/">Contact</a></li>
           <button className="signup">Sign Up</button>
        </ul>
        </nav>
        </div>
    );
    };

export default Navbar;