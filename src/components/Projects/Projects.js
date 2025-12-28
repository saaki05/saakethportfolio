import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="SmartReview"
              description="Sentiment analyzer for retail feedback. Built a Flask-based web application using TextBlob to analyze and summarize customer reviews from e-commerce platforms, implemented word-cloud visualizations, polarity scoring, and automated summary generation."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="CS50x final project"
              description="Flask-based utility application. Created a full-stack web app using Flask, SQLite, and HTML/CSS as the capstone project for Harvard CS50, built features such as user authentication, database operations, and responsive UI."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Real-time Bengaluru insights"
              description="Intelligent city dashboard. Built an AI-powered dashboard integrating real-time data streams, multimodal citizen inputs (text, images, GPS), and predictive models. Used clustering techniques to detect traffic congestion."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Cancer detection model"
              description="Explainable AI (Grad-CAM). Developed and trained a CNN model using over 1,500 medical images for early-stage cancer detection, and achieved strong accuracy through preprocessing, augmentation, and hyperparameter tuning."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="E-commerce platform"
              description="Platform with admin dashboard. Developed a complete e-commerce web application featuring product listings, a cart, checkout, and order management, and implemented the backend using Express.js and MySQL."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
