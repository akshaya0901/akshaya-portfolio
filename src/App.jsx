import "./App.css";
import profileImage from "./assets/profile.png";
import TargetTracking from "./pages/TargetTracking";
import SmartWaste from "./pages/SmartWaste";
import PlacementPrep from "./pages/PlacementPrep";
import BlogSphere from "./pages/BlogSphere";
import EmployeeLibrary from "./pages/EmployeeLibrary";


import embeddedInternship from "./assets/certificates/embedded-internship.jpeg";
import aiFundamentals from "./assets/certificates/ai-fundamentals.jpeg";
import embeddedCourse from "./assets/certificates/embedded-course.jpeg";

const projects = [
  {
    number: "01",
    title: "PlacementPrep AI",
    type: "Software / Featured",
    description:
      "A placement preparation platform bringing company discovery, resume management, notes and interview preparation into one focused workspace.",
    tags: ["React", "JavaScript", "Node.js", "MongoDB"],
    className: "project-featured",
    link: "/projects/placement-prep",
  },
  {
    number: "02",
    title: "BlogSphere",
    type: "Software",
    description:
      "A responsive blogging platform with search, category filtering and individual article views, designed around a clean reading experience.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    link: "/projects/blogsphere",
  },
  {
    number: "03",
    title: "Employee Library",
    type: "Software",
    description:
      "A library management dashboard for searching books, issuing and returning records, and viewing useful library statistics.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    link: "/projects/employee-library",
  },
  {
    number: "04",
    title: "Smart Waste Segregation",
    type: "Engineering",
    description:
      "An automated system that classifies dry, wet and metallic waste using sensors, a microcontroller and sorting mechanisms.",
    className: "project-engineering",
    link: "/projects/smart-waste",
  },
  {
    number: "05",
    title: "Automatic Target Detection & Tracking",
    type: "Engineering / Research",
    description:
      "A real-time target detection and tracking system developed around automated monitoring and situational awareness.",
    className: "project-engineering project-research",
    link: "/projects/target-tracking",
  },
];

const skills = [
  ["01", "Languages", "Python · C · JavaScript · SQL"],
  ["02", "Frontend", "HTML · CSS · React.js"],
  ["03", "Tools", "Git · GitHub · VS Code"],
  ["04", "Exploring", "Node.js · Express · MongoDB"],
];

const achievements = [
  ["01", "Research Publication", "Published an IJPREMS paper on Automatic Target Detection and Tracking System."],
  ["02", "SIH 2024", "Selected among the Top 20 teams at the college level during Smart India Hackathon 2024."],
  ["03", "NSS", "Contributed to student-led activities and initiatives through the college NSS unit."],
  ["04", "Technical Events", "Conducted and coordinated technical events as part of college activities."],
  ["05", "PR Team", "Worked with the college PR team on event communication and promotion."],
];

const certificates = [
  ["01", "Embedded Systems Internship Completion", "SmartED Innovations", "April 2026", embeddedInternship],
  ["02", "AI Fundamentals: Foundations for Understanding AI", "IBM SkillsBuild", "April 2026", aiFundamentals],
  ["03", "Embedded Systems Course Completion", "SmartED Innovations", "April 2026", embeddedCourse],
];

