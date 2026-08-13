import "./BlogSphere.css";

import blogSphereVideo from "../assets/projects/blogsphere-demo.mp4";

function BlogSphere() {
  return (
    <div className="blogsphere-page">

      {/* BACK */}
      <a href="/#projects" className="blogsphere-back">
        ← Back to Projects
      </a>


      {/* HERO */}
      <section className="blogsphere-hero">

        <div className="blogsphere-label">
          SOFTWARE PROJECT · 02
        </div>

        <h1>
          BlogSphere
        </h1>

        <p className="blogsphere-intro">
          A responsive blogging platform designed to provide users
          with a simple and engaging space to create, explore and
          interact with blog content.
        </p>

        <div className="blogsphere-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>

      </section>


      {/* PROJECT DEMO */}
      <section className="blogsphere-demo">

        <div className="blogsphere-section-label">
          01 · PROJECT DEMONSTRATION
        </div>

        <h2>Application in Action</h2>

        <div className="blogsphere-video">
          <video
            src={blogSphereVideo}
            controls
            playsInline
          />
        </div>

      </section>


      {/* OVERVIEW */}
      <section className="blogsphere-section">

        <div className="blogsphere-section-label">
          02 · OVERVIEW
        </div>

        <h2>About the Project</h2>

        <p>
          BlogSphere is a web-based blogging application developed
          with a focus on creating a clean and responsive user
          experience. The project demonstrates the implementation
          of a modern frontend interface for browsing and working
          with blog content.
        </p>

      </section>


      {/* FEATURES */}
      <section className="blogsphere-section">

        <div className="blogsphere-section-label">
          03 · FEATURES
        </div>

        <h2>Key Features</h2>

        <div className="blogsphere-features">

          <div className="blogsphere-feature">
            <span>01</span>

            <div>
              <h3>Responsive Interface</h3>

              <p>
                A responsive frontend designed to provide a
                consistent experience across different screen sizes.
              </p>
            </div>
          </div>


          <div className="blogsphere-feature">
            <span>02</span>

            <div>
              <h3>Blog Content</h3>

              <p>
                A structured interface for presenting and exploring
                blog posts and their content.
              </p>
            </div>
          </div>


          <div className="blogsphere-feature">
            <span>03</span>

            <div>
              <h3>User Experience</h3>

              <p>
                Clean navigation and visual organization designed
                to make the platform easy to explore.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* TECHNOLOGIES */}
      <section className="blogsphere-section blogsphere-technologies">

        <div className="blogsphere-section-label">
          04 · TECHNOLOGY
        </div>

        <h2>Technologies</h2>

        <div className="blogsphere-tech-list">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>

      </section>


      {/* FOOTER */}
      <div className="blogsphere-footer">
        <a href="/#projects">
          ← Back to Projects
        </a>
      </div>

    </div>
  );
}

export default BlogSphere;