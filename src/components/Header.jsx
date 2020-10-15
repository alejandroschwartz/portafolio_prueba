import React from 'react';
import '../assets/styles/Header.scss';

const Header = () => ( 


    <header className='header'>
        <div className="header__container">
            <figure className="header__figure">
                    <img className="header__figure--logo" src="https://i.imgur.com/qxE0Lu9.png" alt="logo de portada" />
            </figure>
            <ul className="header__ul">
                <li className="header__ul--list"><a href="#inicio">Inicio</a></li>
                <li className="header__ul--list"><a href="#Proyectos">Proyectos</a></li>
                <li className="header__ul--list"><a href="#Contacto">Contacto</a></li>
            </ul>
        </div>
    </header>

);

export default Header;