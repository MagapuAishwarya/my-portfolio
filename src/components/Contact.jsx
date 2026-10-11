import { profile } from '../data/content'
import SectionHeading from './SectionHeading'
import './Contact.css'

function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="Connect"
          title="Contact"
          description="Connect me for opportunities, collaborations, or technical discussions."
        />
        <div className="contact-grid">
          <a className="contact-card" href={`mailto:${profile.email}`}>
            <span>Email</span>
            <strong>{profile.email}</strong>
            <small>Send a message</small>
          </a>
          <a
            className="contact-card"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <strong>
             {profile.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</strong>
            <small>Open profile</small>
          </a>
          <a
            className="contact-card"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <strong>
             {profile.github.replace(/^https?:\/\/(www\.)?/, '')}</strong>
            <small>View repositories</small>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
