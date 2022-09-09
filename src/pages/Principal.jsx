import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import "../styles/Principal.css";

const arrPhrase = [
  "Faça. Ou não faça. Não existe a tentativa. -Yoda, Mestre",
  "Transmita o que aprendeu. Força, maestria. Mas fraqueza, insensatez, fracasso também. Sim, fracasso acima de tudo. O maior professor, o fracasso é. Luke, nós somos o que eles crescem além. Esse é o verdadeiro fardo de todos os mestres. -Yoda, Mestre",
  "Eu acho a sua falta de fé perturbadora -Darth Vader",
  "Eu estava esperando por você, Obi-Wan. Finalmente, nós nos encontramos de novo. O círculo está agora completo. Quando o deixei, eu era só o aprendiz; agora eu sou o mestre. -Darth Vader",
  "Então é assim que a liberdade morre… com um estrondoso aplauso. -Padmé Amidala",
  "Esteja consciente dos seus pensamentos, Anakin. Eles vão trair você. -Obi-Wan Kenobi",
  "Você foi o escolhido! Foi dito que você iria destruir os Sith, não se juntar a eles! Você deveria ter trazido equilíbrio à Força, não deixá-la na escuridão. -Obi-Wan Kenobi",
  "Lembre-se: seu foco determina a sua realidade. -Qui-Gon Jinn",
  "A Força é forte em minha família. Meu pai a tem, eu a tenho e minha irmã a tem. Sim. É você, Leia. -Luke Skywalker",
  "A rebelião renasce hoje. A guerra está apenas começando e eu não serei o último Jedi. -Luke Skywalker",
  "O lado negro da Força é o caminho para muitas habilidades que alguns consideram ser... Antinatural. -Senador Palpatine",
];

function Principal() {
  const [pharse, setPhrase] = useState("");

  const randomPhrase = () => {
    const randomNumber = parseInt(Math.random() * arrPhrase.length);
    setPhrase(arrPhrase[randomNumber]);
  };

  useEffect(() => {
    randomPhrase()
  }, []);


  return (
    <>
      <Header />
      <Hero />
      <Container>
        <Row>
          <Col className="star-wars-phrase" md={12}>
            <p>{pharse}</p>
            <Button variant="dark" onClick={randomPhrase}>
              Use a força!
            </Button>
          </Col>
        </Row>
      </Container>
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Principal;
