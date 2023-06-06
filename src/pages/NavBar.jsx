import { useEffect, useState } from "react";

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
        const offset = 50;

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

      const element = document.querySelector(target);
      const elementPosition = element.offsetTop - headerHeight + 25;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      const navbar = document.querySelector("#navbar");
      const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
      if (navbar && mobileNavToggle) {
        navbar.classList.remove("navbar-mobile");
        mobileNavToggle.classList.remove("bi-x");
        mobileNavToggle.classList.add("bi-list");
      }

      window.history.pushState(null, "", target);
      setActiveSection(target);
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
    const handleMobileNavToggle = () => {
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

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const sectionId = "#" + section.id;
        const sectionOffset = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          window.pageYOffset >= sectionOffset - 50 &&
          window.pageYOffset < sectionOffset + sectionHeight - 50
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
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
            <a href="/#hero">Portfolio web Balta</a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeSection === "#hero" ? "active" : ""
                  }`}
                  href="#hero"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeSection === "#about" ? "active" : ""
                  }`}
                  href="#about"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeSection === "#skills" ? "active" : ""
                  }`}
                  href="#skills"
                >
                  Tecnologías
                </a>
              </li>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeSection === "#why-us" ? "active" : ""
                  }`}
                  href="#why-us"
                >
                  Más
                </a>
              </li>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeSection === "#services" ? "active" : ""
                  }`}
                  href="#services"
                >
                  Experiencia
                </a>
              </li>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeSection === "#portfolio" ? "active" : ""
                  }`}
                  href="#portfolio"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeSection === "#contact" ? "active" : ""
                  }`}
                  href="#contact"
                >
                  Contacto
                </a>
              </li>
            </ul>
            <i className="bi mobile-nav-toggle bi-list"></i>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
