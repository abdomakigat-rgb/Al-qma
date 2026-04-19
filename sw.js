const CACHE_NAME = 'qemma-center-v1';
const urlsToCache = [
  './',
  './index.html',
  'https://i.ibb.co/v4GzdvTJ/logo.jpg'
];

// تثبيت ملف الخدمة وتخزين الملفات
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// تفعيل ملف الخدمة والسيطرة فوراً
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// محرك استقبال الإشعارات (هنا السر)
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'أهلاً بك في سنتر القمة التعليمي!',
    icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    badge: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    }
  };

  event.waitUntil(
    self.registration.showNotification('تنبيه من القمة 🚀', options)
  );
});

// التعامل مع الطلبات لضمان عمل التطبيق أوفلاين
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
