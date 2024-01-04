import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile-yellow.png";

export const About = () => {
  return (
    <section className="about">
      <Container>
        <Row className="header-container">
          <Col xs={12} md={7} xl={7}>
            <h2>About Me</h2>
            <p>
              As I began my Bachelors of Management Information Systems, I found
              myself prioritizing a good user experience rather than focusing on
              the efficiency of the code on web development projects. This
              discovery led me to the field of UX Design. I have pursued
              experience in the area by enrolling in online courses and
              practicing with both professional and personal projects. Showcased
              below are a sample of these projects.
            </p>
          </Col>
          <Col xs={0} md={1} xl={1}></Col>
          <Col xs={12} md={4} xl={3}>
            <img src={headerImg} alt="header" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} xl={4}>
            <h3>Strengths</h3>
            <ul>
              <li>Empathetic</li>
              <li>Creative</li>
              <li>Strategic</li>
              <li>Experienced with Leadership</li>
              <li>Determined</li>
            </ul>
          </Col>
          <Col xs={12} md={8} xl={8}>
            <h3>Skills</h3>
            <ul>
              <li>Canva</li>
              <li>Figma</li>
              <li>React</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
