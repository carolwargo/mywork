import React, { useState } from 'react';
import { Modal} from 'react-bootstrap';


import Business from '../../assets/images/Business.png';
import RedBaseball from '../../assets/images/Graphics/RedBaseball.png';
import ProductCampaign from '../../assets/images/Graphics/ProductCampaign.png';
import LineUp from '../../assets/images/Graphics/LineUp.png';
import MidSeason from '../../assets/images/Graphics/MidSeason.png';
import CheckOut from '../../assets/images/Graphics/CheckOut.png';

import Catching from '../../assets/images/Graphics/Catching.png';
import Canceled from '../../assets/images/Graphics/Canceled.png';
import CuttersFlyers from '../../assets/images/Graphics/CuttersFlyers.png';
import NorthernGolf from '../../assets/images/Graphics/NorthernGolf.png';



const BusinessEssentials = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div className='container mt-4'>
    <div className="row graphics-container">
    <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
      <div className="graphics-body p-4 justify-content-center align-bottom">
        <div className="graphics-title">
          <img
            src={Business}
            alt="Business"
            className="mb-2 border border-black clickable-image"
            style={{ width: "80%", height: "auto" }}
            onClick={handleModalOpen}
          />
          <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
          <h1>BUSINESS ESSENTIALS</h1>
        </div>
        <p className="business-essentials-text">
          Explore our range of "Business Essentials" custom products tailored to your requirements. We offer a variety of design solutions to include graphic and digital design, promotional campaigns, as well as software solutions and server-side integrations.
        </p>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img
            src={Business}
            alt="Business"
            className="w-100 h-auto"
          />
        </Modal.Body>
       
      </Modal>
    </div>


    <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
      <div className="graphics-body p-4 justify-content-center align-bottom">
        <div className="graphics-title">
          <img
            src={RedBaseball}
            alt="RedBaseball"
            className="mb-2 border border-black clickable-image"
            style={{ width: "80%", height: "auto" }}
            onClick={handleModalOpen}
          />
          <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
          <h1>BUSINESS ESSENTIALS</h1>
        </div>
        <p className="business-essentials-text">
          Explore our range of "Business Essentials" custom products tailored to your requirements. We offer a variety of design solutions to include graphic and digital design, promotional campaigns, as well as software solutions and server-side integrations.
        </p>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:'1rem'}}>click to close</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={RedBaseball}
            alt="RedBaseball"
            className="w-100 h-auto"
          />
        </Modal.Body>
     
      </Modal>
    </div>


    <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
      <div className="graphics-body p-4 justify-content-center align-bottom">
        <div className="graphics-title">
          <img
            src={ProductCampaign}
            alt="ProductCampaign"
            className="mb-2 border border-black clickable-image"
            style={{ width: "80%", height: "auto" }}
            onClick={handleModalOpen}
          />
          <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
          <h1>BUSINESS ESSENTIALS</h1>
        </div>
        <p className="business-essentials-text">
          Explore our range of "Business Essentials" custom products tailored to your requirements. We offer a variety of design solutions to include graphic and digital design, promotional campaigns, as well as software solutions and server-side integrations.
        </p>

        <p className="mt-5">
            See Business Essentials
        </p>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img
            src={ProductCampaign}
            alt="ProductCampaign"
            className="w-100 h-auto"
          />
        </Modal.Body>
    
      </Modal>
    </div>

    </div>




{/* second row */  }
   



    {/* third row */  }
    <div className="row graphics-container">
    <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
      <div className="graphics-body p-4 justify-content-center align-bottom">
        <div className="graphics-title">
          <img
            src={LineUp}
            alt="LineUp"
            className="mb-2 border border-black clickable-image"
            style={{ width: "80%", height: "auto" }}
            onClick={handleModalOpen}
          />
          <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
          <h1>BUSINESS ESSENTIALS</h1>
        </div>
        <p className="business-essentials-text">
          Explore our range of "Business Essentials" custom products tailored to your requirements. We offer a variety of design solutions to include graphic and digital design, promotional campaigns, as well as software solutions and server-side integrations.
        </p>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img
            src={LineUp}
            alt="LineUp"
            className="w-100 h-auto"
          />
        </Modal.Body>
       
      </Modal>
    </div>


    <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
      <div className="graphics-body p-4 justify-content-center align-bottom">
        <div className="graphics-title">
          <img
            src={CheckOut}
            alt="CheckOut"
            className="mb-2 border border-black clickable-image"
            style={{ width: "80%", height: "auto" }}
            onClick={handleModalOpen}
          />
          <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
          <h1>BUSINESS ESSENTIALS</h1>
        </div>
        <p className="graphics-text">
          Explore our range of "Business Essentials" custom products tailored to your requirements. We offer a variety of design solutions to include graphic and digital design, promotional campaigns, as well as software solutions and server-side integrations.
        </p>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:'1rem'}}>click to close</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={CheckOut}
            alt="CheckOut"
            className="w-100 h-auto"
          />
        </Modal.Body>
     
      </Modal>
    </div>


    <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
      <div className="graphics-body p-4 justify-content-center align-bottom">
        <div className="graphics-title">
          <img
            src={MidSeason}
            alt="MidSeason"
            className="mb-2 border border-black clickable-image"
            style={{ width: "80%", height: "auto" }}
            onClick={handleModalOpen}
          />
          <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
          <h1>BUSINESS ESSENTIALS</h1>
        </div>
        <p className="business-essentials-text">
          Explore our range of "Business Essentials" custom products tailored to your requirements. We offer a variety of design solutions to include graphic and digital design, promotional campaigns, as well as software solutions and server-side integrations.
        </p>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img
            src={MidSeason}
            alt="MidSeason"
            className="w-100 h-auto"
          />
        </Modal.Body>
    
      </Modal>
    </div>

    </div>


     {/* fourth row */  }
   



