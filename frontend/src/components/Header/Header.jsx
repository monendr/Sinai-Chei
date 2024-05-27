import React from 'react';
import './Header.css';
import headerImage from '../../assets/header.jpg'; // Ensure the path to the image is correct

const Header = () => {
  return (
    <div className='header'>
      <div className="header-image">
        <img src={headerImage} alt="Header" />
      </div>
      <div className="header-contents">
        <h1>Maximum Match</h1>
        <p>Sinai Chei technologies will find a partner to your liking</p>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
