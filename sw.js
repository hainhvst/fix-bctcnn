// Một Service Worker đơn giản nhất để vượt qua bài kiểm tra PWA của trình duyệt
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // Không làm gì cả, chỉ để trình duyệt biết ta có Service Worker
});