{/*row 6 */}

    <div className="row graphics-container">
    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
      <div className="graphics-body p-4 justify-content-center align-bottom">
        <div className="graphics-title">
          <img
            src={CuttersFlyers}
            alt="CuttersFlyers"
            className="mb-2 border border-black clickable-image"
            style={{ width: "80%", height: "auto" }}
            onClick={handleModalOpen}
          />
          <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
          <h1>BUSINESS ESSENTIALS</h1>
        </div>
        <p className="business-essentials-text">
          Explore our range of "Business Essentials" custom products tailored to your requirements. We offer a variety of design solutions to include graphic and digital design, promotional campaigns, as well as software solutions and server-side integrations.
        </p>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img
            src={CuttersFlyers}
            alt="CuttersFlyers"
            className="w-100 h-auto"
          />
        </Modal.Body>
       
      </Modal>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
      <div className="graphics-body p-4 justify-content-center align-bottom">
        <div className="graphics-title">
          <img
            src={NorthernGolf}
            alt="NorthernGolf"
            className="mb-2 border border-black clickable-image"
            style={{ width: "80%", height: "auto" }}
            onClick={handleModalOpen}
          />
          <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
          <h1>BUSINESS ESSENTIALS</h1>
        </div>
        <p className="graphics-text">
          Explore our range of "Business Essentials" custom products tailored to your requirements. We offer a variety of design solutions to include graphic and digital design, promotional campaigns, as well as software solutions and server-side integrations.
        </p>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:'1rem'}}>click to close</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={NorthernGolf}
            alt="NorthernGolf"
            className="w-100 h-auto"
          />
        </Modal.Body>
      </Modal>
    </div>
    </div>


    <div className="row graphics-container">
    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
      <div className="graphics-body p-4 justify-content-center align-bottom">
        <div className="graphics-title">
          <img
            src={Canceled}
            alt="Canceled"
            className="mb-2 border border-black clickable-image"
            style={{ width: "80%", height: "auto" }}
            onClick={handleModalOpen}
          />
          <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
          <h1>BUSINESS ESSENTIALS</h1>
        </div>
        <p className="business-essentials-text">
          Explore our range of "Business Essentials" custom products tailored to your requirements. We offer a variety of design solutions to include graphic and digital design, promotional campaigns, as well as software solutions and server-side integrations.
        </p>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img
            src={Canceled}
            alt="Canceled"
            className="w-100 h-auto"
          />
        </Modal.Body>
       
      </Modal>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-bottom">
      <div className="graphics-body p-4 justify-content-center align-bottom">
        <div className="graphics-title">
          <img
            src={Catching}
            alt="Catching"
            className="mb-2 border border-black clickable-image"
            style={{ width: "80%", height: "auto" }}
            onClick={handleModalOpen}
          />
          <p>SHOP SINGLE ITEMS OR PACKAGE OPTIONS</p>
          <h1>BUSINESS ESSENTIALS</h1>
        </div>
        <p className="graphics-text">
          Explore our range of "Business Essentials" custom products tailored to your requirements. We offer a variety of design solutions to include graphic and digital design, promotional campaigns, as well as software solutions and server-side integrations.
        </p>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:'1rem'}}>click to close</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={Catching}
            alt="Catching"
            className="w-100 h-auto"
          />
        </Modal.Body>
      </Modal>
    </div>
    </div>



    
     </div>
  );
};

export default BusinessEssentials;
