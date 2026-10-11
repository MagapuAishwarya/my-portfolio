import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";
import "./Resume.css";

function Resume() {
  return (
    <section
      className="section section-alt "
      id="resume"
      aria-labelledby="resume-title"
    >
      <div className="container">
        <SectionHeading
          id="resume-title"
          eyebrow="Curriculum Vitae"
          title="Resume"
          description="Download my resume to learn more about my education, technical skills, and projects."
        />
        <div className="resume-card">
          <div>
            <h3>Want the full picture?</h3>
            <p>
              Explore my educational background, technical skills, and projects
              in my resume.
            </p>
          </div>
          <a className="btn btn-primary" href={profile.resumeFile} download>
            {profile.resumeLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
