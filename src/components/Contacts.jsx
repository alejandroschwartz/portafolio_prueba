import React from 'react';
import '../assets/styles/Contacts.scss';

const Contacts = () => ( 

    <section className="contact" id="Contacto">

        <div className="contact__text">
            <h3>¿Creamos algo juntos?</h3>
            <p>Contáctame por los siguientes medios.</p> <br />
        </div>
        
        <div className="contact__logos">
            <div className="contact__logo--container">
                <a href="https://www.linkedin.com/in/alejandro-matias-schwartz/">
                    <figure className="contact__logos--figure">
                        <img src="https://i.imgur.com/ELTVEHa.png" alt="Logo linkedin" />
                    </figure>
                </a>
            </div>
            <div className="contact__logo--container">
                <a href="https://github.com/alejandroschwartz">
                    <figure className="contact__logos--figure">
                        <img src="https://i.imgur.com/GbwMemw.png" alt="Logo github" />
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
    </section>
    
);

export default Contacts;