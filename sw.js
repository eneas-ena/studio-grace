// Studio Grace: busca sempre a versão mais nova e usa a cópia guardada só quando está sem internet.
const CACHE = 'studio-grace';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  if (u.searchParams.has('verifica')) return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok) {
        const copia = r.clone();
        caches.open(CACHE).then(c => c.put(e.request.mode === 'navigate' ? './' : e.request, copia));
      }
      return r;
    }).catch(() => caches.match(e.request.mode === 'navigate' ? './' : e.request))
  );
});
