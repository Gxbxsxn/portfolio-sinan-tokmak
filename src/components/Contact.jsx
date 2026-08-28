import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaPhone } from 'react-icons/fa'
import { profile } from '../data/site.js'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contacto</h2>
      <p className="section-subtitle">¿Tienes un proyecto en mente? Hablemos.</p>

      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${profile.email}`}>
          <FaEnvelope />
          <span>{profile.email}</span>
        </a>
        <a className="contact-card" href={`tel:${profile.phone.replace(/\D/g, '')}`}>
          <FaPhone />
          <span>{profile.phone}</span>
        </a>
        <div className="contact-card">
          <FaMapMarkerAlt />
          <span>{profile.address}</span>
        </div>
        <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
          <FaGithub />
          <span>{profile.github.replace('https://', '')}</span>
        </a>
      </div>

      <a href={`mailto:${profile.email}`} className="btn btn-primary contact-cta">
        Enviar un mensaje
      </a>
    </section>
  )
}
