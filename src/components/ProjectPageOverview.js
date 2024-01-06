import lightbulb from "../assets/img/lightbulb.svg";

export const ProjectPageOverview = ({ overview, problem, goal, role }) => {
  return (
    <section className="project-overview-container">
      <div>
        <img src={lightbulb} alt="" className="lightbulb" />
      </div>
      <div>
        <div className="overview-text-box">
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Problem</h3>
          <p>{problem}</p>
          <h3>Goal</h3>
          <p>{goal}</p>
          <h3>My Role</h3>
          <p>{role}</p>
        </div>
      </div>
    </section>
  );
};
