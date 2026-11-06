import { Container, Row, Col } from "react-bootstrap";
import { FloatingPills } from "../FloatingPills";

export const ProjectPageHeader = ({ title, shortdescription, imgUrl }) => {
  return (
    <section>
      <Container className="header-text-img">
        <Row className="justify-content-around">
          <Col s={12} md={12} l={12} xl={4}>
            <div className="header-text-container">
              <h2>{title}</h2>
              <p>{shortdescription}</p>
            </div>
          </Col>
          <Col s={12} md={12} l={12} xl={8} className="align-self-end">
            <img
              src={imgUrl}
              alt="preview of project"
              className="project-header-img"
            />
          </Col>
        </Row>
      </Container>
      {/* <div className="header-text-img">
        <div className="header-text-container">
          <h2>{title}</h2>
          <p>{shortdescription}</p>
        </div>
        <img
          src={imgUrl}
          alt="preview of project"
          className="project-header-img"
        />
      </div> */}
      <FloatingPills className="project-pill-container" />
      <div className="darkerbluebox lighter-box"></div>
    </section>
  );
};
