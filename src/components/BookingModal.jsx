import { useEffect, useRef, useState } from 'react'
import { fmt } from '../data/trips.js'

const today = () => new Date().toISOString().slice(0, 10)

export default function BookingModal({ trip, onClose }) {
  const [v, setV] = useState({ name: '', email: '', date: '', guests: '2' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const prev = document.activeElement
    ref.current?.querySelector('input,button')?.focus()
    document.body.style.overflow = 'hidden'
    const k = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const f = [...ref.current.querySelectorAll('input,button,select')].filter((x) => !x.disabled)
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', k)
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = ''; prev?.focus?.() }
  }, [onClose])

  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (v.name.trim().length < 2) er.name = 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) er.email = 'Please enter a valid email address.'
    if (!v.date) er.date = 'Please choose a travel date.'
    else if (v.date < today()) er.date = 'Travel date must be today or later.'
    const g = Number(v.guests)
    if (!Number.isInteger(g) || g < 1 || g > 12) er.guests = 'Guests must be between 1 and 12.'
    setErrors(er)
    if (!Object.keys(er).length) setDone(true)
  }
  const total = trip.price * (Number(v.guests) || 1)

  const field = (id, label, props) => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} value={v[id]} onChange={set(id)} aria-invalid={!!errors[id]} aria-describedby={errors[id] ? id + '-e' : undefined} {...props} />
      {errors[id] && <p className="err" id={id + '-e'} role="alert">{errors[id]}</p>}
    </div>
  )

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="bm-title" ref={ref}>
        <button className="close" onClick={onClose} aria-label="Close dialog">×</button>
        {done ? (
          <div>
            <h2 id="bm-title">Demo request received</h2>
            <p>Thanks, {v.name.trim()}. Here is what you entered for <strong>{trip.title}</strong>:</p>
            <ul className="summary">
              <li>Travel date: {v.date}</li><li>Guests: {v.guests}</li><li>Estimated total: {fmt(total)}</li><li>Email: {v.email}</li>
            </ul>
            <p className="notice"><strong>This is a demo.</strong> No reservation has been made, no payment was taken, and nothing was sent or stored anywhere.</p>
            <button className="btn" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <h2 id="bm-title">Book {trip.title}</h2>
            <p className="muted">{fmt(trip.price)} per person · {trip.days} days. Demo form only.</p>
            {field('name', 'Full name', { type: 'text', autoComplete: 'name', required: true })}
            {field('email', 'Email', { type: 'email', autoComplete: 'email', required: true })}
            <div className="two">
              {field('date', 'Travel date', { type: 'date', min: today(), required: true })}
              {field('guests', 'Guests', { type: 'number', min: 1, max: 12, required: true })}
            </div>
            <p className="total">Estimated total: <strong>{fmt(total)}</strong></p>
            <button className="btn" type="submit">Request booking (demo)</button>
          </form>
        )}
      </div>
    </div>
  )
}
