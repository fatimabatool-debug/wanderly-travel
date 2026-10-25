import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import TripDetails from './pages/TripDetails.jsx'
import Saved from './pages/Saved.jsx'
import About from './pages/About.jsx'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/trips/:slug" element={<TripDetails />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={
            <section className="container empty"><h1>Page not found</h1><p>That page doesn’t exist.</p><Link className="btn" to="/">Back home</Link></section>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
