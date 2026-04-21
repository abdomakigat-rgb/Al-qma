// استدعاء مكتبات فايربيز اللازمة للعمل في الخلفية
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

// إعدادات مشروعك (alqmaa-a45a9)
const firebaseConfig = {
    apiKey: "AIzaSyA2FQpdNvzBXHJbzi-v6Obed8VdPVaMjeI",
    authDomain: "alqmaa-a45a9.firebaseapp.com",
    projectId: "alqmaa-a45a9",
    storageBucket: "alqmaa-a45a9.firebasestorage.app",
    messagingSenderId: "140342031108",
    appId: "1:140342031108:web:714734fa525295c91a1651"
};

// بدء تشغيل فايربيز داخل الـ Service Worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// معالجة الإشعارات لما توصل والموقع مقفول (في الخلفية)
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] وصل إشعار في الخلفية: ', payload);

  const notificationTitle = payload.notification.title || "تنبيه من سنتر القمة";
  const notificationOptions = {
    body: payload.notification.body || "لديك رسالة جديدة من المنصة.",
    icon: 'https://i.ibb.co/v4GzdvTJ/logo.jpg', // لوجو السنتر
    badge: 'https://i.ibb.co/v4GzdvTJ/logo.jpg', // أيقونة صغيرة للإشعارات
    data: {
      url: payload.data ? payload.data.url : '/' // رابط يفتح لما يدوس على الإشعار
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// إضافة حدث عند الضغط على الإشعار لفتح الموقع
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data.url || '/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
