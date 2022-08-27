import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import projectsData from "../assets/projectsData";
import "../styles/Projects.css";

function Projects() {
  return (
    <Container id="projects">
      <Row>
        <Col md={12} className="projects-heading">
          <h3>Alguns dos meus projetos</h3>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        {projectsData.map(({ name, ghDeploy, img, ghCode, text }) => (
          <Col key={name}>
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Title>{name}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <a
                href={ghDeploy}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-success"
              >
                Ver Live Demo
              </a>
              <a
                href={ghCode}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                Ver Código
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
