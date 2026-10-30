// Offline-Cache für die Trainings-App. Bei jeder neuen Version VERSION ändern.
const CACHE = 'training-1.0.0';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Erst aus dem Cache (sofort, auch offline), im Hintergrund aktualisieren.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const cached = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => { if (r && r.ok) c.put(e.request, r.clone()); return r; })
      .catch(() => null);
    e.waitUntil(net);
    if (cached) return cached;
    const r = await net;
    if (r) return r;
    if (e.request.mode === 'navigate') return (await c.match('./index.html')) || Response.error();
    return Response.error();
  })());
});
