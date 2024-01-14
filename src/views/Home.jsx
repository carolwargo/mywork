import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Link } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import "../App.css";
import { GiShoppingCart } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { GiBasketballJersey } from "react-icons/gi";
import { BsArrowThroughHeart } from "react-icons/bs";
import { PiTShirtDuotone } from "react-icons/pi";
import Business from "../assets/images/Business.png";
import Promo from "../assets/images/Promo.png";
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
      <div className="container mt-4 p-2">
        <div className="row d-flex justify-content-center align-items-center p-4">
          <h1>Welcome!</h1>
          <p>Introduction</p>
          <h3>Preface Statement & Roadmap</h3>
          <p>
            This site consists of coding and programming from scratch- No CMA
            software is utilized such as WordPress or Wix preconfigured plug-in
            components. The framework used is React.js, the same framework used
            to build, maintain and aquired by Facebook.
          </p>
          <div className="row d-flex">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>The benefits of coding from scratch are as follows:</p>
              <ul>
                <li>Customization</li>
                <li>Security</li>
                <li>Speed</li>
                <li>Scalability</li>
                <li>SEO</li>
                <li>Flexibility</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>The benefits of using React.js are as follows:</p>
              <ul>
                <li>
                  <b>Virtual DOM:</b> Enhances performance by minimizing actual
                  DOM manipulations.
                </li>
                <li>
                  <b>JSX (JavaScript XML):</b> Enables a concise way to mix HTML
                  with JavaScript.
                </li>
                <li>
                  <b>Flexibility and Integration:</b> Easily integrates with
                  other libraries and frameworks.
                </li>
                <li>
                  <b>Great Performance:</b> Uses code splitting to break down
                  your application into smaller chunks that can be loaded on
                  demand, instead of loading the entire application.
                </li>
                <li>
                  <b>Maintained by Facebook:</b> Regular updates, improvements,
                  and support.
                </li>
                <li>
                  <b>Mobile Development:</b> Allows building mobile apps with
                  the same codebase.
                  <p>
                    Have you had an image fall off screen when viewing on your
                    mobile device and only render a portion of it?
                  </p>
                  <h6>LIKE THIS:</h6>
                </li>
              </ul>
            </div>
          </div>
          <p>React.js is a JavaScript library for building user interfaces.</p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
            <div className="business-essentials-body p-4 justify-content-center align-bottom">
              <div className="business-essentials-title">
                <h4 className="mt-0">TELL YOUR STORY...</h4>
              </div>
              <p className="business-essentials-text">
                In the enchanting realm of digital storytelling, businesses are
                weaving captivating tales using the magical wand of social media
                to captivate an audience.
              </p>
              <p>
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
                width: "90%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px" }}>
              {" "}
              <i>"Recruit landing sample page"</i>
            </p>
          </div>
        </div>
      </div>
<br></br>
<br></br>
<br></br>
<br></br>
      {/*recruit SITE start */}
      <div className="container mt-5">
        <h1 className="mt-5">DIGITAL RECRUITING TOOL</h1>
        <p> Why recruiting "TOOL", instead of recruiting "site"? 
          BECAUSE...I designed it to be flexible— Capable of rendering either as a complete entity or as individual components. 
  With its responsive design, the tool seamlessly adapts to all screen sizes, ensuring no overflow or loss of content. The graphics and content are easily converted to print media or used on social platforms.
 </p>

        {/*recruit HOMEPAGE start */}
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="service-body p-5 justify-content-center align-items-center">
              <div className="service-title">
                <h1>1. LANDING PAGE </h1>
              </div>
              <p className="service-text">
             
