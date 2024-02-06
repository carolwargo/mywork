import React, { useState } from "react";
import ServicesDropdown from "../../components/ServicesDropdown/ServicesDropdown";
import Creator from "../../assets/images/DigitalMarketing/Creator.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header/Header.jsx";
import "../../App.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import Business from "../../assets/images/Business.png";
import Organizations from "../../assets/images/Organizations.png";
import MainImage from "../../assets/images/DigitalMarketing/main image.png";
import RecruitHome from "../../assets/images/RecruitSite/RecruitHome.png";
import RecruitProfile from "../../assets/images/RecruitSite/RecruitProfile.png";
import RecruitStats from "../../assets/images/RecruitSite/RecruitStats.png";
import RecruitDashboard from "../../assets/images/RecruitSite/RecruitDashboard.png";
import RecruitVideos from "../../assets/images/RecruitSite/RecruitVideos.png";
import RecruitLeagues from "../../assets/images/RecruitSite/RecruitLeages.png";



const DigitalMarketing = () => {
  const [selected, setSelected] = useState(null);
 
    return (
      <main>
        <Header />
        <div className="container mt-5" style={{fontFamily:'sans-serif'}}>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
              <div className="story-essentials-body p-2 justify-content-center align-bottom">
                <div className="story-essentials-title">
                  <h4 className="mt-0"
                   style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    color:'#304E7C'
                  }}
                  >LEVERAGE THE POWER OF THE INTERNET...</h4>
                </div>
               
                <p
                className="digital-marketing-text"
                style={{ fontSize: "12px" }}
              >
                Leverage the power of the internet to connect with
                target audiences, build brand awareness, and drive engagement.
                With its ability to reach global
                audiences, track performance metrics, and adapt in real-time,
                digital marketing offers businesses a powerful toolkit to
                establish an online presence, connect with customers, and
                achieve marketing goals in the ever-evolving digital landscape.
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
  
  
        <div className="container mt-3">
          <div className="row d-flex p-3 justify-content-center align-items-center">
          <p>DIGITAL MARKETING-SOCIAL MEDIA AND BEYOND</p>
          <h1   style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    color:'#304E7C'
                  }}>DIGITAL MARKETING</h1>
       <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-bottom">
        <p style={{fontFamily:'sans-serif'}}>
        Digital marketing is a dynamic and multifaceted approach to
              promoting products, services, or brands through various online
              channels. Digital avenues play crucial roles in fostering brand visibility and interaction. Each channel presents a unique canvas for businesses to paint their stories, creating dynamic experiences that resonate with diverse audiences.
  </p>
  </div>
  <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-bottom">
       
                <ServicesDropdown selected={selected} setSelected={setSelected} />
                
  </div>
  </div>
  </div>
  
  
  
  
        {/**Business Essentials Container */}
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
              <div className="seo-strategies-body p-5 justify-content-center align-bottom">
                <div className="seo-strategies-title">
                  <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
                  <h1 id="seo-strategies"  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    color:'#304E7C'
                  }}>SEO STRATEGIES</h1>
                </div>
                <p className="seo-strategies-text" style={{fontSize:'14px', fontFamily:'sans-serif'}}>
                  Explore our range of "Business Essentials" custom products
                  tailored to your requirements. We offer a variety of design
                  solutions to include graphic and digital design, promotional
                  campaigns, as well as software solutions and server-side
                  integrations.
                </p>
                
                    <ul>
                      <li className="mb-2" style={{ fontSize: "12px" }}>
                        <b>SEARCH-ENGINE OPTIMIZATION:</b> Optimizing online
                        content to improve its visibility in search engine
                        results, to organically increase traffic.
                      </li>
                      <li className="mb-2" style={{ fontSize: "12px" }}>
                        <b>SEARCH-ENGINE MARKETING:</b> Paid advertising on
                        search engines to appear in sponsored listings when
                        users search for specific keywords.
                      </li>
                    </ul>
                    
                <p className="mt-5">
                  <a href="#menu" className="text-decoration-none">
                  Back to Menu
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
                    color:'#304E7C'
                  }}>ORGANIZATIONS</h1>
                </div>
                <p className="organizations-text" style={{fontSize:'14px', fontFamily:'sans-serif'}}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi perspiciatis consequatur magnam, aperiam alias saepe
                  reprehenderit id animi soluta quae, neque commodi ratione dolor.
                  Dolorum ut assumenda inventore ratione nesciunt!
                </p>
                <p className="mt-5">
                  <a href="#menu" className="text-decoration-none">
                  Back to Menu
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
                    color:'#304E7C'
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
                    color:'#304E7C'
                  }}>ORGANIZATIONS</h1>
                </div>
                <p className="organizations-text" style={{fontSize:'14px', fontFamily:'sans-serif'}}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi perspiciatis consequatur magnam, aperiam alias saepe
                  reprehenderit id animi soluta quae, neque commodi ratione dolor.
                  Dolorum ut assumenda inventore ratione nesciunt!
                </p>
                <p className="mt-5">
                  <a href="#menu" className="text-decoration-none">
                  Back to Menu
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
                    color:'#304E7C'
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
         
  <br></br>
  {/**Graphic Designs*/}
  <div className="container mt-5">
  <h1
   style={{
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    color:'#304E7C'
  }}
  >GRAPHICS PORTFOLIO</h1>
  <p>All whole images or individual components, layers & text within the image can be animated separately.<br></br><span className="text-secondary" style={{fontSize:'12px'}}>"I typically save superficial functions like, animations & audio until the layout and content are set."</span></p>
  
        </div>
  <br></br>
        {/*recruit SITE start */}
        <div className="container mt-5">
          <h1 className="mt-5"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            color:'#304E7C'
          }}>DIGITAL RECRUITING TOOL</h1>
          <p> <i>Why call it a recruiting "TOOL", instead of recruiting "site"? 
            Because, I designed it to be flexible- Capable of rendering either as a complete entity or as individual components. 
    With its responsive design, the tool seamlessly adapts to all screen sizes, ensuring no overflow or loss of content. The graphics and content are easily converted to print media or used on social platforms.</i>
   </p>
  
          {/*recruit HOMEPAGE start */}
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
              <div className="service-body p-5 justify-content-center align-items-center">
                <div className="service-title">
                  <h1 
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    color:'#304E7C'
                  }}
                  >
                    1. LANDING PAGE </h1>
                </div>
                <p className="service-text">
               
  The Landing or Home page features a brief introduction of the recruit accompanied by a photo. The pivotal 
  element of the page is the "Call to Action" buttons. Serving as a directional 
  prompt for the user.</p>
                <p className='text-secondary' style={{fontSize:'12px'}}><i>"CTA FACT- Using a personalized call-to-action (CTA) boosts your conversion rate by 42% more than generic or vague CTAs, or having none at all."</i></p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <img
                src={RecruitHome}
                alt="RecruitHome"
                className="mb-2 border border-black"
                style={{ width: "80%", height: "auto" }}
              />
              <p style={{ fontSize: "12px", color:'#304E7C' }}>
                {" "}
                <i>"1. Recruit landing sample page"</i>
              </p>
            </div>
          </div>
  
          {/*recruit PROFILE start */}
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
              <div className="recruit-profile-body p-5 justify-content-center align-items-center">
                <div className="recruit-profile-title">
                  <h1
                   style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    color:'#304E7C'
                  }}
                  >2. PROFILE PAGE </h1>
                </div>
                <p className="recruit-profile-text">
    The Profile Page offers essential information at a glance, including graduation year, 
    primary and secondary positions, height, weight, and batting/throwing stats. 
    It also features clickable contact links for user convenience.</p>
                <p className='text-secondary' style={{fontSize:'12px'}}><i>"CLICKABLE CONTACT LINKS FACT: 64% of User will leave a site if contact information is not easily accessible."</i></p>
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
              <p style={{ fontSize: "12px", color:'#304E7C' }}>
                {" "}
                <i>"2. Recruit profile sample page."</i>
              </p>
            </div>
          </div>
  
          {/*recruit STATS start */}
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
              <div className="recruit-stats-body p-5 justify-content-center align-items-center">
                <div className="recruit-stats-title">
                  <h1
                   style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    color:'#304E7C'
                  }}
                  >3. STATS PAGE </h1>
                </div>
                <p className="recruit-stats-text">
                  Recruit stats consist of BAT, ARM, RUN & PERFORMANCE metrics, to include speed & velocity, and average & max.
                  Metrics gathered by Trackman with a direct link to Trackman.{" "}
                </p>
                <p className='text-secondary' style={{fontSize:'12px'}}><i>"REPUTABLE AFFILIATE LINKS FACT: Affiliate programs are the top customer acquisition channel for 40% of US merchants."</i></p>
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
              <p style={{ fontSize: "12px", color:'#304E7C' }}>
                {" "}
                <i>"3. Recruit stats sample page."</i>
              </p>
            </div>
          </div>
  
          {/*recruit DASHBOARD start */}
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
              <div className="recruit-dashboard-body p-5 justify-content-center align-items-center">
                <div className="recruit-dashboard-title">
                  <h1  
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    color:'#304E7C'
                  }}
                  >4. DASHBOARD PAGE </h1>
                </div>
                <p className="recruit-dashboard-text">
                  Recruit Dashboard consists of test scores, gpa, academic
                  achievement,athletic achievements, extra extra-curriculars,
                  summer team & high school teams with a link to contact the
                  coach's direct.
                </p>
                <p className='text-secondary' style={{fontSize:'12px'}}><i>"BULLETED-LISTS FACT: Bullet points capture a user’s attention, break up long paragraphs of text and make it easier for users to scan and digest information quickly.
  "</i></p>
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
              <p style={{ fontSize: "12px", color:'#304E7C' }}>
                {" "}
                <i>"4. Recruit dashboard sample page."</i>
              </p>
            </div>
          </div>
  
          {/*recruit VIDEOS start */}
  
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
              <div className="recruit-videos-body p-5 justify-content-center align-items-center">
                <div className="recruit-videos-title">
                  <h1
                   style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    color:'#304E7C'
                  }}
                  >5. VIDEO LIBRARY PAGE </h1>
                </div>
                <p className="recruit-videos-text">
                 This video library page consists of a collection of 3 videos; defense, hitting, MLB bullpens.
                 Each video loads independently, and at an efficient rate. The User also has the option to download videos to save, or forward video links to others.
                </p>
                <p className='text-secondary' style={{fontSize:'12px'}}><i>"LOAD TIME FACT: 25% of people will abandon a video that takes 3 or more seconds to load, and 40% will abandon a video that takes 5 or more seconds to load. Not exclusive to a websites."</i></p>
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
              <p style={{ fontSize: "12px", color:'#304E7C' }}>
                {" "}
                <i>"5. Recruit video library sample page."</i>
              </p>
            </div>
          </div>
  
          {/*recruit LEAGUE AFFILIATION start */}
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
              <div className="recruit-affiliation-body p-5 justify-content-center align-items-center">
                <div className="recruit-affiliation-title">
                  <h1
                   style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    color:'#304E7C'
                  }}
                  >
                    6. LEAGUE AFFILIATION PAGE </h1>
                </div>
                <p className="recruit-affiliation-text">        
    The League Affiliation page displays the current team affiliations; high school team & summer team details include coach & league, and are accompanied by buttons, that are linked to the league website. 
  </p>
  <p className='text-secondary' style={{fontSize:'12px'}}><i>"LEARN MORE FACT: Providing users with the option to learn more, leads to an increase in conversion. Users who are more informed are more likely to return to your site.
              "</i></p>
              
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
              <p style={{ fontSize: "12px", color:'#304E7C' }}>
                {" "}
                <i>"6. Recruit league affiliation sample page."</i>
              </p>
            </div>
          </div>
  
  <br></br>
  <br></br>
  <br></br>
  
  <p className="text-black p-4 bg-warning"><b>-------------------site undergoing renovations! --------------- <br></br>THIS IS THE OFFICIAL END FOR NOW</b><br></br>MORE TO COME!</p>
  
  <p className="text-black"><b>---------EMAIL CAMPAIGN IMAGES--------</b></p>
  
  
          <br></br>
  
  
  <br></br>
  <br></br>
  
  
  
          <div className="container mt-5">
            
          </div>
  
  
  
  
  
  
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <img
                src={RecruitHome}
                alt="RecruitHome"
                className="mb-2 border border-black"
                style={{
                  width: "80%",
                  height: "auto",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                }}
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
              <div className="service-body p-5 justify-content-center align-items-center">
                <div className="service-title">
                <div className="container mt-5"><p>----------------------PLACEHOLDER----------------------</p></div>
                  <h1>TITLE</h1>
                </div>
                <p className="service-text">
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
                    See Services Offered
                    <FaArrowLeft className="ms-2" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
  
     
  
  
 
    <div style={{ fontFamily: "sans-serif" }}>
      <div className="container mt-5 p-4">
        <h1
        style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            color:'#304E7C'
          }}
        >Digital Marketing</h1>
        <div className="row d-flex justify-content-center ">
          <div className="col-sm-12 col-md-6 col-lg-6 px-2 justify-content-center ">
            <div className="digital-marketing-body p-4 justify-content-center ">
              <div className="digital-marketing-title">
                <p>DIGITAL MARKETING CONCEPTS AND CHANNELS</p>
                <h4
                style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    color:'#304E7C'
                  }}
                >OVERVIEW</h4>
              </div>
              <p
                className="digital-marketing-text"
                style={{ fontSize: "14px" }}
              >
                Digital marketing is a dynamic and multifaceted approach to
                promoting products, services, or brands through various online
                channels, leveraging the power of the internet to connect with
                target audiences, build brand awareness, and drive engagement.
                With its ability to reach global
                audiences, track performance metrics, and adapt in real-time,
                digital marketing offers businesses a powerful toolkit to
                establish an online presence, connect with customers, and
                achieve marketing goals in the ever-evolving digital landscape.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 p-2 mt-3 justify-content-center">
            <div className="digital-marketing-body p-4 justify-content-center" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",}}>
              <div id="menu" className="digital-marketing-menu ">
                <h4
                style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    color:'#304E7C'
                  }}
                >KEY COMPONENTS MENU</h4>
                <h6>TOPICS OF INTEREST</h6>
                <br></br>
                <p style={{ fontSize: "12px" }}>
                  Choose a <i>'Key Component'</i> from the <b>Key Components</b> menu provided to learn more about a specific area of interest...
                </p>
                <ServicesDropdown
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>
            </div>
          </div>
        </div>



        <br></br>
        <h1
        style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            color:'#304E7C'
          }}
        >Key Components</h1>



        <div className="container mt-5 p-4" id="seo">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 ">
            <img
              src={Creator}
              alt="Creator"
              className="mb-2 border border-black mx-auto d-block"
              style={{ width: "85%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}
            />         
</div>

<div className="col-sm-12 col-md-6 col-lg-6 ">
<h4
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            color:'#304E7C'
          }}
          >
                SEO STRATEGIES
              </h4>
