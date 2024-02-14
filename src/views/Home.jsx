import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";
//import Graphics from "../components/Graphics/Graphics.jsx";
import "../App.css";
//import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


//import Business from "../assets/images/Business.png";
//import Organizations from "../assets/images/Organizations.png";
import YogaSet from "../assets/images/YogaStory/YogaSet.png";
import Header from "../components/Header/Header.jsx";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="container mt-5" style={{fontFamily:'sans-serif'}}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
            <div className="story-essentials-body p-2 justify-content-center align-bottom">
              <div className="story-essentials-title">
                <h1 className="mt-0"
                 style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'black'
                }}
                >TELL YOUR STORY...</h1>
              </div>
              <p className="story-essentials-text" style={{fontSize:'14px', fontFamily:'sans-serif'}}>
                In the enchanting realm of digital storytelling, businesses are
                weaving captivating tales using the magical wand of social media
                to capture an audience.
              </p>
              <p style={{fontSize:'14px', fontFamily:'sans-serif'}}>
                Crafting a compelling narrative on social platforms not only
                establishes a brand's online presence but also serves as a
                dynamic avenue to entice users to explore further.{" "}
              </p>
            </div>
          </div>

          {/*recruit YOGA COMPLETE start */}
          <div className="col-sm-12 col-md-8 col-lg-8 d-flex flex-column justify-content-center align-items-center">
            <img
              src={YogaSet}
              alt="YogaSet"
              className="mb-2 border border-black"
              style={{
                width: "100%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px" }}>
              {" "}
              <i>"SAMPLE: digital marketing campaign"</i>
            </p>
          </div>
        </div>
      </div>


      <div className="container mt-3">
        <div className="row d-flex p-3 justify-content-center align-items-center">
        <p>DIGITAL MARKETING BEYOND SOCIAL MEDIA</p>
        <h1   style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:' black'
                }}>DIGITAL MARKETING</h1>
     
      <p style={{fontFamily:'sans-serif'}}>
     Digital avenues play crucial roles in fostering brand visibility and interaction. Each channel presents a unique canvas for businesses to paint their stories, creating dynamic experiences that resonate with diverse audiences.
</p>
<p className='text-center'>
                <a href="/digital-marketing" className="text-decoration-none">
                  See more about digital marketing
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
</div>
</div>




      {/**Business Essentials Container 
      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src={Business}
              alt="Business"
              className="mb-2 border border-black"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
            <div className="business-essentials-body p-5 justify-content-center align-bottom">
              <div className="business-essentials-title">
                <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
                <h1   style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'black'
                }}>BUSINESS ESSENTIALS</h1>
              </div>
              <p className="business-essentials-text" style={{fontSize:'14px', fontFamily:'sans-serif'}}>
                Explore our range of "Business Essentials" custom products
                tailored to your requirements. We offer a variety of design
                solutions to include graphic and digital design, promotional
                campaigns, as well as software solutions and server-side
                integrations.
              </p>

              <p className="mt-5">
                <a href="/business-essentials" className="text-decoration-none">
                  See Business Essentials
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="organizations-body p-5 justify-content-center align-items-center">
              <div className="organizations-title">
                <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
                <h1   style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'black'
                }}>ORGANIZATIONS</h1>
              </div>
              <p className="organizations-text" style={{fontSize:'14px', fontFamily:'sans-serif'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi perspiciatis consequatur magnam, aperiam alias saepe
                reprehenderit id animi soluta quae, neque commodi ratione dolor.
                Dolorum ut assumenda inventore ratione nesciunt!
              </p>
              <p className="mt-5">
                <a
                  href="/graphic-design/contact-form"
                  className="text-decoration-none"
                >
                  See Organization Items
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src={Organizations}
              alt="Organizations"
              className="mb-2 border border-black"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
        </div>
      </div>



      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src={Business}
              alt="Business"
              className="mb-2 border border-black"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
            <div className="spacial-event-body p-5 justify-content-center align-bottom">
              <div className="spacial-event-title">
                <p>SHOP FOR THAT SPECIAL DAY</p>
                <h1   style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'black'
                }}>SPECIAL EVENTS</h1>
              </div>
              <p className="special-event-text" style={{fontSize:'14px', fontFamily:'sans-serif'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi perspiciatis consequatur magnam, aperiam alias saepe
                reprehenderit id animi soluta quae, neque commodi ratione dolor.
                Dolorum ut assumenda inventore ratione nesciunt!
              </p>
              <p className="mt-5">
                <a
                  href="/graphic-design/contact-form"
                  className="text-decoration-none"
                >
                  See Special Event Items
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="organizations-body p-5 justify-content-center align-items-center">
              <div className="organizations-title">
                <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
                <h1   style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'black'
                }}>ORGANIZATIONS</h1>
              </div>
              <p className="organizations-text" style={{fontSize:'14px', fontFamily:'sans-serif'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi perspiciatis consequatur magnam, aperiam alias saepe
                reprehenderit id animi soluta quae, neque commodi ratione dolor.
                Dolorum ut assumenda inventore ratione nesciunt!
              </p>
              <p className="mt-5">
                <a
                  href="/graphic-design/contact-form"
                  className="text-decoration-none"
                >
                  See Organization Items
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src={Organizations}
              alt="Organizations"
              className="mb-2 border border-black"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
        </div>
      </div>



      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src={Business}
              alt="Business"
              className="mb-2 border border-black"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
            <div className="spacial-event-body p-5 justify-content-center align-bottom">
              <div className="spacial-event-title">
                <p>SHOP FOR THAT SPECIAL DAY</p>
                <h1   style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'black'
                }}>SPECIAL EVENTS</h1>
              </div>
              <p className="spacial-event-text" style={{fontSize:'14px', fontFamily:'sans-serif'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi perspiciatis consequatur magnam, aperiam alias saepe
                reprehenderit id animi soluta quae, neque commodi ratione dolor.
                Dolorum ut assumenda inventore ratione nesciunt!
              </p>
              <p className="mt-5">
                <a
                  href="/graphic-design/contact-form"
                  className="text-decoration-none"
                >
                  See Special Event Items
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      */} 
<br></br>











    
      <br></br>
      <br></br>
     
    </main>
  );
};

export default Home;
