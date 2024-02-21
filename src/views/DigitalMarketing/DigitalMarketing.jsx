import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import FourCards from "../../components/DigitalMarketing/Cards.jsx/FourCards.jsx";
import DigitalHeader from "../../components/DigitalMarketing/DigitalHeader/DigitalHeader.jsx";
import MainImage from "../../assets/images/DigitalMarketing/main image.png";
import SocialMedia from "../../components/DigitalMarketing/SocialMedia/SocialMedia.jsx";

const DigitalMarketing = () => {
  return (
    <main style={{ fontFamily: "raleway" }}>
    <DigitalHeader />
      {/** end actual header*/}
      {/** start BREADCRUMBS*/}
      <div className="container-fluid mt-3 px-5">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active">Digital Marketing</li>
        </ul>
      </div>
      {/** end BREADCRUMBS*/}
 {/**start intro and image*/}
      <div className="row d-flex justify-content-center align-items-center p-4">
        <div className="col-sm-12 col-md-4 col-lg-4 px-4">
          <div className="container justify-content-center align-items-center mt-2">
            <h5>ENHANCE PERFORMANCE & MAXIMIZE YOUR POTENTIAL</h5>
            <h1
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                color: "black",
              }}
            >
              DIGITAL STRATEGIES
            </h1>
            <br />
            <p>
              Digital marketing is a dynamic and multifaceted approach to
              promoting products, services, or brands through various online
              channels. Digital avenues play crucial roles in fostering brand
              visibility and interaction. Each channel presents a unique canvas
              for businesses to paint their stories, creating dynamic
              experiences that resonate with diverse audiences.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8 px-4">
          <div className="container justify-content-center align-items-center mt-5">
            <img
              src={MainImage}
              alt="MainImage"
              className="mb-2 border border-black"
              style={{
                width: "100%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p className="text-center" style={{ fontSize: "12px" }}>
              {" "}
              <b>
                {" "}
                <i>"SAMPLE: digital marketing campaign"</i>
              </b>
            </p>
          </div>
        </div>
     <div>
     <br />
     <br />
<div className="container p-3 mb-4 text-center">
  <br />
  <h5><b>Ready to take your business to new heights? </b></h5>
<p className='mx-1 px-5'>
Our team of marketing experts are here to help you achieve your goals.  
 <span className="mx-1 mb-3">
   <a href="/contact" className="text-decoration-none link-info">
<b>Contact us</b> </a>
  </span> today to get started.
              </p>
              </div>
      </div>
      </div>
      {/**end intro and image */}



  <FourCards />

      <SocialMedia />
      <br></br>
      <br></br>

      {/**EMAIL CAMPAIGNS CONTAINER */}
    
    </main>
  );
};

export default DigitalMarketing;
