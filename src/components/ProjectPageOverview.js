import lightbulb from "../assets/img/lightbulb.svg";
import { Container, Row, Col } from "react-bootstrap";

export const ProjectPageOverview = ({ overview, problem, goals, role }) => {
  return (
    <section className="project-overview-container">
      <Container>
        <Row>
          <Col sm={12} md={12} l={4} xl={4}>
            <div className="d-flex justify-content-center">
              <img src={lightbulb} alt="" className="lightbulb" />
            </div>
          </Col>
          <Col sm={12} md={12} l={8} xl={8}>
            <div className="overview-textbox">
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Problem</h3>
              {problem.map((val) => {
                return (
                  <div>
                    <ul>
                      <li>{val}</li>
                    </ul>
                  </div>
                );
              })}
              <h3>Goal</h3>
              {goals.map((val) => {
                return (
                  <div>
                    <ul>
                      <li>{val}</li>
                    </ul>
                  </div>
                );
              })}
              <h3>My Role</h3>
              <div className="roles-container">
                {role.map((val) => {
                  return <p className="roles">{val}</p>;
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
