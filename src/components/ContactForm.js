import "./ContactFormStyle.css";

import React from 'react'

const ContactForm = () => {
  return (
    <div className="form">
      <form>
        <label> Name</label>
        <input type="text" placeholder="Type your name"/>
        <label> Email</label>
        <input type="text" placeholder="Type your email"/>
        <label> Subject</label>
        <input type="text" placeholder="Type subject"/>
        <label> Message</label>
        <textarea rows="6" placeholder="Type your message"/>
        <button className="btn" type="submit">Submit</button>
      </form>
      
    </div>
  )
}

export default ContactForm