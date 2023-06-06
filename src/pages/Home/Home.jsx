import React from 'react'
import hero from "../../assets/img/hero-img.png"
import About from '../About/About'
import Skills from '../Skills/Skills'

const Home = () => {
  return (
    <>
    <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Baltasar Klix Jones</h1>
          <h2>Full Stack Developer / Front End / Back End </h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a target='_blank' href="https://docs.google.com/document/d/14T18Vn2qtzWxFXuKdhtrvHjFGTP24SeOpnSDN1JJOCU/edit#" class="btn-get-started scrollto">Ver curriculum</a>
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-download"></i><span>Descargar</span></a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img " data-aos="zoom-in" data-aos-delay="200">
          <img src={hero} className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>
  </section>
   
    </>
  )
}

export default Home