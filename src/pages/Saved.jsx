import { Link } from 'react-router-dom'
import TripCard from '../components/TripCard.jsx'
import { useSaved } from '../hooks/useSaved.jsx'
import { trips } from '../data/trips.js'

export default function Saved() {
  const { saved, toggle } = useSaved()
  const list = trips.filter((t) => saved.includes(t.slug))
  return (
    <div className="container section">
      <p className="eyebrow dark">Saved trips</p>
      <h1>Your shortlist</h1>
      {list.length ? (
        <>
          <p className="muted">{list.length} saved on this device.</p>
          <div className="grid">{list.map((t) => <TripCard key={t.slug} trip={t} />)}</div>
          <p className="center"><button className="btn btn-ghost" onClick={() => list.forEach((t) => toggle(t.slug))}>Remove all saved trips</button></p>
        </>
      ) : (
        <div className="empty"><h2>Nothing saved yet</h2><p>Tap the heart on any trip to keep it here. Your list stays on this device.</p><Link className="btn" to="/explore">Explore trips</Link></div>
      )}
    </div>
  )
}
