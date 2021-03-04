import React from 'react';
import '../assets/styles/Portfolio.scss';

const Portfolio = () => ( 

    <div className="contenedor">
        <div className="principal" >

            <div className="principal__experience" id="Proyecto">
                <h2 className="principal__experience--h2">
                    PORTAFOLIO (MIS PROYECTOS)
                </h2>
            </div>

            <section className="principal__container" >
                
                <article className="principal__article">
                    <figure className="principal__image">
                        <img src="https://i.imgur.com/N16KRxF.png" width="550" alt="Foto juegos ale" />
                    </figure>
                    <div className="principal__div--text">
                        <h3><strong>App Escuela C# .NET Core</strong></h3>
                        <p>Realizado C# con .NET Core, Base de datos SQL, desplegado en Azure</p>
                        <li className="principal__ver"><a href="https://aleschwartzescuela.azurewebsites.net/">Ver mas!</a></li>
                    </div>
                </article>

                <article className="principal__article">
                    <figure className="principal__image">
                        <img src="https://i.imgur.com/GoOFDCt.png" width="550" alt="Foto del Gran ALtillo muebles antiguos" />
                    </figure>
                    <div className="principal__div--text">
                        <h3><strong>Aplicación web NET Core MVC</strong></h3>
                        <p>Aplicación web C# realizado con patrón MVC en NET Core, desplegado en Azure</p>
                        <li className="principal__ver"><a href="https://alemvcmovie.azurewebsites.net/">Ver mas!</a></li>
                    </div>
                </article>

                <article className="principal__article">
                    <figure className="principal__image">
                        <img src="https://i.imgur.com/ICjlejj.png" width="550" alt="Foto del Gran ALtillo muebles antiguos" />
                    </figure>
                    <div className="principal__div--text">
                        <h3><strong>Portafolio .NET Core</strong></h3>
                        <p>Realizado C# con .NET Core, desplegado en Azure</p>
                        <li className="principal__ver"><a href="https://aleschwartzpage.azurewebsites.net/">Ver mas!</a></li>
                    </div>
                </article>
                
                <article className="principal__article">
                    <figure className="principal__image">
                        <img src="https://i.imgur.com/JJvutvJ.jpg" width="550" alt="Foto Alegram" />
                    </figure>
                    <div className="principal__div--text">
                        <h3><strong>Maquetado de Insta</strong></h3>
                        <p>Aplico conocimientos de HTML y CSS Grid dentro de React para clonar las página de Insta.</p>
                        <li className="principal__ver"><a href="https://alejandroschwartz.github.io/react-alegram/">Ver mas!</a></li>
                    </div>
                </article>

                <article className="principal__article">
                    <figure className="principal__image">
                        <img src="https://i.imgur.com/se0KlOR.jpg" width="550" alt="Foto estudio jurídico" />
                    </figure>
                    <div className="principal__div--text">
                        <h3><strong>Maquetado para turismo</strong></h3>
                        <p>Diseño realizado con Bootstrap dentro de React.js.</p>
                        <li className="principal__ver"><a href="https://alejandroschwartz.github.io/react-bootstrap-viajes/">Ver mas!</a></li>
                    </div>
                </article>

                <article className="principal__article">
                    <figure className="principal__image">
                        <img src="https://i.imgur.com/0Py5jJi.png" width="550" alt="Foto juegos ale" />
                    </figure>
                    <div className="principal__div--text">
                        <h3><strong>Juegos en JavaScript</strong></h3>
                        <p>Aplicando conocimientos de javascript en juegos con eventos aleatorios. Condicionales para mostrar resultados y Math.random()... </p>
                        <li className="principal__ver"><a href="https://alejandroschwartz.github.io/flexbox-juegos-ale/">Ver mas!</a></li>
                    </div>
                </article>

                <article className="principal__article">
                    <figure className="principal__image">
                        <img src="https://i.imgur.com/QxAzWTY.png" width="550" alt="Foto del Gran ALtillo muebles antiguos" />
                    </figure>
                    <div className="principal__div--text">
                        <h3><strong>Formularios en React</strong></h3>
                        <p>Creación y validación de formularios con javascript, en React.</p>
                        <li className="principal__ver"><a href="https://alejandroschwartz.github.io/react-formularios/">Ver mas!</a></li>
                    </div>
                </article>

            </section>
        </div>
    </div>


);

export default Portfolio;