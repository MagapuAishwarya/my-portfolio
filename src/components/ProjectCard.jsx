import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tech-badges" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        ) : null}
        {project.demo ? (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live demo
          </a>
        ) : null}
      </div>
    </article>
  )
}

export default ProjectCard
