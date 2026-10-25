const FALLBACK = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 900"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f5d46"/><stop offset="1" stop-color="#d9c9a3"/></linearGradient></defs><rect width="1400" height="900" fill="url(#g)"/><circle cx="1050" cy="250" r="90" fill="#f6efe0" opacity=".7"/><path d="M0 900V620l260-220 220 160 300-300 320 280 300-160v520z" fill="#1f3d2e" opacity=".55"/></svg>`)

export default function SmartImage({ src, alt, ...rest }) {
  return <img src={src} alt={alt} loading="lazy" onError={(e) => { if (e.currentTarget.src !== FALLBACK) e.currentTarget.src = FALLBACK }} {...rest} />
}
export { FALLBACK }
