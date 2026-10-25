import { Link } from 'react-router-dom'
import { regions } from '../data/trips.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div>
          <Link to="/" className="logo light">Wander<span>ly</span></Link>
          <p>Small-group journeys designed by people who have walked every trail we recommend.</p>
        </div>
        <nav aria-label="Footer">
          <h3>Company</h3>
          <Link to="/about">Our story</Link>
          <Link to="/about#contact">Contact us</Link>
          <Link to="/saved">Saved trips</Link>
        </nav>
        <nav aria-label="Regions">
          <h3>Explore by region</h3>
          {regions.map((r) => <Link key={r} to={`/explore?region=${r}`}>{r}</Link>)}
        </nav>
      </div>
      <div className="container foot-bottom">© {new Date().getFullYear()} Wanderly. Demo project — no real bookings are made.</div>
    </footer>
  )
}
