import React from "react";
import "./Skills.css";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3, IoLogoSass } from "react-icons/io";
import { SiJavascript, SiRedux, SiExpress, SiStorybook } from "react-icons/si";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiPostgresql } from "react-icons/di";
import { BsGit } from "react-icons/bs";

import skills from "../../assets/img/fullstack.png";

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={skills}
                className="img-fluid"
                alt=""
                style={{ maxHeight: "600px", marginTop: "-70px" }}
              />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 content"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3>Tecnologías / Skills</h3>
              <p className="fst-italic">
                A lo largo de mis estudios he aprendido distintas habilidades
              </p>

              <div className="skills-content">
                <div className="skill">
                  <ImHtmlFive
                    className="skill-icon"
                    size={60}
                    style={{ color: "orange" }}
                  />

                  {/* <img src="assets/img/html-icon.png" alt="HTML Icon" className="skill-icon"/> */}
                </div>

                <div className="skill">
                  <IoLogoCss3
                    className="skill-icon mb-n2"
                    size={70}
                    style={{ color: "blue" }}
                  />
                </div>

                <div className="skill">
                  <SiJavascript
                    className="skill-icon"
                    size={55}
                    style={{ color: "#f6e20a" }}
                  />
                </div>
                <div className="skill">
                  <FaReact
                    className="skill-icon"
                    size={70}
                    style={{ color: "#61DBFB" }}
                  />
                </div>
                <div className="skill"></div>
                <div className="skill">
                  <SiRedux
                    className="skill-icon"
                    size={60}
                    style={{ color: "#764abc", marginLeft: "-30px" }}
                  />
                </div>

                <div className="skill">
                  <DiNodejs
                    className="skill-icon "
                    size={100}
                    style={{ color: "#3c873a" }}
                  />
                </div>
                <div className="skill">
                  <SiExpress className="skill-icon " size={50} />
                </div>
                <div className="skill">
                  <BsGit
                    className="skill-icon "
                    size={70}
                    style={{ color: "#f34f29" }}
                  />
                </div>
                <div className="skill">
                  <DiPostgresql
                    className="skill-icon "
                    size={75}
                    style={{ color: "#336791" }}
                  />
                </div>
                <div className="skill">
                  <FaBootstrap
                    className="skill-icon "
                    size={70}
                    style={{ color: "#563d7c" }}
                  />
                </div>
                <div className="skill">
                  <IoLogoSass
                    className="skill-icon "
                    size={70}
                    style={{ color: "#c69" }}
                  />
                </div>
                <div className="skill">
                  <SiStorybook
                    className="skill-icon "
                    size={70}
                    style={{ color: "#ff4785" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
