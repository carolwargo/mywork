import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";
//import Graphics from "../components/Graphics/Graphics.jsx";
import "../App.css";
//import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
//import Dev from "../assets/images/WebDev/Dev.png";

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
        <hr />
      </div>


{/*start digital-marketing-home */}
      <div className="container mt-3">
        <div className="row d-flex p-3 justify-content-center align-items-center">
       <div className="col-sm-12 col-md-6">
        <p>DIGITAL MARKETING BEYOND SOCIAL MEDIA</p>
        <h1   style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:' black'
                }}>DIGITAL MARKETING</h1>
     
      <p style={{fontFamily:'sans-serif'}}>
     Digital avenues play crucial roles in fostering brand visibility and interaction. Each channel presents a unique canvas for businesses to paint their stories, creating dynamic experiences that resonate with diverse audiences.
</p>
</div>
<div className="col-sm-12 col-md-6 d-flex justify-content-center">
<ul>
  <li>Content Marketing</li>
  <li>Social Media Marketing</li>
  <li>Email Marketing</li>
  <li>Search Engine Optimization</li>
  <li>Pay-Per-Click</li>
</ul>
</div>
<p className='text-center'>
                <a href="/digital-marketing" className="text-decoration-none">
                  See more about digital marketing
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
</div>
</div>
{/*end digital-marketing-home */}


{/*start web-dev-home */}
<div className="container mt-3">
        <div className="row d-flex p-3 justify-content-center align-items-center">
       <div className="col-sm-12 col-md-6">
        <p>DIGITAL MARKETING BEYOND SOCIAL MEDIA</p>
        <h1   style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:' black'
                }}>WEB DEVELOPMENT</h1>
     
      <p style={{fontFamily:'sans-serif'}}>
     Digital avenues play crucial roles in fostering brand visibility and interaction. Each channel presents a unique canvas for businesses to paint their stories, creating dynamic experiences that resonate with diverse audiences.
</p>
</div>
<div className="col-sm-12 col-md-6 d-flex justify-content-center">
<ul>
  <li>Content Marketing</li>
  <li>Social Media Marketing</li>
  <li>Email Marketing</li>
  <li>Search Engine Optimization</li>
  <li>Pay-Per-Click</li>
</ul>
</div>
<p className='text-center'>
                <a href="/digital-marketing" className="text-decoration-none">
                  See more about digital marketing
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
</div>
</div>
{/*end web-dev-home */}



{/*start graphic-design-home */}
<div className="container mt-3">
        <div className="row d-flex p-3 justify-content-center align-items-center">
       <div className="col-sm-12 col-md-6">
       <p>THE VALUE OF VISUALS...</p>
        <h1   style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:' black'
                }}>GRAPHIC DESIGN</h1>
     
      <p style={{fontFamily:'sans-serif'}}>
      "Visuals possess the ability to evoke emotions and convey complex ideas instantly." <br />
      "Images have the power to convey what words cannot."
</p>
</div>
<div className="col-sm-12 col-md-6 d-flex justify-content-center">
<ul>
  <li>Content Marketing</li>
  <li>Social Media Marketing</li>
  <li>Email Marketing</li>
  <li>Search Engine Optimization</li>
  <li>Pay-Per-Click</li>
</ul>
</div>
<p className='text-center'>
                <a href="/digital-marketing" className="text-decoration-none">
                  See more about digital marketing
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
</div>
</div>
{/*end graphic-design-home */}
<br />
<br />
    </main>
  );
};

export default Home;
