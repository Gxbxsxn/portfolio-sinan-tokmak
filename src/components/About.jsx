import { FaCode, FaMobileAlt, FaDatabase } from 'react-icons/fa'
import { profile, services, skills } from '../data/site.js'

const icons = [FaCode, FaMobileAlt, FaDatabase]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-services">
          {services.map((service, i) => {
            const Icon = icons[i]
            return (
              <div key={service.title} className="service-item">
                <div className="service-icon">
                  <Icon />
                </div>
                <div>
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="about-copy">
          <h2 className="section-title">Sobre mí</h2>
          <p className="about-text">{profile.bio}</p>

          <div className="skill-tags">
            {skills.map((s) => (
              <span key={s} className="skill-tag">
                {s}
              </span>
            ))}
          </div>

          <div className="stats-row">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
