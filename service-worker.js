var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/styles.css',

        './assets/js/scripts.js',

        './assets/img/portfolio/1.jpg',
        './assets/img/portfolio/2.jpg',
        './assets/img/portfolio/3.jpg',
        './assets/img/portfolio/4.jpg',
        './assets/img/portfolio/5.jpg',
        './assets/img/portfolio/6.jpg',
        './assets/img/portfolio/7.jpg',
        './assets/img/portfolio/8.jpg',
        './assets/img/portfolio/10.webp',

        './assets/img/bg-masthead.webp',
        './assets/img/bg-masthead1.jpg',
        './assets/img/favicon.ico',


        './assets/128.png',
        './assets/144.png',
        './assets/152.png',
        './assets/167.png',
        './assets/180.png',
        './assets/192.png',
        './assets/256.png',
        './assets/512.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});