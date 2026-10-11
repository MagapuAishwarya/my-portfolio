import { projects } from '../data/content'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'
import './Projects.css'

function Projects() {
  return (
    <section className="section section-alt" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Work"
          title="Featured Projects"
          description="Explore my projects, the technologies I use, and the practical problems I aim to solve."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
