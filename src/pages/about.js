import React from 'react';
import Image from '../img/headshot.jpg'
import './about.css';
const About = () =>{
  return (
      <body className="bg-light">
        <div className="card-container">
          <div className="card bg-light">
            <img className="headshot" src={Image} alt="headshot"></img> 
          </div> 
          <div className="container">
            <h3>Darian Hutchinson</h3>
            <p className="job-title">Software Engineer</p>
            <p>Hello There! My name is Darian Hutchinson and I am a full time database administrator and part time web developer. 
              Our online world is all about data and I love to organize, secure and visualize that data. The speed at which we can 
              process information nowadays can lead to an overwhelming amount of information. My specialty is to break down that 
              information into easily accessible and understandable chunks that are workable to those who need it. In many cases, 
              my passion for data collides with website design! These situations are where I find the most joy in my work.<br></br>
              
              <br></br>I graduated with a Bachelor's degree in Computer Science from Portland State University in 2022. Before that, I 
              obtained a Bachelor's degree in Music also from PSU. Having both an arts and science background I have found that web 
              development is the perfect combination of the two. If you are looking to design/develop a website that can display and use your 
              hard-earned data, feel free to reach out to me!
            </p>
            <a href="/projects" class="button">Projects</a>
          </div>
          <div className="empty-div">
          </div>
        </div>
        
      </body> 
  );
}
export default About;
