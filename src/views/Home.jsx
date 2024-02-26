import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import YogaSet from "../assets/images/YogaStory/YogaSet.png";
import Header from "../components/Header/Header.jsx";
//import ServicesCards from "../components/Home/ServicesCards/ServicesCards.jsx";
//import { BsGraphUpArrow } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { GiSmartphone } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import { GiPalette } from "react-icons/gi";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="container py-2 mt-3" style={{fontFamily:'sans-serif'}}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col d-flex justify-content-center align-bottom px-4">
            <div className="story-essentials-body justify-content-center align-bottom">
              <div className="story-essentials-title">
                <h1 className="mt-0"
                 style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'black'
                }}
                >TELL YOUR STORY...</h1>
              </div>
              <br />
              <div>
              <p className="story-essentials-text">
                In the enchanting realm of digital storytelling, businesses are
                weaving captivating tales using the magical wand of social media
                to capture an audience.
              </p>
              <p>
                Crafting a compelling narrative on social platforms not only
                establishes a brand's online presence but also serves as a
                dynamic avenue to entice users to explore further.{" "}
              </p>
              </div>
            </div>
          </div>

          {/*recruit YOGA COMPLETE start */}
          <div className="col-sm-12 col-md-8 col-lg-8 d-flex flex-column justify-content-center align-items-center px-4">
            <img
              src={YogaSet}
              alt="YogaSet"
              className="mb-2 border border-black"
              style={{
                width: "90%",
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

{/*start what we do services*/}

{/*start digital-marketing-home */}
<div className="bg-danger-subtle">
<div className="container text-center mt-3">
      <div className='row d-flex p-lg-5 justify-content-center'>
      <p className="mb-0 pb-0" style={{fontFamily:'Raleway'}}>
              {" "}
              <span 
              className="w3-tag" 
              style={{ 
                color: "black", 
                backgroundColor:'#FDC5E8', 
                textShadow: "2px 2px 4px #00FFFF", fontFamily:'Raleway'}}>
            <b>2FACE</b> {" "}
              </span>
             CUSTOM SERVICES... 
            </p>
      <h1 className="mt-0"
         style={{
          color:'#00FFFF', 
          fontSize:'4rem', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 3.5)',
        }}>
          WHAT 
          <span 
          style={{color:'black',  
          textShadow: '2px 2px 4px rgba(0, 0, 0, 3.5)', 
          fontFamily:'Raleway', }}>
            WE
            </span> 
            <span style={{  textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
             color: "#FDC5E8",}}>DO</span></h1>
           
            <h4>WHERE CREATIVITY KNOWS NO BOUNDS AND VISIONS BECOME REALITY!</h4>
  <p className="mx-5">Our specialty lies in crafting custom solutions that bring a touch of magic to every project. From stunning design work to fantastical development, we're here to make your digital concepts a reality! </p>
        <p>Our specialties, our niche, what we <FaHeart/> to do...</p>
                 <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
        <a href='/' id='digital-icon-palette' style={{ fontSize: '12rem' }}>
          <GiPalette className='rounded p-5 shadow' id='digital-icon-palette'/></a> 
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
   {/*end what we do services         
<div className="container">
  <div className="row">
    <ServicesCards />
    </div>
    </div>
*/ }  
      <div className="container pt-5">
        <div className="row d-flex p-1 justify-content-center align-items-center">
       <div className="col-sm-12 col-md-6 px-4">
       <h1 className="mt-4"
         style={{color:'#00FFFF', fontSize:'4rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 3.5)',}}>DIGITAL<br /> <span style={{color:'black',  textShadow: '2px 2px 4px rgba(0, 0, 0, 3.5)', fontFamily:'Raleway'}}>MARKETING</span> <span style={{  textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
             color: "#FDC5E8",}}>SERVICES</span></h1>
            <p className="" style={{fontFamily:'Raleway'}}>
              Welcome to the blog of{" "}
              <span className="w3-tag" style={{ color: "black", backgroundColor:'#FDC5E8', textShadow: "2px 2px 4px #00FFFF", fontFamily:'Raleway'}}>
            <b>2FACE</b>
              </span>
            </p>
       <p className="mb-0">DIGITAL MARKETING BEYOND SOCIAL MEDIA</p>
        <h1   style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:' black'
                }}>DIGITAL MARKETING</h1>
     <br />
      <p style={{fontFamily:'sans-serif'}}>
     Digital avenues play crucial roles in fostering brand visibility and interaction. Each channel presents a unique canvas for businesses to paint their stories, creating dynamic experiences that resonate with diverse audiences.
