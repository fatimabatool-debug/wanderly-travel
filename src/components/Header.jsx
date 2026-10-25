import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useSaved } from '../hooks/useSaved.jsx'

const links = [['/', 'Home'], ['/explore', 'Explore'], ['/saved', 'Saved'], ['/about', 'About & Contact']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { saved } = useSaved()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [])
  return (
    <header className="header">
      <div className="container header-in">
        <Link to="/" className="logo" aria-label="Wanderly home">Wander<span>ly</span></Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          <span className="sr">{open ? 'Close menu' : 'Open menu'}</span>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <nav id="nav" className={'nav' + (open ? ' open' : '')} aria-label="Main">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>{label}{to === '/saved' && saved.length > 0 && <b className="badge">{saved.length}</b>}</NavLink>
          ))}
          <Link className="btn btn-sm" to="/explore">Plan a trip</Link>
        </nav>
      </div>
    </header>
  )
}
