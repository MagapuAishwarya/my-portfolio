import { profile } from '../data/content'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-content">
        <p className="hero-kicker">AI & Application Devolpment</p>
        <h1 id="hero-heading">
          Hi, I am <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-secondary" href="#contact">
            Contact Me
          </a>
        </div>
        <p className="hero-meta">{profile.location}</p>
      </div>
    </section>
  )
}

export default Hero
