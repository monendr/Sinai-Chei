import React from 'react';
import './Works.css';

const Works = () => {
  return (
    <div className="how-it-works">
      <h2>How it works</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Registration</h3>
          <p>Tell us about yourself and your interests.</p>
        </div>
        <div className="step">
          <h3>2. Search</h3>
          <p>Look for the right people; swipe in smart search, tags by narrow categories.</p>
        </div>
        <div className="step">
          <h3>3. Maximum match!</h3>
          <p>It's much easier to communicate if you have something in common.</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
