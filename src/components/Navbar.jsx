import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (sections.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0.15, 0.35, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))

    function highlightFooterSection() {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80
      if (nearBottom) {
        setActiveId('contact')
      }
    }

    window.addEventListener('scroll', highlightFooterSection, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', highlightFooterSection)
    }
  }, [])

  function handleNavClick() {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a className="logo" href="#top" onClick={handleNavClick}>
          {profile.name}
        </a>

        <nav id="site-navigation" aria-label="Primary">
          <ul className={menuOpen ? 'nav-list is-open' : 'nav-list'}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className={activeId === link.id ? 'nav-link is-active' : 'nav-link'}
                  href={`#${link.id}`}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="nav-toggle-bars" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
