# Wanderly – React travel website

A responsive demo travel site built with React 18, Vite and React Router. No backend, API keys or accounts.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the build locally
```
Requires Node.js 18+.

## Features
Home, Explore (search, region/price filters, sorting, empty state), Trip Details (`/trips/:slug`), Saved Trips (localStorage), About & Contact (validated form), booking modal, mobile menu.

## Demo behaviour
- Booking and contact forms only validate and show a confirmation. **No reservation, payment or email happens, and nothing is stored.**
- Saved trips are stored in your browser's localStorage under `wanderly:saved`.

## Internet requirement
Photos load from Unsplash and fonts from Google Fonts. Offline, images fall back to a built-in illustration and fonts to Georgia/system sans-serif.

## Deployment note
Uses `BrowserRouter`; static hosts need a rewrite of all routes to `index.html` so direct links like `/trips/kyoto-temples-tea` work (the Vite dev and preview servers do this already).

## Structure
```
src/components  Header, Footer, TripCard, BookingModal, SmartImage
src/pages       Home, Explore, TripDetails, Saved, About
src/data        trips.js (12 trips)
src/hooks       useSaved.jsx
src/styles.css  all styling
```
