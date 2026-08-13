import "./SmartWaste.css";
import smartDustbinVideo from "../assets/projects/smartdustbin_op.mp4";

function SmartWaste() {
  return (
    <div className="project-page">

      {/* BACK */}
      <a href="/#projects" className="project-back">
        ← Back to Projects
      </a>

      {/* HERO */}
      <section className="project-hero">
        <div className="project-label">
          ENGINEERING PROJECT · 04
        </div>

        <h1>
          Smart Waste
          <br />
          Segregation System
        </h1>

        <p className="project-intro">
          An automated waste segregation system designed to identify
          and separate dry, wet and metallic waste.
        </p>

        <div className="project-tags">
          <span>Arduino</span>
          <span>Embedded C</span>
          <span>Sensors</span>
          <span>Automation</span>
        </div>
      </section>


      {/* PROJECT VIDEO */}
      <section className="project-main-video">
        <video
          src={smartDustbinVideo}
          controls
          playsInline
        />
      </section>


      {/* OVERVIEW */}
      <section className="project-section">
        <div className="project-section-label">
          01 · OVERVIEW
        </div>

        <h2>About the Project</h2>

        <p>
          The Smart Waste Segregation System is an automated system
          designed to classify waste into dry, wet and metallic
          categories. The system uses sensors and a microcontroller
          based mechanism to identify the type of waste and direct it
          towards the appropriate collection section.
        </p>
      </section>


      {/* WORKING */}
      <section className="project-section">
        <div className="project-section-label">
          02 · WORKING
        </div>

        <h2>How It Works</h2>

        <div className="working-steps">

          <div className="working-step">
            <span>01</span>
            <p>
              Waste is introduced into the system.
            </p>
          </div>

          <div className="working-step">
            <span>02</span>
            <p>
              Sensors detect the characteristics of the waste.
            </p>
          </div>

          <div className="working-step">
            <span>03</span>
            <p>
              The system identifies the appropriate category.
            </p>
          </div>

          <div className="working-step">
            <span>04</span>
            <p>
              The waste is directed to its corresponding section.
            </p>
          </div>

        </div>
      </section>


      {/* TECHNOLOGIES */}
      <section className="project-section project-technologies">
        <div className="project-section-label">
          03 · TECHNOLOGY
        </div>

        <h2>Technologies</h2>

        <div className="project-tech-list">
          <span>Arduino</span>
          <span>Embedded C</span>
          <span>Sensors</span>
          <span>Automation</span>
        </div>
      </section>


      {/* FOOTER */}
      <div className="project-footer">
        <a href="/#projects">
          ← Back to Projects
        </a>
      </div>

    </div>
  );
}

export default SmartWaste;