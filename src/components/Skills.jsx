import { skillGroups } from '../data/content'
import SectionHeading from './SectionHeading'
import './Skills.css'

function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="Capabilities"
          title="Technical Skills"
          description="Technologies and tools I use to build web applications and explore AI-powered solutions."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <ul className="skill-badges">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
