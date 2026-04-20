const CACHE_NAME = 'qemma-center-v1.1'; // غيرت الإصدار لـ v1.1 لتفعيل التحديث فوراً
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
  self.skipWaiting(); // إجبار النسخة الجديدة على التثبيت فوراً
});

// تفعيل ملف الخدمة والسيطرة فوراً وتنظيف الكاش القديم
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // مسح ملفات النسخة القديمة
          }
        })
      );
    }).then(() => self.clients.claim())
  );
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

// التعامل مع الطلبات لضمان عمل التطبيق أوفلاين مع تحديث الكاش
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // إذا وجد في الكاش نرجعه، وإلا نطلبه من النت
        return response || fetch(event.request).then(fetchResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            // تحديث الكاش بالملفات الجديدة في الخلفية (اختياري)
            if (event.request.url.startsWith('http')) {
               cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        });
      })
  );
});
