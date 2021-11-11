import React from 'react';
import Image from '../img/headshot.jpg'
import './about.css';
const About = () =>{
  return (
      <body className="bg-light">
        <div className="banner">
          <img className="headshot" src={Image} alt="headshot"></img> 
        </div> 
        <div className="about-content">
          <h1 className="job-title">Software Developer</h1>
        </div>
      </body> 
  );
}
export default About;
