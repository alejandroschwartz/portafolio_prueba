import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import '../assets/styles/ContactUs.scss';



function ContactUs() {

  const [ user_name, setName ] = useState('');
  const [ message, setMessage ] = useState('')



  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('alejandromatiassch', 'template_turismo_ale', e.target, 'user_sFGeMInRraO3kCiz9ib04')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  console.log(user_name);

  return (
    <form className="contact-form" onSubmit={ (e) => sendEmail(e) }>
      <input    className='text' type="text" name="user_name" 
                onChange={ (f) => setName(f.target.value) } 
                value={ user_name }  placeholder="Nombre"/>
      <input className='email' type="email" name="user_email" 
                placeholder="Email" />
      <textarea className='message' name="message" 
                placeholder="Envíame un mensaje..."/>
      <input className='send' type="submit" value="Enviar" />
    </form>
  );
}

export default ContactUs;