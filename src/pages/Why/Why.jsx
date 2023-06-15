import React from 'react'
import whyus from "../../assets/img/why-us.png"
import "./Why.css"
import "../../../script"
const Why = () => {
  return (
    <section id="why-us" className="why-us section-bg">
  <div className="container-fluid" data-aos="fade-up">
    <div className="row">
      <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
        <div className="content">
          <h3>Tengo habilidades de <strong>colaboración y autonomía</strong></h3>
          <p>
            Como desarrollador Full Stack, tengo la capacidad de trabajar de manera efectiva tanto en equipo como de forma autónoma. Comprendo la importancia de la colaboración y la comunicación en proyectos conjuntos, así como la responsabilidad y autonomía necesarias para trabajar de manera independiente y lograr resultados exitosos.
          </p>
        </div>
        <div className="accordion-list">
          <ul>
            <li>
              <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1">
                <span>01</span> ¿Tienes experiencia en el desarrollo de aplicaciones web?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="accordion-list-1" className="collapse" data-bs-parent=".accordion-list">
                <p>
                  Sí, cuento con experiencia en el desarrollo de aplicaciones web. He trabajado con diversas tecnologías y lenguajes de programación, como HTML, CSS, JavaScript y frameworks como React. Estoy familiarizado con el desarrollo tanto en el frontend como en el backend, lo que me permite crear aplicaciones web completas y funcionales.
                </p>
              </div>
            </li>
            <li>
              <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed">
                <span>02</span> ¿Qué tecnologías dominas en el desarrollo Full Stack?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                <p>
                  Como desarrollador Full Stack, tengo experiencia en una amplia gama de tecnologías. En el frontend, domino HTML, CSS y JavaScript, así como frameworks y librerías populares como React y Redux. En el backend, tengo experiencia con lenguajes como Node.js y Express. Además, estoy familiarizado con bases de datos relacionales como PostgreSQL y no relacionales como Mongodb.
                </p>
              </div>
            </li>
            <li>
              <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed">
                <span>03</span> ¿Tienes experiencia en el despliegue de aplicaciones en la nube?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                <p>
                  Sí, he trabajado en el despliegue de aplicaciones en la nube. Tengo experiencia en plataformas de alojamiento web como Hostinger, Railway y  Vercel, las cuales he utilizado para alojar y gestionar aplicaciones web.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: `url(${whyus})`}} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
    </div>
  </div>
</section>
  )
}

export default Why