import React from "react"; 
import Business from "../../../assets/images/Business.png";
import RedBaseball from "../../../assets/images/Graphics/RedBaseball.png";
import ProductCampaign from "../../../assets/images/Graphics/ProductCampaign.png";

const GraphicServices = () => {


    return (
        <div>
            <h1>Graphic Services</h1>
            <div className="row graphics-container">
        {/* Business Image */}
        <div className="col-sm-12 col-md-4 col-lg-4 mb-2 d-flex justify-content-center align-items-center">
      <div className="graphics-body p-2 d-flex flex-column justify-content-center align-items-center">
        <div className="graphics-title">
              <img
                src={Business}
                alt="Business"
                className="mb-2 border border-black clickable-image"
                style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
            
              />
              <h4>TITLE</h4>
            </div>
            <p className="business-essentials-text">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem rerum recusandae nulla alias voluptate eius temporibus cum beatae maxime pariatur ullam, aliquid, molestiae, repellendus enim consectetur vitae placeat tenetur?
            </p>
          </div>

          {/* ImageModal for Business Image */}
        
        </div>

        {/* Red Baseball Image */}
        <div className="col-sm-12 col-md-4 col-lg-4 mb-2 d-flex justify-content-center align-items-center">
      <div className="graphics-body p-2 d-flex flex-column justify-content-center align-items-center">
        <div className="graphics-title">
              <img
                src={RedBaseball}
                alt="RedBaseball"
                className="mb-2 border border-black clickable-image"
                style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
              />
              <h4>TITLE</h4>
            </div>
            <p className="business-essentials-text">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem rerum recusandae nulla alias voluptate eius temporibus cum beatae maxime pariatur ullam, aliquid, molestiae, repellendus enim consectetur vitae placeat tenetur?
            </p>
          </div>
        </div>

        {/* Product Campaign Image */}
        <div className="col-sm-12 col-md-4 col-lg-4 mb-2 d-flex justify-content-center align-bottom">
          <div className="graphics-body p-2 justify-content-center align-bottom">
            <div className="graphics-title">
              <img
                src={ProductCampaign}
                alt="ProductCampaign"
                className="mb-2 border border-black clickable-image"
                style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
              />
              <h4>TITLE</h4>
            </div>
            <p className="business-essentials-text">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quidem rerum recusandae nulla alias voluptate eius temporibus cum beatae maxime pariatur ullam, aliquid, molestiae, repellendus enim consectetur vitae placeat tenetur?
            </p>
          </div>
        </div>
      </div>

        </div>
    );
};

export default GraphicServices;