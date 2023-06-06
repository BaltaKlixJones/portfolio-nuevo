import React from 'react'
import img from "../../assets/img/cta-bg.jpg"
import imgchat from "../../assets/img/chatonline2.jpg"
import pato from "../../assets/img/descripcion.jpg"
import agenda from "../../assets/img/agenda.avif"
import pokemon from "../../assets/img/pokemon.png"
import luzup from "../../assets/img/LUZUP_ICON.png"
import bjj from "../../assets/img/BJJ.png"
import {BiCode} from "react-icons/bi"

const Proyectos = () => {
  return (
    <section id="portfolio" class="portfolio">
    <div class="container"  data-aos="fade-up">

      <div class="section-title">
        <h2>Proyectos</h2>
        <p>Una mirada a mi trayectoria: Experiencia laboral, logros y proyectos destacados</p>
      </div>

      <div class="row portfolio-container">
        {/* BJJ */}
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap"  style={{backgroundColor:"#030303e6"}}>
            <img src={bjj} style={{marginTop:"-60px"}} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>App web de jiujitsu</h4>
              <p> <b>Plataforma de videos con suscripciones</b> </p>
              <p><i>Tecnologias: </i> Mercado Pago, Login, Register, Passport, React, Redux, Node, Express, PostreSQL </p>
              <div class="portfolio-links">
                {/* <a href={bjj} data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a> */}
                <a style={{cursor:"not-allowed"}}  data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" ><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* PATO ET  */}

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap" style={{height:"300px"}}>
            <img src={pato} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>PATO Estimulación Temprana</h4>
              <p> <b> Proyecto para Centro de Estimulacion Temprana</b></p>
              <p><i>Tecnologias:</i> React, Redux, Node, Express, PostreSQL </p>
              <div class="portfolio-links">
                <a target="_blank" href="https://github.com/BaltaKlixJones/PATO-ET"  class="portfolio-lightbox" ><i > <BiCode style={{marginBottom:"8px"}}/></i></a>
                <a target="_blank" href="https://www.patoestimulaciontemprana.com/"  data-glightbox="type: external" class="portfolio-details-lightbox" ><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* EVOLUTICA  */}
        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap" style={{backgroundColor:"#030303e6"}}>
            <img src={luzup} style={{marginTop:"-63px", transform:"scale(0.7)"}} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>Luz UP</h4>
              <p> <b> Evolutica Fintech</b></p>
              <p><i>Tecnologias:</i> Reservado </p>
              <div class="portfolio-links">
                {/* <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>*/}
                <a style={{cursor:"not-allowed"}} data-glightbox="type: external" class="portfolio-details-lightbox" ><i class="bx bx-link"></i></a> 
              </div>
            </div>
          </div>
        </div>

        {/* CHAT ONLINE  */}

        <div class="col-lg-4 col-md-6 portfolio-item filter-app"  >
          <div class="portfolio-wrap">
            <img src={imgchat} class="img-fluid" style={{marginTop:"-13px", transform:"scale(1.2)"}} alt=""/>
            <div class="portfolio-info">
              <h4> <b>Chat Online</b> </h4>
              <p>Plataforma de Chat Online </p>
              <p><i>Tecnologias:</i> React, Redux, Register, BootStrap </p>
              <div class="portfolio-links">
                <a target='_blank' href="https://github.com/BaltaKlixJones/Chat-Online"   class="portfolio-lightbox" ><i > <BiCode style={{marginBottom:"8px"}}/></i></a>
                <a target='_blank' href="https://www.youtube.com/watch?v=zmqvqQR3mU4"  data-glightbox="type: external" class="portfolio-details-lightbox" ><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* FLEX AGENDA  */}

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src={agenda} class="img-fluid" style= {{marginTop:"-60px"}}alt=""/>
            <div class="portfolio-info">
              <h4>Flex Agenda</h4>
              <p> <b>Agenda de turnos para profesionales</b> </p>
              <p> <i>Tecnologias:</i>  Mercado Pago, FireBase, Redux, Node, Express, PostreSQL </p>
              <div class="portfolio-links">
                <a target='_blank' href="https://github.com/AndresPM98/FlexAgenda"  class="portfolio-lightbox" ><i > <BiCode style={{marginBottom:"8px"}}/></i></a>
                <a target='_blank' href="https://flex-agenda.vercel.app/"  data-glightbox="type: external" class="portfolio-details-lightbox" ><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>
{/* POKEMON */}
        <div class="col-lg-4 col-md-6 portfolio-item filter-card" >
          <div class="portfolio-wrap"style={{height:"300px"}}>
            <img src={pokemon} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>Pokemón </h4>
              <p> <b>Proyecto Individual</b> </p>
              <p><i>Tecnologias:</i> React, Redux, Node, Express, PostreSQL, API de Pokemon </p>
              <div class="portfolio-links">
                <a target='_blank' href="https://github.com/BaltaKlixJones/PI-POKEMON" class="portfolio-lightbox"><i > <BiCode style={{marginBottom:"8px"}}/></i></a>
                {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Proyectos