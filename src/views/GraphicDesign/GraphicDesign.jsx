import React from "react";

//import Graphics from "../../components/Graphics/Graphics.jsx";
//import RecruitHome from "../../assets/images/RecruitSite/RecruitHome.png";
//import RecruitProfile from "../../assets/images/RecruitSite/RecruitProfile.png";
//import RecruitStats from "../../assets/images/RecruitSite/RecruitStats.png";
//import RecruitDashboard from "../../assets/images/RecruitSite/RecruitDashboard.png";
//import RecruitVideos from "../../assets/images/RecruitSite/RecruitVideos.png";
//import RecruitLeagues from "../../assets/images/RecruitSite/RecruitLeages.png";

const GraphicDesign = () => {
    return (
        <div>
          <div>
<div className="mt-3">
  <h2>Breadcrumbs</h2>
  <p>The .breadcrumb class indicates the current page's location within a navigational hierarchy:</p>                  
  <ul id="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Photos</a></li>
    <li className="breadcrumb-item"><a href="/">Summer 2017</a></li>
    <li className="breadcrumb-item"><a href="/">Italy</a></li>
    <li className="breadcrumb-item active">Rome</li>
  </ul>
</div>
</div>

<div className="mt-5">
        <h1>Graphic Design</h1>
        <h3>Brand Idenity</h3>
        </div>
        {/**Graphic Designs*/}
<div className="mt-5">
<h1
 style={{
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  color:'black'
}}
>GRAPHICS PORTFOLIO</h1>
<p>All whole images or individual components, layers & text within the image can be animated separately.<br></br><span className="text-secondary" style={{fontSize:'12px'}}>"I typically save superficial functions like, animations & audio until the layout and content are set."</span></p>
{/*<Graphics/>*/}
      </div>
<br></br>
        </div>
    );
    };

export default GraphicDesign;