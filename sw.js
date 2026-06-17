self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // Để trống cũng được, chỉ cần khai báo cho trình duyệt biết có Service Worker
});
