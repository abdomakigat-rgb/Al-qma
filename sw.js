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
    vibrate: [200, 100, 200],
    image: payload.notification.image || 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    data: {
      url: (payload.data && payload.data.url) ? payload.data.url : 'https://abdomakigat-rgb.github.io/Al-qma/' 
    }
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// 3. إعدادات الكاش (v1.4)
const CACHE_NAME = 'qemma-center-v1.4';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://i.ibb.co/v4GzdvTJ/logo.jpg',
  'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3',
  'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Reem+Kufi:wght@700&display=swap'
];

// 4. التثبيت
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('تم فتح الكاش بنجاح ✅');
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
            console.log('حذف الكاش القديم 🗑️');
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
