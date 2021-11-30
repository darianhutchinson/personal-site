import React from 'react';
import './contact.css';
const Contact = () =>{
  return (
    <body>
      <div className="heading">
        <p className="contact-p">Feel free to ask me any questions!</p>
      </div> 
      <form className="">
        <div class="form-group">
          <label for="fName">First Name</label>
          <input type="text" className="form-control" id="fName" placeholder="Your first name here..."></input>
        </div>
        <div class="form-group">
          <label for="lName">Last Name</label>
          <input type="text" className="form-control" id="lName" placeholder="Your last name here..."></input>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your email here..."></input>
        </div>
        <div class="form-group">
          <textarea className="form-control">Send me a message!</textarea>
        </div>
        <div class="form-group btn-container">
          <input type="submit" value="Send it!"></input>
        </div>
      </form>
    </body>
  );
}
export default Contact;
