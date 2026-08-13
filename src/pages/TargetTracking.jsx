import "./TargetTracking.css";

import targetTrackingVideo1 from "../assets/projects/target-tracking-1.mp4";
import targetTrackingVideo2 from "../assets/projects/target-tracking-2.mp4";

function TargetTracking() {
  return (
    <div className="target-page">

      {/* BACK */}
      <a href="/#projects" className="target-back">
        ← Back to Projects
      </a>

      {/* HERO */}
      <section className="target-hero">
        <div className="target-label">
          ENGINEERING PROJECT · 05
        </div>

        <h1>
          Automatic Target
          <br />
          Detection & Tracking System
        </h1>

        <p className="target-intro">
          An automated surveillance system designed to detect,
          locate and track moving targets in real time for improved
          monitoring and situational awareness.
        </p>

        <div className="target-tags">
          <span>Embedded Systems</span>
          <span>Target Detection</span>
          <span>Tracking</span>
        </div>
      </section>


      {/* PROJECT DEMONSTRATION */}
      <section className="target-output">

        <div className="target-section-label">
          01 · PROJECT DEMONSTRATION
        </div>

        <h2>System in Action</h2>

        <div className="target-video">
          <video
            src={targetTrackingVideo1}
            controls
            playsInline
          />
        </div>

        <div className="target-video">
          <video
            src={targetTrackingVideo2}
            controls
            playsInline
          />
        </div>

      </section>


      {/* OVERVIEW */}
      <section className="target-section">

        <div className="target-section-label">
          02 · OVERVIEW
        </div>

        <h2>About the Project</h2>

        <p>
          The Automatic Target Detection and Tracking System is an
          embedded surveillance system developed to detect and track
          moving targets. The system combines sensing, target
          detection and tracking mechanisms to monitor the position
          of a target in real time.
        </p>

      </section>


      {/* WORKING */}
      <section className="target-section">

        <div className="target-section-label">
          03 · WORKING
        </div>

        <h2>How It Works</h2>

        <div className="target-steps">

          <div className="target-step">
            <span>01</span>
            <p>
              The system continuously monitors the surrounding area
              for a target.
            </p>
          </div>

          <div className="target-step">
            <span>02</span>
            <p>
              The target is detected and its position is identified.
            </p>
          </div>

          <div className="target-step">
            <span>03</span>
            <p>
              The system determines the target's relative position
              and movement.
            </p>
          </div>

          <div className="target-step">
            <span>04</span>
            <p>
              The tracking mechanism follows the target in real time.
            </p>
          </div>

        </div>

      </section>


      {/* OUTPUT */}
      <section className="target-section">

        <div className="target-section-label">
          04 · PROJECT OUTPUT
        </div>

        <h2>Target Tracking Interface</h2>

        <p>
          The system provides real-time target information through
          the tracking interface, allowing the detected target to be
          monitored based on its position and movement.
        </p>

      </section>


      {/* TECHNOLOGIES */}
      <section className="target-section target-technologies">

        <div className="target-section-label">
          05 · TECHNOLOGY
        </div>

        <h2>Technologies</h2>

        <div className="target-tech-list">
          <span>Embedded Systems</span>
          <span>Target Detection</span>
          <span>Tracking</span>
        </div>

      </section>


      {/* FOOTER */}
      <div className="target-footer">
        <a href="/#projects">
          ← Back to Projects
        </a>
      </div>

    </div>
  );
}

export default TargetTracking;