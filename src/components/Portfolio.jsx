import React from 'react';
import '../assets/styles/Portfolio.scss';

const Portfolio = () => ( 

    <div className="contenedor">
        <div className="principal" >

            <div className="principal__experience">
                <h2 className="principal__experience--h2">
                    PORTAFOLIO (MIS PROYECTOS)
                </h2>
            </div>

            <section className="principal__container" >
                
                <article className="principal__article">
                    <figure className="principal__image">
                        <img src="https://i.imgur.com/JJvutvJ.jpg" width="550" alt="Foto Alegram" />
                    </figure>
                    <div className="principal__div--text">
                        <h3>Maquetado de Insta</h3>
                        <p>Aplico conocimientos de HTML y CSS Grid para clonar las página de Insta.</p>
                        <li className="principal__ver"><a href="https://alejandroschwartz.github.io/react-alegram/">Ver mas!</a></li>
                    </div>
                </article>

                <article className="principal__article">
                    <figure className="principal__image">
                        <img src="https://i.imgur.com/se0KlOR.jpg" width="550" alt="Foto estudio jurídico" />
                    </figure>
                    <div className="principal__div--text">
                        <h3>Diseño para turismo.</h3>
                        <p>Diseño realizado con React.js y Bootstrap.</p>
                        <li className="principal__ver"><a href="https://alejandroschwartz.github.io/react-bootstrap-viajes/">Ver mas!</a></li>
                    </div>
                </article>

                <article className="principal__article">
                    <figure className="principal__image">
                        <img src="https://i.imgur.com/0Py5jJi.png" width="550" alt="Foto juegos ale" />
                    </figure>
                    <div className="principal__div--text">
                        <h3>Juegos de eventos aleatorios</h3>
                        <p>Aplicando conocimientos de javascript en juegos con eventos aleatorios. Condicionales para mostrar resultados y Math.random()... </p>
                        <li className="principal__ver"><a href="https://alejandroschwartz.github.io/flexbox-juegos-ale/">Ver mas!</a></li>
                    </div>
                </article>

                <article className="principal__article">
                    <figure className="principal__image">
                        <img src="https://i.imgur.com/QxAzWTY.png" width="550" alt="Foto del Gran ALtillo muebles antiguos" />
                    </figure>
                    <div className="principal__div--text">
                        <h3>Formularios</h3>
                        <p>Creación y validación de formularios con javascript, en React.</p>
                        <li className="principal__ver"><a href="https://alejandroschwartz.github.io/react-formularios/">Ver mas!</a></li>
                    </div>
                </article>

            </section>
        </div>
    </div>


);

export default Portfolio;