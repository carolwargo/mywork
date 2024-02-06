import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./dropdown.css";

function ServicesDropdown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
  
    return (
        <div className="dropdown">
        <div className="dropdown-btn" style={{ fontSize: '14px' }} onClick={(e) => 
          setIsActive(!isActive)}>
          Key Components
          <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>        
        </div>

        {isActive && (
       <div
       className="dropdown-content"
       style={{ fontSize: '12px' }}
    >
       <div className="dropdown-item">
       <a
  href="#seo-strategies"
  onClick={() => {
    setSelected("SEO Strategies");
    setIsActive(false);
  }}
  style={{
    textDecoration: "none",
    color: "#333"
  }}
  activeclassname="active" // Add this if you want to apply a style when the link is active
>
  SEO Strategies
</a>
       </div> 

       
       <div className="dropdown-item">
         <a
           href="#content-marketing"
           onClick={() => {
             setSelected("Content Marketing");
             setIsActive(false);
           }}
           style={{
             textDecoration: "none",
             color: "#333"
           }}
           activeclassname="active" // Add this if you want to apply a style when the link is active
>
          Content Marketing
         </a>
       </div>


       <div className="dropdown-item">
         <a
           href="#strategic-partnerships"
           onClick={() => {
             setSelected("Strategic Partnerships");
             setIsActive(false);
           }}
           style={{
             textDecoration: "none",
             color: "#333"
           }}
           activeclassname="active" // Add this if you want to apply a style when the link is active
>
          Strategic Partnerships
         </a>
       </div>



       <div className="dropdown-item">
         <a
           href="#performance-based-incentives"
           onClick={() => {
             setSelected("Performance-Based Incentives");
             setIsActive(false);
           }}
           style={{
             textDecoration: "none",
             color: "#333"
           }}
           activeclassname="active" // Add this if you want to apply a style when the link is active
>
          Performance-Based Incentives
         </a>
       </div>




       <div className="dropdown-item">
         <a
           href="#data-driven-strategies"
           onClick={() => {
             setSelected("Data-Driven Strategies");
             setIsActive(false);
           }}
           style={{
             textDecoration: "none",
             color: "#333"
           }}
           activeclassname="active" // Add this if you want to apply a style when the link is active
>
Data-Driven Strategies
         </a>
       </div>



       <div className="dropdown-item">
         <a
           href="#reputation-management"
           onClick={() => {
             setSelected("Reputation Management");
             setIsActive(false);
           }}
           style={{
             textDecoration: "none",
             color: "#333"
           }}
           activeclassname="active" // Add this if you want to apply a style when the link is active
>
Reputation Management
         </a>
       </div>



          </div>
        )}
      </div>
   
  );
}

export default ServicesDropdown;
