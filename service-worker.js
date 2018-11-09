importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Workbox is loaded 🎉`);

  workbox.skipWaiting();
  workbox.clientsClaim();

  workbox.precaching.precacheAndRoute([
    {
      url: '/index.html',
      revision: '0',
    },
    {
      url: '/src/js/app.js',
      revision: '0'
    },
    {
      url: '/src/css/app.css',
      revision: '0'
    },
    {
      url: '/manifest.webmanifest',
      revision: '0'
    },
    {
      url: '/service-worker.js',
      revision: '0'
    }
  ]);

} else {
  console.log(`Workbox didn't load 😬`);
}
