const CACHE_NAME = 'qemma-center-v1.2'; // تحديث الإصدار لضمان تفعيل ميزات الإشعارات والأصوات الجديدة
const urlsToCache = [
  './',
  './index.html',
  'https://i.ibb.co/v4GzdvTJ/logo.jpg',
  'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', // صوت الوش (التحديث والافتتاحية)
  'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3', // صوت النجاح
  'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', // صوت الكليك
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
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

// محرك استقبال الإشعارات (السر في التواصل مع الطلاب)
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'أهلاً بك في سنتر القمة التعليمي!',
    icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    badge: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {action: 'explore', title: 'عرض التفاصيل', icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg'},
      {action: 'close', title: 'إغلاق', icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg'}
    ]
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
            // تحديث الكاش بالملفات الجديدة في الخلفية
            if (event.request.url.startsWith('http')) {
               cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        });
      })
  );
});

// التعامل مع نقرة الإشعار
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://abdomakigat-rgb.github.io/Al-qma/')
  );
});
