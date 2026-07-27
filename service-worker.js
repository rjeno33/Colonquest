const CACHE_NAME = "companion-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js"
];

// Install
self.addEventListener("install", event => {

    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );

});

// Activate
self.addEventListener("activate", event => {

    event.waitUntil(
        caches.keys().then(cacheNames => {

            return Promise.all(

                cacheNames.map(cache => {

                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }

                })

            );

        })
    );

    self.clients.claim();

});

// Fetch
self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(response => response || fetch(event.request))

    );

});
