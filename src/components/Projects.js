import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/if20-img.jpg";
import projImg2 from "../assets/img/yarn-img.png";
import projImg3 from "../assets/img/cc-img.png";
import projImg4 from "../assets/img/mixlist-img.png";
import projImg5 from "../assets/img/article.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Business Article",
      description: "Visual Design & Writing",
      imgUrl: projImg5,
      URL: "https://www.canva.com/design/DAFySEwG3P4/SgKFzqzxdJ0pf_eisLXD0Q/edit?utm_content=DAFySEwG3P4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "G20 Interfaith Forum",
      description: "User Research, Visual Design, & Development on WordPress",
      imgUrl: projImg1,
      URL: "https://docs.google.com/presentation/d/1X4z8N12RRMyGHdFBtU0R0JT1XsVmv3NArHvIp-pE9m4/edit#slide=id.p",
    },
    {
      title: "Yarn Community App",
      description:
        "User Research and Visual Design Case Study as part of the Google UX Design Certificate curriculum",
      imgUrl: projImg2,
      URL: "https://docs.google.com/presentation/d/1R_O4dOblKr6SnPbzYmuJwcjdblXLqqrKAxqKLXVT5KM/edit#slide=id.p",
    },
    {
      title: "Christmas Coordinator",
      description: "Figma Visual Design",
      imgUrl: projImg3,
      URL: "https://www.canva.com/design/DAFvTc6ju5M/P_XLQ2N04WiGxSWOU235lw/view?utm_content=DAFvTc6ju5M&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    },
    {
      title: "MixList",
      description: "Visual Design & Development",
      imgUrl: projImg4,
      URL: "https://www.canva.com/design/DAFvTgXB2yY/9-FgkCzSqOL8Fx-MWxRn2Q/view?utm_content=DAFvTgXB2yY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              As I began my Bachelors of Management Information Systems, I found
              myself prioritizing a good user experience rather than focusing on
              the efficiency of the code on web development projects. This
              discovery led me to the field of UX Design. I have pursued
              experience in the area by enrolling in online courses and
              practicing with both professional and personal projects. Showcased
              below are a sample of these projects.
            </p>
            {/* <Tab.Container id="projects-tabs" defaultActiveKey="first"> */}
            {/* <Nav
              variant="pills"
              className="nav-pills mb-5 justify-content-center align-items-center"
              id="pills-tab"
            >
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
              </Nav.Item>
            </Nav> */}
            {/* <Tab.Content>
                <Tab.Pane eventKey="first">*/}
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
            {/* </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane> */}
            {/* </Tab.Content>
            </Tab.Container> */}
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
