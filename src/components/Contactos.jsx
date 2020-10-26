import React from 'react';
import emailjs from 'emailjs-com';

import '../assets/styles/Contactos.scss';

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
    <div className="contact" id="Contacto" >
        <div className="contact__text">
            <h3>¿Creamos algo juntos?</h3>
            <p>Contáctame por los siguientes medios.</p> <br />
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
            <input  className='text' type="text" name="user_name" 
                        placeholder="Nombre"/>
            <input className='email' type="email" name="user_email" 
                        placeholder="Email" />
            <textarea className='message' name="message" 
                        placeholder="Envíame un mensaje..."/>
            <input className='send' type="submit" value="Enviar" />
        </form>

        <div className="contact__logos">
            <div className="contact__logo--container">
                <a href="https://github.com/alejandroschwartz">
                    <figure className="contact__logos--figure">
                        <img src="https://i.imgur.com/GbwMemw.png" alt="Logo github" />
                    </figure>
                </a>
            </div>
            <div className="contact__logo--container">
                <a href="https://www.linkedin.com/in/alejandro-matias-schwartz/">
                    <figure className="contact__logos--figure">
                        <img src="https://i.imgur.com/ELTVEHa.png" alt="Logo linkedin" />
                    </figure>
                </a>
            </div>
            <div className="contact__logo--container">
                <a href="https://www.facebook.com/alejandromatias.schwartz">
                    <figure className="contact__logos--figure" >
                        <img src="https://i.imgur.com/GCjGAVF.png" alt="Logo facebook" />
                    </figure>
                </a>
            </div>
            <div className="contact__logo--container">
                <a href="https://www.instagram.com/vectocor/">
                    <figure className="contact__logos--figure">
                        <img src="https://i.imgur.com/sxSPhRO.png" alt="Logo instagram" />
                    </figure>
                </a>
            </div>
        </div>
    </div>
  );
}

export default ContactUs;