<div id="seo-strategies">
                    <ul>
                      <li className="mb-2" style={{ fontSize: "12px" }}>
                        <b>SEARCH-ENGINE OPTIMIZATION:</b> Optimizing online
                        content to improve its visibility in search engine
                        results, to organically increase traffic.
                      </li>
                      <li className="mb-2" style={{ fontSize: "12px" }}>
                        <b>SEARCH-ENGINE MARKETING:</b> Paid advertising on
                        search engines to appear in sponsored listings when
                        users search for specific keywords.
                      </li>
                    </ul>
                  </div>
            <h4>MYTH</h4>
            <p style={{ fontSize: "12px" }}>Some mistakenly believe that producing a large volume of content is more beneficial than focusing on creating high-quality, valuable content. In reality, quality content that resonates with the target audience, provides genuine value, and aligns with strategic goals is often more effective in building trust, engagement, and driving meaningful results. Quantity alone does not guarantee success; it's the relevance and quality of the content that truly matter.</p>
            </div>
            <div className="p-2">
           <a
                        href="#menu"
                        className="dropdown-link "
                        style={{ fontSize: "12px" }}
                      >
                        Back to Menu
                      </a>  
                      </div>  
          
            </div>
            </div>


            <div className="container mt-5 p-4" id="content">
          <div className="row d-flex justify-content-center p-2">
       
            <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center">
            <h4
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            color:'#304E7C'
          }}
          >
               CONTENT MARKETING
              </h4> 
            <div id="content-marketing">
                    <ul>
                      <li className="mb-2" style={{ fontSize: "12px" }}>
                        <b>SOCIAL MEDIA MARKETING:</b> Promoting products or
                        services on social media platforms.
                      </li>
                      <li className="mb-2" style={{ fontSize: "12px" }}>
                        <b>EMAIL MARKETING:</b> Sending targeted messages and
                        promotional content direct via email to nurture leads or
                        encourage loyalty.
                      </li>
                    </ul>
                  </div>
                  <h4>MYTH</h4>
            <p style={{ fontSize: "12px" }}>Some mistakenly believe that producing a large volume of content is more beneficial than focusing on creating high-quality, valuable content. In reality, quality content that resonates with the target audience, provides genuine value, and aligns with strategic goals is often more effective in building trust, engagement, and driving meaningful results. Quantity alone does not guarantee success; it's the relevance and quality of the content that truly matter.</p>
                 
