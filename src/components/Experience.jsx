import { experience } from '../data/site.js'

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experiencia Laboral</h2>
      <p className="section-subtitle">Mi trayectoria profesional hasta ahora</p>

      <div className="timeline">
        {experience.map((job) => (
          <div key={`${job.company}-${job.period}`} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-head">
                <h3>{job.role}</h3>
                <span className="timeline-company">{job.company}</span>
              </div>
              <span className="timeline-period">{job.period}</span>
              <p className="timeline-desc">{job.description}</p>
              <div className="project-tags">
                {job.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
