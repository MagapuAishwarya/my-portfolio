import { profile } from '../data/content'
import SectionHeading from './SectionHeading'
import './About.css'

function About() {
  return (
    <section className="section section-alt" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          eyebrow="About"
          title="About Me"
          description="My background, technical interests, and goal of building useful AI-powered applications."
        />
        <div className="about-grid">
          <div className="about-copy">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="about-panel">
            <h3>At a glance</h3>
            <ul className="about-list">
              <li>Role: {profile.role}</li>
              <li>Location: {profile.location}</li>
              <li>Focus: AI Applications, React, Node.js, PostgreSQL</li>
              <li>Seeking entry-level Developer opportunities</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
