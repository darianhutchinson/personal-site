import React from 'react';
import Pokemon from '../img/pokemon.png'
import Castle from '../img/castle.png'
import './projects.css';
const Projects = () =>{
  return (
    <body>
      <div>
          <h4 className="previous-work-header">Here are a couple <span className="projects-txt">projects</span> I have worked on!</h4>
      </div>
      <div className="grid-container projects-grid">
        <div className="grid-item projects-grid-item">
          <img className="pokemon" src={Pokemon} alt="yellow happy cartoon mouse named Pikachu"></img> 
          <div className="project-button">
            <a href="https://darianhutchinson.github.io/PokeDash/" target="_blank" class="button">PokeDash Web App</a>
          </div>
          <div className="project-p">
            <p>React App web application using a free pokemon api</p>
          </div>
            
        </div>

        <div className="grid-item projects-grid-item">
          <img className="castle" src={Castle} alt="castle"></img> 
          <div className="project-button">
            <a href="https://github.com/darianhutchinson/Frupal" target="_blank" class="button">Kingdom of Frupal</a>
          </div>
          <div className="project-p">
            <p>Computer Console game built in C using ncurses</p>
          </div>
        </div>
      </div>
    </body>
    
  );
}
export default Projects;

