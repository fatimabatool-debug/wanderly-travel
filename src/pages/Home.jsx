import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SmartImage from '../components/SmartImage.jsx'
import TripCard from '../components/TripCard.jsx'
import { trips, fmt } from '../data/trips.js'

const benefits = [
  ['🧭', 'Expert local guides', 'Every trip is led by a guide who lives in the region and knows its quiet corners.'],
  ['🌿', 'Responsible by design', 'Small groups, locally owned stays and a fixed share of profit to conservation partners.'],
  ['🛏️', 'Handpicked stays', 'Boutique hotels and riads chosen for character, comfort and location.'],
  ['💬', 'Real human support', 'Reach a travel specialist by phone or chat before, during and after your trip.'],
]
const reviews = [
  ['Our Kyoto tea ceremony was the highlight of the year. Everything was thoughtfully arranged without feeling scripted.', 'Priya N.', 'Toronto'],
  ['Small group, brilliant guide, and the Cinque Terre hikes were the right difficulty. We are already planning another trip.', 'Daniel & Hannah R.', 'Manchester'],
  ['Iceland in winter felt daunting, but the team handled the logistics so we could just enjoy the aurora.', 'Marcus L.', 'Chicago'],
]

export default function Home() {
  const [q, setQ] = useState('')
  const nav = useNavigate()
  const go = (e) => { e.preventDefault(); nav(q.trim() ? `/explore?q=${encodeURIComponent(q.trim())}` : '/explore') }
  const featured = [...trips].sort((a, b) => b.rating - a.rating).slice(0, 3)
  const popular = [trips[0], trips[4], trips[3], trips[9]]
  return (
    <>
      <section className="hero">
        <SmartImage className="hero-img" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=70" alt="A traveller looking over a mountain lake at sunrise" loading="eager" fetchpriority="high" />
        <div className="container hero-in">
          <p className="eyebrow">Small-group journeys · 12 handpicked trips</p>
          <h1>Travel slowly. Remember everything.</h1>
          <p className="lead">Thoughtfully planned trips to places that stay with you, led by local experts and limited to 12 travellers.</p>
          <form className="search" onSubmit={go} role="search">
            <label className="sr" htmlFor="hs">Search destinations</label>
            <input id="hs" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Try “Japan”, “beach” or “hiking”" />
            <button className="btn" type="submit">Search trips</button>
          </form>
        </div>
      </section>

      <section className="container section">
        <div className="sec-head"><div><p className="eyebrow dark">Popular destinations</p><h2>Where travellers are heading</h2></div><Link className="link" to="/explore">View all trips →</Link></div>
        <div className="tiles">
          {popular.map((t) => (
            <Link key={t.slug} className="tile" to={`/trips/${t.slug}`}>
              <SmartImage src={t.img} alt={`${t.place} landscape`} />
              <span><strong>{t.place.split(',')[0]}</strong><small>from {fmt(t.price)}</small></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="sec-head"><div><p className="eyebrow dark">Featured trips</p><h2>Our highest-rated journeys</h2></div><Link className="link" to="/explore?sort=rating">See more →</Link></div>
        <div className="grid">{featured.map((t) => <TripCard key={t.slug} trip={t} />)}</div>
      </section>

      <section className="band">
        <div className="container section">
          <h2 className="center">Why travel with Wanderly</h2>
          <div className="grid four">
            {benefits.map(([i, h, p]) => <div className="benefit" key={h}><span aria-hidden="true">{i}</span><h3>{h}</h3><p>{p}</p></div>)}
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className="center">Stories from our travellers</h2>
        <div className="grid">
          {reviews.map(([t, n, c]) => <figure className="quote" key={n}><blockquote>“{t}”</blockquote><figcaption><strong>{n}</strong> · {c}</figcaption></figure>)}
        </div>
        <p className="center"><Link className="btn" to="/explore">Find your next trip</Link></p>
      </section>
    </>
  )
}
