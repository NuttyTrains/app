const staticDevAdventures = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/alpha.jpg",
  "/images/beta.jpg",
  "/images/sampi1.jpg",
  "/images/sampi2.jpg",
  "/images/sampi3.jpg",
  "/images/sampi4.jpg",
  "/images/sampi5.jpg",
  "/images/koppa1.jpg",
  "/images/koppa2.jpg",
  "/images/aleph.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevAdventures).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
