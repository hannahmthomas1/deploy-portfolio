import { HashLink } from "react-router-hash-link";

export const ProjectCard = ({ title, description, imgUrl, URL, tags }) => {
  return (
    <article className="work-card">
      <HashLink to={URL} className="work-img" tabIndex={-1} aria-hidden="true">
        <img src={imgUrl} alt="" />
      </HashLink>
      <h3>
        <HashLink to={URL}>{title}</HashLink>
      </h3>
      <p className="work-desc">{description}</p>
      <div className="work-tags">
        {tags.map((tag) => (
          <span key={tag} className="work-tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};
