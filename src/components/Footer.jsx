import { profile } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        {profile.fullName} — © {new Date().getFullYear()}. Hecho con React.
      </p>
    </footer>
  )
}
