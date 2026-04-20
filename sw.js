const CACHE_NAME = 'qemma-minimal-v1';
// تخزين الواجهة الأساسية فقط لضمان عمل التطبيق
const urlsToCache = [
  './',
  './index.html',
  'https://i.ibb.co/v4GzdvTJ/logo.jpg'
];

// التثبيت
self.addEventListener('install', event => {
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// التفعيل ومسح أي كاش قديم فوراً
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => caches.delete(key)) // مسح شامل لضمان التحديث
    )).then(() => self.clients.claim())
  );
});

// الاستراتيجية الذهبية: Network First (الشبكة أولاً)
// هذا الجزء يضمن أن أي تغيير في الموقع يظهر فوراً للتطبيق
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // إذا كان هناك إنترنت، خذ البيانات الجديدة وضعها في الكاش (تحديث تلقائي)
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => caches.match(event.request)) // إذا انقطع النت فقط، استخدم المخزن
  );
});

// استقبال الإشعارات (بدون تخزين بيانات الإشعار)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'تحديث جديد من سنتر القمة!',
    icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    badge: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    vibrate: [100, 50, 100],
    data: { url: 'https://abdomakigat-rgb.github.io/Al-qma/' }
  };

  event.waitUntil(
    self.registration.showNotification('القمة التعليمي', options)
  );
});

// فتح الموقع عند الضغط على الإشعار
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
