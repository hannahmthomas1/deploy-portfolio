import "./CloudManagement.css";
import { FloatingPills } from "../FloatingPills";

import finalManagementPage from "../../assets/img/cloud-management/final-management-page.webp";
import oldTableModal from "../../assets/img/cloud-management/old-table-modal.webp";
import oldWizard from "../../assets/img/cloud-management/old-wizard.png";
import earlyMock1 from "../../assets/img/cloud-management/early-mock-1.webp";
import earlyMock2 from "../../assets/img/cloud-management/early-mock-2.webp";
import earlyMock3 from "../../assets/img/cloud-management/early-mock-3.webp";
import databricks from "../../assets/img/cloud-management/databricks.png";
import snowflake from "../../assets/img/cloud-management/snowflake.png";
import tree from "../../assets/img/cloud-management/tree.png";
import connectTables from "../../assets/img/cloud-management/connect-tables.png";
import tableDetailImpact from "../../assets/img/cloud-management/table-detail-impact.png";
import quickFilters from "../../assets/img/cloud-management/quick-filters.png";
import manualConnect from "../../assets/img/cloud-management/manual-connect.webp";
import featureOverview from "../../assets/img/cloud-management/feature-overview.png";
import featureDatasets from "../../assets/img/cloud-management/feature-datasets.png";
import featureCaching from "../../assets/img/cloud-management/feature-caching.png";

const C = {
  b2: "#2C6170",
  b3: "#41717E",
  b4: "#5C8590",
  b5: "#8CA9B1",
  b6: "#9DB5BC",
};

// Positioned highlight box over a screenshot; values are percentages.
const hl = (left, top, width, height) => ({
  left: `${left}%`,
  top: `${top}%`,
  width: `${width}%`,
  height: `${height}%`,
});

// `crop` = [left, top, width] (percent) zooms into part of the screenshot;
// pair it with an aspect-ratio on `style` to set the visible window.
const Shot = ({ src, alt, highlight, crop, className = "", style, children }) => (
  <div className={`cs-shot ${className}`} style={style}>
    <img
      src={src}
      alt={alt}
      className={crop ? "cs-crop" : undefined}
      style={
        crop
          ? { left: `${crop[0]}%`, top: `${crop[1]}%`, width: `${crop[2]}%` }
          : undefined
      }
    />
    {highlight && <div className="cs-hl" style={highlight} />}
    {children}
  </div>
);

// "In this case study" chapters: [section id, title, teaser]
const agenda = [
  ["problem", "The problem", "Only 50 tables at a time"],
  ["approach", "The approach", "Splitting setup from management"],
  ["design", "The design", "A management page built for warehouses"],
  ["outcome", "Outcome", "+54% users per account"],
  ["reflection", "Reflection", "Questioning the problem first"],
];

