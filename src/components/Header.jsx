import React from 'react';
import '../assets/styles/Header.scss';

const Header = () => ( 


    <header className='header'>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="col-md-8">
                        <a className="navbar-brand header__logo" href="#">Alejandro Schwartz</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="col-md-4">
                        <div className="header__container navbar-nav d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#inicio">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Proyecto">Proyectos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Contacto">Contactos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
        
    </header>

);

export default Header;