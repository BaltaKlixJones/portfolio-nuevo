import React from 'react'
import "./Proyectos.css"
import imgchat from "../../assets/img/chatonline2.jpg"
import pato from "../../assets/img/descripcion.jpg"
import agenda from "../../assets/img/agenda.avif"
import bjj from "../../assets/img/BJJ.png"
import priv from "../../assets/img/private.png"
import taskManager from "../../assets/img/taskmanager2.jpeg"
import inajet from "../../assets/img/inajet.png"
import {BiCode} from "react-icons/bi"

const Proyectos = () => {
  return (
    <section id="portfolio" className="portfolio">
    <div className="container"  data-aos="fade-up">

      <div className="section-title">
        <h2>Proyectos</h2>
        <p>Una mirada a mi trayectoria: Experiencia laboral, logros y proyectos destacados</p>
      </div>

      <div className="row portfolio-container" data-aos="fade-up">
        {/* BJJ */}
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap"  style={{backgroundColor:"#030303e6"}}>
            <img src={bjj}  className="img-fluid2" alt=""/>
            <div className="portfolio-info">
              <h4>App web de jiujitsu</h4>
              <p> <b>Plataforma de videos con suscripciones</b> </p>
              <p><i>Tecnologias: </i> Mercado Pago, Login, Register, Passport, React, Redux, Node, Express, PostreSQL </p>
              <div className="portfolio-links">
                {/* <a href={bjj} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a> */}
                <a style={{cursor:"not-allowed"}}  data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" ><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* PATO ET  */}

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap" style={{height:"300px"}}>
            <img src={pato} className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>PATO Estimulación Temprana</h4>
              <p> <b>Centro de Estimulacion Temprana</b></p>
              <p><i>Tecnologias:</i> React, Redux, Node, Express, PostreSQL </p>
              <div className="portfolio-links">
                <a target="_blank" href="https://github.com/BaltaKlixJones/PATO-ET"  className="portfolio-lightbox" ><i > <BiCode style={{marginBottom:"8px"}}/></i></a>
                <a target="_blank" href="https://www.patoestimulaciontemprana.com/"  data-glightbox="type: external" className="portfolio-details-lightbox" ><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* EVOLUTICA  */}
        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap" style={{backgroundColor:"#0303037f"}}>
            <img src={priv}  className="img-fluid3" alt=""/>
            <div className="portfolio-info">
              <h4>Evolutica Fintech</h4>
              <p> <b> Privado</b></p>
              <p><i>Tecnologias:</i> Storybook, React ,Sass</p>
              <div className="portfolio-links">
                <a style={{cursor:"not-allowed"}} data-glightbox="type: external" className="portfolio-details-lightbox" ><i className="bx bx-link"></i></a> 
              </div>
            </div>
          </div>
        </div>
        
        {/* TaskManager */}
        <div className="col-lg-4 col-md-6 portfolio-item filter-card" >
          <div className="portfolio-wrap"style={{height:"300px"}}>
            <img src={inajet} className="img-fluid5" alt=""/>
            <div className="portfolio-info">
              <h4>Inajet Aviation</h4>
              <p> <b>Aplicación de consulta de viajes exclusivos</b> </p>
              <p><i>Tecnologias:</i> React, Node, Express, PostrgresSQL, Redux </p>
              <div className="portfolio-links">
              <div className="portfolio-links">
                <a target="_blank" href="https://www.inajetaviation.com/"  data-glightbox="type: external" className="portfolio-details-lightbox" ><i className="bx bx-link"></i></a> 
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* CHAT ONLINE  */}

        <div className="col-lg-4 col-md-6 portfolio-item filter-app"  >
          <div className="portfolio-wrap">
            <img src={imgchat} className="img-fluid4"  alt=""/>
            <div className="portfolio-info">
              <h4> Chat Online </h4>
              <p><b>Plataforma de Chat Online </b></p>
              <p><i>Tecnologias:</i> React, Bootstrap, API de ChatEngine </p>
              <div className="portfolio-links">
                <a target='_blank' href="https://github.com/BaltaKlixJones/Chat-Online"   className="portfolio-lightbox" ><i > <BiCode style={{marginBottom:"8px"}}/></i></a>
                <a target='_blank' href="https://www.youtube.com/watch?v=zmqvqQR3mU4"  data-glightbox="type: external" className="portfolio-details-lightbox" ><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* FLEX AGENDA  */}

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src={agenda} className="img-fluid" style= {{marginTop:"-60px"}}alt=""/>
            <div className="portfolio-info">
              <h4>Flex Agenda</h4>
              <p> <b>Agenda de turnos para profesionales</b> </p>
              <p> <i>Tecnologias:</i>  Mercado Pago, FireBase, Redux, Node, Express, PostreSQL </p>
              <div className="portfolio-links">
                <a target='_blank' href="https://github.com/AndresPM98/FlexAgenda"  className="portfolio-lightbox" ><i > <BiCode style={{marginBottom:"8px"}}/></i></a>
                <a target='_blank' href="https://flex-agenda.vercel.app/"  data-glightbox="type: external" className="portfolio-details-lightbox" ><i className="bx bx-link"></i></a>
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