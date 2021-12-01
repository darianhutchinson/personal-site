import React from 'react';
import './previousWork.css';
import { FaMusic } from 'react-icons/fa'
import { GrPersonalComputer } from 'react-icons/gr'
import { AiFillFileExcel } from 'react-icons/ai'
import { ImDatabase } from 'react-icons/im'
import {Component} from 'react'
class PreviousWork extends Component {
  render(){
    return (
      <body>
        <div>
            <h4 className="previous-work-header">Here is some stuff I have accomplished so far!</h4>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <FaMusic className="icon icon-1"></FaMusic>
            <div className="icon-title">
              <h5>Music Degree</h5>
              <ul>
                <li>Completed a Bachelor's Degree in Music from Portland State University</li>
                <li>Toured many parts of the world singing classical music</li>
              </ul>
              
            </div> 
          </div>

          <div className="grid-item">
            <GrPersonalComputer className="icon icon-2"></GrPersonalComputer>
            <div className="icon-title">
              <h5>Computer Science Degree</h5>
              <ul>
                <li>Completed a Bachelor's Degree in Computer Science from Portland State University</li>
                <li>Learned about programming, computer systems, data structures and much more!</li>
              </ul>
            </div>  
          </div>

          <div className="grid-item">
            <AiFillFileExcel className="icon icon-3"></AiFillFileExcel>
            <div className="icon-title">
              <h5>Head of Product Management</h5>
              <ul>
                <li>Worked on a small team that specialized in online retail reselling</li>
                <li>Organized and maintained company data regarding all product information</li>
              </ul>
            </div> 
            
          </div>

          <div className="grid-item">
            <ImDatabase className="icon icon-4"></ImDatabase>
            <div className="icon-title">
              <h5>DBA Internship</h5>
              <ul>
                <li>Started an internship at Pacific Maritime Association</li>
                <li>Learning lots about SQL databases</li>
              </ul>
            </div>  
          </div>
        </div>
      </body>
    );
  }
}
export default PreviousWork;

