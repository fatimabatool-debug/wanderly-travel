import { useState } from 'react'
import { Link } from 'react-router-dom'
import SmartImage from '../components/SmartImage.jsx'

export default function About() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [er, setEr] = useState({})
  const [ok, setOk] = useState(false)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const n = {}
    if (v.name.trim().length < 2) n.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) n.email = 'Please enter a valid email address.'
    if (v.message.trim().length < 10) n.message = 'Please write at least 10 characters.'
    setEr(n)
    if (!Object.keys(n).length) { setOk(true); setV({ name: '', email: '', message: '' }) }
  }
  const f = (id, label, el = 'input', extra = {}) => {
    const C = el
    return (
      <div className="field">
        <label htmlFor={'c-' + id}>{label}</label>
        <C id={'c-' + id} value={v[id]} onChange={set(id)} aria-invalid={!!er[id]} aria-describedby={er[id] ? `c-${id}-e` : undefined} {...extra} />
        {er[id] && <p className="err" id={`c-${id}-e`} role="alert">{er[id]}</p>}
      </div>
    )
  }
  return (
    <>
      <section className="container section about">
        <div>
          <p className="eyebrow dark">Our story</p>
          <h1>Travel that feels like a good conversation</h1>
          <p>Wanderly began in 2014 when two friends, a former mountain guide and a hotel manager, grew tired of rushed itineraries and crowded tour buses. They set out to design trips with fewer stops, better stays and plenty of room for the unexpected.</p>
          <p>Today we run a small collection of journeys across five regions. Every itinerary is tested by our team, led by local guides, and capped at twelve travellers so each place can be experienced properly.</p>
          <p><Link className="link" to="/explore">Browse our trips →</Link></p>
        </div>
        <SmartImage className="round" src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=70" alt="Travellers walking along a coastal path" />
      </section>
      <section className="band" id="contact">
        <div className="container section narrow">
          <h2>Get in touch</h2>
          <p className="muted">Questions about a trip? Send us a note. This is a demo form, so your message is not sent anywhere.</p>
          {ok && <p className="notice" role="status"><strong>Demo only:</strong> your message passed validation, but no email was sent and nothing was stored.</p>}
          <form onSubmit={submit} noValidate>
            {f('name', 'Your name', 'input', { autoComplete: 'name' })}
            {f('email', 'Email address', 'input', { type: 'email', autoComplete: 'email' })}
            {f('message', 'Message', 'textarea', { rows: 5 })}
            <button className="btn" type="submit">Send message (demo)</button>
          </form>
        </div>
      </section>
    </>
  )
}
