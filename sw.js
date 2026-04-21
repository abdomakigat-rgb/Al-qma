const CACHE_NAME = 'qemma-center-v1.3'; // تحديث الإصدار لضمان تنشيط التعديلات الجديدة 2026
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://i.ibb.co/v4GzdvTJ/logo.jpg',
  'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', // صوت الافتتاحية
  'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3', // صوت النجاح/الإرسال
  'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', // صوت الكليك
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
];

// تثبيت ملف الخدمة وتخزين الملفات الأساسية
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache Qemma Updated');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting(); 
});

// تفعيل ملف الخدمة وتنظيف الكاش القديم فوراً
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Cleaning old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// محرك استقبال الإشعارات (تنبيهات الطلاب)
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'رسالة جديدة من سنتر القمة التعليمي! 🎓',
    icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    badge: 'https://i.ibb.co/v4GzdvTJ/logo.jpg',
    vibrate: [100, 50, 100],
    tag: 'qemma-notification',
    renotify: true,
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {action: 'explore', title: 'فتح المنصة', icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg'},
      {action: 'close', title: 'تجاهل', icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg'}
    ]
  };

  event.waitUntil(
    self.registration.showNotification('سنتر القمة 🚀', options)
  );
});

// استراتيجية Fetch: (Stale-while-revalidate) لضمان السرعة والعمل بدون نت
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
            // في حالة الأوفلاين التام
            console.log('Offline mode active');
        });

        return cachedResponse || fetchPromise;
      })
  );
});

// التعامل مع نقرة الإشعار لفتح الموقع أو قسم معين
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  
  const targetUrl = 'https://abdomakigat-rgb.github.io/Al-qma/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (client.url.includes('Al-qma') && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(targetUrl);
    })
  );
});
