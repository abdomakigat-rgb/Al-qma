// 1. استيراد مكتبات Firebase
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

// 2. إعداد فايربيز
const firebaseConfig = {
    apiKey: "AIzaSyA2FQpdNvzBXHJbzi-v6Obed8VdPVaMjeI",
    authDomain: "alqmaa-a45a9.firebaseapp.com",
    projectId: "alqmaa-a45a9",
    storageBucket: "alqmaa-a45a9.firebasestorage.app",
    messagingSenderId: "140342031108",
    appId: "1:140342031108:web:714734fa525295c91a1651",
    measurementId: "G-4T5430TC3M"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// معالجة الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || "تنبيه من سنتر القمة";
  const notificationOptions = {
    body: payload.notification.body || "لديك رسالة جديدة من المنصة.",
    icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg', 
    badge: 'https://i.ibb.co/v4GzdvTJ/logo.jpg', 
    data: {
      url: (payload.data && payload.data.url) ? payload.data.url : 'https://abdomakigat-rgb.github.io/Al-qma/' 
    }
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// 3. إعدادات الكاش
const CACHE_NAME = 'qemma-center-v1.4';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://i.ibb.co/v4GzdvTJ/logo.jpg'
];

// 4. التثبيت
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// 5. التفعيل وحذف القديم
self.addEventListener('activate', event => {
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

// 6. استراتيجية الاستجابة (الكاش ثم الشبكة)
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      }).catch(() => cachedResponse);
      return cachedResponse || fetchPromise;
    })
  );
});

// 7. النقر على الإشعار
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const urlToOpen = (event.notification.data && event.notification.data.url) ? event.notification.data.url : 'https://abdomakigat-rgb.github.io/Al-qma/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        if (client.url === urlToOpen && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(urlToOpen);
    })
  );
});
