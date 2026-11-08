// Nexus Pixel 0.2.71: preferir contenido actualizado en línea,
// conservando solo el editor PC para uso sin Internet.
const CACHE_NAME = "nexus-pixel-v0.2.71";
const ASSETS = [
  "./", "./index.html", "./style.css", "./theme.css", "./theme.js",
  "./app.js", "./nxpack.js", "./gif-preview.js", "./graphic-library.js", "./palette-library.js", "./iso-geometry.js", "./dialog-guard.js", "./tooltip.js", "./pwa.js",
  "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key.startsWith("nexus-pixel-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin ||
      !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;

  // El cache-first anterior dejaba HTML y app.js viejos en Chrome.
  // Network-first actualiza los archivos cuando hay Internet, pero sigue
  // permitiendo el funcionamiento offline usando los recursos guardados.
  event.respondWith(
    fetch(request, {cache: "no-cache"})
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          event.waitUntil(
            caches.open(CACHE_NAME).then(cache => cache.put(request, copy))
          );
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request, {ignoreSearch: true});
        if (cached) return cached;
        if (request.mode === "navigate") {
          return (await caches.match("./index.html")) || Response.error();
        }
        return Response.error();
      })
  );
});
