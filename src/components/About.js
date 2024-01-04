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
              Hi there! I'm Hannah Luebke. I'll graduate from BYU with a B.S. in
              Information Systems in April 2024. I am currently located in Utah
              County, Utah and I am passionate about design. Whether I'm
              crafting digital experiences through websites and apps, designing
              crochet projects, or even adding artistic flair to the tops of my
              sourdough loaves.
            </p>
            <p>
              My journey into UX design began early in my Information Systems
              program. While practicing web development, I discovered a strong
              inclination toward providing a positive user experience. This
              realization guided me towards UX Design. My pursuit thus far has
              involved immersive online courses and hands-on professional and
              personal projects, showcased in my portfolio.
            </p>
            <p>
              Driven by my 'go-getter' spirit, I've earned recognition in
              previous roles for taking the initiative to not only fulfill tasks
              but also identify and bridge existing gaps. As a UX designer, I
              aspire to leverage this skill as well as empathy and intentional
              design to impact lives. I'm enthusiastic about the opportunitiy UX
              provides to blend my passion for creativity with the opportunity
              to create meaningful experiences.
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
