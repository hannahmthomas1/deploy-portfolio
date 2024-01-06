import { Document, Page } from "@react-pdf/renderer";
import projImg1 from "../assets/img/g20phones.png";
import preview from "../assets/img/if20phone.png";
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
    problem: ["One", "Two", "Three"],
    goal: ["One", "Two", "Three"],
    role: "asdf",
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
        <h3 className="case-study">Case Study</h3>
        <iframe
          src="https://drive.google.com/file/d/1eg4MTuXFcBXd4UeyZ-VA7Pl4ZuiOMKv9/preview?"
          width="100%"
          height="500"
          loading="eager"
          title="G20 Case Study"
        ></iframe>
      </div>

      {/* <div classname="project-container">
        <h2>G20 Interfaith Forum Website</h2>
        <div className="overview-image-container">
          <div className="overview-container">
            <h3>Overview</h3>
            <p>
              The G20 Interfaith Forum is an organization that regularly hosts
              and participates in events accross the globe. Their site is the
              information hub for all of these events. At the start of my job
              with this organization, the site was not mobile friendly and was
              difficult to navigate. My goal, as the web designer and developer,
              was to design and develop a site that was simple for users (on
              mobile and desktop), visually interesting, and maintainable for
              developers.
            </p>
          </div> */}
      {/* <div className="img-container">
            <img src={projImg1} alt="screenshot of website" />
          </div> */}
      {/* </div> */}
      {/* <div className="objective-lessons-container">
          <div className="objective-container">
            <h3>Objectives</h3>
            <ul>
              <li>Optimize the site for mobile devices</li>
              <li>Improve user navigation</li>
              <li>Design visually interesting pages</li>
              <li>Ensure the site is maintainable for future developers</li>
            </ul>
          </div>
          <div className="lessons-container">
            <h3>Lessons Learned</h3>
            <ul>
              <li>
                When stumped on a design problem, it can be very helpful to look
                at other similar sites for inspiration
              </li>
              <li>
                Beginning with wireframing and low-fidelity prototypes saves
                time in the end
              </li>
              <li>It is crucial to allow user feedback to drive the design</li>
            </ul>
          </div>
        </div>*/}
      {/* <h3 className="case-study">Case Study</h3> */}
      {/* Yarn shop */}
      {/* <iframe
          src="https://drive.google.com/file/d/1QWtOasB3fb-AnB8CBJindzH1-t1RfNKu/preview"
          width="100%"
          height="500"
          loading="eager"
          title="G20 Case Study"
        ></iframe> */}

      {/* <iframe
        src="https://drive.google.com/file/d/1eg4MTuXFcBXd4UeyZ-VA7Pl4ZuiOMKv9/preview"
        width="100%"
        height="500"
        loading="eager"
        title="G20 Case Study"
      ></iframe> */}
      {/* </div> */}
    </section>
  );
};
