// File này giúp lừa Chrome rằng Web có khả năng chạy Offline
self.addEventListener('install', (e) => {
    self.skipWaiting(); 
});

self.addEventListener('activate', (e) => {
    e.waitUntil(self.clients.claim());
});

// Hàm fetch rỗng nhưng đủ chuẩn để vượt qua bộ lọc của Chrome
self.addEventListener('fetch', (e) => {
    // Không làm gì cả
});