</p>
</div>

<div className="col-sm-12 col-md-6 d-flex justify-content-center">
  <div className="container">
<span className="p-4 mx-2 my-2">
SEO Strategies
</span>
<br />
<span className="p-4 mx-2 my-2">
Content Marketing 
</span>
<br />
<span className="p-4 mx-2 my-2">
Pays-Per-Click
</span>
</div>
<br />
<div className="container">
<span className="p-4 mx-2 my-2">
  Content Marketing
</span>
<br />
<span className="p-4 mx-2 my-2">
 Data Analytics
</span>
<br />
<span className="p-4 mx-2 my-2">
 Reputation Management
</span>
</div>
</div>
</div>

<div className="container py-3">
<p className='text-center'>
  <br />
                <a href="/digital-marketing" className="text-decoration-none">
                  See more about digital marketing
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
              <br />
              </div>
</div>


{/*end digital-marketing-home */}






{/*start web-dev-home */}
<div className="bg-secondary-subtle py-3">
<div className="container py-4">
        <div className="row d-flex p-3 justify-content-center align-items-center">
       <div className="col-sm-12 col-md-6 justify-content-center align-items-center px-4">
       <p className="mb-1">DIGITAL MARKETING BEYOND SOCIAL MEDIA</p>
        <h1   style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:' black'
                }}>WEB DEVELOPMENT</h1>
     <br />
      <p style={{fontFamily:'sans-serif'}}>
     Digital avenues play crucial roles in fostering brand visibility and interaction. Each channel presents a unique canvas for businesses to paint their stories, creating dynamic experiences that resonate with diverse audiences.
</p>
</div>
<div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
<div>
<p className="mb-2"> <b>THE VALUE OF VISUALS</b></p>
<ul>
  <li>Content Marketing</li>
  <li>Social Media Marketing</li>
  <li>Email Marketing</li>
  <li>Search Engine Optimization</li>
  <li>Pay-Per-Click</li>
</ul>
</div>
</div>
</div>
<div className="container mt-5">
<p className='text-center'>
                <a href="/digital-marketing" className="text-decoration-none">
                  See more about digital marketing
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
              </div>
</div>
</div>
{/*end web-dev-home */}

{/*start graphic-design-home */}
<div className="bg-info-subtle" >
  <br />
<div className="container py-4">
        <div className="row d-flex p-3 justify-content-center align-items-center">
       <div className="col-sm-12 col-md-6 px-4">
        <div>
       <p className="mb-1">THE VALUE OF VISUALS...</p>
        <h1   style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:' black'
                }}>GRAPHIC DESIGN</h1>
                </div>
     <br />
      <p style={{fontFamily:'sans-serif'}}>
      "Visuals possess the ability to evoke emotions and convey complex ideas instantly." <br />
      "Images have the power to convey what words cannot."
</p>
</div>
<div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
<div>
<p className="mb-2"> <b>THE VALUE OF VISUALS</b></p>
<ul>
  <li>Content Marketing</li>
  <li>Social Media Marketing</li>
  <li>Email Marketing</li>
  <li>Search Engine Optimization</li>
  <li>Pay-Per-Click</li>
</ul>
</div>
</div>
<div>
<p className='text-center'>
  <br />
  <br />
                <a href="/digital-marketing" className="text-decoration-none">
                  See more about digital marketing
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
              </div>
</div>
</div>
</div>
{/*end graphic-design-home */}

{/*start footer-home */}
<footer className="w3-container w3-dark-grey w3-padding-32 text-center">
          <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
            Previous
          </button>
          <button className="w3-button w3-black w3-padding-large w3-margin-bottom">
            Next »
          </button>
          <p style={{color: '#00FFFF',fontSize:'1.6rem' }}>
            <span style={{fontSize:'2rem',  color: "#FDC5E8" }}>2</span>
            FACE
          </p>
        </footer>
{/*end footer-home */}
<br />
<br />
    </main>
  );
};

export default Home;
