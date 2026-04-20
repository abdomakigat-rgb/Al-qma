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

// تثبيت ملف الخدمة وتخزين الملفات الأساسية
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting(); // إجبار النسخة الجديدة على التثبيت فوراً
});

// تفعيل ملف الخدمة وتنظيف الكاش القديم لضمان عدم حدوث تضارب
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
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
    tag: 'qemma-notification', // لمنع تكرار الإشعارات
    renotify: true,
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

// استراتيجية Fetch: عرض الكاش أولاً ثم التحديث من الشبكة (Stale-while-revalidate)
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return; // تجاهل طلبات الـ POST (مثل الفورم)

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          // تحديث الكاش بالنسخة الجديدة من النت
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
            // في حالة انقطاع النت تماماً وفشل الطلب
            console.log('Fetch failed; returning cached item instead.');
        });

        // إرجاع النسخة المخزنة فوراً، أو انتظار النت إذا لم تكن موجودة
        return cachedResponse || fetchPromise;
      })
  );
});

// التعامل مع نقرة الإشعار لفتح الموقع
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      // إذا كان الموقع مفتوحاً بالفعل، ركز عليه
      for (const client of clientList) {
        if (client.url === '/' && 'focus' in client) return client.focus();
      }
      // إذا كان مغلقاً، افتحه في نافذة جديدة
      if (clients.openWindow) return clients.openWindow('https://abdomakigat-rgb.github.io/Al-qma/');
    })
  );
});
