const CACHE_NAME = "miroslav-holec-contact-v1";
const APP_PATH = new URL("./", self.location.href).pathname;
const ASSETS = [
  APP_PATH,
  `${APP_PATH}index.html`,
  `${APP_PATH}miroslav-holec.png`,
  `${APP_PATH}manifest.webmanifest`,
  `${APP_PATH}icons/apple-touch-icon.png`,
  `${APP_PATH}icons/icon-192.png`,
  `${APP_PATH}icons/icon-512.png`
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith("miroslav-holec-contact-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (
    event.request.method !== "GET" ||
    url.origin !== self.location.origin ||
    !url.pathname.startsWith(APP_PATH)
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => cachedResponse || fetch(event.request)
        .then((response) => {
          if (response.ok && url.pathname.startsWith(APP_PATH)) {
            const responseCopy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
          }
          return response;
        }))
  );
});
