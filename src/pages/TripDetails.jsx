import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SmartImage from '../components/SmartImage.jsx'
import BookingModal from '../components/BookingModal.jsx'
import { useSaved } from '../hooks/useSaved.jsx'
import { getTrip, baseAmenities, fmt } from '../data/trips.js'

export default function TripDetails() {
  const { slug } = useParams()
  const trip = getTrip(slug)
  const [open, setOpen] = useState(false)
  const { isSaved, toggle } = useSaved()
  if (!trip) return <section className="container empty"><h1>Trip not found</h1><p>We couldn’t find that trip. It may have been moved.</p><Link className="btn" to="/explore">Browse all trips</Link></section>
  const on = isSaved(trip.slug)
  const days = ['Day 1', `Days 2–${Math.max(2, trip.days - 1)}`, `Day ${trip.days}`]
  return (
    <>
      <div className="detail-hero"><SmartImage src={trip.img} alt={`${trip.title} – ${trip.place}`} loading="eager" /></div>
      <div className="container detail">
        <div>
          <nav className="crumbs" aria-label="Breadcrumb"><Link to="/explore">Explore</Link> / <Link to={`/explore?region=${trip.region}`}>{trip.region}</Link></nav>
          <h1>{trip.title}</h1>
          <p className="meta">{trip.place} · {trip.days} days · ★ {trip.rating}</p>
          <p className="lead-dark">{trip.summary}</p>
          <h2>Itinerary</h2>
          <ol className="timeline">
            {trip.itinerary.map((s, i) => <li key={i}><strong>{days[i]}</strong><p>{s}</p></li>)}
          </ol>
          <h2>What’s included</h2>
          <ul className="checks">{[...baseAmenities, trip.extra].map((a) => <li key={a}>{a}</li>)}</ul>
        </div>
        <aside className="book-box" aria-label="Booking">
          <p className="muted">From</p>
          <p className="price">{fmt(trip.price)} <small>per person</small></p>
          <p className="muted">{trip.days} days · groups of up to 12</p>
          <button className="btn full" onClick={() => setOpen(true)}>Book this trip</button>
          <button className="btn btn-ghost full" aria-pressed={on} onClick={() => toggle(trip.slug)}>{on ? '♥ Saved – remove' : '♡ Save for later'}</button>
          <p className="fine">Demo site: booking does not reserve anything or take payment.</p>
        </aside>
      </div>
      {open && <BookingModal trip={trip} onClose={() => setOpen(false)} />}
    </>
  )
}
