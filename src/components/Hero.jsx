import React from "react";
import "../styles/Hero.css";
import lucas from "../assets/lucas.png";
import { Button, Container, Image } from "react-bootstrap";

function Hero() {
  return (
    <Container fluid className="hero">
      <div className="row">
        <div className="hero-text-group col-md-6">
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
        </div>

        <div className="col-md-6">
          <Image fluid src={lucas} alt="Foto Lucas" />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
