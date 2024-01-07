import { Container, Row, Col } from "react-bootstrap";

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
      <div class="pill-container project-pill-container">
        <div class="pill pill0"></div>
        <div class="pill pill1"></div>
        <div class="pill pill2"></div>
        <div class="pill pill3"></div>
        <div class="pill pill4"></div>
        <div class="pill pill5"></div>
        <div class="pill pill6"></div>
        <div class="pill pill7"></div>
        <div class="pill pill0"></div>
        <div class="pill pill1"></div>
        <div class="pill pill2"></div>
        <div class="pill pill3"></div>
        <div class="pill pill4"></div>
        <div class="pill pill5"></div>
        <div class="pill pill6"></div>
        <div class="pill pill7"></div>
        <div class="pill pill0"></div>
        <div class="pill pill1"></div>
        <div class="pill pill2"></div>
        <div class="pill pill3"></div>
        <div class="pill pill4"></div>
        <div class="pill pill5"></div>
        <div class="pill pill6"></div>
        <div class="pill pill7"></div>
        <div class="pill pill0"></div>
        <div class="pill pill1"></div>
        <div class="pill pill2"></div>
        <div class="pill pill3"></div>
        <div class="pill pill4"></div>
        <div class="pill pill5"></div>
        <div class="pill pill6"></div>
        <div class="pill pill7"></div>
        <div class="pill pill0"></div>
        <div class="pill pill1"></div>
        <div class="pill pill2"></div>
        <div class="pill pill3"></div>
        <div class="pill pill4"></div>
        <div class="pill pill5"></div>
        <div class="pill pill6"></div>
        <div class="pill pill7"></div>
      </div>
      <div className="darkerbluebox lighter-box"></div>
    </section>
  );
};
