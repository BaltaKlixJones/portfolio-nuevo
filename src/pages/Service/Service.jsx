import React from 'react'


const Service = () => {
  return (
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Experiencia y Soluciones Web</h2>
          <p>Tengo experiencia en la creación de aplicaciones web desde cero, ofreciendo soluciones de calidad y una experiencia óptima para los usuarios. Estoy familiarizado con tecnologías modernas y actualizadas, lo que me permite desarrollar proyectos de manera eficiente y efectiva.</p>
        </div>

        <div class="row">
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-code"></i></div>
              <h4><a href="">Full Stack Development</a></h4>
              <p>Experiencia en el desarrollo de aplicaciones web completas, tanto en el lado del cliente como en el servidor.</p>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-html5"></i></div>
              <h4><a href="">   Front-end Developer</a></h4>
              <p>Desarrollo de interfaces de usuario utilizando HTML, CSS, JavaScript y React.</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-nodejs"></i></div>
              <h4><a href="">Back-end Development</a></h4>
              <p>Creación de servidores y lógica de negocio utilizando Node.js y frameworks como Express.</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-server"></i></div>
              <h4><a href="">Database Management</a></h4>
              <p>Diseño y gestión de bases de datos utilizando tecnologías SQL</p>
            </div>
          </div>

          

        </div>

      </div>
    </section>
  )
}

export default Service