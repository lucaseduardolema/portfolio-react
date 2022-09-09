import React, { useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import projectsData from "../assets/projectsData";
import "../styles/Projects.css";

function Projects() {
  const [showModal, setShowModal] = useState(
    projectsData.reduce((acc, curr) => {
      acc = {
        ...acc,
        [curr.id]: false,
      }
      return acc
    }, {})
  );

  return (
    <Container id="projects">
      <Row>
        <Col md={12} className="projects-heading">
          <h3>Alguns dos meus projetos</h3>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        {projectsData.map(({ id, name, ghDeploy, img, ghCode, text }) => (
          <Col key={name}>
            <Card>
              <Card.Img onClick={() => setShowModal( { ...showModal, [id]: true  } )} variant="top" src={img} />

              <Modal
                size="lg"
                show={ showModal[id] }
                onHide={() => setShowModal( { ...showModal, [id]: false } )}
                aria-labelledby={`${name}-modal`}
              >
                <Modal.Header closeButton>
                  <Modal.Title id={`${name}-modal`}>
                    {name}
                  </Modal.Title>
                </Modal.Header>
                <img className="img-fluid" src={ img } alt={ name } ></img>
              </Modal>

              <Card.Title className="m-3">{name}</Card.Title>
              <Card.Text className="m-3">{text}</Card.Text>
              <a
                href={ghDeploy}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-success mb-2"
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
