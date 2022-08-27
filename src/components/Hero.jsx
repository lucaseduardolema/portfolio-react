import React from "react";
import "../styles/Hero.css";
import lucas from "../assets/lucas.png";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

function Hero() {
  return (
    <Container fluid className="hero">
      <Row>
        <Col md={6} className="hero-text-group">
          <h1>Hello World!</h1>
          <h2>Eu sou o Lucas Eduardo</h2>
          <p>desenvolvedor web Full Stack</p>
          <p className="sub-press">Based in Brazil</p>
          <div className="hero-talk">
            <p>Tem um projeto?</p>
            <Button variant="outline-success" size="lg">
              Vamos conversar!
            </Button>
          </div>
        </Col>

        <Col md={6}>
          <Image fluid src={lucas} alt="Foto Lucas" />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
