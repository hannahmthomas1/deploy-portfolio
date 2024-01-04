import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import resume from "../assets/img/resume-img.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row className="align-items-center">
          <div className="skill-bx">
            <Row>
              <Col md={2}></Col>
              <Col md={4}>
                <h2>Experience & Education</h2>

                <a
                  href="https://www.canva.com/design/DAFvT0ak4_w/view?utm_content=DAFvT0ak4_w&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="button-test">Read my Resume</button>
                </a>
              </Col>
              <Col md={4}>
                <img src={resume} alt="" />
              </Col>
              <Col md={2}></Col>
            </Row>
          </div>
        </Row>
      </Container>
      {/* <img className="" src={transition} alt="" style={{ width: "100%" }} /> */}
    </section>
  );
};
