import { useState } from 'react'
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa'
import { profile } from '../data/site.js'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a href="#home" className="logo" aria-label="Inicio">
        {profile.logo ? (
          <img src={profile.logo} alt={profile.name} className="logo-mark" />
        ) : (
          <>
            {profile.fullName.split(' ')[0]} <span className="accent">{profile.fullName.split(' ')[1]}</span>
          </>
        )}
      </a>

      <nav className={`main-nav ${open ? 'is-open' : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="header-github">
          <FaGithub />
        </a>
        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}
