import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import { GiPalette } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { GiSmartphone } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import '../../App.css';  

const TestDigitalMarketing = () => {

    return (
        <div>
            <h1>Test Digital Marketing</h1>
            <div>
              <div className='row d-flex p-lg-5 justify-content-center'>
                 <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
        <a href='/' id='digital-icon-arrow' style={{ fontSize: '12rem' }}>
          <BsGraphUpArrow className='rounded p-5 shadow' id='digital-icon-arrow'/></a> 
        <h4>icon header</h4>
    </div>
    <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
        <a href='/' id='digital-icon-book' style={{ fontSize: '12rem' }}>
          <SlBookOpen className='rounded p-5 shadow' id='digital-icon-book'/></a> 
        <h4>icon header</h4>
    </div>
    <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
        <a href='/' id='digital-icon-phone' style={{ fontSize: '12rem' }}>
          < GiSmartphone className='rounded p-5 shadow' id='digital-icon-phone'/></a> 
        <h4>icon header</h4>
    </div>
    <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
        <a href='/' id='digital-icon-mail' style={{ fontSize: '12rem' }}>
          <SiMinutemailer className='rounded p-5 shadow' id='digital-icon-mail'/></a> 
        <h4>icon header</h4>
    </div>
              </div>
  </div>
        </div>
    )
};

export default TestDigitalMarketing;