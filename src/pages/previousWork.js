import React from 'react';
import './previousWork.css';
import { FaMusic } from 'react-icons/fa'
import { GrPersonalComputer } from 'react-icons/gr'
import { AiFillFileExcel } from 'react-icons/ai'
import { ImDatabase } from 'react-icons/im'
const PreviousWork = () =>{
  function musicPrompt(){
    alert("You triggered music prompt")
  }
  return (
    <body>
      <h3>Previous Work</h3>
      <div>
          <p>Here is some sutff I have accomplished so far!</p>
          <p>Click on the icons for more info!</p>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <FaMusic className="icon" onClick={musicPrompt}></FaMusic>
          <p>Bachelor's of Music Degree</p>
        </div>
        <div className="grid-item">
          <GrPersonalComputer className="icon"></GrPersonalComputer>
          <p>Bachelor's of Computer Science Degree</p>
        </div>
        <div className="grid-item">
          <AiFillFileExcel className="icon"></AiFillFileExcel>
          <p>Head of Product Management</p>
        </div>
        <div className="grid-item">
          <ImDatabase className="icon"></ImDatabase>
          <p>Database Admin Internship</p>
        </div>
      </div>
    </body>
  );
}
export default PreviousWork;

