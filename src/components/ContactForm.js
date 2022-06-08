import React from 'react'
import {RiMailSendFill} from 'react-icons/ri'
import { useState } from 'react';
import './ContactForm.css'

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
        const form = document.getElementsByName("contactform")[0];
        const formData = new FormData(form);
        const url = 'https://formsubmit.co/2d6e1a89efa6492b6e05e1a2b92816ca';
        fetch(
            url,
            {
              method: 'POST',
              body: formData
            }
          )
          return false;
    };
  
    return (
      <form name='contactform' className="form" onSubmit="return handleSubmit">
        
        <input type="hidden" name="_captcha" value="false"/>
        <input type="hidden" name="_next" value="/"/>

        <div className='header'>
            <RiMailSendFill size={45} className="icon" />
            <h1> Contact Us </h1>
        </div>
        
  
        <label>Name</label>
        <input
          name="name"
          type='text'
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required/>
  
        <label>Email</label>
        <input
          name="email"
          type='email'
          placeholder="Email"
          required/>
  
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          rows='10'
          required></textarea>
  
        <button
          type="Submit"
          
        >
          Submit
        </button>
      </form>
    );
  };

export default ContactForm
