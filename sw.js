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

// 3. إعدادات الكاش (v1.4) لضمان السرعة والعمل بدون إنترنت
// قمنا بتحديث الإصدار لضمان تحميل التعديلات الجديدة عند الطلاب
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

// تثبيت ملف الخدمة وتخزين الملفات المهمة
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('تم فتح الكاش بنجاح ✅');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); 
});

// تنظيف الكاش القديم عند تحديث الملف
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
    }).then(() => self.clients.claim())
  );
});

// 4. استقبال الإشعارات في الخلفية (عندما يكون المتصفح مغلقاً)
messaging.onBackgroundMessage((payload) => {
  console.log('رسالة في الخلفية:', payload);
  const notificationTitle = payload.notification.title || 'سنتر القمة 🚀';
  const notificationOptions = {
    body: payload.notification.body || 'لديك تحديث جديد من السنتر!',
    icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    badge: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    vibrate: [200, 100, 200],
    image: payload.notification.image || 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    data: {
      url: payload.data ? payload.data.url : 'https://abdomakigat-rgb.github.io/Al-qma/'
    }
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// 5. استقبال إشعارات Push API العامة
self.addEventListener('push', function(event) {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'مرحباً بك في تطبيق سنتر القمة';
  }

  const options = {
    body: body,
    icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    badge: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    vibrate: [100, 50, 100],
    data: { dateOfArrival: Date.now() }
  };

  event.waitUntil(
    self.registration.showNotification('تنبيه من القمة 🎓', options)
  );
});

// 6. استراتيجية Fetch (العمل بذكاء مع الإنترنت الضعيف)
// يستخدم الكاش أولاً ثم يحدثه من الشبكة (Stale-while-revalidate)
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
      }).catch(() => {
        // إذا انقطع الإنترنت تماماً ولم يجد الملف في الكاش
        return cachedResponse;
      });
      return cachedResponse || fetchPromise;
    })
  );
});

// 7. التعامل مع النقر على الإشعار وفتح الموقع
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const urlToOpen = event.notification.data.url || 'https://abdomakigat-rgb.github.io/Al-qma/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      // إذا كان الموقع مفتوحاً بالفعل، قم بالتركيز عليه
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      // إذا لم يكن مفتوحاً، افتحه في نافذة جديدة
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
