import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import YogaSet from "../assets/images/YogaStory/YogaSet.png";
import Header from "../components/Header/Header";
//import ServicesCards from "../components/Home/ServicesCards/ServicesCards.jsx";
//import { BsGraphUpArrow } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { GiSmartphone } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import { GiPalette } from "react-icons/gi";
import { GiLaptop } from "react-icons/gi";
import GraphicServices from "../components/Home/GraphicServices/GraphicServices.jsx";
import Business from "../assets/images/Business.png";
//import { Container, Row } from "react-bootstrap";


const Home = () => {
  return (
    <main>
      <Header />
     
      <div className="container py-2 mt-3" style={{fontFamily:'sans-serif'}}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col d-flex justify-content-center align-bottom px-4"
          id="what-we-do">
            <div className="story-essentials-body justify-content-center align-bottom">
              <div className="story-essentials-title">
                <h1 className="mt-0"
                 style={{  textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
    
                fontSize:'3.5rem',
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
                width: "95%",
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

<div className="container text-center mt-3">
      <div className='row d-flex p-lg-5 justify-content-center'>
    
      <h1 className="mt-0"
          style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
          fontSize:'3.5rem',  
          }}>
              LET US HELP YOU TRANSFORM YOUR BUSINESS TO MAXIMIZE ITS POTENTIAL...
          </h1>
           
          <h5 className="fw-lighter">
    In today's ever-evolving market, businesses require more than 
    mere survival tactics- They need strategies in place that foster growth 
    and ensure sustainability.   Our objective is to streamline your organization, eliminate redundancies,
     and amplify your market presence, all while preserving clarity, simplicity and 
     functionality.
</h5>     

  {/*} <p>OUR SPECIALTIES, OUR NICHE, WHAT WE <FaHeart style={{color:'#00ffff', textShadow:'2px 2px 4px rgba(0, 0, 0, 3.5)'}}/> TO DO. <span className="mb-0 pb-0" style={{fontFamily:'Raleway'}}>
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
            </span>
            </p>
*/}

    <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
    <Link href='/' id='digital-icon-palette' style={{ fontSize: '12rem' }}>
          <GiPalette className='rounded p-5 ' id='digital-icon-palette' style={{boxShadow:'0 .5rem 1rem gray', transition: 'box-shadow 0.3s' }}/></Link>  
          <a href="/graphic-design" alt='graphic-design' style={{ textShadow: "2px 2px 4px #00ffff", fontSize:'1.2rem', color:'black', textDecoration:'none'}}><b>GRAPHIC DESIGN</b></a>
    </div>

    <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
        <a href='/' id='digital-icon-laptop' style={{ fontSize: '12rem' }}>
          <GiLaptop className='rounded p-5' style={{boxShadow:'0 .5rem 1rem gray', transition: 'box-shadow 0.3s' }} id='digital-icon-laptop'/></a> 
          <a href="/web-devopment" alt='web-devopment' className="shadow-" style={{ textShadow: "2px 2px 4px #00ffff", fontSize:'1.2rem', color:'black', textDecoration:'none'}}><b>WEB DESIGN</b></a>
    </div>
 
    <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
        <a href='/' id='digital-icon-phone' style={{ fontSize: '12rem' }}>
          < GiSmartphone className='rounded p-5 ' id='digital-icon-phone' style={{boxShadow:'0 .5rem 1rem gray', transition: 'box-shadow 0.3s' }}/></a> 
          <a href="/digital-marketing" alt='digital-marketing' style={{ textShadow: "2px 2px 4px #00ffff", fontSize:'1.2rem', color:'black', textDecoration:'none'}}><b>DIGITAL MARKETING</b></a>
    </div>
    <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
        <a href='/' id='digital-icon-arrow' style={{ fontSize: '12rem' }}>
          <SiMinutemailer className='rounded p-5' style={{boxShadow:'0 .5rem 1rem gray', transition: 'box-shadow 0.3s' }} id='digital-icon-arrow'/></a> 
          <a href="/digital-marketing" alt='digital-marketing' style={{ textShadow: "2px 2px 4px #00ffff", fontSize:'1.2rem', color:'black', textDecoration:'none'}}><b>EMAIL CAMPAIGNS</b></a>
    </div>
    </div>
    </div>



    {/*********************start business-services**********************/}
      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
             
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src={Business}
              alt="Business"
              className="mb-2 border border-black"
              style={{ width: "90%", height: "auto" }}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
            <div className="business-essentials-body p-3 justify-content-center align-bottom">
              <div className="business-essentials-title">
              <h1 className="mt-0"
        style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)"
        }}>
        BUSINESS ESSENTIALS
        </h1>
        <p>CUSTOM PRODUCTS FOR ALL YOUR BUSINESS NEEDS</p>
              </div>
              <p className="business-essentials-text" style={{fontSize:'14px', fontFamily:'sans-serif'}}>
                Our "Business Essentials" custom products are
                tailored to your requirements. We offer a variety of design
                solutions to include graphic and digital design, promotional
                campaigns, as well as software solutions and server-side
                integrations.
              </p>
<div className="row">
<div className="col">
  <p>Whatever format needed, we can provide it:</p> 
<ul>
  <li>PRINTABLE</li>
  <li>DIGITAL</li>
  <li>ON-LINE</li>
  <li>MOBILE</li>
 
</ul>
</div>
<div className="col">  <ul>
                <li>Forms</li>
                <li>Letterhead</li>
                <li>Business Cards</li>
                <li>Custom Forms</li>
                <li>Post Cards</li>
                <li>Signage</li>
                <li>Logo Design</li>
                <li>Labels</li>

              </ul>
