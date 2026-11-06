import { useLocation } from "react-router-dom";
import "./Home.css";

// Pages whose last section uses the lighter About Me background
const LIGHT_END_PAGES = ["/", "/cloud-management"];

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#FFFFFF",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const links = [
  {
    title: "Email Me",
    detail: "luebkehan@gmail.com",
    href: "mailto:luebkehan@gmail.com",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    detail: "Connect with me",
    href: "https://www.linkedin.com/in/hannahluebke/",
    external: true,
    icon: (
      <svg {...iconProps}>
        <path d="M5 10v9M5 5.5v.01M10 19v-9M10 13.5a3.5 3.5 0 0 1 7 0V19" />
      </svg>
    ),
  },
];

export const Contact = () => {
  const { pathname } = useLocation();
  const curveTop = LIGHT_END_PAGES.includes(pathname) ? "#E8EEEF" : "#D2DDE0";

  return (
    <footer className="contact" id="connect">
      {/* Curve into the footer; the top color matches the section above it */}
      <svg
        className="transition"
        viewBox="0 0 1934 210"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="1934" height="210" fill={curveTop} />
        <path
          d="M0 163 A1519 420 0 0 1 1934 163 V212 H0 Z"
          fill="var(--Blue1)"
        />
      </svg>
      <div className="home-wrap connect-body">
        <h2>Let’s Connect</h2>
        <div className="connect-grid">
          {links.map(({ title, detail, href, external, icon }) => (
            <a
              key={title}
              className="connect-card"
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <span className="connect-icon" aria-hidden="true">
                {icon}
              </span>
              <span className="connect-text">
                <span className="connect-title">{title}</span>
                <span className="connect-detail">{detail}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
