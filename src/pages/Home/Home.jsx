import React, { useEffect, useState } from "react";
import "./Home.css";
import hero from "../../assets/img/hero-img.png";
import About from "../About/About";
import Skills from "../Skills/Skills";
import cv from "../../assets/img/cv-full1.pdf";

const Home = () => {
  const [fileDownload, setFileDownload] = useState(null);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    setFileDownload(cv);
    setFileName("CV - Full Stack Dev. Baltasar Klix Jones.pdf");
  }, []);

  const handlerDownload = () => {
    if (fileDownload) {
      const link = document.createElement("a");
      link.href = fileDownload;
      link.download = fileName;
      link.click();
    }
  };
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Baltasar Klix Jones</h1>
              <h2>Full Stack Developer / Front End / Back End </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a
                  target="_blank"
                  href="https://docs.google.com/document/d/14T18Vn2qtzWxFXuKdhtrvHjFGTP24SeOpnSDN1JJOCU/edit#"
                  className="btn-get-started scrollto"
                >
                  Ver Curriculum
                </a>
                <a
                  onClick={handlerDownload}
                  className="glightbox btn-watch-video"
                  style={{cursor: "pointer"}}
                >
                  <i className="bi bi-download"></i>
                  <span>Descargar</span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img "
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={hero} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
