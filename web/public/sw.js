/* eslint-env serviceworker */

self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async () => {
      return await fetch(event.request)
    })()
  )
})
