import "./EmployeeLibrary.css";

import employeeLibraryVideo from "../assets/projects/employee-library-demo.mp4";

function EmployeeLibrary() {
  return (
    <div className="employee-page">

      {/* BACK */}
      <a href="/#projects" className="employee-back">
        ← Back to Projects
      </a>


      {/* HERO */}
      <section className="employee-hero">

        <div className="employee-label">
          SOFTWARE PROJECT · 03
        </div>

        <h1>
          Employee
          <br />
          Library
        </h1>

        <p className="employee-intro">
          A web-based employee management application designed to
          organize employee information through a clean and
          responsive interface.
        </p>

        <div className="employee-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>

      </section>


      {/* PROJECT DEMO */}
      <section className="employee-demo">

        <div className="employee-section-label">
          01 · PROJECT DEMONSTRATION
        </div>

        <h2>Application in Action</h2>

        <div className="employee-video">
          <video
            src={employeeLibraryVideo}
            controls
            playsInline
          />
        </div>

      </section>


      {/* OVERVIEW */}
      <section className="employee-section">

        <div className="employee-section-label">
          02 · OVERVIEW
        </div>

        <h2>About the Project</h2>

        <p>
          Employee Library is a frontend application created to
          organize and present employee information in a structured
          interface. The project focuses on building a clear,
          responsive and easy-to-navigate user experience.
        </p>

      </section>


      {/* FEATURES */}
      <section className="employee-section">

        <div className="employee-section-label">
          03 · FEATURES
        </div>

        <h2>Key Features</h2>

        <div className="employee-features">

          <div className="employee-feature">
            <span>01</span>

            <div>
              <h3>Employee Information</h3>

              <p>
                A structured interface for displaying employee
                information in an organized manner.
              </p>
            </div>
          </div>


          <div className="employee-feature">
            <span>02</span>

            <div>
              <h3>Clean Interface</h3>

              <p>
                A simple and intuitive interface designed to make
                employee information easy to view and navigate.
              </p>
            </div>
          </div>


          <div className="employee-feature">
            <span>03</span>

            <div>
              <h3>Responsive Design</h3>

              <p>
                A responsive layout designed to work across
                different screen sizes.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* TECHNOLOGIES */}
      <section className="employee-section employee-technologies">

        <div className="employee-section-label">
          04 · TECHNOLOGY
        </div>

        <h2>Technologies</h2>

        <div className="employee-tech-list">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>

      </section>


      {/* FOOTER */}
      <div className="employee-footer">
        <a href="/#projects">
          ← Back to Projects
        </a>
      </div>

    </div>
  );
}

export default EmployeeLibrary;