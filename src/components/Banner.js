import { Container, Row, Col } from "react-bootstrap";
import { FloatingPills } from "./FloatingPills";
// import different header image

export const Banner = () => {
  return (
    <section className="banner-body" id="home">
      <Container className="banner">
        <Row className="align-items-left">
          <Col xs={12} md={7} xl={7} className="center-items">
            <span className="tagline">
              <h2>Hello!</h2>
            </span>
            <h1>I'm Hannah Luebke</h1>
            <p>
              A technical UX Designer with a background in development and business
              management.
            </p>
            {/* <button onClick={() => console.log("connect")}>
              Let's connect
            </button> */}
          </Col>
        </Row>
      </Container>
      <FloatingPills />
      <div className="darkerbluebox"></div>
      {/* <img className="bubble-border" src={border} alt="border" /> */}
    </section>
  );
};
