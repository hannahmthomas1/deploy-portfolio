import { Col, Container, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export const ProjectCard = ({ title, description, imgUrl, URL, tags }) => {
  return (
    <Container className="project-box">
      <Row>
        {/* <Col size={1} sm={0} md={0}></Col> */}
        <Col size={4} sm={12} md={4}>
          <div className="proj-imgbx">
            <HashLink to={URL}>
              <img src={imgUrl} alt="project" />

              <div className="proj-txtx">
                <h4>{title}</h4>
              </div>
            </HashLink>
          </div>
        </Col>
        <Col size={7} sm={12} md={7}>
          <div className="">
            <HashLink to={URL}>
              <h4>{title}</h4>
            </HashLink>

            <div className="tags-container">
              {tags.map((val) => {
                return (
                  <div className="tags">
                    <p>{val}</p>
                  </div>
                );
              })}
            </div>
            <span className="description">{description}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
