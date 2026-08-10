import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/site.js'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Proyectos</h2>
      <p className="section-subtitle">Repositorios públicos de mi GitHub</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-thumb" aria-hidden="true">
              &lt;/&gt;
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                <FaGithub /> Ver en GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
