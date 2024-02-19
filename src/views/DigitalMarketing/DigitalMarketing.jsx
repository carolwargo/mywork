import React from "react";
import HeaderBlack from "../../components/Navbar/NavbarBlack.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
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
import CoverResize from '../../assets/images/CoverResize.png';
const DigitalMarketing = () => {
  return (
    <main style={{ fontFamily: "raleway" }}>
      <HeaderBlack />
         
      <div className="container-fluid py-4 bg-black text-white" style={{backgroundImage: `url(${CoverResize})`}}>
       
        <div className="row d-flex px-4 justify-content-center align-items-center text-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="story-essentials-body p-2 ">
              <div className="story-essentials-title my-2">
                <h3
                  className="mb-2"
                  style={{
                    textShadow: "1px 1px 2px white",
                    color: "#00ffff"
                  }}
                >
                  AMPLIFY YOUR BRAND ...
                </h3>
                <h1
                  style={{
                    fontSize: "4rem",
                  }}
                >
                  DIGITAL MARKETING
                </h1>
                <h2 className="digital-marketing-text m-2 px-5">
            Leverage the power of the internet to connect to your target audience,
            build brand awareness, and drive User engagement.
          </h2>
              </div>
            </div>
          </div>
        </div>
        </div>
     <br />
    
      
      {/**side menu start */}
      <div className="container">
        
      <div className="container-fluid mt-3">
 <ul className="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Home</a></li>
    <li className="breadcrumb-item"><a href="/web-development">Web Design</a></li>
    <li className="breadcrumb-item"><a href="/graphic-design">Graphic Design</a></li>
    <li className="breadcrumb-item active">Digital Marketing</li>
  </ul>
</div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-4 p-4">
          <div className="container">
              <p>DIGITAL MARKETING STRATEGIES</p>
              <h1
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  color: "black",
                }}
              >
                OPTIMIZING BUSINESS PERFORMANCE
              </h1>

              <p>
                Digital marketing is a dynamic and multifaceted approach to
                promoting products, services, or brands through various online
                channels. Digital avenues play crucial roles in fostering brand
                visibility and interaction. Each channel presents a unique
                canvas for businesses to paint their stories, creating dynamic
                experiences that resonate with diverse audiences.
              </p>
           </div>
          </div>

          <div className="col-sm-12 col-md-8 col-lg-8 d-flex p-4 justify-content-center align-items-center">
            <div className="container">
            <img
              src={MainImage}
              alt="MainImage"
              className="mb-2 border border-black"
              style={{
                width: "110%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
             <p className='text-center' style={{ fontSize: "12px" }}>
              {" "}
             <b> <i>"SAMPLE: digital marketing campaign"</i></b>
            </p>
            </div>
            </div>
        </div>
        {/**side menu end */}
       {/*start what we offer */}
        <div className="w3-row w3-container">
          <div className="w3-center w3-padding-64">
            <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">
             WHAT WE DO BEST...
            </span> <br />
            <p></p>
          </div>
           {/*start what we offer SEO*/}
          <div className="w3-col l3 m6 w3-light-grey w3-container w3-padding-16">
            <h3>SEARCH ENGINE MARKETING</h3>
            <p style={{ fontSize: "14px", fontFamily: "serif" }}>
                  <i>
                    "A search engine is a software system designed to retrieve
                    and display information stored on the internet in response
                    to user queries."
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
      </div>
      {/**end WAHT WE DO*/}







      {/**INTRO & MENU */}
      <div className="container mt-5">
        <div className="row d-flex p-3 justify-content-center align-items-center">
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
 
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8 d-flex justify-content-center align-bottom">
            <div className="container">
              <p>DIGITAL MARKETING-SOCIAL MEDIA AND BEYOND</p>
              <h1
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  color: "black",
                }}
              >
                DIGITAL MARKETING
              </h1>

              <p>
                Digital marketing is a dynamic and multifaceted approach to
                promoting products, services, or brands through various online
                channels. Digital avenues play crucial roles in fostering brand
                visibility and interaction. Each channel presents a unique
                canvas for businesses to paint their stories, creating dynamic
                experiences that resonate with diverse audiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>


      {/**SEO Container */}
      <div className="container mt-5" id="seo-strategies">
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
              Search Engine Marketing (SEM):
Search Engine Optimization (SEO):
On-Page SEO: Optimizing individual web pages to rank higher and earn more relevant traffic in search engines.
Off-Page SEO: Building backlinks and improving website authority through external factors like link building and social signals.
Technical SEO: Optimizing website structure, performance, and accessibility for search engine crawlers.
Local SEO: Optimizing for local search results, such as appearing in Google Maps or local directories.
<b>Pay-Per-Click (PPC) Advertising:</b>
Google Ads (formerly Google AdWords): Creating and managing paid search campaigns on Google's search engine results pages (SERPs).
Bing Ads: Running PPC campaigns on Microsoft's Bing search engine.
Display Advertising: Placing image or video ads on websites, apps, or social media networks within ad networks like Google Display Network.
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
