import React from "react";
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

const DigitalMarketing = () => {

  return (
    <main style={{fontFamily:'raleway'}}>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
            <div className="story-essentials-body p-2 justify-content-center align-bottom">
              <div className="story-essentials-title">
                <h4
                  className="mt-0"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: "black",
                  }}
                >
                  LEVERAGE THE POWER OF THE INTERNET...
                </h4>
              </div>

              <p
                className="digital-marketing-text"
                style={{ fontSize: "12px" }}
              >
                Leverage the power of the internet to connect with target
                audiences, build brand awareness, and drive engagement. With its
                ability to reach global audiences, track performance metrics,
                and adapt in real-time, digital marketing offers businesses a
                powerful toolkit to establish an online presence, connect with
                customers, and achieve marketing goals in the ever-evolving
                digital landscape.
              </p>
            </div>
          </div>

          {/*Main image start */}
          <div className="col-sm-12 col-md-8 col-lg-8 d-flex flex-column justify-content-center align-items-center">
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
            <p style={{ fontSize: "12px" }}>
              {" "}
              <i>"SAMPLE: digital marketing campaign"</i>
            </p>
          </div>
        </div>
      </div>


{/**side menu start */}
<div className="container">
      <div className="row d-flex justify-content-center align-items-center">
    <div className="col-lg-4 p-4">
    <div className="container py-4">
      <h3> <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">What We Offer</span>
  </h3>
 </div>

    <div className="w3-m6 w3-grey w3-container w3-padding-16">
      <h3>Content Marketing</h3>
      <div>
      <p style={{fontSize:'14px'}}>
<i>"Creating and distributing valuable, relevant, and consistent content 
  to attract and retain a clearly defined audience. The goal is to drive 
  profitable customer action by providing information that addresses the 
  audience's needs and interests."</i></p>
         
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

    <div className="w3-m6 w3-dark-grey w3-container w3-padding-16">
      <h3>Social Media Marketing</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>

    <div className="w3-m6 w3-black w3-container w3-padding-16">
      <h3>Email Campaigns</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>
    </div>

   
  <div className="col-lg-8 p-4">
  <div className="container">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis tempore, tenetur accusamus non unde odit aut cumque? Ipsam harum quos consequatur, esse porro minus odio magnam, iusto, ducimus veritatis facere.</p></div>
  </div>
  </div>
{/**side menu end */}
      
{/**full width menu start*/}
<div className="w3-row w3-container">
    <div className="w3-center w3-padding-64">
      <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">What We Offer</span>
    </div>
    <div className="w3-col l3 m6 w3-light-grey w3-container w3-padding-16">
      <h3>Design</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>

    <div className="w3-col l3 m6 w3-grey w3-container w3-padding-16">
      
      <h3>Branding</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>

    <div className="w3-col l3 m6 w3-dark-grey w3-container w3-padding-16">
      <h3>Consultation</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>

    <div className="w3-col l3 m6 w3-black w3-container w3-padding-16">
      <h3>Promises</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>
  </div>
  </div>
{/**full width menu end*/}


{/**INTRO & MENU */}
      <div className="container mt-5">
        <div className="row d-flex p-3 justify-content-center align-items-center">
        <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
 

     
    {/**     
          <div className="container">
          <p>
            Choose a <i>'Key Components Menu'</i> from the <b>Key Components</b> menu
            provided to learn more about a specific area of interest...
          </p>

                 <div className="w3-dropdown-hover">
  <button className="w3-button">Key Components <span className="fa fa-caret-down" aria-hidden="true" style={{paddingLeft:'3rem'}}> </span>        
        </button>
  <div className="w3-dropdown-content w3-bar-block w3-border">
    <a href="#seo-strategies" className="w3-bar-item w3-button">SEO Strategies</a>
    <a href="#content-marketing" className="w3-bar-item w3-button">Content Marketing</a>
    <a href="#strategic-partnerships" className="w3-bar-item w3-button">Strategic Partnerships</a>
    <a href="#performance-based-incentives" className="w3-bar-item w3-button">Performance-Based Incentives</a>
    <a href="#data-driven-strategies" className="w3-bar-item w3-button">Data-Driven Strategies</a>
    <a href="#reputation-management" className="w3-bar-item w3-button">Reputation Management</a>
  </div>
</div>
           
</div>
 */}  
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
              visibility and interaction. Each channel presents a unique canvas
              for businesses to paint their stories, creating dynamic
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
                <p style={{fontSize:'14px', fontFamily:'serif'}}>
