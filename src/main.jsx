import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { SavedProvider } from './hooks/useSaved.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SavedProvider>
        <App />
      </SavedProvider>
    </BrowserRouter>
  </React.StrictMode>
)
