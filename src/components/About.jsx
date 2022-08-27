import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../styles/About.css";

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

function About() {
  const [pharse, setPhrase] = useState(arrPhrase[0]);

  const randomPhrase = () => {
    const randomNumber = parseInt(Math.random() * arrPhrase.length);
    setPhrase(arrPhrase[randomNumber]);
  };

  return (
    <Container id="about" className="about">
      <Row>
        <Col className="about-heading" md={12}>
          <h3>Um pouco sobre mim</h3>
        </Col>
        <Col className="star-wars-phrase" md={4}>
          <p>{pharse}</p>
          <Button variant="dark" onClick={randomPhrase}>Use a força!</Button>
        </Col>
        <Col md={8} className="about-text">
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
