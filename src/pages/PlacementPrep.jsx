import "./PlacementPrep.css";

import placementPrepVideo from "../assets/projects/placementprep-demo.mp4";

function PlacementPrep() {
  return (
    <div className="placement-page">

      {/* BACK */}
      <a href="/#projects" className="placement-back">
        ← Back to Projects
      </a>


      {/* HERO */}
      <section className="placement-hero">

        <div className="placement-label">
          SOFTWARE PROJECT · 01
        </div>

        <h1>
          PlacementPrep
          <br />
          AI
        </h1>

        <p className="placement-intro">
          An AI-powered placement preparation platform designed to
          help students prepare for technical interviews, coding
          assessments and placement opportunities.
        </p>

        <div className="placement-tags">
          <span>Python</span>
          <span>FastAPI</span>
          <span>React</span>
          <span>AI</span>
        </div>

      </section>


      {/* PROJECT DEMO */}
      <section className="placement-demo">

        <div className="placement-section-label">
          01 · PROJECT DEMONSTRATION
        </div>

        <h2>Application in Action</h2>

        <div className="placement-video">
          <video
            src={placementPrepVideo}
            controls
            playsInline
          />
        </div>

      </section>


      {/* OVERVIEW */}
      <section className="placement-section">

        <div className="placement-section-label">
          02 · OVERVIEW
        </div>

        <h2>About the Project</h2>

        <p>
          PlacementPrep AI is a software application created to
          support students during their placement preparation.
          The platform brings together preparation resources and
          tools within a single application to make the placement
          process more structured and accessible.
        </p>

      </section>


      {/* FEATURES */}
      <section className="placement-section">

        <div className="placement-section-label">
          03 · FEATURES
        </div>

        <h2>What It Offers</h2>

        <div className="placement-features">

          <div className="placement-feature">
            <span>01</span>
            <div>
              <h3>Placement Preparation</h3>
              <p>
                Resources and tools designed to support students
                throughout their placement preparation.
              </p>
            </div>
          </div>

          <div className="placement-feature">
            <span>02</span>
            <div>
              <h3>Technical Preparation</h3>
              <p>
                A structured environment for preparing for
                technical assessments and interviews.
              </p>
            </div>
          </div>

          <div className="placement-feature">
            <span>03</span>
            <div>
              <h3>AI-Powered Assistance</h3>
              <p>
                AI-based functionality designed to make preparation
                more interactive and personalized.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* TECHNOLOGIES */}
      <section className="placement-section placement-technologies">

        <div className="placement-section-label">
          04 · TECHNOLOGY
        </div>

        <h2>Technologies</h2>

        <div className="placement-tech-list">
          <span>Python</span>
          <span>FastAPI</span>
          <span>React</span>
          <span>AI</span>
        </div>

      </section>


      {/* FOOTER */}
      <div className="placement-footer">
        <a href="/#projects">
          ← Back to Projects
        </a>
      </div>

    </div>
  );
}

export default PlacementPrep;