// THIS IS SocialMedia.jsx, A COMPONENT OF DigitalMarketing.jsx VIEWS
// Components used for this page are: SocialTestimonial,
// Images used for this page are: SocialForms,
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SocialTestimonial from "./SocialTestimonial/SocialTestimonial";
import ContentManagement from "./ContentManagement/ContentManagement";
import { FaArrowRight } from "react-icons/fa";


function SocialMedia() {
  return (
    <main id="social-media">
      {/*start social media page container*/}
      <div className="container-fluid mt-5 bg-secondary-subtle" id="#social-media-container">
         {/*start social media intro: REALITY OF...*/}
        <div className="row d-flex p-5 justify-content-center align-items-center">
          <div className="col-sm-12 col-md-7 col-lg-7 p-4 my-2">
            <div className="container">
              <p className="mb-0">
                THE REALITY OF SOCIAL PLATFORMS IN BUSINESS AND THE VITAL ROLE OF STRATEGIC MANAGEMENT:
              </p>
              <h1
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  color: "#black",
                }}
              >
                SOCIAL MEDIA MARKETING & PLATFORM STRATEGIES
              </h1>
              <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-bottom my-2">
                <div>
                <p  style={{fontSize:'14px'}}>
                In today's digitally-driven landscape, <b>strategic manipulation</b> of social 
                platforms is essential for businesses seeking success in the online sphere. 
                Social media has transcended its original role as a platform for 
                socializing; it now stands as a potent instrument for businesses, 
                empowering them to actively connect with their audience, amplify brand 
                presence, and drive revenue. Through social media marketing, businesses 
                capitalize on the vast outreach and influence of these platforms to forge 
                genuine connections with both current and prospective customers, cultivating 
                richer and more intimate relationships.
                </p>
                <a href="/services">Explore our social media marketing services 
         and pricing. <FaArrowRight /></a>
          
                </div>
                <br />
      
              </div>
{/*<h2>WHAT IS STRATEGIC MANIPULATION OF SOCIAL PLATFORMS ENTAIL TO WORK FOR BUSINESSES?</h2>
<p>Strategic principles applied to ensure a social network meets business needs...</p>*/}
            </div>
          </div>

          <div className="col-sm-12 col-md-5 col-lg-5 text-center bg-white border border-3 d-flex flex-column align-items-center p-4"
           style={{ boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)' }}
          >
            <div>
            <h5 style={{ fontFamily: "serif" }}>
                <i>
                 'Why is strategic platform management vital for business success on social media?'
                </i>
              </h5>
              <br />
              <h4
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                  color: "#black",
                  fontFamily: "serif",
                }}
              >
                <b>SOCIAL MEDIA WAS NOT BUILT FOR BUSINESS...</b>
              </h4>
              <p style={{fontSize:'14px'}}>
                {" "}
                Social media platforms initially emerged as channels for
                personal communication and networking.They were not built for
                commercial endeavors. However, businesses have recognized the
                immense potential of these platforms for marketing and customer
                engagement. To succeed in this space, businesses often need to
                adapt and manipulate their strategies to align with the dynamics
                and algorithms of each platform.
              </p>
</div>
</div>
<SocialTestimonial />
        </div>
         {/*end social media intro: REALITY OF...*/}
      </div>
      {/*end social media page container*/}
      <ContentManagement />
    
      <hr />
    </main>
  );
}

export default SocialMedia;
