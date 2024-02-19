import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Business from "../../assets/images/Business.png";
import Navbar from "../../components/Navbar/NavbarBlack";
//import SideNav from "../../components/Graphics/SideNav/SideNav";

const Test = () => {
  return (
    <div style={{ fontFamily: "raleway" }}>
        <Navbar/>
      <Container className="p-4 px-0">
        {/*Intro Row */}
        <Row className="d-flex py-4 justify-content-center">
         
          <Col xs={12} md={8}>
            <h1 style={{ fontSize: "4rem" }}>SERVICE MENU</h1>
            <br />
            <br />
            <br />
            <h3>Services & Pricing</h3>
            <p>
              DESCRIPTION; Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Culpa officia totam architecto placeat at vitae amet facilis
              inventore. Porro vitae possimus expedita. Dolores accusantium
              accusamus mollitia quaerat architecto! Natus, quod.
            </p>
          </Col>
          <Col
            xs={12}
            md={4}
            className="p-3 d-flex align-items-center"
          >
            <div
              className="card rounded-0"
              style={{ boxShadow: "2px 2px 5px black" }}
            >
              <div className="rounded-0">
                {/*start menu ul */}
                <div className="w3-card w3-margin m-4 align-items-center">
                  {" "}
                  {/*container end header popular posts */}
                  <ul className="w3-ul w3-hoverable w3-white align-items-center">
                    <li className="w3-padding-8 d-flex align-items-center">
                      {/*list-item-3 start popular posts */}
                      <img
                        src={Business}
                        alt="Business"
                        className="w3-left w3-margin-right"
                        style={{ width: "18%" }}
                      ></img>
                      <span className="w3-large"><b>GRAPHIC DESIGN</b></span>
                    </li>
                    {/*list-item-1 end popular posts */}
                    <li className="w3-padding-8 d-flex align-items-center">
                      {/*list-item-2 start popular posts */}
                      <img
                        src={Business}
                        alt="Business"
                        className="w3-left w3-margin-right"
                        style={{ width: "18%" }}
                      ></img>
                      <span className="w3-large"><b>WEB DESIGN</b></span>
                    </li>
                    {/*list-item-2 end popular posts */}
                    <li className="w3-padding-8 d-flex align-items-center">
                      {/*list-item-3 start popular posts */}
                      <img
                        src={Business}
                        alt="Business"
                        className="w3-left w3-margin-right"
                        style={{ width: "18%" }}
                      ></img>
                     <span className="w3-large"><b>DIGITAL MARKETING</b></span>
                    </li>
                    {/*list-item-3 end popular posts */}
                    <li className="w3-padding-8 d-flex align-items-center">
                      {/*list-item-3 start popular posts */}
                      <img
                        src={Business}
                        alt="Business"
                        className="w3-left w3-margin-right"
                        style={{ width: "18%" }}
                      ></img>
                      <span className="w3-large"><b>GRAPHIC DESIGN</b></span>
                    </li>
                  </ul>
                  {/*list end */}
                </div>
                {/*card end for all elements*/}
              </div>
            </div>
          </Col>

        </Row>

        <br></br>

      
      </Container>
    </div>
  );
};

export default Test;
