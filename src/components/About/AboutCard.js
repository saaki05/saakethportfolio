import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Gadepalli Saaketh </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently pursuing a Bachelor of Science in Computer Science and Engineering at <span className="purple">Chennai Institute of Technology</span>.
            <br />
            I am an Open-Source Contributor and have solved 350+ problems on LeetCode.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Languages (Mandarin, Tamil)
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Tech Stacks
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Saaketh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
