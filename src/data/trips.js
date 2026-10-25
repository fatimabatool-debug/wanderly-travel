const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=70`
const t = (slug, title, place, region, price, days, rating, img, summary, itinerary, extra) =>
  ({ slug, title, place, region, price, days, rating, img: U(img), summary, itinerary, extra })

export const regions = ['Europe', 'Asia', 'Africa', 'Americas', 'Oceania']
export const baseAmenities = ['Boutique hotel stays', 'Daily breakfast', 'Local expert guide', 'Airport transfers', 'Small groups (max 12)']

export const trips = [
  t('santorini-sunset-escape', 'Santorini Sunset Escape', 'Santorini, Greece', 'Europe', 2150, 7, 4.8, 'photo-1533105079780-92b9be482077',
    'Whitewashed villages, cliffside sunsets and a sailing day around the caldera.',
    ['Arrive in Fira and settle into a cave-style suite in Oia.', 'Catamaran cruise with swimming stops and a seafood lunch.', 'Wine tasting at a family vineyard, then a farewell dinner by the water.'], 'Catamaran day cruise'),
  t('cinque-terre-coastal-walk', 'Cinque Terre Coastal Walk', 'Liguria, Italy', 'Europe', 1890, 6, 4.7, 'photo-1516483638261-f4dbaf036963',
    'Hike between pastel fishing villages and eat fresh pesto where it was invented.',
    ['Train to Monterosso and an evening focaccia tasting.', 'Guided hike from Vernazza to Corniglia with sea views.', 'Pesto-making class and a ferry along the coast.'], 'Cooking class'),
  t('venice-hidden-canals', 'Venice Hidden Canals', 'Venice, Italy', 'Europe', 1740, 5, 4.6, 'photo-1523906834658-6e24ef2386f9',
    'Skip the crowds with early-morning walks, artisan workshops and cicchetti trails.',
    ['Water-taxi arrival and a sunset stroll through Cannaregio.', 'Glassblowing in Murano and lunch on colourful Burano.', 'Private gondola ride and a bar-hopping cicchetti dinner.'], 'Private gondola ride'),
  t('iceland-northern-lights', 'Iceland Northern Lights', 'Reykjavík, Iceland', 'Europe', 2890, 7, 4.9, 'photo-1531366936337-7c912a4589a7',
    'Chase the aurora, soak in geothermal lagoons and walk behind waterfalls.',
    ['Land in Reykjavík and visit a geothermal spa.', 'Golden Circle loop: Þingvellir, Geysir and Gullfoss.', 'South coast black-sand beaches and an evening aurora hunt.'], 'Aurora forecasting guide'),
  t('kyoto-temples-tea', 'Kyoto Temples & Tea', 'Kyoto, Japan', 'Asia', 3240, 8, 4.9, 'photo-1493976040374-85c8e12f0c0e',
    'Quiet shrines, bamboo groves and a private tea ceremony in the old capital.',
    ['Arrive in Kyoto and wander Gion at dusk.', 'Fushimi Inari at sunrise, then Arashiyama’s bamboo grove.', 'Tea ceremony with a master, followed by a kaiseki dinner.'], 'Private tea ceremony'),
  t('bali-rice-terraces-retreat', 'Bali Rice Terraces Retreat', 'Ubud, Indonesia', 'Asia', 1980, 8, 4.7, 'photo-1537996194471-e657df975ab4',
    'Yoga mornings, rice-field cycling and temple ceremonies in the island’s green heart.',
    ['Check in to a jungle villa and join a welcome yoga class.', 'Cycle past Tegallalang rice terraces and visit a coffee farm.', 'Sunrise at a water temple and a Balinese cooking lesson.'], 'Daily yoga sessions'),
  t('taj-mahal-rajasthan-circuit', 'Taj Mahal & Rajasthan Circuit', 'Agra & Jaipur, India', 'Asia', 2260, 9, 4.6, 'photo-1548013146-72479768bada',
    'Palaces, bustling bazaars and the Taj Mahal at first light.',
    ['Delhi arrival and a rickshaw ride through Old Delhi.', 'Sunrise at the Taj Mahal and a visit to Agra Fort.', 'Amber Fort in Jaipur and a block-printing workshop.'], 'Sunrise Taj Mahal entry'),
  t('maldives-overwater-calm', 'Maldives Overwater Calm', 'Baa Atoll, Maldives', 'Asia', 4200, 6, 4.8, 'photo-1506929562872-bb421503ef21',
    'Overwater villas, guided snorkelling and unhurried days on a protected atoll.',
    ['Seaplane transfer and a welcome dinner on the sand.', 'Snorkel with manta rays in the Hanifaru Bay marine reserve.', 'Sandbank picnic and a sunset dolphin cruise.'], 'Seaplane transfers'),
  t('marrakech-sahara-journey', 'Marrakech & Sahara Journey', 'Marrakech, Morocco', 'Africa', 2050, 7, 4.7, 'photo-1539650116574-8efeb43e2750',
    'Souks, riads and a night under the stars in a desert camp.',
    ['Riad check-in and an evening in Jemaa el-Fnaa square.', 'Cross the Atlas Mountains to Aït Benhaddou.', 'Camel trek into the dunes and dinner at a desert camp.'], 'Desert camp night'),
  t('patagonia-trail-adventure', 'Patagonia Trail Adventure', 'Torres del Paine, Chile', 'Americas', 3650, 10, 4.9, 'photo-1464822759023-fed622ff2c3b',
    'Granite towers, glacial lakes and wild trails for confident hikers.',
    ['Fly to Punta Arenas and transfer to Puerto Natales.', 'Full-day hike to the Base of the Towers viewpoint.', 'Boat to Grey Glacier and a farewell asado.'], 'Park entry & trail permits'),
  t('banff-rockies-lakes', 'Banff & Canadian Rockies', 'Banff, Canada', 'Americas', 2780, 7, 4.8, 'photo-1501785888041-af3ef285b470',
    'Turquoise lakes, mountain gondolas and wildlife spotting in the Rockies.',
    ['Arrive in Banff and ride the gondola at sunset.', 'Canoe on Moraine Lake and hike Johnston Canyon.', 'Icefields Parkway drive and a glacier walk.'], 'Canoe rental'),
  t('new-zealand-south-island', 'New Zealand South Island Road Trip', 'Queenstown, New Zealand', 'Oceania', 3980, 10, 4.9, 'photo-1469854523086-cc02fe5d8800',
    'Fjords, alpine passes and adventure towns, driven at your own pace.',
    ['Pick up your camper-style car in Queenstown.', 'Cruise Milford Sound and hike the Routeburn Track.', 'Glowworm kayaking and a final-night lakeside dinner.'], 'Rental car with insurance'),
]

export const getTrip = (slug) => trips.find((x) => x.slug === slug)
export const fmt = (n) => '$' + n.toLocaleString('en-US')