<i>"A search engine is a software system designed to retrieve and display information stored on the internet in response to user queries."</i></p>
         
              </div>
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
          <div className="mt-5 text-center" style={{fontSize:'14px', fontFamily:'serif'}}>
            <p>HERE IS HOW...</p>
          <h4><b>SEARCH ENGINE STRATEGIES ARE EVOLVING:</b></h4>
         <p>"Although keywords remain important, modern SEO algorithms prioritize providing unique and comprehensive answers to users' search queries. Emphasizing valuable and relevant content overall is essential for improving website rankings."   
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
                <p style={{fontSize:'14px'}}>
<i>"Creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience. The goal is to drive profitable customer action by providing information that addresses the audience's needs and interests."</i></p>
         
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
          <div className="mt-5 text-center" style={{fontSize:'14px', fontFamily:'serif'}}>
            <p>ADAPT, STRATEGIZE & MANIPULATE...</p>
          <h4><b>STRIKING THE PERFECT BALANCE:</b></h4>
         <p>"To succeed in this space, businesses often need to adapt and manipulate their strategies to align with the dynamics and algorithms of each platform.

This manipulation can involve tailoring content formats, optimizing posting times, and engaging with audiences in ways that prioritize platform algorithms. While this approach can yield significant benefits, it also raises ethical considerations and challenges. Striking a balance between leveraging platforms for business objectives while respecting user experience and privacy is essential for sustainable and ethical social media marketing practices."   
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
                <p style={{fontSize:'14px', fontFamily:'serif'}}>
<i>"Strategic partnerships refer to collaborative arrangements between two or more Business with complementary capabilities, resources, or market presence."</i></p>
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
           <div className="mt-5 text-center" style={{fontSize:'14px', fontFamily:'serif'}}>
            <p>TEAMWORK MAKES THE DREAM WORK...</p>
          <h4><b>STRATEGIC PARTNERSHIPS TO INCREASE REACH:</b></h4>
         <p>"These partnerships are formed to achieve mutually beneficial goals that neither party could achieve alone. They typically involve sharing resources, expertise, technology, or distribution channels to create value, innovate, expand into new markets, or address specific business challenges. Strategic partnerships can take various forms, including joint ventures, licensing agreements, distribution agreements, co-branding initiatives, or supplier/customer relationships. Successful strategic partnerships require careful planning, clear communication, alignment of objectives, mutual trust, and ongoing collaboration to ensure that both parties derive maximum value from the relationship."   
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
                <p style={{fontSize:'14px', fontFamily:'serif'}}>
<i>"In digital marketing, performance-based incentives refer to compensation structures or rewards that are directly linked to specific outcomes or key performance indicators (KPIs) achieved through digital marketing efforts. These incentives can include bonuses, commissions, or other forms of compensation tied to metrics such as website traffic, conversion rates, lead generation, customer acquisition, or return on investment (ROI)."</i></p>
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
           <div className="mt-3 text-center" style={{fontSize:'14px', fontFamily:'serif'}}>
            <p>PASSIVE COMPENSATION IN A SINGLE CLICK...</p>
          <h4><b>INCENTIVES BASED ON MEASURABLE RESULTS:</b></h4>
         <p>"By aligning incentives with measurable results, businesses can motivate digital marketing teams to focus on activities that drive meaningful outcomes and contribute to the overall success of marketing campaigns and initiatives. This approach encourages accountability, innovation, and continuous improvement in digital marketing strategies and tactics."   
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
                <p style={{fontSize:'14px', fontFamily:'serif'}}>