</div>
</div>

              <p>Printables</p>
            </div>
          </div>
        </div>

        <div className='row d-flex p-lg-3 justify-content-center'>
        <div className='col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center'>    
<div className="p-5 rounded-circle shadow bg-info-subtle"><GiPalette className='w3-text-amber' style={{fontSize:'4rem'}}  /></div>
</div>
          </div>

        <div className='row d-flex p-lg-3 justify-content-center'>
  <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
  <a href='/' id='digital-icon-palette' style={{ fontSize: '12rem' }}>
        <GiPalette className='rounded p-5 ' id='digital-icon-palette' style={{boxShadow:'0 .5rem 1rem gray', transition: 'box-shadow 0.3s' }}/></a>  
        <a href="/graphic-design" alt='graphic-design' style={{ textShadow: "2px 2px 4px #00ffff", fontSize:'1.2rem', color:'black', textDecoration:'none'}}><b>GRAPHIC DESIGN</b></a>
  </div>

  <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
      <a href='/' id='digital-icon-laptop' style={{ fontSize: '12rem' }}>
        <GiLaptop className='rounded p-5' style={{boxShadow:'0 .5rem 1rem gray', transition: 'box-shadow 0.3s' }} id='digital-icon-laptop'/></a> 
        <a href="/web-devopment" alt='web-devopment' className="shadow-" style={{ textShadow: "2px 2px 4px #00ffff", fontSize:'1.2rem', color:'black', textDecoration:'none'}}><b>WEB DESIGN</b></a>
  </div>

  <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
      <a href='/' id='digital-icon-phone' style={{ fontSize: '12rem' }}>
        < GiSmartphone className='rounded p-5 ' id='digital-icon-phone' style={{boxShadow:'0 .5rem 1rem gray', transition: 'box-shadow 0.3s' }}/></a> 
        <a href="/digital-marketing" alt='digital-marketing' style={{ textShadow: "2px 2px 4px #00ffff", fontSize:'1.2rem', color:'black', textDecoration:'none'}}><b>DIGITAL MARKETING</b></a>
  </div>
  <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
      <a href='/' id='digital-icon-arrow' style={{ fontSize: '12rem' }}>
        <SiMinutemailer className='rounded p-5' style={{boxShadow:'0 .5rem 1rem gray', transition: 'box-shadow 0.3s' }} id='digital-icon-arrow'/></a> 
        <a href="/digital-marketing" alt='digital-marketing' style={{ textShadow: "2px 2px 4px #00ffff", fontSize:'1.2rem', color:'black', textDecoration:'none'}}><b>EMAIL CAMPAIGNS</b></a>
  </div>
  </div>
  
  <p className="mt-5 text-center">
                <a href="/business-essentials" className="text-decoration-none link-secondary link-opacity-50-hover">
                  Contact us to get started or learn more about our business essentials
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
      </div>
      <br />
<br />
<br />
      <br />
<br />
<br />
<br />
{/*********************end business-services**********************/}
{/*********************start graphic-services**********************/}








<GraphicServices />







{/*start additional services*/}
<div className="container text-center mt-3">
      <div className='row d-flex p-lg-5 justify-content-center'>
      <h1 className="mt-0"
          style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
          fontSize:'3.5rem',  
          }}>
          WHAT WE DO
          </h1>
  <h5 className="mx-5">Our specialty lies in crafting custom solutions that bring a touch of magic to every project. From stunning design work to meticulous development, we're here to make your digital concepts a reality! </h5>

                 <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
        <a href='/' id='digital-icon-palette' style={{ fontSize: '12rem' }}>
          <GiPalette className='rounded p-5 shadow' id='digital-icon-palette'/></a> 
        <h5>SOCIAL MEDIA ORGANIZATION FORMS</h5>
    </div>
    <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
        <a href='/' id='digital-icon-book' style={{ fontSize: '12rem' }}>
          <SlBookOpen className='rounded p-5 shadow' id='digital-icon-book'/></a> 
        <h5>E-COMMERCE</h5>
        <h5>PAYMENT PLATFORMS</h5>
    </div>
    <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
        <a href='/' id='digital-icon-phone' style={{ fontSize: '12rem' }}>
          < GiSmartphone className='rounded p-5 shadow' id='digital-icon-phone'/></a> 
        <h5>BRAND IDENITY</h5>
       <p>********************BRANDING BOOK********************</p> 
    </div>
    <div className='col-sm-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-items-center'>    
        <a href='/' id='digital-icon-mail' style={{ fontSize: '12rem' }}>
          <SiMinutemailer className='rounded p-5 shadow bg-danger-subtle'  id='digital-icon-mail'/></a> 
        <h4>LOGO DESIGN</h4>
        <p>********************FACTS********************</p> 
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
{/*start digital-marketing-home */}
<div className="container pt-5">
        <div className="row d-flex p-1 justify-content-center align-items-center">
       <div className="col-sm-12 col-md-6 px-4">
       <h1 className="mt-4"
         style={{color:'#00FFFF', fontSize:'4rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 3.5)',}}>BUSINESS<br /> <span style={{color:'black',  textShadow: '2px 2px 4px rgba(0, 0, 0, 3.5)', fontFamily:'Raleway'}}>MARKETING</span> <span style={{  textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
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
  <div className="row d-flex p-1 justify-content-center align-items-center">
  <div className="col-sm-12 col-md-6 px-4">
<p className='text-center'>
  <br />
                <a href="/digital-marketing" className="text-decoration-none">
                  See more about digital marketing
                  <FaArrowRight className="ms-2" />
                </a>
              </p>
              <br />
              </div>
              <div className="col-sm-12 col-md-6 px-4">
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

{/*start digital-marketing-home */}
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
