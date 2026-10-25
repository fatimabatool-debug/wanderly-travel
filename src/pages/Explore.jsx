import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import TripCard from '../components/TripCard.jsx'
import { trips, regions } from '../data/trips.js'

const ranges = { all: [0, Infinity], u2: [0, 2000], m: [2000, 3000], o3: [3000, Infinity] }
const sorters = {
  rating: (a, b) => b.rating - a.rating,
  low: (a, b) => a.price - b.price,
  high: (a, b) => b.price - a.price,
  days: (a, b) => a.days - b.days,
}

export default function Explore() {
  const [p, setP] = useSearchParams()
  const q = p.get('q') || '', region = p.get('region') || 'All', price = p.get('price') || 'all', sort = p.get('sort') || 'rating'
  const set = (k, v, def) => { const n = new URLSearchParams(p); v && v !== def ? n.set(k, v) : n.delete(k); setP(n, { replace: true }) }

  const list = useMemo(() => {
    const [lo, hi] = ranges[price] || ranges.all
    const s = q.trim().toLowerCase()
    return trips
      .filter((t) => (region === 'All' || t.region === region) && t.price >= lo && t.price < hi &&
        (!s || `${t.title} ${t.place} ${t.region} ${t.summary}`.toLowerCase().includes(s)))
      .sort(sorters[sort] || sorters.rating)
  }, [q, region, price, sort])

  const dirty = q || region !== 'All' || price !== 'all' || sort !== 'rating'
  return (
    <div className="container section">
      <p className="eyebrow dark">Explore</p>
      <h1>Find your next journey</h1>
      <form className="filters" role="search" onSubmit={(e) => e.preventDefault()}>
        <div className="field grow"><label htmlFor="q">Search</label><input id="q" type="search" value={q} onChange={(e) => set('q', e.target.value)} placeholder="Destination, country or keyword" /></div>
        <div className="field"><label htmlFor="r">Region</label>
          <select id="r" value={region} onChange={(e) => set('region', e.target.value, 'All')}><option>All</option>{regions.map((r) => <option key={r}>{r}</option>)}</select></div>
        <div className="field"><label htmlFor="pr">Price</label>
          <select id="pr" value={price} onChange={(e) => set('price', e.target.value, 'all')}>
            <option value="all">Any price</option><option value="u2">Under $2,000</option><option value="m">$2,000 – $2,999</option><option value="o3">$3,000 and up</option></select></div>
        <div className="field"><label htmlFor="so">Sort by</label>
          <select id="so" value={sort} onChange={(e) => set('sort', e.target.value, 'rating')}>
            <option value="rating">Top rated</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="days">Shortest trips</option></select></div>
      </form>
      <p className="muted" role="status" aria-live="polite">{list.length} {list.length === 1 ? 'trip' : 'trips'} found</p>
      {list.length ? (
        <div className="grid">{list.map((t) => <TripCard key={t.slug} trip={t} />)}</div>
      ) : (
        <div className="empty"><h2>No trips match your search</h2><p>Try a different keyword, widen the price range, or choose another region.</p>
          <button className="btn" onClick={() => setP({}, { replace: true })}>Clear all filters</button></div>
      )}
      {dirty && list.length > 0 && <p className="center"><button className="btn btn-ghost" onClick={() => setP({}, { replace: true })}>Reset filters</button></p>}
    </div>
  )
}
