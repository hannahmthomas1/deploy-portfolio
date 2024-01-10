import projImg1 from "../assets/img/mixlistimg.png";
import { ProjectPageHeader } from "./ProjectPageHeader";
import { ProjectPageOverview } from "./ProjectPageOverview";

const header = [
  {
    title: "Mixlist",
    shortdescription:
      "Where sharing playlists embraces the nostalgic Mixtape Era.",
    imgUrl: projImg1,
  },
];

const overview = [
  {
    overview:
      "In an era where creating and sharing playlists is simple, we have lost the beauty of the mixtape. For this playlist sharing webapp I opted for a nostalgic theme to evoke the unique sentiment associated with gifting a mixtape to a friend. This project was built as part of a web development class. ",
    problem: [
      "Users need the ability to add, edit, and delete songs on their playlist.",
      "When users finish the playlist, they will need a share button that will generate a sharable image.",
      "The sharable image should show the playlist in a similar format as a song list on a cassette tape.",
    ],
    goals: [
      "Create a platform where music enthusiasts can craft and share playlists with their friends",
    ],
    role: ["Visual Design"],
  },
];

export const MixlistProject = () => {
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
        <h3 className="figma-title">Homepage Design</h3>
        <iframe
          width="100%"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqD1kMw9uqd1BiMNApSkZjR%2FMixtape-Playlist%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DC1eArbEZBxTyIX9x-1"
          allowfullscreen
        ></iframe>

        <h3 className="figma-title">Idea Board</h3>

        <iframe
          width="100%"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqD1kMw9uqd1BiMNApSkZjR%2FMixtape-Playlist%3Ftype%3Ddesign%26node-id%3D108%253A3%26mode%3Ddesign%26t%3Dg7mRtDND8agg8AOR-1"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};
