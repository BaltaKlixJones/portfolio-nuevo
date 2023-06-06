import React from "react";
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
      <section id="skills" class="skills">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div
              class="col-lg-6 d-flex align-items-center"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={skills}
                class="img-fluid"
                alt=""
                style={{ maxHeight: "600px", marginTop: "-70px" }}
              />
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 content"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3>Tecnologías / Skills</h3>
              <p class="fst-italic">
                A lo largo de mis estudios he aprendido distintas habilidades
              </p>

              <div class="skills-content">
                <div class="skill">
                  <ImHtmlFive
                    class="skill-icon"
                    size={60}
                    style={{ color: "orange" }}
                  />

                  {/* <img src="assets/img/html-icon.png" alt="HTML Icon" class="skill-icon"/> */}
                </div>

                <div class="skill">
                  <IoLogoCss3
                    class="skill-icon mb-n2"
                    size={70}
                    style={{ color: "blue" }}
                  />
                </div>

                <div class="skill">
                  <SiJavascript
                    class="skill-icon"
                    size={55}
                    style={{ color: "#f6e20a" }}
                  />
                </div>
                <div class="skill">
                  <FaReact
                    class="skill-icon"
                    size={70}
                    style={{ color: "#61DBFB" }}
                  />
                </div>
                <div class="skill"></div>
                <div class="skill">
                  <SiRedux
                    className="skill-icon"
                    size={60}
                    style={{ color: "#764abc", marginLeft: "-30px" }}
                  />
                </div>

                <div class="skill">
                  <DiNodejs
                    class="skill-icon "
                    size={100}
                    style={{ color: "#3c873a" }}
                  />
                </div>
                <div class="skill">
                  <SiExpress class="skill-icon " size={50} />
                </div>
                <div class="skill">
                  <BsGit
                    class="skill-icon "
                    size={70}
                    style={{ color: "#f34f29" }}
                  />
                </div>
                <div class="skill">
                  <DiPostgresql
                    class="skill-icon "
                    size={75}
                    style={{ color: "#336791" }}
                  />
                </div>
                <div class="skill">
                  <FaBootstrap
                    class="skill-icon "
                    size={70}
                    style={{ color: "#563d7c" }}
                  />
                </div>
                <div class="skill">
                  <IoLogoSass
                    class="skill-icon "
                    size={70}
                    style={{ color: "#c69" }}
                  />
                </div>
                <div class="skill">
                  <SiStorybook
                    class="skill-icon "
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
