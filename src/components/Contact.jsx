import {
  faCodepen,
  faFacebook,
  faFreeCodeCamp,
  faGithubAlt,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/Contact.css";

function Contact() {
  return (
    <Container fluid id="contact">
      <Row className="contact-row">
        <h2 className="display-1">Vamos trabalhar juntos...</h2>
        <h6>como gosta do seu café?</h6>

        <div className="contacts-links">
          <a
            href="https://www.linkedin.com/in/lucas-eduardo-m-alves/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> Linkedin
          </a>

          <a
            href="mailto:#lucaseduardolema@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faAt} /> Envie um e-mail
          </a>

          <a
            href="https://github.com/lucaseduardolema"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithubAlt} /> GitHub
          </a>

          <a
            href="https://www.facebook.com/lucas.eduardo.m.a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>

          <a
            href="https://www.instagram.com/lucas.eduardo.m.a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>

          <a
            href="https://www.freecodecamp.org/lucaseduardolema"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFreeCodeCamp} /> freeCodeCamp
          </a>

          <a
            href="https://codepen.io/lucaseduardolema"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCodepen} /> Code Pen
          </a>
        </div>
      </Row>
    </Container>
  );
}

export default Contact;
