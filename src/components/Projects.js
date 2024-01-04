import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/if20-img.jpg";
import projImg2 from "../assets/img/yarn-img.png";
import projImg3 from "../assets/img/cc-img.png";
import projImg4 from "../assets/img/mixlist-img.png";
import projImg5 from "../assets/img/servant.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    // {
    //   title: "Servant Leadership Report",
    //   description: "Visual Design & Writing",
    //   imgUrl: projImg5,
    //   URL: "https://www.canva.com/design/DAF2yYb7j2E/63b9OMPicXEUKk9Q0mmyMQ/view?utm_content=DAF2yYb7j2E&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    //   tags: ["Visual Design", "Writing"],
    // },
    {
      title: "G20 Interfaith Forum Website",
      description:
        "The G20 Interfaith Forum is an organization that regularly hosts and participates in events accross the globe. Their site is the information hub for all of these events. At the start of my job with this organization, the site was not mobile friendly and was difficult to navigate. My goal, as the web designer and developer, was to design and develop a site that was simple for users (on mobile and desktop), visually interesting, and maintainable for developers. ",
      imgUrl: projImg1,
      URL: "https://docs.google.com/presentation/d/1X4z8N12RRMyGHdFBtU0R0JT1XsVmv3NArHvIp-pE9m4/edit#slide=id.p",
      tags: ["Visual Design", "User Research", "Navigation", "Development"],
    },
    {
      title: "Crafter's Community App",
      description:
        "The goal of this case study was to replicate the community feeling of a local yarn shop on a mobile platform so the shop’s activities can be experiences by a larger audience. The local yarn shop is a welcoming community of crafters, but isn’t accessible to a large audience because they don’t have an online presence. The goal of this project is to create a mobile app that can connect crafters in a way that fosters a sense of community.",
      imgUrl: projImg2,
      URL: "https://docs.google.com/presentation/d/15383yBfTenzfUg-rp42KsNx06tD22Rd-F0MMKLi0E90/edit?usp=sharing",
      tags: ["Visual Design", "Research"],
    },
    {
      title: "Christmas Coordinator Website",
      description:
        "The purpose of this project was to 1) practice using Figma and 2) design a site that would aid in organizing Christmas gift exchanges. I began this project because my family wanted a way to avoid giving duplicate gifts, and as I talked to them, we discovered other useful features. This project includes a UI Library, a custom Logo, and designs for the website on Figma. ",
      imgUrl: projImg3,
      URL: "https://www.canva.com/design/DAFvTc6ju5M/P_XLQ2N04WiGxSWOU235lw/view?utm_content=DAFvTc6ju5M&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
      tags: ["Visual Design"],
    },
    {
      title: "MixList Website",
      description:
        "The purpose of this project was to create a platform where music enthusiasts could craft and share playlists with their friends. In an era where creating playlists has become effortless, I opted for a nostalgic theme to evoke the unique sentiment associated with receiving a mixtape from a friend.",
      imgUrl: projImg4,
      URL: "https://www.canva.com/design/DAFvTgXB2yY/9-FgkCzSqOL8Fx-MWxRn2Q/view?utm_content=DAFvTgXB2yY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
      tags: ["Visual Design", "Development"],
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          {/* <Col size={1} sm={0} md={1}></Col> */}
          <Col>
            <h2>Projects</h2>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
