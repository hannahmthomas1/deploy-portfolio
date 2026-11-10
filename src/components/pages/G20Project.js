import "./G20Project.css";
import { FloatingPills } from "../FloatingPills";

import homeAfterDesktop from "../../assets/img/g20/home-after-desktop.jpg";
import homeBeforeDesktop from "../../assets/img/g20/home-before-desktop.jpg";
import eventsBeforeDesktop from "../../assets/img/g20/events-before-desktop.jpg";
import eventsAfterDesktop from "../../assets/img/g20/events-after-desktop.jpg";
import policyBriefsBeforeDesktop from "../../assets/img/g20/policy-briefs-before-desktop.jpg";
import policyBriefsAfterDesktop from "../../assets/img/g20/policy-briefs-after-desktop.jpg";
import newsroomAfterDesktop from "../../assets/img/g20/newsroom-after-desktop.jpg";
import homeAfterMobile from "../../assets/img/g20/home-after-mobile.jpg";
import eventsAfterMobile from "../../assets/img/g20/events-after-mobile.png";
import policyBriefsAfterMobile from "../../assets/img/g20/policy-briefs-after-mobile.jpg";

// All crop and spotlight numbers are percentages copied from the design.
const pct = (n) => `${n}%`;

// Screenshot frame. `ratio` sets the visible window; `crop` = [left, top, width]
// positions the full image inside it; `hl` = [left, top, width, height] draws
// a spotlight box that dims everything around it.
const Shot = ({ src, alt, ratio, crop, hl, style }) => (
  <div
    className={`g20-shot${crop ? " g20-crop" : ""}`}
    style={{ aspectRatio: ratio, ...style }}
  >
    <img
      src={src}
      alt={alt}
      style={
        crop
          ? { left: pct(crop[0]), top: pct(crop[1]), width: pct(crop[2]) }
          : undefined
      }
    />
    {hl && (
      <div
        className="g20-hl"
        style={{
          left: pct(hl[0]),
          top: pct(hl[1]),
          width: pct(hl[2]),
          height: pct(hl[3]),
        }}
      />
    )}
  </div>
);

// "In this case study" chapters: [section id, title, teaser]
const agenda = [
  ["problem", "The problem", "Every update, added by hand across the site"],
  ["approach", "The approach", "Built for the next developer"],
  ["design", "The design", "A site that fills itself in"],
  ["outcome", "Outcome", "From upkeep to improvement"],
  ["reflection", "Reflection", "Where I found design"],
];

// The site uses a hash router, so in-page "#id" links would change the route.
// Scroll to the section instead (smoothly, offset by html scroll-padding-top).
const scrollToSection = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Check = () => (
  <span className="g20-cbox on" aria-hidden="true">
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  </span>
);

const Skipped = ({ label, tag }) => (
  <li className="g20-crow off">
    <span className="g20-dim">
      <span className="g20-cbox" aria-hidden="true" />
      <span>{label}</span>
    </span>
    <span className="g20-tag g20-tag-sm">{tag}</span>
  </li>
);

