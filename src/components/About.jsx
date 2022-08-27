import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/About.css";

function About() {
  return (
    <Container id="about">
      <Row>
        <Col className="about-heading" md={12}>
          <h3>Um pouco sobre mim</h3>
        </Col>
        <Col md={12} className="about-text">
          <p>
            Sou apaixonado por tecnologia, aos 14 anos fiz meu primeiro curso
            profissionalizante na área, montagem e manutenção de computadores, o
            qual me proporcionou o ingresso no Exército Brasileiro aos 19 anos,
            onde fui inicialmente designado a trabalhar na seção de tecnologia
            permanecendo no Exército por 8 anos.
          </p>
          <p>
            Atualmente estudo Desenvolvimento de Softwares na Trybe uma escola
            que ensina a programar, a aprender e a trabalhar. Acredito em ações
            que possam gerar um impacto positivo na vida das pessoas e trabalho
            sempre em prol disso.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
