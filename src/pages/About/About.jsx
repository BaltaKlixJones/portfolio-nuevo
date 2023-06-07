import React from 'react'
import "./About.css"
const About = () => {
  return (
    <section id="about" className="about" >
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Sobre mi / About</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              Hola a todos, mi nombre es Baltasar Klix Jones, y soy un
              programador Full Stack Developer. Con experiencia en el desarrollo
              de aplicaciones web, he trabajado en una variedad de proyectos
              utilizando tecnologías como HTML, CSS, JavaScript, React, Node.js
              y muchas otras.
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i>
                Me apasiona resolver problemas complejos a través de la
                tecnología y estoy constantemente buscando nuevas formas de
                mejorar mis habilidades y conocimientos.
              </li>
              <li>
                <i className="ri-check-double-line"></i> Estoy emocionado de aplicar
                mis habilidades y experiencia para ayudar a mis clientes a
                alcanzar sus objetivos y superar sus desafíos.
              </li>
              <li>
                <i className="ri-check-double-line"></i> ¡Gracias por tomarse el
                tiempo de leer mi presentación!{" "}
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Hello everyone, my name is Baltasar Klix Jones, and I am a Full
              Stack Developer programmer. With experience in the development of
              web applications, I have worked on a variety of projects using
              technologies such as HTML, CSS, JavaScript, React, Node.js and
              many others.
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i> I am passionate about
                solving complex problems through technology and I am constantly
                looking for new ways to improve my skills and knowledge.
              </li>
              <li>
                <i className="ri-check-double-line"></i> I am excited to apply my
                skills and experience to help my clients achieve their goals and
                overcome their challenges.
              </li>
              <li>
                <i className="ri-check-double-line"></i>Thank you for taking the
                time to read my presentation!{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About