</div>
<div className="col-sm-12 col-md-6 col-lg-6 ">
            <img
              src={Creator}
              alt="Creator"
              className="mb-2 border border-black mx-auto d-block"
              style={{ width: "85%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}
            />         
</div>
</div>
            <div className="p-2">
           <a
                        href="#menu"
                        className="dropdown-link "
                        style={{ fontSize: "12px" }}
                      >
                        Back to Menu
                      </a>  
                      </div>  
            
            </div>

            <div className="container mt-5 p-4" id="partnerships">
            <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src={Creator}
              alt="Creator"
              className="mb-2 border border-black mx-auto d-block"
              style={{ width: "85%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}
            />  
            </div>
<div className="col-sm-12 col-md-6 col-lg-6">      
<h4
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            color:'#304E7C'
          }}
          >
               STRATEGIC PARTNERSHIPS
              </h4> 
            <div id="strategic-partnerships">
                    <ul>
                      <li className="mb-2" style={{ fontSize: "12px" }}>
                        <b>AFFILIATE MARKETING:</b>Partnering with affiliates to
                        promote a business's products or services in exchange
                        for a commission for each sale or lead generated through
                        their efforts.
                      </li>
                      <li className="mb-2" style={{ fontSize: "12px" }}>
                        <b>INFLUENCER MARKETING:</b> Collaborating with
                        influencers that have significant online following, to
                        tap into their audience to promote products or services.
                      </li>
                    </ul>
                  </div>
                  <h4>MYTH</h4>
            <p style={{ fontSize: "12px" }}>Some mistakenly believe that producing a large volume of content is more beneficial than focusing on creating high-quality, valuable content. In reality, quality content that resonates with the target audience, provides genuine value, and aligns with strategic goals is often more effective in building trust, engagement, and driving meaningful results. Quantity alone does not guarantee success; it's the relevance and quality of the content that truly matter.</p>
           </div> 
           <br></br>
           <div className="p-2">
           <a
                        href="#menu"
                        className="dropdown-link "
                        style={{ fontSize: "12px" }}
                      >
                        Back to Menu
                      </a>  
                      </div>
            </div>
            </div>


         
            <div className="container mt-5 p-4" id="performance">
            <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center">
            <h4
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            color:'#304E7C'
          }}>
              PERFORMANCE-BASED INCENTIVES
              </h4>
            <div id="performance-based-incentives">
                    <ul>
                      <li className="mb-2" style={{ fontSize: "12px" }}>
                        <b>PAY-PER-CLICK:</b> Promoting products or services on
                        social media platforms.
                      </li>
                    </ul>
                    <h4>MYTH</h4>
            <p style={{ fontSize: "12px" }}>Some mistakenly believe that producing a large volume of content is more beneficial than focusing on creating high-quality, valuable content. In reality, quality content that resonates with the target audience, provides genuine value, and aligns with strategic goals is often more effective in building trust, engagement, and driving meaningful results. Quantity alone does not guarantee success; it's the relevance and quality of the content that truly matter.</p>
            
                  </div>
