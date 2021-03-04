import React from 'react';
import '../assets/styles/Principal.scss';

const Principal = () => ( 

    <div className="div__principal" >

        <article className="principal__proyect">
            <p className="principal__text">
                <strong>SOBRE MI EXPERIENCIA</strong><br /><br />

                {/* Para realizar esta página aplique conocimiento de <strong>HTML</strong>, de <strong>CSS</strong>, utilicé preprocesador <strong>SASS</strong> y también <strong>JavaScript</strong>. Fui guardando dentro de mi repositorio local de <strong>Git</strong> y subiedo a mi repositorio virtual en <strong>GitHub</strong>. */}

                Este es mi portafolio de proyectos. Actualmente estudio de Platzi. Mis proyectos los realicé aplicando lo aprendido en <strong>HTML</strong>, <strong>CSS</strong> (Flexbox, Grid, librería de Bootstrap), control de versiones en <strong>Git</strong> y <strong>GitHub</strong>. Bases de datos <strong>SQL</strong> y <strong>MongoDB</strong>.

            </p> <br />
            <figure className="principal__proyect--images">
                <img className="principal__screens" src="https://i.imgur.com/lVO8RG9.png" alt="Imagen de pantallas" />
            </figure>
        </article>
        
    </div>

);

export default Principal;