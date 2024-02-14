import React from "react";
import HomeBig from "../../assets/images/HomeBig.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/NavbarWhite";

const Header = () => {
  return (
    <header>
     <Navbar />
      <div
        id="intro-example"
        className="p-4 bg-image position-relative"
        style={{
          backgroundImage: `url(${HomeBig})`,
          backgroundSize: "cover", // Set the background size to cover the entire viewport
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Optional: Keep the background fixed while scrolling
        }}
      >
        {/* Overlay div for masking */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>

        <div className="row d-flex h-100 px-5 text-center position-relative">
       
          <div className="col-sm-12 col-md-12 col-lg-12 text-white p-3 position-relative z-index-1">
          <header className="w3-container w3-center w3-padding-32 p-2 text-white" style={{fontFamily:'Raleway'}}>
            <h1 className="mt-4"
         style={{color:'#00FFFF', fontSize:'4rem'}}>PIXELS <span style={{color:'black', textShadow: "2px 2px 4px #ffffff", fontFamily:'Raleway'}}>& </span> <span style={{  textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
             color: "#FDC5E8",}}>BITS</span></h1>
            <p className="" style={{fontFamily:'Raleway'}}>
              Welcome to the blog of{" "}
              <span className="w3-tag" style={{ color: "black", backgroundColor:'#FDC5E8', textShadow: "2px 2px 4px #00FFFF", fontFamily:'Raleway'}}>
            <b>2FACE</b>
              </span>
            </p>
          </header>  {/* end Header */}

            <h6
              className="mt-2 mb-2 "
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily:'Raleway',
                lineHeight: "1.25",
              }}
            >
              <i>"Make a lasting</i>
              <span
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
                  color: "#FDC5E8",
                }}
              >
                <b>
                  {" "}
                  VISUAL IMPACT{" "}
                </b>
              </span>
             
              <i> with  <br></br>stunning graphics or 
              build a powerful</i>
            
              <span
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
                  color: "#FDC5E8",
                }}
              >
                <b>
                  {" "}
                  ONLINE PRESENCE{" "}
                </b>
              </span>
              <i>through web development."</i>
            </h6>
            <br></br>
            <div className="p-2">
              <p>
               Click to view our Popular Post & most valued resources.
                </p>
              <Link to="/web-development">
                <button
                  type="button"
                  className="btn btn-outline-info bg-black btn-sm m-1 px-2"
                  data-mdb-ripple-init
                >
                  <b>Popular Posts</b>
                </button>
              </Link>
              {/** 
              <Link to="/digital-marketing">
                <button
                  type="button"
                  className="btn btn-outline-light bg-black btn-sm m-1 px-2"
                  data-mdb-ripple-init
                >
                  <b>Digital Marketing</b>
                </button>
              </Link>
              */}
           
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
