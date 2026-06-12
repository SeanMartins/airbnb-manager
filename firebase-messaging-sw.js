importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA-v3bmaiAl_QbqxVyqYerOBC76TxEm3uw",
  authDomain: "airbnb-firenze-f45e9.firebaseapp.com",
  projectId: "airbnb-firenze-f45e9",
  storageBucket: "airbnb-firenze-f45e9.firebasestorage.app",
  messagingSenderId: "563836044492",
  appId: "1:563836044492:web:b1f28c6302c445bf80ae69"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification ? payload.notification.title : 'Airbnb Manager';
  const body = payload.notification ? payload.notification.body : '';
  const icon = '/icon-192.png';

  self.registration.showNotification(title, {
    body: body,
    icon: icon,
    badge: icon,
    vibrate: [200, 100, 200],
    data: payload.data || {},
    actions: [{ action: 'open', title: 'Apri app' }]
  });
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  var url = 'https://airbnb-manager-nine.vercel.app/dashboard.html';
  if (e.action === 'open' || !e.action) {
    e.waitUntil(clients.openWindow(url));
  }
});
