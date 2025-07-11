import projImg1 from "../assets/img/yarnimg.png";
import { ProjectPageHeader } from "./ProjectPageHeader";
import { ProjectPageOverview } from "./ProjectPageOverview";

const header = [
  {
    title: "Crafter's Community App",
    shortdescription: "Expanding the community of crafters.",
    imgUrl: projImg1,
  },
];

const overview = [
  {
    overview:
      "The goal of this case study was to replicate the community feeling of a local yarn shop on a mobile platform so the shop’s activities can be experiences by a larger audience. The local yarn shop is a welcoming community of crafters, but isn’t accessible to a large audience because they don’t have an online presence. The goal of this project is to create a mobile app that can connect crafters in a way that fosters a sense of community.",
    problem: [
      "Yarn shop community isn't accessible to people who can't visit the shop",
      "Activities and events are restricted to including those who can participate in-person",
      "Shop doesn't have an online presence",
    ],
    goals: [
      "To create a mobile app that can connect crafters in a way that fosters a sense of community.",
    ],
    role: ["Visual Design", "User Research"],
  },
];

export const YarnProject = () => {
  return (
    <section id="top" className="project-page">
      <div className="project-header">
        {header.map((header, index) => {
          return <ProjectPageHeader key={index} {...header} />;
        })}
      </div>
      <div className="">
        {overview.map((overview, index) => {
          return <ProjectPageOverview key={index} {...overview} />;
        })}
      </div>
      <div className="case-study-container">
        <div className="case-studies">
          <h3 className="case-study">Case Study</h3>
          <iframe
            src="https://drive.google.com/file/d/1QWtOasB3fb-AnB8CBJindzH1-t1RfNKu/preview"
            width="100%"
            height="500"
            loading="eager"
            title="Yarn Shop Case Study"
          ></iframe>
          <h3 className="figma-title">Figma Design</h3>
          <iframe
            //   style="border: 1px solid rgba(0, 0, 0, 0.1);"
            width="100%"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FnP5AADMdzSrNR9Ubgy3VZk%2FYarn-Shop-Prototype%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DX8Cw6YA5oNtGOjrV-1"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
