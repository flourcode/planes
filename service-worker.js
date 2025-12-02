const CACHE_NAME = 'planespotted';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    'https://unpkg.com/maplibre-gl@5.1.0/dist/maplibre-gl.js',
    'https://unpkg.com/maplibre-gl@5.1.0/dist/maplibre-gl.css',
    'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap'
];

// Install: Cache core assets
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

// Fetch: Serve from cache first, then network
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );

});
