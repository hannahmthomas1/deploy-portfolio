import projImg1 from "../assets/img/g20phones.png";
import { ProjectPageHeader } from "./ProjectPageHeader";
import { ProjectPageOverview } from "./ProjectPageOverview";

const header = [
  {
    title: "G20 Interfaith Forum Website",
    shortdescription:
      "The G20 Interfaith Forum aims to improve international policy through discussions between interfaith communities.",
    imgUrl: projImg1,
  },
];

const overview = [
  {
    overview:
      "The G20 Interfaith Forum is an organization that regularly hosts and participates in events accross the globe. Their site is the information hub for all of these events. At the start of my job with this organization, the site was not mobile friendly and was difficult to navigate. My goal, as the web designer and developer, was to design and develop a site that was simple for users (on mobile and desktop), visually interesting, and maintainable for developers.",
    problem: [
      "Site was not mobile friendly, even with ⅓ of its users visiting the site on mobile devices",
      "Difficult for users to find resources and navigate the site",
      "Site lacked consistent visual design",
    ],
    goals: [
      "Design a site on mobile and desktop that is simple for users, visually interesting, and maintainable for developers.",
    ],
    role: [
      "Visual Design",
      "User Research",
      "Navigation Design",
      "Frontend Development",
    ],
  },
];

export const G20Project = () => {
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
            src="https://drive.google.com/file/d/1eg4MTuXFcBXd4UeyZ-VA7Pl4ZuiOMKv9/preview?"
            width="100%"
            height="500"
            loading="eager"
            title="G20 Case Study"
          ></iframe>
        </div>
      </div>

      {/* Yarn shop */}
      {/* <iframe
          src="https://drive.google.com/file/d/1QWtOasB3fb-AnB8CBJindzH1-t1RfNKu/preview"
          width="100%"
          height="500"
          loading="eager"
          title="G20 Case Study"
        ></iframe> */}
    </section>
  );
};
