import React from "react";
import '../styles/Hero.css'
import lucas from '../assets/lucas.png'
import { Button } from "react-bootstrap";

function Hero() {
  return ( 
    <div className="hero">
      <div>
        <p className="apresentacao">Hello World!</p>
        <p className="apresentacao">Lucas Eduardo desenvolvedor web Full Stack</p>
        <p className="sub-press">Based in Brazil</p>
        <div>
          <p>Tem um projeto</p>
          <Button>Vamos conversar!</Button>
        </div>
      </div>

      <div>
        <img src={ lucas } alt="Foto Lucas" />
      </div>
    </div>
  );
}

export default Hero;