import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/if20-img.jpg";
import projImg2 from "../assets/img/yarn-img.png";
import projImg3 from "../assets/img/cc-img.png";
import projImg4 from "../assets/img/mixlist-img.png";
import projImg5 from "../assets/img/servant.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Servant Leadership Report",
      description: "Visual Design & Writing",
      imgUrl: projImg5,
      URL: "https://www.canva.com/design/DAF2yYb7j2E/63b9OMPicXEUKk9Q0mmyMQ/view?utm_content=DAF2yYb7j2E&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      tags: ["Visual Design", "Writing"],
    },
    {
      title: "G20 Interfaith Forum",
      description: "User Research, Visual Design, & Development on WordPress",
      imgUrl: projImg1,
      URL: "https://docs.google.com/presentation/d/1X4z8N12RRMyGHdFBtU0R0JT1XsVmv3NArHvIp-pE9m4/edit#slide=id.p",
      tags: ["Visual Design", "Research", "Navigation", "Development"],
    },
    {
      title: "Yarn Community App",
      description:
        "User Research and Visual Design Case Study as part of the Google UX Design Certificate curriculum",
      imgUrl: projImg2,
      URL: "https://docs.google.com/presentation/d/1R_O4dOblKr6SnPbzYmuJwcjdblXLqqrKAxqKLXVT5KM/edit#slide=id.p",
      tags: ["Visual Design", "Research"],
    },
    {
      title: "Christmas Coordinator",
      description: "Figma Visual Design",
      imgUrl: projImg3,
      URL: "https://www.canva.com/design/DAFvTc6ju5M/P_XLQ2N04WiGxSWOU235lw/view?utm_content=DAFvTc6ju5M&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
      tags: ["Visual Design"],
    },
    {
      title: "MixList",
      description: "Visual Design & Development",
      imgUrl: projImg4,
      URL: "https://www.canva.com/design/DAFvTgXB2yY/9-FgkCzSqOL8Fx-MWxRn2Q/view?utm_content=DAFvTgXB2yY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
      tags: ["Visual Design", "Development"],
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>

            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
