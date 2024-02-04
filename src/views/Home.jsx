import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Graphics from "../components/Graphics/Graphics.jsx";
import "../App.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


import Business from "../assets/images/Business.png";
import Organizations from "../assets/images/Organizations.png";
import YogaSet from "../assets/images/YogaStory/YogaSet.png";
import RecruitHome from "../assets/images/RecruitSite/RecruitHome.png";
import RecruitProfile from "../assets/images/RecruitSite/RecruitProfile.png";
import RecruitStats from "../assets/images/RecruitSite/RecruitStats.png";
import RecruitDashboard from "../assets/images/RecruitSite/RecruitDashboard.png";
import RecruitVideos from "../assets/images/RecruitSite/RecruitVideos.png";
import RecruitLeagues from "../assets/images/RecruitSite/RecruitLeages.png";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="container mt-5" style={{fontFamily:'sans-serif'}}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
            <div className="story-essentials-body p-2 justify-content-center align-bottom">
              <div className="story-essentials-title">
                <h3 className="mt-0"
                 style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'#304E7C'
                }}
                >TELL YOUR STORY...</h3>
              </div>
              <p className="story-essentials-text" style={{fontSize:'14px', fontFamily:'sans-serif'}}>
                In the enchanting realm of digital storytelling, businesses are
                weaving captivating tales using the magical wand of social media
                to captivate an audience.
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
                  color:'#304E7C'
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
            <div className="business-essentials-body p-5 justify-content-center align-bottom">
              <div className="business-essentials-title">
                <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
                <h1   style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'#304E7C'
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
<Graphics/>
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

   










    
      <br></br>
      <br></br>
     
    </main>
  );
};

export default Home;
