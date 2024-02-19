import React from "react";
import  ScrollSpy  from "../../components/ScrollSpy/ScrollSpy";
import Header from "../../components/Header/Header";
const WebDevelopment = () => {

    return (
        <div>
<Header/>
<div>
<div className="container mt-3">
  <h2>Breadcrumbs</h2>
  <p>The .breadcrumb class indicates the current page's location within a navigational hierarchy:</p>                  
  <ul className="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Photos</a></li>
    <li className="breadcrumb-item"><a href="/">Summer 2017</a></li>
    <li className="breadcrumb-item"><a href="/">Italy</a></li>
    <li className="breadcrumb-item active">Rome</li>
  </ul>
</div>
</div>
            <div className="text-center justify-content-center p-3 mt-4">
           <div className="container p-5">
            <h1 >Web Development</h1>
        <p  style={{fontSize:'14px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere, dicta possimus doloremque libero ipsam iure officia minima odio harum nisi eveniet sapiente labore voluptatem in quasi inventore repellat doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere, dicta possimus doloremque libero ipsam iure officia minima odio harum nisi eveniet sapiente labore voluptatem in quasi inventore repellat doloribus.</p>
           </div>
            </div>
       
        <ScrollSpy/>
        </div>
    );
    };

export default WebDevelopment;