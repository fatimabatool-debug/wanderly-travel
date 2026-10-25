import { createContext, useContext, useEffect, useState, useCallback } from 'react'
const KEY = 'wanderly:saved'
const Ctx = createContext(null)

function load() {
  try { const v = JSON.parse(localStorage.getItem(KEY)); return Array.isArray(v) ? v : [] } catch { return [] }
}

export function SavedProvider({ children }) {
  const [saved, setSaved] = useState(load)
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(saved)) } catch { /* storage unavailable */ } }, [saved])
  const toggle = useCallback((slug) => setSaved((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug])), [])
  return <Ctx.Provider value={{ saved, toggle, isSaved: (slug) => saved.includes(slug) }}>{children}</Ctx.Provider>
}
export const useSaved = () => useContext(Ctx)
