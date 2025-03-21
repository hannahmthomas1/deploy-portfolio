import { Container, Row, Col } from "react-bootstrap";
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
      <div class="pill-container">
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
      <div className="darkerbluebox"></div>
      {/* <img className="bubble-border" src={border} alt="border" /> */}
    </section>
  );
};