<i>"Involve leveraging data and analytics to inform decision-making and optimize marketing efforts. By collecting and analyzing relevant data from various sources such as website traffic, social media interactions, email campaigns, and customer behavior, businesses can gain valuable insights into their target audience, their preferences, and their online behavior."</i></p>
              </div>
              <p className="mb-2" style={{ fontSize: "12px" }}>
                <b>DATA-DRIVEN MARKETING:</b> Using data analytics tools to
                measure the performance of marketing campaigns, gather insights,
                and optimize strategies for better results.
              </p>
            </div>
          </div>
           <div className="mt-3 text-center" style={{fontSize:'14px', fontFamily:'serif'}}>
            <p>STUDY THE DATA...</p>
          <h4><b>TAILOR YOUR STRATEGIES TO TARGET YOUR MARKET:</b></h4>
         <p>"Data-based insights enable marketers to create more targeted and personalized marketing campaigns, tailor content to specific audience segments, and optimize the allocation of resources for maximum impact. Data-driven strategies also allow marketers to measure the effectiveness of their campaigns in real-time, track key performance indicators (KPIs), and identify areas for improvement."   
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
                <p style={{fontSize:'14px', fontFamily:'serif'}}>
<i>" Involves monitoring, influencing, and controlling the online perception of a brand or individual. It encompasses strategies and tactics aimed at maintaining or enhancing a positive reputation while mitigating any negative publicity or feedback that may arise online.."</i></p>
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
           <div className="mt-3 text-center" style={{fontSize:'14px', fontFamily:'serif'}}>
           <p>STUDY THE DATA...</p>
          <h4><b>TAILOR YOUR STRATEGIES TO TARGET YOUR MARKET:</b></h4>
         <p>"Data-based insights enable marketers to create more targeted and personalized marketing campaigns, tailor content to specific audience segments, and optimize the allocation of resources for maximum impact. Data-driven strategies also allow marketers to measure the effectiveness of their campaigns in real-time, track key performance indicators (KPIs), and identify areas for improvement."   
         </p>
         <br></br>
         <br></br>
          </div>
        </div>
      </div>

      <br></br>
      
