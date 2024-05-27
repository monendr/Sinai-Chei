import React from 'react';
import './About.css';
import headerImage from '../../assets/header.jpg'; // Update the path as needed

const About = () => {
  return (
    <div className="about-container">
      <img src={headerImage} alt="Header" className="about-image" />
      <div className="about-content">
        <h1>MAKE THE FIRST MOVE™</h1>
        <p>We’re the only app that makes dating better by putting women’s experiences first. Because when things are better for women, they’re better for everyone.</p>
        <button>About Sinai Chei</button>
      </div>
    </div>
  );
}

export default About;
