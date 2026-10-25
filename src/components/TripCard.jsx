import { Link } from 'react-router-dom'
import SmartImage from './SmartImage.jsx'
import { useSaved } from '../hooks/useSaved.jsx'
import { fmt } from '../data/trips.js'

export default function TripCard({ trip }) {
  const { isSaved, toggle } = useSaved()
  const on = isSaved(trip.slug)
  return (
    <article className="card">
      <div className="card-img">
        <Link to={`/trips/${trip.slug}`} tabIndex={-1} aria-hidden="true"><SmartImage src={trip.img} alt="" /></Link>
        <button className={'heart' + (on ? ' on' : '')} aria-pressed={on} aria-label={`${on ? 'Remove' : 'Save'} ${trip.title} ${on ? 'from' : 'to'} saved trips`} onClick={() => toggle(trip.slug)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={on ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-7-4.6-9.3-9A5.4 5.4 0 0112 6a5.4 5.4 0 019.3 6c-2.300 4.400-9.300 9-9.300 9z" /></svg>
        </button>
      </div>
      <div className="card-body">
        <p className="meta">{trip.place} · {trip.region}</p>
        <h3><Link to={`/trips/${trip.slug}`}>{trip.title}</Link></h3>
        <p className="muted">{trip.summary}</p>
        <div className="card-foot">
          <span><strong>{fmt(trip.price)}</strong> <small>/ person</small></span>
          <span className="muted">{trip.days} days · ★ {trip.rating}</span>
        </div>
      </div>
    </article>
  )
}
