import React from "react";
import "./Skills.css";
import { IoLogoSass, IoLogoJavascript } from "react-icons/io";
import {
  SiRedux,
  SiExpress,
  SiStorybook,
  SiSequelize,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTrello,
  SiPostgresql,
  SiInsomnia,
  SiDocker
} from "react-icons/si";
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";

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
              className="col-lg-6 pt-3 pt-lg-0 content"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3>Tecnologías / Skills</h3>
              <p className="fst-italic">
                A lo largo de mis estudios he aprendido distintas habilidades
              </p>

              <div className="container text-center">
                <div className="skills-content">
                  <div className="row">
                    <div className="col-md-2">
                      <SiHtml5
                        className="skill-icon"
                        size={70}
                        style={{ color: "orange" }}
                      />
                      <p className="p-skill">HTML 5</p>
                    </div>

                    <div className="col-md-2">
                      <SiCss3
                        className="skill-icon "
                        size={70}
                        style={{ color: "blue" }}
                      />
                      <p className="p-skill">CSS</p>
                    </div>

                    <div className="col-md-2">
                      <IoLogoJavascript
                        className="skill-icon"
                        size={70}
                        style={{ color: "#f6e20a" }}
                      />
                      <p className="p-skill">JavaScript</p>
                    </div>

                    <div className="col-md-2">
                      <FaReact
                        className="skill-icon"
                        size={70}
                        style={{ color: "#61DBFB" }}
                      />
                      <p className="p-skill">React JS</p>
                    </div>
                    <div className="col-md-2">
                      <SiRedux
                        className="skill-icon"
                        size={70}
                        style={{ color: "#764abc" }}
                      />
                      <p className="p-skill">Redux JS</p>
                    </div>
                    <div className="col-md-2">
                      <FaNodeJs
                        className="skill-icon "
                        size={70}
                        style={{ color: "#3c873a" }}
                      />
                      <p className="p-skill">NodeJS</p>
                    </div>
                    <div className="col-md-2">
                      <SiExpress
                        className="skill-icon"
                        size={70}
                        style={{
                          color: "white",
                          backgroundColor: "#2e2e2e",
                          borderRadius: "50%",
                          padding: "10px",
                        }}
                      />
                      <p className="p-skill">Express JS</p>
                    </div>

                    <div className="col-md-2">
                      <SiPostgresql
                        className="skill-icon "
                        size={70}
                        style={{ color: "#336791" }}
                      />
                      <p className="p-skill">PostgreSQL</p>
                    </div>
                    <div className="col-md-2">
                      <SiSequelize
                        className="skill-icon "
                        size={70}
                        style={{ color: "#336791" }}
                      />
                      <p className="p-skill">Sequelize</p>
                    </div>
                    <div className="col-md-2 ">
                      <SiMongodb
                        className="skill-icon "
                        size={70}
                        style={{ color: "#4DB33D" }}
                      />
                      <p className="p-skill">Mongo DB</p>
                    </div>
                    <div className="col-md-2 ">
                      <SiDocker
                        className="skill-icon "
                        size={70}
                        style={{ color: "#0db7ed" }}
                      />
                      <p className="p-skill">Docker</p>
                    </div>

                    <div className="col-md-2 ">
                      <FaBootstrap
                        className="skill-icon "
                        size={70}
                        style={{ color: "#563d7c" }}
                      />
                      <p className="p-skill">Bootstrap</p>
                    </div>

                    <div className="col-md-2">
                      <IoLogoSass
                        className="skill-icon "
                        size={70}
                        style={{ color: "#c69" }}
                      />
                      <p className="p-skill">Sass</p>
                    </div>

                    <div className="col-md-2">
                      <SiStorybook
                        className="skill-icon "
                        size={70}
                        style={{ color: "#ff4785" }}
                      />
                      <p className="p-skill">Story Book</p>
                    </div>

                    <div className="col-md-2">
                      <SiInsomnia
                        className="skill-icon "
                        size={70}
                        style={{ color: "#5849be" }}
                      />
                      <p className="p-skill">Insomnia</p>
                    </div>

                    <div className="col-md-2">
                      <SiTrello
                        className="skill-icon "
                        size={70}
                        style={{ color: "#0079bf" }}
                      />
                      <p className="p-skill">Trello</p>
                    </div>
                  </div>
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