const G20ProjectPage = () => {
  return (
    <div className="g20-page">
      {/* ============ HERO ============ */}
      <header id="top" className="g20-hero">
        <div className="g20-wrap g20-hero-body">
          <div className="g20-hero-text">
            <span className="g20-eyebrow g20-on-dark">
              Case study · G20 Interfaith Forum
            </span>
            <h1 className="g20-serif g20-hero-title">
              A website that keeps itself current
            </h1>
            <p className="g20-lede">
              Restructuring a global policy organization's website so one person
              could maintain it
            </p>
          </div>
          {/* laptop frame */}
          <div className="g20-laptop">
            <div className="g20-laptop-screen">
              <div className="g20-laptop-cam" aria-hidden="true" />
              <div className="g20-laptop-display">
                <img
                  src={homeAfterDesktop}
                  alt="The redesigned G20 Interfaith Forum home page"
                />
              </div>
            </div>
            <div className="g20-laptop-base" aria-hidden="true">
              <div className="g20-laptop-notch" />
            </div>
          </div>
        </div>
      </header>
      <div className="g20-pills-hero">
        <FloatingPills className="project-pill-container" />
        <div className="darkerbluebox g20-pills-floor" />
      </div>

      {/* ============ AT A GLANCE ============ */}
      <section className="g20-glance">
        <div className="g20-wrap g20-glance-row">
          <div className="g20-glance-main">
            <span className="g20-eyebrow">At a glance</span>
            <h2 className="g20-h3">
              I redesigned a sprawling WordPress site so it could keep itself
              current, work on phones and outlast me.
            </h2>
            <div className="g20-tags">
              <span className="g20-tag">UX research</span>
              <span className="g20-tag">Information architecture</span>
              <span className="g20-tag">Responsive design</span>
              <span className="g20-tag">WordPress</span>
            </div>
            <dl className="g20-facts">
              {[
                [
                  "Role",
                  "Part-time web developer; sole designer and developer on the redesign",
                ],
                [
                  "Team",
                  "Just me, with feedback from coworkers and partner organizations",
                ],
                ["Timeline", "12 weeks, 2023"],
                ["Tools", "WordPress, Elementor"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="g20-eyebrow">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <nav aria-label="In this case study" className="g20-agenda">
            <span className="g20-eyebrow g20-agenda-label">
              In this case study
            </span>
            <div className="g20-agenda-list">
              {agenda.map(([id, title, teaser], i) => (
                <a
                  key={id}
                  className="g20-agenda-link"
                  href={`#${id}`}
                  onClick={(e) => scrollToSection(e, id)}
                >
                  <span className="g20-serif g20-agenda-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="g20-agenda-text">
                    <span className="g20-agenda-title">{title}</span>
                    <span className="g20-agenda-teaser">{teaser}</span>
                  </span>
                  <span className="g20-agenda-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* ============ 01 PROBLEM ============ */}
      <section id="problem" className="g20-dark g20-pad">
        <div className="g20-wrap g20-split">
          <div className="g20-stack">
            <span className="g20-eyebrow">01 — The problem</span>
            <h2 className="g20-h2 g20-serif">
              Every event, newsletter and press release had to be added by hand
              across the site
            </h2>
            <p className="g20-body">
              I was a full-time student and the organization's only web
              developer, working part-time. Our plugin, Elementor, made each
              edit drag-and-drop simple. But the site was never designed to grow
              the way it did, so each new post meant tracking down every place
              it belonged.
            </p>
          </div>
          <figure>
            <Shot
              src={eventsBeforeDesktop}
              alt="The old events page: a long grid of event boxes"
              ratio="1310/1080"
              style={{ borderColor: "#8CA9B1" }}
              crop={[-19.08, -22.22, 136.49]}
              hl={[8.55, 34.26, 81.68, 64.35]}
            />
            <figcaption className="g20-cap">
              The old events page, the worst offender. Every new event meant
              shifting all the others down by hand.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="g20-pad">
        <div className="g20-wrap g20-split rev">
          <figure>
            <Shot
              src={policyBriefsBeforeDesktop}
              alt="The old Policy Briefs page with rows of green buttons"
              ratio="1360/880"
              crop={[-14.71, -26.14, 129.04]}
              hl={[11.76, 41.48, 76.1, 51.14]}
            />
            <figcaption className="g20-cap">
              The old Policy Briefs page. Each button led to another page of
              links.
            </figcaption>
          </figure>
          <div className="g20-stack g24 g20-first-on-mobile">
            <h2 className="g20-h3">
              Visitors struggled to find things too, especially on phones
            </h2>
            <p className="g20-body">
              Our visitors were academics, religious leaders, policymakers and
              journalists around the world. A third of them came on phones,
              where images and key content didn't display properly. On desktop,
              policy briefs sat behind buttons that led to more pages of links.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 02 APPROACH ============ */}
      <section id="approach" className="g20-mid g20-pad">
        <div className="g20-wrap g20-stack">
          <span className="g20-eyebrow">02 — The approach</span>
          <div className="g20-split end">
            <h2 className="g20-h2 g20-serif">
              I restructured the site so it handled the busywork
            </h2>
            <p className="g20-body">
              Elementor made every edit easy. The problem was how many edits the
              structure demanded. I restructured the site so new events,
              newsletters and press releases could mostly place themselves.
              Custom CSS and code snippets would have been faster in places, but
              I mostly avoided them. The next developer would inherit what I
              built, so it had to stay editable in Elementor.
            </p>
          </div>
        </div>
        <div className="g20-wrap g20-mt">
          <div className="g20-checkgrid">
            <div className="g20-checkcard">
              <span className="g20-eyebrow">Before</span>
              <h3 className="g20-ctitle">After creating an event page</h3>
              <ul className="g20-clist">
                <li className="g20-crow">
                  <Check />
                  <span>Add it to the events page, manually shifting each event down</span>
                </li>
                <li className="g20-crow">
                  <Check />
                  <span>Add it to the home page's featured carousel</span>
                </li>
                <li className="g20-crow">
                  <Check />
                  <span>
                    Add it to the home page's "Recent and upcoming" carousel
                  </span>
                </li>
              </ul>
            </div>
            <div className="g20-checkcard">
              <span className="g20-eyebrow">After</span>
              <h3 className="g20-ctitle">After creating an event page</h3>
              <ul className="g20-clist">
                <li className="g20-crow">
                  <Check />
                  <span>Add it to the home page carousel, if it's featured</span>
                </li>
                <Skipped label="Events page" tag="Updates automatically" />
                <Skipped label="Second carousel" tag="Merged into one" />
              </ul>
            </div>
          </div>
          <p className="g20-cap" style={{ marginTop: 20 }}>
            Events, as one example. Newsletters and press releases now fill in
            the home page on their own too.
          </p>
        </div>
      </section>

      {/* ============ 03 DESIGN ============ */}
      <section id="design" className="g20-pad">
        <div className="g20-wrap g20-stack">
          <span className="g20-eyebrow">03 — The design</span>
          <div className="g20-split end">
            <h2 className="g20-h2 g20-serif">
              A simpler home page that's far easier to keep current
            </h2>
            <p className="g20-body">
              I merged two near-identical event carousels into one, so an event
              goes on the home page only if we choose to feature it. Newsletters
              and press releases now fill in on their own. I also simplified the
              hero into a clear introduction to the organization and tested
              variations with colleagues.
            </p>
          </div>
        </div>
        <div className="g20-wrap g20-mt">
          <div className="g20-grid2" style={{ alignItems: "start" }}>
            <figure className="g20-stack" style={{ gap: 14 }}>
              <span className="g20-eyebrow">Before</span>
              <Shot
                src={homeBeforeDesktop}
                alt="The old home page with two event carousels"
                ratio="1714/1420"
                crop={[-1.17, -33.1, 102.39]}
                hl={[12.84, 3.87, 56.3, 95.07]}
              />
            </figure>
            <figure className="g20-stack" style={{ gap: 14 }}>
              <span className="g20-eyebrow">After</span>
              <Shot
                src={homeAfterDesktop}
                alt="The redesigned home page with one event carousel"
                ratio="1500/1243"
                crop={[-10, 0, 117]}
                hl={[6.33, 40.63, 63.67, 51.25]}
              />
            </figure>
          </div>
          <p className="g20-cap" style={{ marginTop: 20 }}>
            Left, two event carousels nobody could tell apart. Right, one
            carousel, with news that updates itself.
          </p>
        </div>
      </section>

      <section className="g20-mid g20-pad">
        <div className="g20-wrap">
          <h2 className="g20-h3 mw-900">
            Small changes that kept visitors, and the site, from getting lost
          </h2>
        </div>
        <div className="g20-wrap g20-grid3 g20-mt">
          {[
            {
              src: newsroomAfterDesktop,
              alt: "The newsroom’s “Latest” section header",
              ratio: "760/570",
              crop: [-26.32, -312.28, 230.92],
              title: '"Latest," not "2021"',
              text: "The newsroom's newest section had a year that went stale every January.",
            },
            {
              src: eventsAfterDesktop,
              alt: "A scroll-to-top link under the Recent Events heading",
              ratio: "440/330",
              crop: [-47.73, -430.3, 398.86],
              hl: [2.73, 31.82, 32.5, 10.61],
              title: "A way back up",
              text: "Scroll-to-top buttons, added for a coworker who kept getting lost on long pages.",
            },
            {
              src: policyBriefsAfterDesktop,
              alt: "Policy brief cards for each year",
              ratio: "1300/975",
              crop: [-15.38, -52.31, 135],
              title: "Content, not buttons",
              text: "The old Policy Briefs page worked like a menu, with each button leading to a few briefs. Now they're all listed on one page.",
            },
          ].map(({ title, text, ...shot }, i) => (
            <div key={title} className="g20-stack" style={{ gap: 20, minWidth: 0 }}>
              <Shot {...shot} />
              <div className="g20-stack" style={{ gap: 8 }}>
                <span className="g20-serif g20-feature-num">{i + 1}</span>
                <span className="g20-feature-title">{title}</span>
                <p className="g20-body">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 04 OUTCOME ============ */}
      <section id="outcome" className="g20-dark g20-pad-lg">
        <div className="g20-wrap g20-stack">
          <span className="g20-eyebrow">04 — The outcome</span>
          <h2 className="g20-h2 g20-serif mw-960">
            My job shifted from keeping the site current to making it better
          </h2>
          <p className="g20-body mw-720">
            Events, newsletters and press releases no longer had to be placed by
            hand across the site.
          </p>
        </div>
        <div className="g20-wrap g20-grid2 g20-mt-lg">
          <div className="g20-stat">
            <span className="g20-serif g20-stat-num">1 in 3</span>
            <span className="g20-stat-label">
              visitors on phones could finally use every page
            </span>
          </div>
          <div className="g20-stat">
            <span className="g20-serif g20-stat-num">3 to 1</span>
            <span className="g20-stat-label">
              places to update after creating an event
            </span>
          </div>
        </div>
        <div className="g20-wrap g20-mt-xl">
          <figure className="g20-quote">
            <blockquote className="g20-serif">
              "I feel like we finally have a real website."
            </blockquote>
            <figcaption>— Our associate director of communications</figcaption>
          </figure>
          <p className="g20-footnote">
            Figures come from site data and my own workflow in 2023, not a
            formal study.
          </p>
        </div>
      </section>

      <section className="g20-pad">
        <div className="g20-wrap">
          <h2 className="g20-h3 mw-900">
            Every page finally worked for the third of visitors on phones
          </h2>
        </div>
        <div className="g20-wrap g20-phones g20-mt">
          {[
            [homeAfterMobile, "The redesigned home page on a phone", "Home", 0],
            [eventsAfterMobile, "The redesigned events page on a phone", "Events", -4.8],
            [policyBriefsAfterMobile, "The redesigned Policy Briefs page on a phone", "Policy briefs", -4.25],
          ].map(([src, alt, label, top]) => (
            <figure key={label}>
              <div className="g20-phone">
                <div className="g20-phone-screen">
                  <img src={src} alt={alt} style={{ top: pct(top) }} />
                </div>
              </div>
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ============ 05 REFLECTION ============ */}
      <section id="reflection" className="g20-mid g20-pad">
        <div className="g20-wrap g20-stack">
          <span className="g20-eyebrow">05 — Reflection</span>
          <h2 className="g20-h2 g20-serif mw-960">
            This project showed me I'd rather solve design problems than
            code
          </h2>
          <p className="g20-body mw-780">
            At the time, I was studying information systems and interviewing for 
            software development jobs. I was hired to keep this website running, 
            but the code wasn't what I cared about most. I wanted a journalist on 
            a phone to find a press release, and policy makers to be able to find 
            relevant webinars. I also wanted the site to look as credible as the 
            work behind it. The G20 Interfaith Forum was doing work that mattered,
             and I wanted them to succeed. Caring about the people on the other side 
             of the screen is what led me to UX.
          </p>
        </div>
        {/* <div className="g20-wrap g20-grid3 g20-mt-lg">
          {[
            [
              "Structure is maintenance",
              "The easiest site to update is one that doesn't need the same update in several places.",
            ],
            [
              "Maintainers are users too",
              "The next developer inherits every shortcut you take, so design for them as well.",
            ],
            [
              "Tedium is a signal",
              "When a task feels mindless, the structure is usually asking too much of the people doing it.",
            ],
          ].map(([title, text], i) => (
            <div key={title} className="g20-lesson">
              <span className="g20-serif g20-lesson-num">{i + 1}</span>
              <span className="g20-feature-title">{title}</span>
              <p className="g20-body">{text}</p>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default G20ProjectPage;
