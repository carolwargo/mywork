import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramShareButton = ({ imageUrl, caption }) => {
  const handleClick = () => {
    // Create the Instagram share URL with pre-filled content
    const url = `instagram://library?AssetPath=${encodeURIComponent(imageUrl)}&Caption=${encodeURIComponent(caption)}`;

    // Open the Instagram app if available, otherwise open Instagram website
    window.open(url, '_blank');
  };

  return (
    <p onClick={handleClick}>
 <FaInstagram />
    </p>
  );
};

export default InstagramShareButton;
