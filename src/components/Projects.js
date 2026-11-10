import projImg1 from "../assets/img/if20-img.jpg";
import projImg2 from "../assets/img/yarn-img.png";
import projImg3 from "../assets/img/cc-img.png";
import projImg4 from "../assets/img/mixlist-img.png";
import projImg5 from "../assets/img/servant.png";
import cloudImg from "../assets/img/cloud-management/final-management-page.webp";
import { ProjectCard } from "./ProjectCard";
import "./Home.css";

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
      title: "The 50-table limit wasn’t the problem",
      description:
        "Rethinking cloud warehouse configuration for Domo’s data platform. As the sole product designer, I separated the setup flow from a new management page, removing unnecessary limitations. In the year after launch, users per account grew about 54%.",
      imgUrl: cloudImg,
      URL: "/cloud-management#top",
      tags: ["User Flows", "Information Architecture", "Engineering Partnership"],
    },
    {
      title: "A website that keeps itself current",
      description:
        "I redesigned a sprawling WordPress site so it could keep itself current, work on phones and outlast me.",
      imgUrl: projImg1,
      URL: "/g20project#top",
      tags: [
        "Visual Design",
        // "User Research",
        "Navigation Design",
        "Development",
      ],
    },
    {
      title: "Crafter's Community App",
      description:
        "The goal of this case study was to replicate the community feeling of a local yarn shop on a mobile platform so the shop’s activities can be experiences by a larger audience. The local yarn shop is a welcoming community of crafters, but isn’t accessible to a large audience because they don’t have an online presence. The goal of this project is to create a mobile app that can connect crafters in a way that fosters a sense of community.",
      imgUrl: projImg2,
      URL: "/yarn-shop-project#top",
      tags: ["Visual Design", "User Research"],
    },
    {
      title: "Christmas Coordinator Website",
      description:
        "The purpose of this project was to 1) practice using Figma and 2) design a site that would aid in organizing Christmas gift exchanges. I began this project because my family wanted a way to avoid giving duplicate gifts, and as I talked to them, we discovered other useful features. This project includes a UI Library, a custom Logo, and designs for the website on Figma. ",
      imgUrl: projImg3,
      URL: "/christmas-project#top",
      tags: ["Visual Design"],
    },
    // {
    //   title: "MixList Website",
    //   description:
    //     "The purpose of this project was to create a platform where music enthusiasts could craft and share playlists with their friends. In an era where creating playlists has become effortless, I opted for a nostalgic theme to evoke the unique sentiment associated with receiving a mixtape from a friend.",
    //   imgUrl: projImg4,
    //   URL: "/mixlist-project#top",
    //   tags: ["Visual Design", "Development"],
    // },
  ];

  return (
    <section className="home-work" id="project">
      <div className="home-wrap">
        <h2>Selected Work</h2>
        <div className="work-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