<SocialMedia  />  
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
            In today's digitally-driven world, social media has evolved from being just a 
            platform for social interaction to a powerful tool for businesses to engage with 
            their audience, build brand awareness, and drive sales. Social media marketing 
            harnesses the vast reach and influence of its platform to <b>connect with existing 
            and potential customers on a more personal level</b>.
            <br></br>
            <br></br>
           <span style={{fontSize:'14px', fontFamily:'serif'}}><b> REMINDER:</b><i> "Social media was NOT built for business. Strategic manipulation is essential to harness its potential for business growth."</i>
           </span>
            </p>
            </div>
          </div>
          </div>


          <br></br>
          <br></br>
          <br></br>
      <br></br>
          <br></br>
          <br></br>
      <br></br>
      {/**Graphic Designs
      <div className="container mt-5">
        <h1
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            color: "black",
          }}
        >
          GRAPHICS PORTFOLIO
        </h1>
        <p>
          All whole images or individual components, layers & text within the
          image can be animated separately.<br></br>
          <span className="text-secondary" style={{ fontSize: "12px" }}>
            "I typically save superficial functions like, animations & audio
            until the layout and content are set."
          </span>
        </p>
      </div>
*/}
      <br></br>
      {/*recruit SITE container */}
      <div className="container mt-5">
       {/* <h1
          className="mt-5"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            color: "black",
          }}
        >
          DIGITAL RECRUITING TOOL
        </h1>
        <p>
          {" "}
          <i>
            Why call it a recruiting "TOOL", instead of recruiting "site"?
            Because, I designed it to be flexible- Capable of rendering either
            as a complete entity or as individual components. With its
            responsive design, the tool seamlessly adapts to all screen sizes,
            ensuring no overflow or loss of content. The graphics and content
            are easily converted to print media or used on social platforms.
          </i>
        </p>
 */}
        {/*recruit HOMEPAGE start 
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="service-body p-5 justify-content-center align-items-center">
              <div className="service-title">
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: "black",
                  }}
                >
                  1. LANDING PAGE{" "}
                </h1>
              </div>
              <p className="service-text">
                The Landing or Home page features a brief introduction of the
                recruit accompanied by a photo. The pivotal element of the page
                is the "Call to Action" buttons. Serving as a directional prompt
                for the user.
              </p>
              <p className="text-secondary" style={{ fontSize: "12px" }}>
                <i>
                  "CTA FACT- Using a personalized call-to-action (CTA) boosts
                  your conversion rate by 42% more than generic or vague CTAs,
                  or having none at all."
                </i>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <img
              src={RecruitHome}
              alt="RecruitHome"
              className="mb-2 border border-black"
              style={{ width: "80%", height: "auto" }}
            />
            <p style={{ fontSize: "12px", color: "black" }}>
              {" "}
              <i>"1. Recruit landing sample page"</i>
            </p>
          </div>
        </div>
        */}

        {/*recruit PROFILE start 
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="recruit-profile-body p-5 justify-content-center align-items-center">
              <div className="recruit-profile-title">
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: "black",
                  }}
                >
                  2. PROFILE PAGE{" "}
                </h1>
              </div>
              <p className="recruit-profile-text">
                The Profile Page offers essential information at a glance,
                including graduation year, primary and secondary positions,
                height, weight, and batting/throwing stats. It also features
                clickable contact links for user convenience.
              </p>
              <p className="text-secondary" style={{ fontSize: "12px" }}>
                <i>
                  "CLICKABLE CONTACT LINKS FACT: 64% of User will leave a site
                  if contact information is not easily accessible."
                </i>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <img
              src={RecruitProfile}
              alt="RecruitHome"
              style={{
                width: "80%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px", color: "black" }}>
              {" "}
              <i>"2. Recruit profile sample page."</i>
            </p>
          </div>
        </div>
        */}

        {/*recruit STATS start 
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="recruit-stats-body p-5 justify-content-center align-items-center">
              <div className="recruit-stats-title">
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: "black",
                  }}
                >
                  3. STATS PAGE{" "}
                </h1>
              </div>
              <p className="recruit-stats-text">
                Recruit stats consist of BAT, ARM, RUN & PERFORMANCE metrics, to
                include speed & velocity, and average & max. Metrics gathered by
                Trackman with a direct link to Trackman.{" "}
              </p>
              <p className="text-secondary" style={{ fontSize: "12px" }}>
                <i>
                  "REPUTABLE AFFILIATE LINKS FACT: Affiliate programs are the
                  top customer acquisition channel for 40% of US merchants."
                </i>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <img
              src={RecruitStats}
              alt="RecruitStats"
              className="mb-2 border border-black"
              style={{
                width: "80%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px", color: "black" }}>
              {" "}
              <i>"3. Recruit stats sample page."</i>
            </p>
          </div>
        </div>
*/}

        {/*recruit DASHBOARD start 
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="recruit-dashboard-body p-5 justify-content-center align-items-center">
              <div className="recruit-dashboard-title">
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: "black",
                  }}
                >
                  4. DASHBOARD PAGE{" "}
                </h1>
              </div>
              <p className="recruit-dashboard-text">
                Recruit Dashboard consists of test scores, gpa, academic
                achievement,athletic achievements, extra extra-curriculars,
                summer team & high school teams with a link to contact the
                coach's direct.
              </p>
              <p className="text-secondary" style={{ fontSize: "12px" }}>
                <i>
                  "BULLETED-LISTS FACT: Bullet points capture a user’s
                  attention, break up long paragraphs of text and make it easier
                  for users to scan and digest information quickly. "
                </i>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <img
              src={RecruitDashboard}
              alt="RecruitDashboard"
              className="mb-2 border border-black"
              style={{
                width: "80%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px", color: "black" }}>
              {" "}
              <i>"4. Recruit dashboard sample page."</i>
            </p>
          </div>
        </div>
*/}


        {/*recruit VIDEOS start

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="recruit-videos-body p-5 justify-content-center align-items-center">
              <div className="recruit-videos-title">
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: "black",
                  }}
                >
                  5. VIDEO LIBRARY PAGE{" "}
                </h1>
              </div>
              <p className="recruit-videos-text">
                This video library page consists of a collection of 3 videos;
                defense, hitting, MLB bullpens. Each video loads independently,
                and at an efficient rate. The User also has the option to
                download videos to save, or forward video links to others.
              </p>
              <p className="text-secondary" style={{ fontSize: "12px" }}>
                <i>
                  "LOAD TIME FACT: 25% of people will abandon a video that takes
                  3 or more seconds to load, and 40% will abandon a video that
                  takes 5 or more seconds to load. Not exclusive to a websites."
                </i>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <img
              src={RecruitVideos}
              alt="RecruitVideos"
              className="mb-2 border border-black"
              style={{
                width: "80%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px", color: "black" }}>
              {" "}
              <i>"5. Recruit video library sample page."</i>
            </p>
          </div>
        </div>
 */}

        {/*recruit LEAGUE AFFILIATION start 
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="recruit-affiliation-body p-5 justify-content-center align-items-center">
              <div className="recruit-affiliation-title">
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: "black",
                  }}
                >
                  6. LEAGUE AFFILIATION PAGE{" "}
                </h1>
              </div>
              <p className="recruit-affiliation-text">
                The League Affiliation page displays the current team
                affiliations; high school team & summer team details include
                coach & league, and are accompanied by buttons, that are linked
                to the league website.
              </p>
              <p className="text-secondary" style={{ fontSize: "12px" }}>
                <i>
                  "LEARN MORE FACT: Providing users with the option to learn
                  more, leads to an increase in conversion. Users who are more
                  informed are more likely to return to your site. "
                </i>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <img
              src={RecruitLeagues}
              alt="RecruitLeagues"
              className="mb-2 border border-black"
              style={{
                width: "80%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px", color: "black" }}>
              {" "}
              <i>"6. Recruit league affiliation sample page."</i>
            </p>
          </div>
        </div>
*/}
        <br></br>
        <br></br>
        <br></br>

        <div className="container">
  <div className="row d-flex justify-content-center align-items-center">
  <div className="col-sm-12 col-md-6 col-lg-6">
  <div style={{fontSize:'.85rem'}}>
    <span><strong>GLOBAL REACH</strong><br /> Expand your audience.</span> <br />
    <span><strong>TRACK PERFORMANCE</strong> <br />Measure and optimize your campaigns.</span>  <br />
    <span><strong>REAL-TIME UPDATES</strong><br /> Increased response to market changes.</span> <br />
  </div>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6">
  <div style={{fontSize:'.85rem'}}>
    <span><strong>ONLINE PRESENCE</strong><br /> Strengthen your digital footprint & brand visibility.</span>  <br />
    <span><strong>CONNECT WITH CUSTOMERS</strong> <br />Engage with your audience on a personal level.</span>  <br />
    <span><strong>CONTROLLED TARGETING</strong> <br />Reach your ideal audience with tailored messaging.</span> <br />
  </div>
  </div>
  </div>
</div>



        <br></br>
        <br></br>

      </div>
    </main>
  );
};

export default DigitalMarketing;
