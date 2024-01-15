import React, { useState } from 'react';
import { Modal} from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

import Organizations from '../../assets/images/Organizations.png';

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
            src={Organizations}
            alt="Organizations"
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
          <a href="/business-essentials" className="text-decoration-none">
            See Business Essentials
            <FaArrowRight className="ms-2" />
          </a>
        </p>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img
            src={Organizations}
            alt="Organizations"
            className="w-100 h-auto"
          />
        </Modal.Body>
       
      </Modal>
    </div>


    <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
      <div className="graphics-body p-4 justify-content-center align-bottom">
        <div className="graphics-title">
          <img
            src={Organizations}
            alt="Organizations"
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
          <a href="/business-essentials" className="text-decoration-none">
            See Business Essentials
            <FaArrowRight className="ms-2" />
          </a>
        </p>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:'1rem'}}>click to close</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={Organizations}
            alt="Organizations"
            className="w-100 h-auto"
          />
        </Modal.Body>
     
      </Modal>
    </div>


    <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-bottom">
      <div className="graphics-body p-4 justify-content-center align-bottom">
        <div className="graphics-title">
          <img
            src={Organizations}
            alt="Organizations"
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
          <a href="/business-essentials" className="text-decoration-none">
            See Business Essentials
            <FaArrowRight className="ms-2" />
          </a>
        </p>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img
            src={Organizations}
            alt="Organizations"
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