// The site uses a hash router, so in-page "#id" links would change the route.
// Scroll to the section instead (smoothly, offset by html scroll-padding-top).
const scrollToSection = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const CloudManagementPage = () => {
  return (
    <div className="cs-page" id="top">
      {/* ============ HERO ============ */}
      <header className="cs-hero cs-dark">
        <div className="cs-wrap cs-hero-body">
          <div className="cs-hero-text">
            <span className="cs-eyebrow">Case study · Domo</span>
            <h1 className="cs-serif cs-hero-title">
              The 50-table limit wasn’t the problem
            </h1>
            <p className="cs-lede">
              Rethinking cloud warehouse configuration for Domo’s data platform
            </p>
          </div>
          <div className="cs-laptop">
            <div className="cs-laptop-screen">
              <div className="cs-laptop-cam" aria-hidden="true" />
              <div className="cs-laptop-display">
                <img
                  src={finalManagementPage}
                  alt="The final integration management page"
                />
              </div>
            </div>
            <div className="cs-laptop-base" aria-hidden="true" />
          </div>
        </div>
      </header>
      <div className="cs-pills-hero">
        <FloatingPills className="project-pill-container" />
        <div className="darkerbluebox cs-pills-floor" />
      </div>

      {/* ============ AT A GLANCE ============ */}
      <section className="cs-glance">
        <div className="cs-wrap cs-glance-row">
          <div className="cs-stack cs-glance-main" style={{ gap: 32 }}>
            <span className="cs-eyebrow">At a glance</span>
            <h2 className="cs-h3">
              Removed unnecessary limitations by separating the setup flow and
              the management flow
            </h2>
            <div className="cs-tags">
              <span className="cs-chip-tag">USER FLOWS</span>
              <span className="cs-chip-tag">INFORMATION ARCHITECTURE</span>
              <span className="cs-chip-tag">NAVIGATION DESIGN</span>
            </div>
            <dl className="cs-facts">
              {[
                ["Role", "Sole product designer"],
                ["Team", "1 product manager, 5 engineers"],
                ["Timeline", "Fall 2024 – fall 2025"],
                ["Tools", "Figma, Domo design system"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="cs-eyebrow">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <nav aria-label="In this case study" className="cs-agenda">
            <span className="cs-eyebrow cs-agenda-label">In this case study</span>
            <div className="cs-agenda-list">
              {agenda.map(([id, title, teaser], i) => (
                <a
                  key={id}
                  className="cs-agenda-link"
                  href={`#${id}`}
                  onClick={(e) => scrollToSection(e, id)}
                >
                  <span className="cs-serif cs-agenda-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="cs-agenda-text">
                    <span className="cs-agenda-title">{title}</span>
                    <span className="cs-agenda-teaser">{teaser}</span>
                  </span>
                  <span className="cs-agenda-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* ============ 01 PROBLEM ============ */}
      <section id="problem" className="cs-dark cs-pad">
        <div className="cs-wrap cs-split">
          <div className="cs-stack">
            <span className="cs-eyebrow">01 — The problem</span>
            <h2 className="cs-h2 cs-serif">
              Admins with huge warehouses could connect only 50 tables at a
              time
            </h2>
            <p className="cs-body">
              Domo’s cloud integrations empowers enterprises to use data from their large cloud data warehouses to
             build AI and data products in Domo. When admins set up the connection they were limited to only connect 50
              tables at one time.
            </p>
          </div>
          <div>
            <Shot
              src={oldTableModal}
              alt="Original table selection modal showing 1/50 tables selected"
              style={{ aspectRatio: "483/426" }}
              crop={[-1.86, -75.35, 248.4]}
              highlight={hl(3.5, 77.7, 36, 14.1)}
            />
            <p className="cs-cap">
              The original table picker, capped at 50 selections.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          paddingTop: "clamp(72px,9vw,128px)",
          paddingBottom: "clamp(40px,5vw,64px)",
        }}
      >
        <div className="cs-wrap cs-stack">
          <h2 className="cs-h3 mw-900">
            The cap existed to keep people from losing their work
          </h2>
          <p className="cs-body mw-780">
            The admin connects tables at the last step of the integration setup
            wizard. This means they may have already spent 15 – 60 minutes
            making sure the configuration is correct before they reach this
            step. Our engineers were concerned that if the admin selected more
            than 50 tables, the tool would take too long to load and the admin
            would refresh the page and lose all progress.
          </p>
        </div>
        <div className="cs-wrap cs-mt">
          <div className="cs-flow">
            {[
              ["Configure integration", "#195263"],
              ["Connect over 50 tables", C.b2],
              ["Page looks stuck", C.b3],
              ["Refresh", C.b4],
              ["Progress lost", "#B5473A"],
            ].map(([label, bg], i, arr) => (
              <div key={label} style={{ display: "contents" }}>
                <div
                  className="cs-flow-step"
                  style={{
                    background: bg,
                    fontWeight: i === arr.length - 1 ? 600 : 500,
                    color: i >= 3 ? "#FFFFFF" : undefined,
                  }}
                >
                  {label}
                </div>
                {i < arr.length - 1 && <span className="cs-flow-arrow">→</span>}
              </div>
            ))}
          </div>
          <div className="cs-loop">
            <span>START OVER</span>
          </div>
        </div>
      </section>

      <section
        style={{
          paddingTop: "clamp(40px,5vw,64px)",
          paddingBottom: "clamp(72px,9vw,128px)",
        }}
      >
        <div className="cs-wrap cs-split">
          <div className="cs-stack g24">
            <h2 className="cs-h3">
              Connecting more tables meant clicking through the whole wizard
              again
            </h2>
            <p className="cs-body">
              When an admin returned to connect more tables they would need to
              click through each configuration step of the wizard to get back
              to that last step.
            </p>
          </div>
          <div>
            <Shot
              src={oldWizard}
              alt="Original Snowflake connection wizard"
              highlight={hl(0.6, 9.6, 22.6, 73.4)}
            />
            <p className="cs-cap">
              Every step of the old wizard stood between the admin and the
              tables.
            </p>
          </div>
        </div>
      </section>

      {/* ============ TURNING POINT ============ */}
      <section className="cs-dark cs-turn">
        <div className="cs-wrap cs-stack" style={{ gap: 32 }}>
          <span className="cs-eyebrow">The turning point</span>
          <h2 className="cs-h1 cs-serif mw-1000">
            The real problem was asking for every decision in one sitting
          </h2>
          <p className="cs-lede mw-680">
            This made me question what steps were actually necessary for admins
            to configure during setup.
          </p>
          <div className="cs-quote">
            <p className="cs-serif">
              What if setup asked only for the bare minimum needed to create an
              integration?
            </p>
          </div>
        </div>
      </section>

      {/* ============ 02 APPROACH ============ */}
      <section id="approach" className="cs-pad" style={{ overflow: "hidden" }}>
        <div className="cs-wrap cs-stack">
          <span className="cs-eyebrow">02 — The approach</span>
          <div className="cs-split end">
            <h2 className="cs-h2 cs-serif">
              Splitting setup from management took healthy debate to get right
            </h2>
            <p className="cs-body">
              I proposed the split. It was a big change, and our engineers and
              PM pushed back. They cared about getting it right. Rough mocks
              helped everyone visualize the shift, and we agreed it would help.
            </p>
          </div>
        </div>
        <div
          className="cs-wrap"
          style={{
            marginTop: "clamp(48px,6vw,88px)",
            paddingBottom: "clamp(24px,3vw,40px)",
          }}
        >
          <div className="cs-paper-stack">
            {[
              [earlyMock1, -4, 0, 0],
              [earlyMock2, 2.5, 22, 11],
              [earlyMock3, -1.5, 44, 22],
            ].map(([src, r, left, top], i) => (
              <Shot
                key={i}
                className="cover cs-paper"
                style={{
                  "--r": `${r}deg`,
                  left: `${left}%`,
                  top: `${top}%`,
                  zIndex: i + 1,
                }}
                src={src}
                alt={`Early rough mock ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cs-mid cs-pad">
        <div className="cs-wrap cs-stack g24">
          <h2 className="cs-h3 mw-900">
            Setup now asks only what’s needed to make a connection
          </h2>
          <p className="cs-body mw-720">
            Everything else, including connecting tables, lives on a management
            page admins can return to anytime.
          </p>
        </div>
        <div className="cs-wrap cs-grid2 cs-mt">
          <div className="cs-ba">
            <span className="cs-eyebrow">Before</span>
            <div className="cs-ba-row">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="cs-ba-step" />
              ))}
              <div className="cs-ba-final">Connect tables</div>
            </div>
            <span className="cs-ba-label">One long wizard</span>
          </div>
          <div className="cs-ba">
            <span className="cs-eyebrow">After</span>
            <div className="cs-ba-row" style={{ gap: 10 }}>
              <div className="cs-ba-square" />
              <div className="cs-ba-square" />
              <span className="cs-ba-arrow">→</span>
              <div className="cs-ba-page">
                <span>Management page</span>
                <span className="cs-chip">Connect tables</span>
                <span className="cs-chip">New management tools</span>
                <span className="cs-chip">Settings</span>
              </div>
            </div>
            <span className="cs-ba-label">
              Short setup, then a page to return to
            </span>
          </div>
        </div>
      </section>

      <section className="cs-dark cs-pad">
        <div className="cs-wrap cs-stack">
          <h2 className="cs-h3 mw-960">
            A dedicated page meant we could rethink the experience from scratch
          </h2>
          <p className="cs-body mw-760">
            The old modal was built for a single task. A full page had room for
            modern navigation, clearer status, and features customers had been
            asking for.
          </p>
        </div>
        <div className="cs-wrap cs-grid3 cs-mt-lg">
          {[
            [
              "Clear navigation",
              "Provide a clean and clear way for admins to find what they are looking for.",
            ],
            [
              "More context about tables",
              "See what a table holds and what depends on it. Provide quick stats and the ability to do a deeper dive.",
            ],
            ["Find errors fast", "Spot what’s broken at a glance."],
          ].map(([title, text], i) => (
            <div key={title} className="cs-num-col">
              <span className="cs-serif cs-num">{i + 1}</span>
              <span className="cs-num-title">{title}</span>
              <p className="cs-body">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 03 DESIGN ============ */}
      <section
        id="design"
        style={{
          paddingTop: "clamp(72px,9vw,128px)",
          paddingBottom: "clamp(56px,7vw,96px)",
        }}
      >
        <div className="cs-wrap cs-stack">
          <span className="cs-eyebrow">03 — The design</span>
          <h2 className="cs-h2 cs-serif mw-960">
            Admins already navigate warehouses using a tree navigation
          </h2>
          <p className="cs-body mw-780">
            Data architects and systems admins manage these warehouses every
            day. Snowflake, Databricks and others organize databases and
            schemas as a tree, so I modeled navigation on that pattern.
          </p>
        </div>
        <div className="cs-wrap cs-treegrid cs-mt">
          <figure>
            <Shot
              className="cover"
              style={{ aspectRatio: "828/1102" }}
              src={databricks}
              alt="Databricks catalog tree"
            />
            <figcaption className="cs-cap strong">Databricks</figcaption>
          </figure>
          <figure>
            <Shot
              className="cover"
              style={{ aspectRatio: "828/1102" }}
              src={snowflake}
              alt="Snowflake database tree"
            />
            <figcaption className="cs-cap strong">Snowflake</figcaption>
          </figure>
          <figure className="cs-tree-main" style={{ minWidth: 0 }}>
            <Shot
              style={{ borderColor: "#195263", aspectRatio: "520/495" }}
              src={tree}
              alt="Domo schema explorer tree"
              crop={[-15.38, -35.35, 276.9]}
              highlight={{ ...hl(9.2, 13.1, 64.2, 83.2), borderRadius: 8 }}
            />
            <figcaption className="cs-cap strong">Design for Domo</figcaption>
          </figure>
        </div>
      </section>

      <section className="cs-pad-md">
        <div className="cs-wrap cs-split">
          <div className="cs-stack g24">
            <span className="cs-eyebrow" style={{ color: "#B5473A" }}>
              Technical constraint
            </span>
            <h2 className="cs-h3">
              We can only load one schema worth of tables at a time
            </h2>
            <p className="cs-body">
              Unfortunately our system could only load tables from one schema
              at a time. Changing that would have cost far more than designing
              around it, so I built a single-column drill menu that allows
              users to search for objects within the current folder. The drill
              navigation can collapse to leave plenty of space for table
              exploration.
            </p>
          </div>
          <div className="cs-stack" style={{ gap: 14, minWidth: 0 }}>
            <div className="cs-shot-labels">
              <span className="cs-chip-tag" style={{ left: "21%" }}>
                DRILL PATH
              </span>
              <span className="cs-chip-tag gold" style={{ left: "43.6%" }}>
                EXPLORE TABLES
              </span>
            </div>
            <Shot
              src={connectTables}
              alt="Connect tables page with drill menu and table list"
            >
              <div className="cs-dash" style={hl(21, 6.8, 21.8, 91.8)} />
              <div className="cs-dash gold" style={hl(43.6, 6.8, 55.4, 91.8)} />
            </Shot>
          </div>
        </div>
      </section>

      <section className="cs-mid cs-pad">
        <div className="cs-wrap cs-split rev">
          <Shot
            src={tableDetailImpact}
            alt="Table detail view, Impact tab"
            highlight={hl(27, 22, 70.2, 28.6)}
          />
          <div className="cs-stack g24 first-on-mobile">
            <span className="cs-eyebrow">New feature</span>
            <h2 className="cs-h3">Granting access to important table information</h2>
            <p className="cs-body">
              The table detail view previews the data and shows the assets
              built on it. If 160 cards depend on a table, you’ll know before
              you remove it.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-pad">
        <div className="cs-wrap cs-stack g24">
          <h2 className="cs-h3 mw-900">
            Errors are one filter away, even in the largest schemas
          </h2>
          <p className="cs-body mw-820">
            Quick filters show what’s connected, disconnected or in error. For
            schemas too large to load, admins can connect tables manually by
            uploading a spreadsheet, with clearer error handling than before.
          </p>
        </div>
        <div className="cs-wrap cs-grid2 top cs-mt">
          <figure>
            <Shot
              src={quickFilters}
              alt="Connect tables page with status donut chart and quick filter buttons"
              style={{ aspectRatio: "604/355" }}
              crop={[-138.4, -8.17, 238.4]}
              highlight={hl(51.9, 8.9, 47, 36.6)}
            />
            <figcaption className="cs-figlabel">Quick filters</figcaption>
          </figure>
          <figure>
            <Shot
              src={manualConnect}
              alt="Manual connect page with tables that need action"
              style={{ aspectRatio: "604/355" }}
              crop={[-9.19, -12.36, 109.2]}
              highlight={hl(8.7, 65.7, 90.7, 23.2)}
            />
            <figcaption className="cs-figlabel">Manual connect</figcaption>
          </figure>
        </div>
      </section>

      {/* ============ OUTCOME ============ */}
      <section
        id="outcome"
        className="cs-dark"
        style={{
          paddingTop: "clamp(80px,10vw,144px)",
          paddingBottom: "clamp(80px,10vw,144px)",
        }}
      >
        <div className="cs-wrap cs-stack">
          <span className="cs-eyebrow">04 — Outcome</span>
          <h2 className="cs-h2 cs-serif mw-960">
            The 50-table cap is gone, and adoption kept climbing
          </h2>
          <p className="cs-body mw-720">
            A technical limit remains, but few admins will ever hit it. If they
            do hit the limit, connecting the next batch is simpler.
          </p>
        </div>
        <div className="cs-wrap cs-grid2 cs-mt-lg">
          <div className="cs-stat">
            <span className="cs-serif cs-stat-num">+54%</span>
            <span className="cs-stat-label">users per account</span>
          </div>
          <div className="cs-stat">
            <span className="cs-serif cs-stat-num">+50%</span>
            <span className="cs-stat-label">accounts using the flow</span>
          </div>
        </div>
        <div className="cs-wrap cs-mt">
          <p className="cs-footnote">
            In the year after launch, users per account grew about 54% and
            accounts using the flow grew 50%, continuing growth that started
            before release.
          </p>
        </div>
      </section>

      <section className="cs-pad">
        <div className="cs-wrap cs-split end">
          <h2 className="cs-h3">
            The management page gave the product room to grow
          </h2>
          <p className="cs-body">
            New features could join the management page instead of becoming
            another setup step.
          </p>
        </div>
        <div className="cs-wrap cs-grid3 cs-mt">
          {[
            [featureOverview, "Overview page with connection health", "Overview", "Connection health and key stats at a glance.", [-45.71, -47.62, 205.7]],
            [featureDatasets, "List of connected DataSets", "Connected DataSets", "Every DataSet from this connection in one list.", [-35.71, -16.76, 196.57]],
            [featureCaching, "DataSet-level freshness and caching settings", "Freshness and caching", "Adjust freshness checks and cache rules for each DataSet.", [-30.53, -14.74, 189.47]],
          ].map(([src, alt, title, text, crop], i) => (
            <div key={title} className="cs-feature">
              <Shot
                style={{ aspectRatio: "4/3" }}
                src={src}
                alt={alt}
                crop={crop}
              />
              <div className="cs-stack" style={{ gap: 8 }}>
                <span className="cs-eyebrow">0{i + 1}</span>
                <span className="cs-feature-title">{title}</span>
                <p className="cs-body">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ REFLECTION ============ */}
      <section id="reflection" className="cs-mid cs-reflection">
        <div
          className="cs-wrap cs-stack"
          style={{ gap: "clamp(40px,5vw,72px)", position: "relative", zIndex: 2 }}
        >
          <div className="cs-stack g24">
            <span className="cs-eyebrow">05 — Reflection</span>
            <h2 className="cs-h2 cs-serif mw-900">
              The best solution came from questioning the problem first
            </h2>
          </div>
          <div className="cs-grid3">
            {[
              "My first idea was nothing like what shipped, but it taught me the product.",
              "A rough mock moved discussions faster than waiting for the perfect mock.",
              "Agreeing on the problem first made every solution conversation better.",
            ].map((text, i) => (
              <div key={i} className="cs-stack" style={{ gap: 16 }}>
                <span className="cs-serif cs-num">{i + 1}</span>
                <p className="cs-lede">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudManagementPage;
