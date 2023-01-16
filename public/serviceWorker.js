const CACHE_NAME = "VIVIA-TRANSLATE";
const urlsToCache = ["index.html", "offline.html"];

//install
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

//fetch
this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(async () => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

//activate
this.addEventListener("activate", (event) => {
  const cacheWhitelist = [];

  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
