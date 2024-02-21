import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const FourCards = () => {
    return (
        <main>
            {/** start side menu */}
      <div className="row d-flex justify-content-center align-items-center p-4">
      <div className="w3-center w3-padding-48 pt-0">
            <span className="w3-xlarge w3-bottombar w3-border-black w3-padding-16" style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, .5)"}}>
              <b style={{fontSize:'2.5rem'}}>WHAT WE DO BEST...</b>
            </span>
          </div>
        <div className="col-sm-12 col-md-3 col-lg-3 px-4  justify-content-center align-items-center">
        <div className="w3-m3 w3-light-grey text-black w3-container w3-padding-16 p-4">
          <div className="m-1">
            <h3 style={{color:'black'}}>SEARCH ENGINE STRATEGIES</h3>
            <p style={{ fontSize: "12px", fontWeight:'200' }}> Techniques and practices aimed at improving a website's visibility and ranking on search engine results pages.</p>
            <hr />
           <ul style={{ fontSize: "12px" }}>
          <li>SEARCH-ENGINE OPTIMIZATION</li>
          <li>SEARCH-ENGINE MARKETING</li>
          <li>PAY-PER-CLICK</li>
            </ul>
            <hr />
            <p>LEARN MORE ABOUT STRATEGIC MANIPULATIOM</p>
            <div className="text-center">
        <Button variant="info" size="sm" href="/contact" alt='contact'>
          Get Started
        </Button>{' '}
        <Button  variant="dark" size="sm" href="/contact" alt='contact' style={{paddingLeft:'20px', paddingRight:'20px'}}>
          Pricing
        </Button>
      </div>
          </div>
          </div>
        </div>
    
        <div className="col-sm-12 col-md-3 col-lg-3 mt-2 px-4 justify-content-center align-items-center">
        <div className="w3-m3 w3-container w3-padding-16 p-4 w3-grey text-black">
          <div className="m-1">
            <h3 style={{color:'black'}}>CONTENT CREATION</h3>
            <p style={{ fontSize: "12px" }}>
            "Creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined consumer."
            </p>
            <hr />
           <ul style={{ fontSize: "12px" }}>
          <li>TARGET MARKET</li>
          <li>BRAND STORY-TELLING</li>
          <li>PROFITABLE CUSTOMER ACTION</li>
            </ul>
            <hr />
            <p>LEARN MORE ABOUT STRATEGIC MANIPULATIOM</p>

            <div className="text-center">
        <Button variant="info" size="sm" href="/contact" alt='contact'>
          Get Started
        </Button>{' '}
        <Button  variant="dark" size="sm" href="/contact" alt='contact' style={{paddingLeft:'20px', paddingRight:'20px'}}>
          Pricing
        </Button>
      </div>
          </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-3 col-lg-3 mt-2 px-4 justify-content-center align-items-center w3-dark-grey text-white">
        <div className="w3-m3 w3-container w3-padding-16 p-4">
          <div className="m-1">
            <h3 style={{color: 'white'}}>SOCIAL MEDIA MARKETING</h3>
            <p style={{ fontSize: "12px" }}>
            Harnessing the vast reach and influence of its platform to connect with customers on a more personal level.

            </p>
            <hr />
           <ul style={{ fontSize: "12px" }}>
          <li>BRAND AWARENESS</li>
          <li>AUDIENCE ENGAGEMENT</li>
          <li>QUALITY CONTENT DISTRIBUTION</li>
            </ul>
            <hr />
<p>LEARN MORE ABOUT STRATEGIC MANIPULATIOM</p>
            <div className="text-center">
        <Button variant="info" size="sm" href="/contact" alt='contact'>
          Get Started
        </Button>{' '}
        <Button  variant="light" size="sm" href="/contact" alt='contact' style={{paddingLeft:'20px', paddingRight:'20px'}}>
          Pricing
        </Button>
      </div>
          </div>
        </div>
        </div>

        <div className="col-sm-12 col-md-3 col-lg-3 mt-2 px-4 justify-content-center align-items-center">
        <div className="w3-m3 w3-black w3-container w3-padding-16 p-4">
          <div className="m-1">
            <h3 style={{color:'white'}}>EMAIL <br></br> MARKETING</h3>
            <p style={{ fontSize: "12px" }}>
            Sending targeted messages and promotional content direct via email to nurture leads or encourage loyalty.
            </p>
            <hr />
           <ul style={{ fontSize: "12px" }}>
          <li>TARGETED CAMPAIGNS</li>
          <li>AUTOMATION</li>
          <li>PERFORMANCE TRACKING TOOLS</li>
            </ul>
            <hr />
            <p>LEARN MORE ABOUT STRATEGIC MANIPULATIOM</p>
            <div className="text-center">
        <Button variant="info" size="sm" href="/contact" alt='contact'>
          Get Started
        </Button>{' '}
        <Button  variant="light" size="sm" href="/contact" alt='contact' style={{paddingLeft:'20px', paddingRight:'20px'}}>
          Pricing
        </Button>
      </div>
          </div>
        </div>
      </div>
      </div>
      </main>

    );
    };

export default FourCards;