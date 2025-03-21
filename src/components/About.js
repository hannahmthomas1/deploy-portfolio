import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile-yellow.png";

export const About = () => {
  return (
    <section className="about">
      <Container id="top">
        <Row className="header-container">
          <Col xs={0} md={0.5} lg={0.5} xl={0.5}>
            {" "}
          </Col>
          <Col xs={12} md={12} lg={3} xl={3} className="center-profile">
            <img src={headerImg} alt="header" className="aboutimg" />
          </Col>
          <Col xs={0} md={0.5} lg={1} xl={1}></Col>
          <Col xs={12} md={12} lg={6} xl={7}>
            <h2>About Me</h2>
            <p>
            Hi! I'm a UX designer who loves making complex enterprise software feel simple and intuitive. With a background 
            in Information Systems from BYU's business school, I bridge the gap between technical requirements and user needs. 
            My journey into UX started with some amazing non-profit projects, and now I get to design data and technology 
            solutions that improve usability for complex processes. I'm all about turning tricky technical challenges into clear, 
            efficient experiences.
            </p>
            <h3>Strengths</h3>
            <ul>
              <li>Empathy</li>
              <li>Creativity</li>
              <li>Detail Oriented</li>
              <li>Leadership</li>
              <li>Organization</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
