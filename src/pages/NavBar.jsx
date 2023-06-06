import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("#hero");
      const navbar = document.querySelector("#navbar");

      if (heroSection && navbar) {
        const heroSectionHeight = heroSection.offsetHeight;
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const offset = 50; // Ajusta este valor para cambiar el punto de activación

        if (scrollTop >= heroSectionHeight - offset) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    const handleNavClick = (e) => {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      const headerHeight = document.querySelector("#header").offsetHeight;
      const offset = 20; // Ajuste de desplazamiento adicional

      const elementPos =
        document.querySelector(target).offsetTop - headerHeight - offset;

      window.scrollTo({
        top: elementPos,
        behavior: "smooth",
      });

      // Cerrar la barra de navegación móvil
      const navbar = document.querySelector("#navbar");
      const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
      if (navbar && mobileNavToggle) {
        navbar.classList.remove("navbar-mobile");
        mobileNavToggle.classList.remove("bi-x");
        mobileNavToggle.classList.add("bi-list");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarLinks = document.querySelectorAll("#navbar a.scrollto");
    navbarLinks.forEach((link) =>
      link.addEventListener("click", handleNavClick)
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      navbarLinks.forEach((link) =>
        link.removeEventListener("click", handleNavClick)
      );
    };
  }, []);

  useEffect(() => {
    const handleMobileNavToggle = (e) => {
      const navbar = document.querySelector("#navbar");
      const mobileNavToggle = document.querySelector(".mobile-nav-toggle");

      if (navbar && mobileNavToggle) {
        navbar.classList.toggle("navbar-mobile");
        mobileNavToggle.classList.toggle("bi-list");
        mobileNavToggle.classList.toggle("bi-x");
      }
    };

    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    if (mobileNavToggle) {
      mobileNavToggle.addEventListener("click", handleMobileNavToggle);
    }

    return () => {
      if (mobileNavToggle) {
        mobileNavToggle.removeEventListener("click", handleMobileNavToggle);
      }
    };
  }, []);

  return (
    <>
      <div
        id="header"
        className={`fixed-top ${isScrolled ? "navbar-scrolled" : ""}`}
      >
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="">Portfolio web Balta</a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li className={activeSection === "hero" ? "active" : ""}>
                <a className="nav-link scrollto" href="#hero">
                  Inicio
                </a>
              </li>
              <li className={activeSection === "about" ? "active" : ""}>
                <a className="nav-link scrollto" href="#about">
                  Sobre mí
                </a>
              </li>
              <li className={activeSection === "skills" ? "active" : ""}>
                <a className="nav-link scrollto" href="#skills">
                  Tecnologías
                </a>
              </li>
              <li className={activeSection === "why-us" ? "active" : ""}>
                <a className="nav-link scrollto" href="#why-us">
                  Más
                </a>
              </li>
              <li className={activeSection === "services" ? "active" : ""}>
                <a className="nav-link scrollto" href="#services">
                  Experiencia
                </a>
              </li>
              <li className={activeSection === "portfolio" ? "active" : ""}>
                <a className="nav-link scrollto" href="#portfolio">
                  Proyectos
                </a>
              </li>
              <li className={activeSection === "contact" ? "active" : ""}>
                <a className="nav-link scrollto" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
