import { education } from '../data/content'
import SectionHeading from './SectionHeading'
import './Education.css'

function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          id="education-title"
          eyebrow="Background"
          title="Education"
          description="My academic journey in Computer Science Engineering, and foundational studies."
        />
        <ul className="education-list">
          {education.map((item) => (
            <li className="education-item" key={item.id}>
              <h3>{item.institution}</h3>
              <div className="education-meta">
                <span>{item.credential}</span>
                <span>{item.dates}</span>
              </div>
              <p>{item.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education