The Landing or Home page features a brief introduction of the recruit accompanied by a photo. The pivotal 
element of the page is the "Call to Action" bottons. Serving as a directional 
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
            <p style={{ fontSize: "12px" }}>
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
                <h1>2. PROFILE PAGE </h1>
              </div>
              <p className="recruit-profile-text">
  The Profile Page offers essential information at a glance, including graduation year, 
  primary and secondary positions, height, weight, and batting/throwing stats. 
  It also features clickable contact links for user convenience.</p>
              <p className='text-secondary' style={{fontSize:'12px'}}><i>"CLICKABLE CONTACT LINKS FACT: 64% of User will leave a site contact information to be readily available."</i></p>
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
            <p style={{ fontSize: "12px" }}>
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
                <h1>3. STATS PAGE </h1>
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
            <p style={{ fontSize: "12px" }}>
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
                <h1>4. DASHBOARD PAGE </h1>
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
            <p style={{ fontSize: "12px" }}>
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
                <h1>5. VIDEO LIBRARY PAGE </h1>
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
            <p style={{ fontSize: "12px" }}>
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
                <h1>6. LEAGUE AFFILIATION PAGE </h1>
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
            <p style={{ fontSize: "12px" }}>
              {" "}
              <i>"6. Recruit league affiliation sample page."</i>
            </p>
          </div>
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
                <p>SHOP BY SERVICE BASED NEED.</p>
                <h1>SERVICES</h1>
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

      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="service-body p-5 justify-content-center align-items-center">
              <div className="service-title">
                <p>SHOP BY SERVICE BASED NEED.</p>
                <h1>SERVICES</h1>
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
            <img
              src={RecruitProfile}
              alt="RecruitProfile"
              className="mb-2 border border-black"
              style={{
                width: "80%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
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
            <div className="business-essentials-body p-5 justify-content-center align-bottom">
              <div className="business-essentials-title">
                <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
                <h1>BUSINESS ESSENTIALS</h1>
              </div>
              <p className="business-essentials-text">
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
                <h1>ORGANIZATIONS</h1>
              </div>
              <p className="organizations-text">
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
                <h1>SPECIAL EVENTS</h1>
              </div>
              <p className="spacial-event-text">
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
            <div className="service-body p-5 justify-content-center align-items-center">
              <div className="service-title">
                <p>SHOP BY SERVICE BASED NEED.</p>
                <h1>SERVICES</h1>
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
                  <FaArrowRight className="ms-2" />
                </a>
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
            <img
              src={RecruitProfile}
              alt="RecruitProfile"
              className="mb-2 border border-black"
              style={{ width: "80%", height: "auto" }}
            />
            <img
              src={RecruitVideos}
              alt="RecruitVideos"
              className="mb-2 border border-black"
              style={{ width: "80%", height: "auto" }}
            />
            <img
              src={RecruitLeagues}
              alt="RecruitLeagues"
              className="mb-2 border border-black"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <br></br>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6"></div>
      </div>
      <h3>Team Shop</h3>
      <div className="row p-4 px-5 mt-3">
        <div className="roll-in-view4 col-sm-12 col-md-3 col-lg-3 ">
          <GiGraduateCap
            className="roll-in-view"
            style={{ fontSize: "100px" }}
          />
          <p>
            <a href="/team-shop" className="text-decoration-none text-light">
              Senior Nights
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        <div className="roll-in-view3 col-sm-12 col-md-3 col-lg-3 ">
          <PiTShirtDuotone
            className="roll-in-view"
            style={{ fontSize: "100px" }}
          />
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Spirit Wear
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>

        <div className="roll-in-view2 col-sm-12 col-md-3 col-lg-3 ">
          <GiBasketballJersey
            className="roll-in-view"
            style={{ fontSize: "100px" }}
          />
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Team Drip
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        <div className="roll-in-view1 col-sm-12 col-md-3 col-lg-3 ">
          <BsArrowThroughHeart
            className="roll-in-view"
            style={{ fontSize: "100px" }}
          />
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Girlfriend Gear
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
      </div>

      <br></br>
      <br></br>
      <h3>Custom Merchandise</h3>
      <div className="row p-5">
        <div className="col-sm-12 col-md-3 col-lg-2">
          <img
            src={Promo}
            alt="Promo"
            className="rounded mb-2"
            style={{ width: "100%", height: "auto" }}
          />

          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Promo Items
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        {/**     <div className="col-sm-12 col-md-3 col-lg-2">
        <p>
        <a href="/graphic-design/contact-form" className='text-decoration-none text-light'>
        Product Labels & Packaging
                  <FaArrowRight className="ms-2" />
                </a>
        </p>
          </div>
          */}

        <div className="col-sm-12 col-md-3 col-lg-2">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Catalogs
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-2">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Signs
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-2">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Banners
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-2">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Digital Packages
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <h3>Business Essentials</h3>
      <div className="row p-5">
        <div className="col-sm-12 col-md-3 col-lg-2">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Business Cards
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-2">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Post Cards
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-2">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Banners
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-2">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Posters
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-2">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Stamps
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-2">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Stickers
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <h3>Services</h3>
      <div className="row p-5">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Web Design
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Software Solutions
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Custom Graphics
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <p>
            <a
              href="/graphic-design/contact-form"
              className="text-decoration-none text-light"
            >
              Branding & Logo Design
              <FaArrowRight className="ms-2" />
            </a>
          </p>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-6">
          <GiShoppingCart style={{ fontSize: "50px" }} />
          Business Essentials Details
        </div>
        <div className="col-sm-12 col-md-3 col-lg-6">
          <RiComputerLine style={{ fontSize: "50px" }} />
        </div>
        <div
          className="col-sm-12 col-md-3 col-lg-6"
          style={{ padding: "2rem" }}
        >
          <IoColorPaletteOutline style={{ fontSize: "50px" }} />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-6">
          <FaHandshake style={{ fontSize: "50px" }} />
          Services
        </div>
      </div>
    </main>
  );
};

export default Home;