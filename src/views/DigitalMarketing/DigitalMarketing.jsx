import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import FourCards from "../../components/DigitalMarketing/Cards.jsx/FourCards.jsx";
import DigitalHeader from "../../components/DigitalMarketing/DigitalHeader/DigitalHeader.jsx";
import MainImage from "../../assets/images/DigitalMarketing/main image.png";
import SocialMedia from "../../components/DigitalMarketing/SocialMedia/SocialMedia.jsx";
import { Card, CardGroup, ListGroup } from "react-bootstrap";

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


      <div className="container">
        {/* start digital marketing card */}
    <CardGroup>
      <Card className='bg-black text-white mx-2'>
        <Card.Body className='px-3'>
          <Card.Title>
            <span 
         style={{
            color:'#00FFFF', 
         fontSize:'2.5rem', 
         textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)"
        }}>
            DIGITAL
        <br /> 
        <span 
        style={{ 
            textShadow: "2px 2px 4px rgba(255, 255, 255, 3.5)",
             color: "#FDC5E8"
            }}
             >MARKETING
             </span>
             </span>
            <p> 
                    <span
                    style={{
                        fontFamily:'Raleway', 
                        fontSize:'20px',
                        color:'#FDC5E8',
                        textShadow: "2px 2px 4px #00FFFF"
                    }}
                        >       
              {" "}
              <b>2</b>
              </span>
              <span  
              style={{ 
                color: "#00FFFF", 
                fontSize:'16px',
                textShadow: "2px 2px 4px #00FFFF", 
                fontFamily:'Raleway'}}>
            <b>FACE </b>
            {" "}
               </span>
               <span style={{fontSize:'13px'}}>
               {" "}
               digital marketing services...
               </span>
            </p>
            <b><hr /></b>
            </Card.Title>
          <Card.Text>
          <p> Digital avenues play crucial roles in fostering brand 
            visibility and interaction. Each channel presents a unique canvas for businesses to 
            paint their stories, creating dynamic experiences that resonate with diverse audiences.</p>
            <strong> Digital Marketing:</strong> Transform your brand's online presence and captivate audiences with our enchanting digital marketing strategies.
          </Card.Text>
        </Card.Body>
        <div>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>
            Cras justo odio 
            </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      </div>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
  {/* end digital marketing card */}

    {/* start digital marketing card */}
      <Card>
        <Card.Body>
        <Card.Title>
            <span 
         style={{
            color:'#00FFFF', 
         fontSize:'2.5rem', 
         textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)"
        }}>
           GRAPHIC
        <br /> 
        <span 
        style={{ 
            textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
             color: "#FDC5E8"
            }}
             >DESIGN
             </span>
             </span>
            <p className="" style={{fontFamily:'Raleway', fontSize:'14px'}}>
              {" "}
              <span className="w3-tag" 
              style={{ 
                color: "black", 
                backgroundColor:'#FDC5E8', 
                textShadow: "2px 2px 4px #00FFFF", 
                fontFamily:'Raleway'}}>
            <b>2FACE </b>
            {" "}
               </span>
               {" "}
               digital marketing services...
            </p>
            <b><hr /></b>
            </Card.Title>
          <Card.Text>
          <strong>Graphic Design:</strong> Let our talented wizards craft stunning visuals and captivating designs that leave a lasting impression.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
 {/* end graphic design card */}

    {/* start web development card */}
      <Card className='bg-black text-white  mx-2'>
        <Card.Body>
          <Card.Title>
            <span 
         style={{
            color:'#00FFFF', 
         fontSize:'2.5rem', 
         textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)"
        }}>
           WEB
        <br /> 
        <span 
        style={{ 
            textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
             color: "#FDC5E8"
            }}
             > DEVELOPMENT
             </span>
             </span>
            <p className="" style={{fontFamily:'Raleway', fontSize:'14px'}}>
              {" "}
              <span className="w3-tag" 
              style={{ 
                color: "black", 
                backgroundColor:'#FDC5E8', 
                textShadow: "2px 2px 4px #00FFFF", 
                fontFamily:'Raleway'}}>
            <b>2FACE </b>
            {" "}
               </span>
               {" "}
               digital marketing services...
            </p>
            <b><hr /></b>
            </Card.Title>
          <Card.Text>
          <p className="px-2 py-2"> Digital avenues play crucial roles in fostering brand 
            visibility and interaction. Each channel presents a unique canvas for businesses to 
            paint their stories, creating dynamic experiences that resonate with diverse audiences.</p>
            <strong>Web Design & Software Development:</strong> Enter a world of seamless user experiences and innovative solutions as our expert developers bring your digital fantasies to fruition.
          </Card.Text>
        </Card.Body>
        <div>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>
            Cras justo odio 
            </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      </div>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
        {/* end web development card */}
    </CardGroup>
    </div>


 {/**start intro and image*/}
      <div className="row d-flex justify-content-center align-items-center p-4">
        <div className="col-sm-12 col-md-4 col-lg-4 px-4">
          <div className="container justify-content-center align-items-center mt-2">
          <h1 className="mt-4"
         style={{color:'#00FFFF', fontSize:'4rem', textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)"}}>DIGITAL<br /> <span style={{  textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
             color: "#FDC5E8",}}>MARKETING</span></h1>
            <h5 className="mb-3">ENHANCE PERFORMANCE & MAXIMIZE YOUR POTENTIAL WITH 
            <span className="" style={{fontFamily:'Raleway'}}>
              <span className="w3-tag" 
              style={{ color: "black", backgroundColor:'#FDC5E8', 
              textShadow: "2px 2px 4px #00FFFF", fontFamily:'Raleway'}}>
            <b>2FACE</b>
              </span>
            </span>CUSTOM STRATEGIES...</h5> 
           
            <p style={{fontSize:'14px'}}>
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
      {/**end page introduction and image row*/}

      {/**start four cards*/}
<div>
  <FourCards />
  </div>


  <div id="social-media">
      <SocialMedia />
      </div>
      <br></br>
      <br></br>

      {/**EMAIL CAMPAIGNS CONTAINER */}
    
    </main>
  );
};

export default DigitalMarketing;
