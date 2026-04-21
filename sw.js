// 1. استيراد مكتبات Firebase اللازمة للعمل في الخلفية
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

// 2. إعداد فايربيز الخاص بمشروعك (سنتر القمة)
firebase.initializeApp({
    apiKey: "AIzaSyA2FQpdNvzBXHJbzi-v6Obed8VdPVaMjeI",
    authDomain: "alqmaa-a45a9.firebaseapp.com",
    projectId: "alqmaa-a45a9",
    storageBucket: "alqmaa-a45a9.firebasestorage.app",
    messagingSenderId: "140342031108",
    appId: "1:140342031108:web:714734fa525295c91a1651"
});

const messaging = firebase.messaging();

// 3. إعدادات الكاش (v1.3) لضمان السرعة والعمل بدون إنترنت
const CACHE_NAME = 'qemma-center-v1.3';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://i.ibb.co/v4GzdvTJ/logo.jpg',
  'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3',
  'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
];

// تثبيت ملف الخدمة وتخزين الملفات
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting(); 
});

// تنظيف الكاش القديم عند التحديث
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 4. استقبال الإشعارات في الخلفية (عندما يكون الموقع مغلقاً)
messaging.onBackgroundMessage((payload) => {
  console.log('Background Notification:', payload);
  const notificationTitle = payload.notification.title || 'سنتر القمة 🚀';
  const notificationOptions = {
    body: payload.notification.body || 'لديك رسالة جديدة!',
    icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    badge: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// 5. استقبال الإشعارات العامة (Push API)
self.addEventListener('push', function(event) {
  if (event.data) {
     const data = event.data.text();
     const options = {
        body: data,
        icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
        badge: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
        vibrate: [100, 50, 100],
        data: { primaryKey: '1' }
     };
     event.waitUntil(self.registration.showNotification('سنتر القمة 🎓', options));
  }
});

// 6. استراتيجية Fetch (التعامل مع الطلبات والإنترنت ضعيف)
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

// 7. التعامل مع النقر على الإشعار
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (client.url.includes('Al-qma') && 'focus' in client) return client.focus();
      }
      return clients.openWindow('https://abdomakigat-rgb.github.io/Al-qma/');
    })
  );
});
