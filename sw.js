importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "miners-standard",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.18ad5ccf9bd9c6465263fef3f63e6f3d.css",
    "revision": "18ad5ccf9bd9c6465263fef3f63e6f3d"
  },
  {
    "url": "/_nuxt/app.f1876ad234cbf94ad931.js",
    "revision": "8456a5639e8d575981c9c6e145a92bd9"
  },
  {
    "url": "/_nuxt/layouts/default.07e11bb888a384593b10.js",
    "revision": "81661724fc97cf28767081625b0c1f90"
  },
  {
    "url": "/_nuxt/manifest.acc3c787b759bdc52b29.js",
    "revision": "3176a12264acebb9750e4a3a031ac6f2"
  },
  {
    "url": "/_nuxt/pages/accommodation.e7811ff7dc92a8059ff8.js",
    "revision": "7cf4ddf742aacc3c603d4df6fe71565b"
  },
  {
    "url": "/_nuxt/pages/contact-us.992cd30c445ce58e2af1.js",
    "revision": "555ec5b828d42dc4b533370715a890fe"
  },
  {
    "url": "/_nuxt/pages/index.59c9f65c7dd47a696871.js",
    "revision": "348717b22aa06f76c37e8909663edb6e"
  },
  {
    "url": "/_nuxt/pages/menu.6003761535b32a93ae09.js",
    "revision": "ee6aaf5489a0403dd1b78e7ed8ba5f33"
  },
  {
    "url": "/_nuxt/pages/news-and-events.be49765c5501cf0f905a.js",
    "revision": "e4e49978634ff6d21a9e91f4cbfc5ab7"
  },
  {
    "url": "/_nuxt/vendor.75c3404b5613b8f85d31.js",
    "revision": "49d89281b4f1dad3a05fc21d4a6204de"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

