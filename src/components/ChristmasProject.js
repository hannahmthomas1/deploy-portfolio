import projImg1 from "../assets/img/christmasimg.png";
import { ProjectPageHeader } from "./ProjectPageHeader";
import { ProjectPageOverview } from "./ProjectPageOverview";

const header = [
  {
    title: "Christmas Coordinator",
    shortdescription:
      "Creating lasting Christmas memories: A unique gift exchange solution.",
    imgUrl: projImg1,
  },
];

const overview = [
  {
    overview:
      "The purpose of this project was to 1) practice using Figma and 2) design a site that would aid in organizing Christmas gift exchanges. I began this project because my family wanted a way to avoid giving duplicate gifts, and as I talked to them, we discovered other useful features. This project includes a UI Library, a custom Logo, and designs for the website on Figma.",
    problem: [
      "Users want the ability to create randomized and non-randomized gift exchanges.",
      "Users want to see the wish lists of the people in their group.",
      "Users want to see what gifts have already been bought.",
      "Users don’t want to see what has been bought from their own list.",
    ],
    goals: [
      "Create an online tool that empowers its users to host seamless gift exchanges.",
    ],
    role: ["Visual Design"],
  },
];

export const ChristmasProject = () => {
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
          <h3 className="figma-title">UI Library & Logo</h3>
        
          <iframe
            width="100%"
            height="450"
            src="htStps://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FePKZbpT6swWOD9ilc0I0Fw%2FChristmas-Coordinator-Library%3Ftype%3Ddesign%26node-id%3D514%253A26%26mode%3Ddesign%26t%3DMrk94fBmGCuz8T3T-1"
            allowfullscreen
          ></iframe>

          <h3 className="figma-title">Page Designs</h3>

          <iframe
            width="100%"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FePKZbpT6swWOD9ilc0I0Fw%2FChristmas-Coordinator-Library%3Ftype%3Ddesign%26node-id%3D519%253A13%26mode%3Ddesign%26t%3DVJGXqmq6aSCnWMH7-1"
            allowfullscreen
          ></iframe>
          </div>
      </div>
    </section>
  );
};
