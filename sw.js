const CACHE_NAME = 'qemma-center-v1';
const urlsToCache = [
  './',
  './index.html',
  'https://i.ibb.co/v4GzdvTJ/logo.jpg'
];

// تثبيت ملف الخدمة وتخزين الملفات الأساسية
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// تفعيل ملف الخدمة
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// التعامل مع الطلبات لضمان عمل التطبيق
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
