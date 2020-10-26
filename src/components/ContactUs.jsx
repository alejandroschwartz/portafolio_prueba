import React from 'react';
import emailjs from 'emailjs-com';

import '../assets/styles/ContactUs.scss';

function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('alejandromatiassch', 'template_turismo_ale', e.target, /*'user_sFGeMInRraO3kCiz9ib04'*/)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input  className='text' type="text" name="user_name" 
                placeholder="Nombre"/>
      <input className='email' type="email" name="user_email" 
                placeholder="Email" />
      <textarea className='message' name="message" 
                placeholder="Envíame un mensaje..."/>
      <input className='send' type="submit" value="Enviar" />
    </form>
  );
}

export default ContactUs;