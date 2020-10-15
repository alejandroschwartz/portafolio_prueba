import React from 'react';
import '../assets/styles/Portfolio.scss';

const Portfolio = () => ( 

    <div className="principal" >

        <div className="principal__experience">
            <h2 className="principal__experience--h2">
                PORTAFOLIO (MIS PROYECTOS)
            </h2>
        </div>

        <section className="principal__container" >
            
            <article className="principal__article">
                <figure className="principal__image">
                    <img src="https://i.imgur.com/gisn7ln.png" width="550" alt="Foto juegos ale" />
                </figure>
                <div className="principal__div--text">
                    <h3>Juegos de eventos aleatorios</h3>
                    <p>Página creada para aplicar conocimiento de javascript, creando juegos con eventos aleatorios. Utilicé condicionales para mostrar los resultados y Math.random()... </p>
                    <li className="principal__ver"><a href="https://alejandroschwartz.github.io/flexbox-juegos-ale/index.html">Ver mas!</a></li>
                </div>
            </article>

            <article className="principal__article">
                <figure className="principal__image">
                    <img src="https://i.imgur.com/AoghHei.jpg" width="550" alt="Foto del Gran ALtillo muebles antiguos" />
                </figure>
                <div className="principal__div--text">
                    <h3>Gran Altillo - Muebles antiguos</h3>
                    <p>Se dedica a compra, venta y restauración de muebles antiguos de estilo desde el año 2001.</p>
                    <li className="principal__ver"><a href="https://alejandroschwartz.github.io/flexbox-muebles-antiguos/index.html">Ver mas!</a></li>
                </div>
            </article>

            <article className="principal__article">
                <figure className="principal__image">
                    <img src="https://i.imgur.com/QSOs05j.jpg" width="550" alt="Foto Alegram" />
                </figure>
                <div className="principal__div--text">
                    <h3>Maquetado de Insta</h3>
                    <p>Aplico conocimientos de HTML y CSS Grid para clonar las página de Insta.</p>
                    <li className="principal__ver"><a href="https://alejandroschwartz.github.io/grid-alegram">Ver mas!</a></li>
                </div>
            </article>

            <article className="principal__article">
                <figure className="principal__image">
                    <img src="https://i.imgur.com/ypRAtoB.jpg" width="550" alt="Foto estudio jurídico" />
                </figure>
                <div className="principal__div--text">
                    <h3>Diseño para estudio jurídico.</h3>
                    <p>Diseño realizado con React.js, utilizando HTML y SASS.</p>
                    <li className="principal__ver"><a href="https://alejandroschwartz.github.io/flexbox-estudio-juridico/index.html">Ver mas!</a></li>
                </div>
            </article>
        </section>
    </div>


);

export default Portfolio;