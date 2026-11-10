import profile from "../assets/img/profile-yellow.png";
import "./Home.css";

const strengths = [
  {
    title: "Proactive Problem-Solving",
    text: "I actively seek opportunities to contribute value and take initiative to address challenges before they become roadblocks.",
    icon: "lightbulb",
  },
  {
    title: "Cross-Functional Communication",
    text: "I effectively present and explain design concepts to diverse audiences, from engineers to executives.",
    icon: "forum",
  },
  {
    title: "User Empathy",
    text: "I consider the user's perspective in my design decisions, ensuring solutions truly serve their needs.",
    icon: "favorite",
  },
  {
    title: "Simplification",
    text: "I transform intricate technical problems into intuitive, user-friendly experiences that feel effortless.",
    icon: "code",
  },
];

export const AboutMe = () => {
  return (
    <section className="home-about" id="about">
      <div className="home-wrap about-row">
        <div className="about-profile">
          <div className="about-photo">
            <img src={profile} alt="Hannah Luebke" />
          </div>
          <span className="about-name">Hannah Luebke</span>
          <span className="about-location">American Fork, UT</span>
        </div>

        <div className="about-main">
          <h2>About Me</h2>
          <div className="about-card">
            
            <p>
              I'm passionate about making advanced technology feel approachable.
              I truly enjoy taking intricate processes and transforming them into 
              clear, accessible experiences. 
            </p>
            <p>
              My work spans a broad range of user needs, from improving access to information for 
              older adults and low-tech audiences in the nonprofit sector to designing complex 
              enterprise tools for technical users.
            </p>
            <p>
              My educational background 
              in development and information systems helps me
              collaborate with engineering teams and create solutions for users with varying 
              levels of technical expertise.
            </p>
          </div>
          <div className="strengths">
            {strengths.map(({ title, text, icon }) => (
              <div key={title} className="strength">
                <span className="strength-icon" aria-hidden="true">
                  <span className="material-symbols-outlined">{icon}</span>
                </span>
                <div className="strength-text">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