</div>
<br></br>
<div className="col-sm-12 col-md-6 col-lg-6 justify-content-center">
<img
              src={Creator}
              alt="Creator"
              className="mb-2 border border-black mx-auto d-block"
              style={{ width: "85%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}
            />  
           </div> 
           <div className="p-2">
           <a
                        href="#menu"
                        className="dropdown-link "
                        style={{ fontSize: "12px" }}
                      >
                        Back to Menu
                      </a>  
                      </div>      
            </div>
            </div>



            <div className="container mt-5 p-4" id="data">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 ">
            <img
              src={Creator}
              alt="Creator"
              className="mb-2 border border-black mx-auto d-block"
              style={{ width: "85%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}
            />  
</div>
<div className="col-sm-12 col-md-6 col-lg-6 ">
<h4
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            color:'#304E7C'
          }}>
          DATA-DRIVEN STRATEGIES
              </h4>
            <div id="data-driven-strategies">
                    <ul>
                      <li className="mb-2" style={{ fontSize: "12px" }}>
                        <b>DATA-DRIVEN MARKETING:</b> Using data analytics tools
                        to measure the performance of marketing campaigns,
                        gather insights, and optimize strategies for better
                        results.
                      </li>
                    </ul>
                 
            <h4>MYTH</h4>
            <p style={{ fontSize: "12px" }}>Some mistakenly believe that producing a large volume of content is more beneficial than focusing on creating high-quality, valuable content. In reality, quality content that resonates with the target audience, provides genuine value, and aligns with strategic goals is often more effective in building trust, engagement, and driving meaningful results. Quantity alone does not guarantee success; it's the relevance and quality of the content that truly matter.</p>
         </div> 
                      </div>
                      <div className="p-2">
           <a
                        href="#menu"
                        className="dropdown-link "
                        style={{ fontSize: "12px" }}
                      >
                        Back to Menu
                      </a>  
                      </div>    
            </div>
            </div>




            <div className="container mt-5 p-4" id="reputation">
          <div className="row d-flex justify-content-center align-items-center">
          
            <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center">   
            <h4
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            color:'#304E7C'
          }}
          >
          REPUTATION MANAGEMENT
              </h4>  
            <div id="reputation-management">
                    <ul>
                      <li className="mb-2" style={{ fontSize: "12px" }}>
                        <b>PUBLIC RELATIONS MANAGEMENT</b>Managing a brand's
                        online reputation through press releases, influencer
                        collaborations, and addressing customer feedback.
                      </li>
                    </ul>
                    <h4>MYTH</h4>
            <p style={{ fontSize: "12px" }}>Some mistakenly believe that producing a large volume of content is more beneficial than focusing on creating high-quality, valuable content. In reality, quality content that resonates with the target audience, provides genuine value, and aligns with strategic goals is often more effective in building trust, engagement, and driving meaningful results. Quantity alone does not guarantee success; it's the relevance and quality of the content that truly matter.</p>
                  </div>
</div>
<br></br>
<div className="col-sm-12 col-md-6 col-lg-6 justify-content-center">
<img
              src={Creator}
              alt="Creator"
              className="mb-2 border border-black mx-auto d-block"
              style={{ width: "85%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}
            /> 
          </div> 
            </div>
            <div className="p-2">
           <a
                        href="#menu"
                        className="dropdown-link "
                        style={{ fontSize: "12px" }}
                      >
                        Back to Menu
                      </a>  
                      </div>    
            </div>


      </div>
    </div>

    </main>
  );
};

export default DigitalMarketing;
