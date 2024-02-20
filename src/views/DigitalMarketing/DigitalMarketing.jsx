import React from "react";
import HeaderBlack from "../../components/Navbar/NavbarBlack.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { Button } from "react-bootstrap";
//import { FaArrowLeft } from "react-icons/fa";
//import { FaArrowRight } from "react-icons/fa";

import Business from "../../assets/images/Business.png";
import MainImage from "../../assets/images/DigitalMarketing/main image.png";
//import RecruitHome from "../../assets/images/RecruitSite/RecruitHome.png";
import SocialMedia from "../../components/SocialMedia/SocialMedia.jsx";
//import RecruitProfile from "../../assets/images/RecruitSite/RecruitProfile.png";
//import RecruitStats from "../../assets/images/RecruitSite/RecruitStats.png";
//import RecruitDashboard from "../../assets/images/RecruitSite/RecruitDashboard.png";
//import RecruitVideos from "../../assets/images/RecruitSite/RecruitVideos.png";
//import RecruitLeagues from "../../assets/images/RecruitSite/RecruitLeages.png";
import CoverResize from "../../assets/images/CoverResize.png";
//import { FaLeftLong, FaRightLong } from "react-icons/fa6";
const DigitalMarketing = () => {
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
      <br />
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
 {/**start intro and image*/}
      <div className="row d-flex justify-content-center align-items-center p-4">
        <div className="col-sm-12 col-md-4 col-lg-4 px-4">
          <div className="container justify-content-center align-items-center mt-2">
            <h5>ENHANCE PERFORMANCE & MAXIMIZE YOUR POTENTIAL</h5>
            <h1
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                color: "black",
              }}
            >
              DIGITAL STRATEGIES
            </h1>
            <br />
            <p>
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
      {/**end intro and image */}


      {/** 
      <div className="row d-flex justify-content-center align-items-center p-4">
      <div className="w3-center w3-padding-48 pt-0">
            <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">
              WHAT WE DO BEST...
            </span>
          </div>
        
        <div className="col-sm-12 col-md-4 col-lg-4 px-4">
          <div className="w3-m3 w3-black w3-container w3-padding-16">
            <h5>SEARCH ENGINE MARKETING</h5>
            <p style={{ fontSize: "13px" }}>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
          <div className="w3-m3 bg-dark text-white w3-container w3-padding-16">
            <h5>CONTENT MARKETING</h5>
            <p style={{ fontSize: "13px" }}>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
          <div className="w3-m3 bg-dark text-white w3-container w3-padding-16">
            <h5>CONTENT MARKETING</h5>
            <p style={{ fontSize: "13px" }}>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
          <div className="w3-m3 w3-dark-grey w3-container w3-padding-16">
            <h5>EMAIL MARKETING</h5>
            <p style={{ fontSize: "13px" }}>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
        </div>

        <div className="col-sm-12 col-md-8 col-lg-8 px-4">
        <div className="w3-m3 w3-black w3-container w3-padding-16">
            <h5>SEARCH ENGINE MARKETING</h5>
            <p style={{ fontSize: "13px" }}>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
          <div className="w3-m3 bg-dark text-white w3-container w3-padding-16">
            <h5>CONTENT MARKETING</h5>
            <p style={{ fontSize: "13px" }}>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
          <div className="w3-m3 bg-dark text-white w3-container w3-padding-16">
            <h5>CONTENT MARKETING</h5>
            <p style={{ fontSize: "13px" }}>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
          <div className="w3-m3 w3-dark-grey w3-container w3-padding-16">
            <h5>EMAIL MARKETING</h5>
            <p style={{ fontSize: "13px" }}>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
        </div>
      </div>
       */}


      {/** start side menu */}
      <div className="row d-flex justify-content-center align-items-center p-4 bg-danger-subtle">
      <div className="w3-center w3-padding-48 pt-0">
            <span className="w3-xlarge w3-bottombar w3-border-black w3-padding-16" style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, .5)"}}>
              <b style={{fontSize:'2.5rem'}}>WHAT WE DO BEST...</b>
            </span>
          </div>
     
        <div className="col-sm-12 col-md-3 col-lg-3 px-4 justify-content-center align-items-center">
        <div className="w3-m3 w3-black w3-container w3-padding-16 p-4">
          <div className="m-1">
            <h3 style={{color:'#00ffff'}}>SEARCH ENGINE STRATEGIES</h3>
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
        <Button  variant="outline-info" size="sm" href="/contact" alt='contact' style={{paddingLeft:'20px', paddingRight:'20px'}}>
          Pricing
        </Button>
      </div>
          </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-3 col-lg-3 px-4 justify-content-center align-items-center">
        <div className="w3-m3 w3-black w3-container w3-padding-16 p-4">
          <div className="m-1">
            <h3 style={{color:'#00ffff'}}>CONTENT MARKETING</h3>
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
        <Button  variant="outline-info" size="sm" href="/contact" alt='contact' style={{paddingLeft:'20px', paddingRight:'20px'}}>
          Pricing
        </Button>
      </div>
          </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-3 col-lg-3 px-4 justify-content-center align-items-center">
        <div className="w3-m3 w3-black w3-container w3-padding-16 p-4">
          <div className="m-1">
            <h3 style={{color:'#00ffff'}}>SOCIAL MEDIA MARKETING</h3>
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
        <Button  variant="outline-info" size="sm" href="/contact" alt='contact' style={{paddingLeft:'20px', paddingRight:'20px'}}>
          Pricing
        </Button>
      </div>
          </div>
        </div>
        </div>

        <div className="col-sm-12 col-md-3 col-lg-3 px-4 justify-content-center align-items-center">
        <div className="w3-m3 w3-black w3-container w3-padding-16 p-4">
          <div className="m-1">
            <h3 style={{color:'#00ffff'}}>EMAIL <br></br> MARKETING</h3>
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
        <Button  variant="outline-info" size="sm" href="/contact" alt='contact' style={{paddingLeft:'20px', paddingRight:'20px'}}>
          Pricing
        </Button>
      </div>
          </div>
        </div>
      </div>
      </div>












      {/*start what we offer */}
      <div className="w3-row w3-container">
        <div className="w3-center w3-padding-64">
          <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">
            WHAT WE DO BEST...
          </span>{" "}
          <br />
          <p></p>
        </div>
        {/*start what we offer SEO*/}
        <div className="w3-col l3 m6 w3-light-grey w3-container w3-padding-16">
          <h3>SEARCH ENGINE MARKETING</h3>
          <p style={{ fontSize: "14px", fontFamily: "serif" }}>
            <i>
              "A search engine is a software system designed to retrieve and
              display information stored on the internet in response to user
              queries."
            </i>
          </p>
          
        </div>
        {/*end what we offer SEO*/}
        {/*start what we offer social media*/}
        <div className="w3-col l3 m6 w3-grey w3-container w3-padding-16">
          <h3>SOCIAL MEDIA MARKETING</h3>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
        </div>
        {/*end what we offer social media*/}
        {/*start what we offer content marketing*/}
        <div className="w3-col l3 m6 w3-dark-grey w3-container w3-padding-16">
          <h3>CONTENT MARKETING</h3>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
        </div>
        {/*end what we offer content marketing*/}
        {/*start what we offer social media marketing*/}
        <div className="w3-col l3 m6 w3-black w3-container w3-padding-16">
          <h3>EMAIL MARKETING</h3>
          <p>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </p>
        </div>
      </div>

      {/**end WHAT WE DO*/}

      <br></br>
      {/**SEO Container */}
      <div className="container mt-2" id="seo-strategies">
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
            <div className="seo-strategies-body p-5 justify-content-center align-bottom">
              <div className="seo-strategies-title">
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: "black",
                  }}
                >
                  1. SEO STRATEGIES
                </h1>
              </div>
              <p className="mb-2" style={{ fontSize: "12px" }}>
                Search Engine Marketing (SEM): Search Engine Optimization (SEO):
                On-Page SEO: Optimizing individual web pages to rank higher and
                earn more relevant traffic in search engines. Off-Page SEO:
                Building backlinks and improving website authority through
                external factors like link building and social signals.
                Technical SEO: Optimizing website structure, performance, and
                accessibility for search engine crawlers. Local SEO: Optimizing
                for local search results, such as appearing in Google Maps or
                local directories.
                <b>Pay-Per-Click (PPC) Advertising:</b>
                Google Ads (formerly Google AdWords): Creating and managing paid
                search campaigns on Google's search engine results pages
                (SERPs). Bing Ads: Running PPC campaigns on Microsoft's Bing
                search engine. Display Advertising: Placing image or video ads
                on websites, apps, or social media networks within ad networks
                like Google Display Network.
              </p>
              <p className="mb-2" style={{ fontSize: "12px" }}>
                <b>SEARCH-ENGINE OPTIMIZATION:</b> Optimizing online content to
                improve its visibility in search engine results, to organically
                increase traffic.

              </p>
              <p className="mb-2" style={{ fontSize: "12px" }}>
                <b>SEARCH-ENGINE MARKETING:</b> Paid advertising on search
                engines to appear in sponsored listings when users search for
                specific keywords.
              </p>
            </div>
          </div>
          <div
            className="mt-5 text-center"
            style={{ fontSize: "14px", fontFamily: "serif" }}
          >
            <p>HERE IS HOW...</p>
            <h4>
              <b>SEARCH ENGINE STRATEGIES ARE EVOLVING:</b>
            </h4>
            <p>
              "Although keywords remain important, modern SEO algorithms
              prioritize providing unique and comprehensive answers to users'
              search queries. Emphasizing valuable and relevant content overall
              is essential for improving website rankings."
            </p>
            <p>
              <a href="#menu" className="text-decoration-none">
                Back to Menu <i className="fas fa-arrow-up"></i>
              </a>
            </p>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>

      {/**CONTENT MARKETING Container */}
      <div className="container mt-5" id="content-marketing">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="content-marketing-body p-5 justify-content-center align-items-center">
              <div className="content-marketing-title">
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: "black",
                  }}
                >
                  2. CONTENT MARKETING
                </h1>
                <p style={{ fontSize: "14px" }}>
                  <i>
                    "Creating and distributing valuable, relevant, and
                    consistent content to attract and retain a clearly defined
                    audience. The goal is to drive profitable customer action by
                    providing information that addresses the audience's needs
                    and interests."
                  </i>
                </p>
              </div>
              <p className="mb-2" style={{ fontSize: "12px" }}>
                <b>SOCIAL MEDIA MARKETING:</b> Promoting products or services on
                social media platforms.
              </p>
              <p className="mb-2" style={{ fontSize: "12px" }}>
                {" "}
                <b>EMAIL MARKETING:</b> Sending targeted messages and
                promotional content direct via email to nurture leads or
                encourage loyalty.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src={Business}
              alt="Business"
              className="mb-2 border border-black"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
          <div
            className="mt-5 text-center"
            style={{ fontSize: "14px", fontFamily: "serif" }}
          >
            <p>ADAPT, STRATEGIZE & MANIPULATE...</p>
            <h4>
              <b>STRIKING THE PERFECT BALANCE:</b>
            </h4>
            <p>
              "To succeed in this space, businesses often need to adapt and
              manipulate their strategies to align with the dynamics and
              algorithms of each platform. This manipulation can involve
              tailoring content formats, optimizing posting times, and engaging
              with audiences in ways that prioritize platform algorithms. While
              this approach can yield significant benefits, it also raises
              ethical considerations and challenges. Striking a balance between
              leveraging platforms for business objectives while respecting user
              experience and privacy is essential for sustainable and ethical
              social media marketing practices."
            </p>
            <p>
              <a href="#menu" className="text-decoration-none">
                Back to Menu <i className="fas fa-arrow-up"></i>
              </a>
            </p>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>

      {/**PARTNERSHIPS Container */}
      <div className="container mt-5" id="strategic-partnerships">
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
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: "black",
                  }}
                >
                  3. STRATEGIC PARTNERSHIPS
                </h1>
                <p style={{ fontSize: "14px", fontFamily: "serif" }}>
                  <i>
                    "Strategic partnerships refer to collaborative arrangements
                    between two or more Business with complementary
                    capabilities, resources, or market presence."
                  </i>
                </p>
              </div>
              <p className="mb-2" style={{ fontSize: "12px" }}>
                <b>AFFILIATE MARKETING:</b>Partnering with affiliates to promote
                a business's products or services in exchange for a commission
                for each sale or lead generated through their efforts.
              </p>
              <p className="mb-2" style={{ fontSize: "12px" }}>
                <b>INFLUENCER MARKETING:</b> Collaborating with influencers that
                have significant online following, to tap into their audience to
                promote products or services.
              </p>
            </div>
          </div>
          <div
            className="mt-5 text-center"
            style={{ fontSize: "14px", fontFamily: "serif" }}
          >
            <p>TEAMWORK MAKES THE DREAM WORK...</p>
            <h4>
              <b>STRATEGIC PARTNERSHIPS TO INCREASE REACH:</b>
            </h4>
            <p>
              "These partnerships are formed to achieve mutually beneficial
              goals that neither party could achieve alone. They typically
              involve sharing resources, expertise, technology, or distribution
              channels to create value, innovate, expand into new markets, or
              address specific business challenges. Strategic partnerships can
              take various forms, including joint ventures, licensing
              agreements, distribution agreements, co-branding initiatives, or
              supplier/customer relationships. Successful strategic partnerships
              require careful planning, clear communication, alignment of
              objectives, mutual trust, and ongoing collaboration to ensure that
              both parties derive maximum value from the relationship."
            </p>
            <p>
              <a href="#menu" className="text-decoration-none">
                Back to Menu <i className="fas fa-arrow-up"></i>
              </a>
            </p>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>

      {/**PERFORMANCE Container */}
      <div className="container mt-3" id="performance-based-incentives">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="performance-body p-5 justify-content-center align-items-center">
              <div className="performance-title">
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: "black",
                    fontSize: "2.25rem",
                  }}
                >
                  4. PERFORMANCE-BASE INCENTIVE
                </h1>
                <p style={{ fontSize: "14px", fontFamily: "serif" }}>
                  <i>
                    "In digital marketing, performance-based incentives refer to
                    compensation structures or rewards that are directly linked
                    to specific outcomes or key performance indicators (KPIs)
                    achieved through digital marketing efforts. These incentives
                    can include bonuses, commissions, or other forms of
                    compensation tied to metrics such as website traffic,
                    conversion rates, lead generation, customer acquisition, or
                    return on investment (ROI)."
                  </i>
                </p>
              </div>
              <p className="mb-2" style={{ fontSize: "12px" }}>
                <b>PAY-PER-CLICK:</b> Promoting products or services on social
                media platforms.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src={Business}
              alt="Business"
              className="mb-2 border border-black"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
          <div
            className="mt-3 text-center"
            style={{ fontSize: "14px", fontFamily: "serif" }}
          >
            <p>PASSIVE COMPENSATION IN A SINGLE CLICK...</p>
            <h4>
              <b>INCENTIVES BASED ON MEASURABLE RESULTS:</b>
            </h4>
            <p>
              "By aligning incentives with measurable results, businesses can
              motivate digital marketing teams to focus on activities that drive
              meaningful outcomes and contribute to the overall success of
              marketing campaigns and initiatives. This approach encourages
              accountability, innovation, and continuous improvement in digital
              marketing strategies and tactics."
            </p>
            <p>
              <a href="#menu" className="text-decoration-none">
                Back to Menu <i className="fas fa-arrow-up"></i>
              </a>
            </p>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>

      {/**DATA-DRIVEN STRATEGIES Container */}
      <div className="container mt-3" id="data-driven-strategies">
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
            <div className="data-body p-5 justify-content-center align-bottom">
              <div className="data-title">
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: "black",
                  }}
                >
                  5. DATA-DRIVEN STRATEGIES
                </h1>
                <p style={{ fontSize: "14px", fontFamily: "serif" }}>
                  <i>
                    "Involve leveraging data and analytics to inform
                    decision-making and optimize marketing efforts. By
                    collecting and analyzing relevant data from various sources
                    such as website traffic, social media interactions, email
                    campaigns, and customer behavior, businesses can gain
                    valuable insights into their target audience, their
                    preferences, and their online behavior."
                  </i>
                </p>
              </div>
              <p className="mb-2" style={{ fontSize: "12px" }}>
                <b>DATA-DRIVEN MARKETING:</b> Using data analytics tools to
                measure the performance of marketing campaigns, gather insights,
                and optimize strategies for better results.
              </p>
            </div>
          </div>
          <div
            className="mt-3 text-center"
            style={{ fontSize: "14px", fontFamily: "serif" }}
          >
            <p>STUDY THE DATA...</p>
            <h4>
              <b>TAILOR YOUR STRATEGIES TO TARGET YOUR MARKET:</b>
            </h4>
            <p>
              "Data-based insights enable marketers to create more targeted and
              personalized marketing campaigns, tailor content to specific
              audience segments, and optimize the allocation of resources for
              maximum impact. Data-driven strategies also allow marketers to
              measure the effectiveness of their campaigns in real-time, track
              key performance indicators (KPIs), and identify areas for
              improvement."
            </p>
            <p>
              <a href="#menu" className="text-decoration-none">
                Back to Menu <i className="fas fa-arrow-up"></i>
              </a>
            </p>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>

      {/**REPUTATION Container */}
      <div className="container mt-3" id="reputation-management">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="reputation-body p-5 justify-content-center align-items-center">
              <div className="reputation-title">
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: "black",
                  }}
                >
                  6. REPUTATION MANAGEMENT
                </h1>
                <p style={{ fontSize: "14px", fontFamily: "serif" }}>
                  <i>
                    " Involves monitoring, influencing, and controlling the
                    online perception of a brand or individual. It encompasses
                    strategies and tactics aimed at maintaining or enhancing a
                    positive reputation while mitigating any negative publicity
                    or feedback that may arise online.."
                  </i>
                </p>
              </div>

              <p className="mb-2" style={{ fontSize: "12px" }}>
                <b>PUBLIC RELATIONS MANAGEMENT</b>Managing a brand's online
                reputation through press releases, influencer collaborations,
                and addressing customer feedback.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src={Business}
              alt="Business"
              className="mb-2 border border-black"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
          <div
            className="mt-3 text-center"
            style={{ fontSize: "14px", fontFamily: "serif" }}
          >
            <p>STUDY THE DATA...</p>
            <h4>
              <b>TAILOR YOUR STRATEGIES TO TARGET YOUR MARKET:</b>
            </h4>
            <p>
              "Data-based insights enable marketers to create more targeted and
              personalized marketing campaigns, tailor content to specific
              audience segments, and optimize the allocation of resources for
              maximum impact. Data-driven strategies also allow marketers to
              measure the effectiveness of their campaigns in real-time, track
              key performance indicators (KPIs), and identify areas for
              improvement."
            </p>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>

      <br></br>

      <SocialMedia />
      <br></br>
      <br></br>

      {/**EMAIL CAMPAIGNS CONTAINER */}
      <div className="container mt-5">
        <div className="row d-flex p-3 text-center justify-content-center align-items-center">
          <p>DON'T DISCOUNT THE IMPORTANCE EMAIL MARKETING...</p>
          <h1
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              color: "black",
            }}
          >
            EMAIL MARKETING & CAMPAIGNS
          </h1>
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-bottom">
            <p>
              In today's digitally-driven world, social media has evolved from
              being just a platform for social interaction to a powerful tool
              for businesses to engage with their audience, build brand
              awareness, and drive sales. Social media marketing harnesses the
              vast reach and influence of its platform to{" "}
              <b>
                connect with existing and potential customers on a more personal
                level
              </b>
              .<br></br>
              <br></br>
              <span style={{ fontSize: "14px", fontFamily: "serif" }}>
                <b> REMINDER:</b>
                <i>
                  {" "}
                  "Social media was NOT built for business. Strategic
                  manipulation is essential to harness its potential for
                  business growth."
                </i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DigitalMarketing;
