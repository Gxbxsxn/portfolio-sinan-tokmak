import { profile } from '../data/site.js'

export default function Hero() {
  const handleDownload = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(profile.cvUrl)
      if (!res.ok) throw new Error('Network response was not ok')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'cv-jonathan-siney.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error(err)
      alert('No se pudo descargar el CV. Prueba abrir el enlace y guardar el archivo manualmente.')
    }
  }
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
          <a href={profile.cvUrl} onClick={handleDownload} className="btn btn-ghost">
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
