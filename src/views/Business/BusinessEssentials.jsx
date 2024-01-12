import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

import YogaLetters from "../../assets/images/YogaStory/YogaLetters.png";
import YogaDay from "../../assets/images/YogaStory/YogaDay.png";
import YogaSteps3 from "../../assets/images/YogaStory/YogaSteps3.png";
import YogaClass from "../../assets/images/YogaStory/YogaClass.png";
import YogaMat from "../../assets/images/YogaStory/YogaMat.png";
import YogaMember from "../../assets/images/YogaStory/YogaMember.png";
import YogaMorning from "../../assets/images/YogaStory/YogaMorning.png";

const BusinessEssentials = () => {
  return (
    <main className="business-essentials p-3">
      <h1>Business Essentials</h1>
      <p>
        {" "}
        Brand identity & Logo Design, Forms, Post Cards, Promotional Items,
        Email Templates, Email Campaigns
      </p>
      <div>
        <div className="row essentials-list">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h3>Brand Identity & Logo Design</h3>
            <ul>
              <li>Logo Design</li>
              <li>Brand Idenity & Branding Guide</li>
              <li>Business Cards</li>
              <li>Letterhead</li>
              <li>Custom Forms</li>
              <li>Email Marketing</li>
              <li>Signage</li>
              <li>Social Media Campaigns</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h3>Brand Identity & Logo Design</h3>
            <ul>
              <li>Logo Design</li>
              <li>Brand Idenity & Branding Guide</li>
              <li>Business Cards</li>
              <li>Letterhead</li>
              <li>Custom Forms</li>
              <li>Email Marketing</li>
              <li>Signage</li>
              <li>Social Media Campaigns</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row business-gallery">
        <div className="col-sm-12 col-md-3 col-lg-3">
      
              <MDBCard>
                <MDBCarousel showControls fade showIndicators={false}>
                  <MDBCarouselItem itemId={1}>
                    <img
                      src={YogaLetters}
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId={2}>
                    <img
                      src={YogaDay}
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId={3}>
                    <img
                      src={YogaSteps3}
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId={4}>
                    <img
                      src={YogaClass}
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId={5}>
                    <img
                      src={YogaMat}
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId={6}>
                    <img
                      src={YogaMember}
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId={7}>
                    <img
                      src={YogaMorning}
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                  
                </MDBCarousel>
                <MDBCardBody>
                  <MDBCardTitle>Instagram Story Campaign</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
</div> 
<div className="col-sm-12 col-md-3 col-lg-3">
              <MDBCard>
                <MDBCarousel showControls fade showIndicators={false}>
                  <MDBCarouselItem itemId={1}>
                    <img
                      src={YogaLetters}
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId={2}>
                    <img
                      src={YogaDay}
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId={3}>
                    <img
                      src={YogaSteps3}
                      className="d-block w-100"
                      alt="..."
                    />
                  </MDBCarouselItem>
                </MDBCarousel>
                <MDBCardBody>
                  <MDBCardTitle>Instagram Story Campaign</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
          
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quaerat tempore nesciunt et. Qui optio minus a fuga reprehenderit
            voluptates, dolorem consectetur placeat est eum nobis atque debitis
            nulla maxime.
          </p>
        </div>
      </div>
 </main>
  );
};

export default BusinessEssentials;
