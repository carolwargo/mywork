// ContentManagement.jsx IS A COMPONENT OF SocialMedia.jsx
// SocialMedia.jsx IS A COMPONENT OF DigitalMarketing.jsx views
//THIS PAGE NEEDS: footer, to become a blog post, to be connected to a database
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SocialForms from "../../../../assets/images/SocialMedia/SocialForms.png";
import { Button } from "react-bootstrap";

function ContentManagement() {
  return (
    <main>
      {/*start content-mangagement container*/}
       {/*THIS PAGE'S PURPOSE: CTA to contact us for help*/}
      <div className="container-fluid mt-5" id="#content-management-container">
        {/* start col-social media content management*/}
        <div className="row d-flex p-3 justify-content-center align-items-center">
          <div className="col-sm-12 col-md-7 col-lg-7 p-4 my-2">
            <div className="container ">
       
        <h2>Best Practices</h2>
            <p>Organization and scheduling ensure a cohesive and 
            effective strategy. 
             At 2FACE, we understand the importance of 
              strategic planning and streamlined execution to maximize 
              yourpresence. 
              Let's delve into why our organization and scheduling 
              services are essential:
              </p>
              {/*start list of social media organization methods*/}
              <ul>
                <li><b>Tailored Content Planning:</b> We work closely with you to understand 
your brand identity, target audience, and marketing goals. Our team 
meticulously plans and organizes your social media content calendar, 
ensuring that each post aligns with your brand voice, messaging, and 
objectives.</li>

<li><b>Optimized Posting Schedule: </b>Leveraging advanced analytics and 
insights, we determine the optimal times and frequencies for posting content 
across various social media platforms. By scheduling posts strategically, 
we maximize reach, engagement, and conversion opportunities, ultimately 
driving tangible results for your business.</li>

<li><b>Consistency and Brand Cohesion: </b>Maintaining a consistent presence on 
social media is crucial for building brand awareness and loyalty. With our 
organization and scheduling services, you can rest assured that your brand 
will maintain a cohesive and professional image across all platforms, 
fostering trust and credibility among your audience.</li>

<li><b>Efficiency and Time Savings:</b> Handling social media management can be 
time-consuming and overwhelming, especially for busy entrepreneurs and small 
business owners. By outsourcing organization and scheduling tasks to us, 
you free up valuable time to focus on core business activities while we 
handle the intricacies of your social media strategy.</li>

<li><b>Proactive Campaign Management:</b> Whether you're launching a new 
product, promoting an event, or running a seasonal campaign, our team 
ensures seamless coordination and execution. We meticulously plan and 
schedule campaign content, monitor performance metrics in real-time, and 
optimize strategies to maximize campaign success.</li>

</ul>
{/*end list of social media organization methods*/}

{/*start CTA for organization*/}
     
    </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5 bg-white 
            border border-3 d-flex flex-column align-items-center py-4"
           style={{ boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)'}}
           id="social-media-content-management"
          >
            <p>2FACE social media marketing services empowers you to 
                harness the full potential of social media marketing 
                while enjoying peace of mind knowing that your 
                strategy is in expert hands. Let us help you elevate 
                your brand's online presence and achieve your 
                business objectives with precision and efficiency.</p> 
                <img
            src={SocialForms}
            alt="forms"
            style={{ width: "100%" }}
            className=" border border-dark bg-white"
        />
{/*DO-TO: review all 3<p> tags in this column*/}
   {/*end CTA for organization*/}


    <div className="py-3 d-flex justify-content-end flex-grow-1">
        <Button
            variant="dark"
            size="sm"
            href="/contact"
            alt="contact"
            style={{ boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)' }}
        >
            <b>CONTACT US TODAY</b>
        </Button>
    </div>

         
            <div className="container px-3">
          
        <h2 >LET US HELP YOU</h2>
        <ul>
          <li  style={{ fontSize: '1.4rem' }} ><b>CREATE</b> your narrative,</li>
          <li  style={{ fontSize: '1.4rem' }}> <b>TRACK</b> your progress,</li>
          <li  style={{ fontSize: '1.4rem' }}> <b>ORGANIZE</b> your content and</li>
          <li  style={{ fontSize: '1.4rem' }}> <b>TARGET</b> your market.</li>
        </ul>
        <div className="py-3 d-flex justify-content-end flex-grow-1">
        <Button
            variant="dark"
            size="sm"
            href="/contact"
            alt="contact"
            style={{ boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)' }}
        >
            <b>GET STARTED</b>
        </Button>
    </div>
            </div>
            </div>
            </div>
      </div>
 
    </main>
  );
}

export default ContentManagement;
