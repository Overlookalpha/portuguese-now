const CACHE = "portuguese-now-v2";
const OFFLINE_PAGE = "./offline.html";
const APP_SHELL = [
  "./", "./index.html", "./offline.html", "./css/style.css", "./js/script.js",
  "./js/mobile-shell.js", "./manifest.webmanifest", "./images/logo.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok && new URL(request.url).origin === self.location.origin) {
      const cache = await caches.open(CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return caches.match(request);
  }
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (event.request.mode === "navigate") {
    event.respondWith(networkFirst(event.request).then((response) => response || caches.match(OFFLINE_PAGE)));
    return;
  }
  event.respondWith(networkFirst(event.request).then((response) => response || caches.match(event.request)));
});
