import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "../styles/pages-styles/Contact.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  const handleNameChange = (event) => {
    const input = event.target;
    setName(input.value);
  }

  const handleEmailChange = (event) => {
    const input = event.target;
    setEmail(input.value);
  }

  const handleMessageChange = (event) => {
    const input = event.target;
    setMessage(input.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(serviceId, templateId, templateParams, publicKey)
	    .then((response) => {
	      console.log('SUCCESS!', response.status, response.text);
	    }, (err) => {
	      console.log('FAILED...', err);
	    });
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-form-cont">
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>

          <button 
            className="btn-type-1" 
            type="submit">
          </button>
        </form>

      </div>
    </div>
  );
}

export default Contact;
