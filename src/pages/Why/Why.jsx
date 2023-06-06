import React from 'react'
import whyus from "../../assets/img/why-us.png"
import "../../../script"
const Why = () => {
  return (
    <section id="why-us" class="why-us section-bg">
  <div class="container-fluid" data-aos="fade-up">
    <div class="row">
      <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
        <div class="content">
          <h3>Tengo habilidades de <strong>colaboración y autonomía</strong></h3>
          <p>
            Como desarrollador Full Stack, tengo la capacidad de trabajar de manera efectiva tanto en equipo como de forma autónoma. Comprendo la importancia de la colaboración y la comunicación en proyectos conjuntos, así como la responsabilidad y autonomía necesarias para trabajar de manera independiente y lograr resultados exitosos.
          </p>
        </div>
        <div class="accordion-list">
          <ul>
            <li>
              <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1">
                <span>01</span> ¿Tienes experiencia en el desarrollo de aplicaciones web?
                <i class="bx bx-chevron-down icon-show"></i>
                <i class="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="accordion-list-1" class="collapse" data-bs-parent=".accordion-list">
                <p>
                  Sí, cuento con experiencia en el desarrollo de aplicaciones web. He trabajado con diversas tecnologías y lenguajes de programación, como HTML, CSS, JavaScript y frameworks como React. Estoy familiarizado con el desarrollo tanto en el frontend como en el backend, lo que me permite crear aplicaciones web completas y funcionales.
                </p>
              </div>
            </li>
            <li>
              <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" class="collapsed">
                <span>02</span> ¿Qué tecnologías dominas en el desarrollo Full Stack?
                <i class="bx bx-chevron-down icon-show"></i>
                <i class="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list">
                <p>
                  Como desarrollador Full Stack, tengo experiencia en una amplia gama de tecnologías. En el frontend, domino HTML, CSS y JavaScript, así como frameworks y librerías populares como React y Redux. En el backend, tengo experiencia con lenguajes como Node.js y Express. Además, estoy familiarizado con bases de datos relacionales como PostgreSQL.
                </p>
              </div>
            </li>
            <li>
              <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" class="collapsed">
                <span>03</span> ¿Tienes experiencia en el despliegue de aplicaciones en la nube?
                <i class="bx bx-chevron-down icon-show"></i>
                <i class="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list">
                <p>
                  Sí, he trabajado en el despliegue de aplicaciones en la nube. Tengo experiencia con la plataforma de alojamiento web Hostinger, la cual he utilizado para alojar y gestionar aplicaciones web.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: `url(${whyus})`}} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
    </div>
  </div>
</section>
  )
}

export default Why