import React, {useEffect, useState} from "react";
import ".././index.css"
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  useEffect(() => {
    // const handleMobileNavToggle = () => {
    //   setIsMobileNavOpen(!isMobileNavOpen);
    // };
    // const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    // mobileNavToggle.addEventListener("click", handleMobileNavToggle);
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero');
      const navbar = document.querySelector('#navbar');

      if (heroSection && navbar) {
        const heroSectionHeight = heroSection.offsetHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
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
    };
  
    window.addEventListener("scroll", handleScroll);
  
    const navbarLinks = document.querySelectorAll("#navbar a.scrollto");
    navbarLinks.forEach((link) =>
      link.addEventListener("click", handleNavClick)
    );

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // mobileNavToggle.removeEventListener("click", handleMobileNavToggle);
    };
  }, []);

  return (
    <>
      <div id="header" className={`fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            <a href="">Portfolio web Balta</a>
          </h1>

          {/* <!-- <a href="" class="logo me-auto "><img class="rounded-circle " style="height: 150px" src="assets/img/img-mia3.jpeg" alt="" class="img-fluid"/></a> --> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Inicio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  Sobre mí
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#skills">
                  Tecnologías
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#why-us">
                  Más
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#services">
                  Experiencia
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#portfolio">
                  Proyectos
                </a>
              </li>
              
              {/* <!-- <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 2</a></li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
          </ul>
        </li> --> */}
              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              {/* <!-- <li><a class="getstarted scrollto" href="#about">Get Started</a></li> --> */}
            </ul>
            <i
        className={`bi mobile-nav-toggle bi-list `}
      ></i>
          </nav>
        </div>
      </div>
    </>
  );
};
export default NavBar;
