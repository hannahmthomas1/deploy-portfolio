// import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
import transition from "../assets/img/transition.png";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <img
        className="transition"
        src={transition}
        alt=""
        style={{ width: "100%" }}
      />
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={2}>
            <img className="contact-img" src={contactImg} alt="Contact Me" />
          </Col>
          <Col md={4}>
            <h2>Get In Touch</h2>
            <p>luebkehan@gmail.com</p>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hannahluebke/">
                <img src={navIcon1} alt="Icon" />
              </a>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </section>
  );
};
