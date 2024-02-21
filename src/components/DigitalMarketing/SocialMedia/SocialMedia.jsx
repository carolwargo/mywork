import React from "react";  
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import SocialForms from "../../../assets/images/SocialMedia/SocialForms.png";

function SocialMedia() {

    return (
        <div className="container">

<div className="container mt-5 py-5" >
        <div className="row d-flex p-3  justify-content-center align-items-center">
         <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="container">
          <p className="mb-0">THE REALITY OF SOCIAL PLATFORMS IN BUSINESS..</p>
          <h1
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              color: "#black",
            }}
          >
            SOCIAL MEDIA MARKETING & PLATFORMS
          </h1>
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-bottom">
     
            <p>In today's digitally-driven landscape, social media has 
              transcended its original role as a platform for socializing. 
              It now stands as a potent instrument for businesses, 
              empowering them to actively connect with their audience, amplify 
              brand presence, and drive revenue. Through social media marketing, 
              businesses capitalize on the vast outreach and influence of these 
              platforms to forge genuine connections with both current and 
              prospective customers, cultivating richer and more intimate 
              relationships.
              </p>
            </div>
         
            <div className="container">
            <h5 className="mt-4 mb-4"style={{fontFamily:'serif'}}><i>Why is strategic manipulation of social platforms essential?</i>
           </h5>
          <h5 className=" mb-2"  style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
              color: "#black",
                fontFamily:'serif'
            }}><b>BECAUSE SOCIAL MEDIA WAS NOT BUILT FOR BUSINESS...</b></h5> 
       <p> Social media platforms initially emerged as channels for personal communication and networking, rather than for commercial endeavors. However, businesses have recognized the immense potential of these platforms for marketing and customer engagement. To succeed in this space, businesses often need to adapt and manipulate their strategies to align with the dynamics and algorithms of each platform.</p>
          </div>
          </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
          <div className="container">
            <img src={SocialForms} alt="forms" style={{width:'100%', boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)'}} className=""/>
    <br />
    <h4>LET US HELP YOU </h4>
    <h5>create your narrative, track your progress and organize your content.</h5>
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Block level button
      </Button>
    </div>
    </div>
          </div>
          </div>
          <hr />
          </div>
          </div>
        
    );
    }

export default SocialMedia;