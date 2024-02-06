import React, { useState } from "react";
import ServicesDropdown from "../../components/ServicesDropdown/ServicesDropdown";
import Creator from "../../assets/images/DigitalMarketing/Creator.png";

const DigitalMarketing = () => {
  const [selected, setSelected] = useState(null);

  return (
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
            <div className="p-3 text-center">
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
            <div className="p-3 text-center">
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
           <div className="p-3 text-center">
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
           <div className="p-3 text-center">
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
                      <div className="p-3 text-center">
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
            <div className="p-3 text-center">
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
  );
};

export default DigitalMarketing;


































