function Home() {
  return (
    <div className="site-shell">
      <div className="cursor-glow" aria-hidden="true" />

      <nav className="navbar">
        <a href="#home" className="brand">AKSHAYA<span>©</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-status" href="mailto:akshaya.dineshh@gmail.com">
          <i /> Available to connect
        </a>
      </nav>

      <main>
        <section id="home" className="hero reveal">
          <div className="hero-topline">
            <span>PORTFOLIO · 2026</span>
            <span>HYDERABAD, INDIA ↗</span>
          </div>

          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-kicker">ECE STUDENT · SOFTWARE BUILDER</p>
              <h1>
                AKSHAYA
                <em>DINESH.</em>
              </h1>
              <p className="hero-intro">
                Building digital experiences while crossing the bridge
                from electronics engineering into software.
              </p>
              <div className="hero-actions">
                <a href="#work" className="button button-dark">Explore work <span>↓</span></a>
                <a href="https://github.com/akshaya0901" target="_blank" rel="noreferrer" className="button button-line">
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="hero-portrait">
              <div className="portrait-frame">
                <img src={profileImage} alt="Akshaya Dinesh" />
                <div className="portrait-stamp">ECE<br />→<br />CODE</div>
              </div>
              <div className="portrait-caption">
                <span>01 / 05</span>
                <span>CURIOUS BY DEFAULT</span>
              </div>
            </div>
          </div>

          <div className="hero-marquee" aria-hidden="true">
            <div>
              BUILD · EXPLORE · ITERATE · BUILD · EXPLORE · ITERATE ·
            </div>
          </div>
        </section>

        <section id="about" className="about-section reveal section-wrap">
          <div className="section-index">01 / ABOUT</div>
          <div className="about-grid">
            <h2>I like making things <span>work</span>, then making them feel good.</h2>
            <div className="about-body">
              <p>
                I&apos;m Akshaya, a B.Tech Electronics & Communication Engineering
                student at Mahatma Gandhi Institute of Technology, graduating in 2027.
              </p>
              <p>
                My degree gave me an engineering mindset. Building software gave it
                somewhere exciting to go. I&apos;ve been exploring frontend development,
                problem-solving and full-stack foundations through projects.
              </p>
              <div className="about-facts">
                <span>ECE → Software</span>
                <span>Frontend Development</span>
                <span>Problem Solving</span>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="work-section reveal">
          <div className="section-wrap">
            <div className="section-index">02 / SELECTED WORK</div>
            <div className="work-heading">
              <h2>Things I&apos;ve <span>built.</span></h2>
              <p>Five projects. Two worlds. One growing toolkit.</p>
            </div>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-row ${project.className || ""}`} key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-info">
                  <div className="project-meta">
                    <span>{project.type}</span>
                    <span>2024 — 2026</span>
                  </div>
                  <div className="project-main">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <a href={project.link} className="project-arrow" aria-label={`View ${project.title} case study`}>↗</a>
                  </div>
                  {project.tags && (
                    <div className="project-tags">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills-section reveal section-wrap">
          <div className="section-index">03 / TOOLKIT</div>
          <div className="skills-heading">
            <h2>A toolkit that&apos;s <span>still growing.</span></h2>
            <p>I&apos;m less interested in collecting buzzwords and more interested in knowing what I can actually build with them.</p>
          </div>
          <div className="skills-list">
            {skills.map(([num, title, items]) => (
              <div className="skill-line" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{items}</p>
                <b>↗</b>
              </div>
            ))}
          </div>
        </section>

        <section id="journey" className="journey-section reveal">
          <div className="section-wrap">
            <div className="section-index">04 / JOURNEY</div>
            <div className="journey-grid">
              <div>
                <h2>From circuits<br />to <span>code.</span></h2>
                <p className="journey-note">A little timeline of how the pieces are coming together.</p>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <span>2021</span><div><h3>Schooling</h3><p>St. Ann&apos;s High School, Secunderabad</p></div>
                </div>
                <div className="timeline-item">
                  <span>2021 — 23</span><div><h3>Intermediate</h3><p>St. Ann&apos;s High School, Secunderabad</p></div>
                </div>
                <div className="timeline-item current">
                  <span>2023 — 27</span><div><h3>B.Tech ECE</h3><p>Mahatma Gandhi Institute of Technology · Hyderabad</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="milestones-section reveal section-wrap">
          <div className="section-index">05 / MILESTONES</div>
          <div className="milestones-heading">
            <h2>The work behind<br /><span>the work.</span></h2>
          </div>
          <div className="achievement-list">
            {achievements.map(([num, title, text]) => (
              <div className="achievement-line" key={num}>
                <span>{num}</span><h3>{title}</h3><p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cert-section reveal section-wrap">
          <div className="section-index">06 / LEARNING</div>
          <div className="cert-heading">
            <h2>Still <span>learning.</span></h2>
            <p>Certificates are snapshots. The interesting part is what gets built afterward.</p>
          </div>
          <div className="cert-list">
            {certificates.map(([num, title, issuer, date, image]) => (
              <a href={image} target="_blank" rel="noreferrer" className="cert-line" key={num}>
                <span>{num}</span>
                <div><h3>{title}</h3><p>{issuer} · {date}</p></div>
                <b>↗</b>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section reveal">
          <div className="contact-inner">
            <div className="section-index">07 / CONTACT</div>
            <p className="contact-kicker">HAVE AN IDEA?</p>
            <h2>LET&apos;S MAKE<br /><span>SOMETHING.</span></h2>
            <a href="mailto:akshaya.dineshh@gmail.com" className="contact-email">akshaya.dineshh@gmail.com ↗</a>
            <div className="contact-bottom">
              <div>
                <a href="https://github.com/akshaya0901" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/akshaya-dinesh-44549b388" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
              <span>© 2026 AKSHAYA DINESH</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  const path = window.location.pathname;
  if (path === "/projects/smart-waste") return <SmartWaste />;
  if (path === "/projects/target-tracking") return <TargetTracking />;
  if (path === "/projects/placement-prep") return <PlacementPrep />;
  if (path === "/projects/blogsphere") return <BlogSphere />;
  if (path === "/projects/employee-library") return <EmployeeLibrary />;
  return <Home />;
}
