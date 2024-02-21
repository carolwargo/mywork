import React from "react";
import HeaderBlack from "../../Navbar/NavbarBlack";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";
import { Button } from "react-bootstrap";
import CoverResize from "../../../assets/images/CoverResize.png";


const DigitalHeader = () => {
  return (

    <main style={{ fontFamily: "raleway" }}>
      {/** start nav menu*/}
      <HeaderBlack />
      {/** end nav menu*/}
      {/** start actual header*/}
      <div
        className="container-fluid py-5 bg-black text-white"
        style={{ backgroundImage: `url(${CoverResize})` }}
      >
        <div className="row d-flex px-4 justify-content-center align-items-center text-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="story-essentials-body p-2 ">
              <div className="story-essentials-title my-2">
                <h4 style={{ fontWeight: "400" }}>
                  Amplify your brand's online presence....
                </h4>
                <h1
                  className=""
                  style={{
                    color: "#00FFFF",
                    fontSize: "4rem",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
                  }}
                >
                  {" "}
                  DIGITAL{" "}
                  <span
                    style={{
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
                      color: "#FDC5E8",
                    }}
                  >
                    MARKETING
                  </span>
                </h1>
                <h3
                  className="digital-marketing-text px-1"
                  style={{ fontWeight: "400" }}
                >
                  <i>
                    Leverage the power of the internet to{" "}
                    <span style={{ color: "#00ffff" }}>CONNECT </span>to your
                    target audience,
                    <span style={{ color: "#00ffff" }}> BUILD </span> brand
                    awareness, and{" "}
                    <span style={{ color: "#00ffff" }}> DRIVE</span> User
                    engagement with custom strategies tailored to your specific
                    needs.
                  </i>
                </h3>
                <br />
                <br />
                <div className="container">
                  <h5 className="pb-2 mb-1">Contact us now to get started...</h5>
                  <Button variant="outline-info" size="lg" className="px-2">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      );
};

export default DigitalHeader;
