const CACHE_NAME = 'bctcnn-pwa-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './logo-KB.png'
];

// Bước 1: Lưu các file quan trọng vào bộ nhớ đệm (Cache) khi cài đặt
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Đã cài đặt và lưu Cache');
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

// Bước 2: Kích hoạt Service Worker mới ngay lập tức
self.addEventListener('activate', (e) => {
    e.waitUntil(self.clients.claim());
});

// Bước 3: Xử lý khi trình duyệt tải trang (Ưu tiên mạng, nếu rớt mạng thì lấy từ Cache)
self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => {
            console.log('[Service Worker] Mất mạng, đang tải từ Cache...');
            return caches.match(e.request);
        })
    );
});
