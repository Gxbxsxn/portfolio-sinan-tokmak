import { profile } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="hero-hey">Hola,</p>
        <h1>
          Soy <span className="accent">{profile.name}</span>
        </h1>
        <h2 className="hero-role">{profile.role}</h2>
        <p className="hero-desc">{profile.bio}</p>

        <div className="hero-buttons">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Contrátame
          </a>
          <a href={profile.cvUrl} download className="btn btn-ghost">
            Mi CV
          </a>
        </div>
      </div>

      <div className="hero-photo-wrap">
        <div className="hero-blob" aria-hidden="true" />
        <img src={profile.photo} alt={profile.fullName} className="hero-photo" />
      </div>
    </section>
  )
}
