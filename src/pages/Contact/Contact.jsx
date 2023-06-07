import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ir93nzf",
        "template_0josovy",
        form.current,
        "uJB-pwQz8U9Rz2Jpm"
      )
      .then(
        (result) => {
          form.current.reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Mensaje enviado correctamente",
            showConfirmButton: false,
            timer: 1500,
          });

          console.log(result.text);
        },
        (error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error al enviar el mensaje",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contacto</h2>
          <p>
          ¿Necesitas ayuda con tu proyecto o deseas obtener más información? ¡Estoy aquí para ayudarte! Ponte en contacto conmigo para discutir tus ideas y encontrar la mejor solución. Estoy a solo un mensaje de distancia, listo para colaborar contigo en tus proyectos.
          </p>
        </div>

        <div className="row" data-aos="fade-right" data-aos-delay="200">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info" >
              <div className="address" style={{marginTop:"20px"}}>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/@-31.4060995,-64.183705,12.8z?entry=ttu"
                >
                  <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Córdoba, Argentina</p>
                </a>
              </div>

              <div className="email">
                <a target="_blank" href="mailto:baltakj@gmail.com">
                  <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>baltakj@gmail.com</p>
                </a>
              </div>

              <div className="address">
                <a target="_blank" href="https://wa.me/543874188653?text=%20">
                  <i className="bi bi-whatsapp"></i>
                <h4>Whats App:</h4>
                <p>+54 9 3874188653</p>
                </a>
              </div>

              <div className="email">
                <a target="_blank" href="https://github.com/BaltaKlixJones">
                  <i className="bi bi-github"></i>
                <h4>GitHub:</h4>
                <p>github.com/BaltaKlixJones</p>
                </a>
              </div>

              <div className="email">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/baltasar-klix-jones-180b38256/">
                  <i className="bi bi-linkedin"></i>
                <h4>Linkedin</h4>
                <p>linkedin.com/in/baltasar-klix-jones</p>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" >
            <form ref={form} onSubmit={sendEmail} className="php-email-form" data-aos="fade-right"
              data-aos-delay="100">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name"> Nombre y Apellido</label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name"> Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="from_name"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Mensaje</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
